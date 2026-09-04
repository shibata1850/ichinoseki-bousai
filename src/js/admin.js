import { supabase } from './supabase-client.js';

// ----- 認証状態管理 -----
let currentUser = null;

async function checkAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    currentUser = session.user;
    showAdminPanel();
  } else {
    showLoginForm();
  }
}

supabase.auth.onAuthStateChange((_event, session) => {
  if (session) {
    currentUser = session.user;
    showAdminPanel();
  } else {
    currentUser = null;
    showLoginForm();
  }
});

// ----- ログイン画面 -----
function showLoginForm() {
  document.getElementById('adminLogin').style.display = 'block';
  document.getElementById('adminPanel').style.display = 'none';
  document.getElementById('adminEmail').value = '';
  document.getElementById('adminPassword').value = '';
}

function showAdminPanel() {
  document.getElementById('adminLogin').style.display = 'none';
  document.getElementById('adminPanel').style.display = 'block';
  document.getElementById('adminUserLabel').textContent = currentUser.email;
  loadNewsList();
}

async function handleLogin() {
  const email = document.getElementById('adminEmail').value.trim();
  const password = document.getElementById('adminPassword').value;
  if (!email || !password) {
    showAdminError('メールアドレスとパスワードを入力してください');
    return;
  }
  document.getElementById('adminLoginBtn').disabled = true;
  document.getElementById('adminLoginBtn').textContent = 'ログイン中...';
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  document.getElementById('adminLoginBtn').disabled = false;
  document.getElementById('adminLoginBtn').textContent = 'ログイン';
  if (error) {
    showAdminError('ログインに失敗しました。メールアドレスとパスワードをご確認ください。');
  }
}

async function handleLogout() {
  await supabase.auth.signOut();
}

function showAdminError(msg) {
  const el = document.getElementById('adminError');
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 5000);
}

// ----- お知らせ一覧読み込み -----
async function loadNewsList() {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('date', { ascending: false })
    .order('sort_order', { ascending: true });

  if (error) {
    document.getElementById('newsListContainer').innerHTML =
      '<p style="color:var(--admin-error)">お知らせの読み込みに失敗しました。</p>';
    return;
  }

  const container = document.getElementById('newsListContainer');
  if (!data || data.length === 0) {
    container.innerHTML = '<p style="color:var(--admin-muted);text-align:center;padding:24px">お知らせがありません。「新規追加」ボタンから作成してください。</p>';
    return;
  }

  container.innerHTML = data.map(function(n) {
    return '<div class="admin-news-item">' +
      '<div class="admin-news-meta">' +
        '<span class="admin-news-date">' + formatDate(n.date) + '</span>' +
        '<span class="admin-news-cat">' + escapeHtml(n.category) + '</span>' +
      '</div>' +
      '<h3 class="admin-news-title">' + escapeHtml(n.heading) + '</h3>' +
      '<div class="admin-news-actions">' +
        '<button class="admin-btn-edit" onclick="editNews(\'' + n.id + '\')">編集</button>' +
        '<button class="admin-btn-delete" onclick="deleteNews(\'' + n.id + '\')">削除</button>' +
      '</div>' +
    '</div>';
  }).join('');
}

// ----- 新規追加 / 編集 -----
let editingId = null;

function showAddForm() {
  editingId = null;
  document.getElementById('formTitle').textContent = '新規お知らせ追加';
  document.getElementById('newsForm').reset();
  document.getElementById('newsId').value = '';
  document.getElementById('newsDate').value = todayStr();
  document.getElementById('newsCategory').value = 'お知らせ';
  document.getElementById('newsFormArea').style.display = 'block';
  document.getElementById('newsListArea').style.display = 'none';
}

function editNews(id) {
  editingId = id;
  const items = document.querySelectorAll('.admin-news-item');
  // DBから該当レコードを取得
  fetchNewsForEdit(id);
}

async function fetchNewsForEdit(id) {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error || !data) {
    showAdminError('お知らせの取得に失敗しました。');
    return;
  }

  document.getElementById('formTitle').textContent = 'お知らせ編集';
  document.getElementById('newsId').value = data.id;
  document.getElementById('newsDate').value = data.date;
  document.getElementById('newsCategory').value = data.category;
  document.getElementById('newsHeading').value = data.heading;
  document.getElementById('newsBody').value = (data.body || '').replace(/\\n/g, '\n');
  document.getElementById('newsSortOrder').value = data.sort_order;
  document.getElementById('newsFormArea').style.display = 'block';
  document.getElementById('newsListArea').style.display = 'none';
}

function cancelForm() {
  editingId = null;
  document.getElementById('newsFormArea').style.display = 'none';
  document.getElementById('newsListArea').style.display = 'block';
}

async function saveNews(e) {
  e.preventDefault();
  const id = document.getElementById('newsId').value;
  const date = document.getElementById('newsDate').value;
  const category = document.getElementById('newsCategory').value;
  const heading = document.getElementById('newsHeading').value.trim();
  const body = document.getElementById('newsBody').value.trim();
  const sortOrder = parseInt(document.getElementById('newsSortOrder').value) || 0;

  if (!date || !heading) {
    showAdminError('日付と見出しは必須です。');
    return;
  }

  const saveBtn = document.getElementById('saveNewsBtn');
  saveBtn.disabled = true;
  saveBtn.textContent = '保存中...';

  if (id) {
    // 更新
    const { error } = await supabase
      .from('news')
      .update({ date, category, heading, body, sort_order: sortOrder })
      .eq('id', id);
    saveBtn.disabled = false;
    saveBtn.textContent = '保存';
    if (error) {
      showAdminError('保存に失敗しました。もう一度お試しください。');
      return;
    }
  } else {
    // 新規追加
    const { error } = await supabase
      .from('news')
      .insert({ date, category, heading, body, sort_order: sortOrder });
    saveBtn.disabled = false;
    saveBtn.textContent = '保存';
    if (error) {
      showAdminError('追加に失敗しました。もう一度お試しください。');
      return;
    }
  }

  cancelForm();
  loadNewsList();
}

// ----- 削除 -----
async function deleteNews(id) {
  if (!confirm('このお知らせを削除しますか？この操作は取り消せません。')) return;
  const { error } = await supabase.from('news').delete().eq('id', id);
  if (error) {
    showAdminError('削除に失敗しました。もう一度お試しください。');
    return;
  }
  loadNewsList();
}

// ----- ユーティリティ -----
function formatDate(d) {
  if (!d) return '';
  const p = d.split('-');
  return p[0] + '.' + p[1] + '.' + p[2];
}

function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
}

function escapeHtml(s) {
  if (!s) return '';
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ----- グローバル公開 -----
window.handleLogin = handleLogin;
window.handleLogout = handleLogout;
window.showAddForm = showAddForm;
window.editNews = editNews;
window.deleteNews = deleteNews;
window.cancelForm = cancelForm;
window.saveNews = saveNews;

// ----- 初期化 -----
document.addEventListener('DOMContentLoaded', checkAuth);
