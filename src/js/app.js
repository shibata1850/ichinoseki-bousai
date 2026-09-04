import { supabase } from './supabase-client.js';

// 施工・対応事例 詳細データ
var caseDetails = {
  g1: {
    loc: '一関市内 工場',
    title: '自動火災報知設備の改修',
    inquiry: '定期点検の際に、自動火災報知設備の一部に不具合が確認されたとのご連絡をいただきました。建物の管理者様より、必要な改修内容や対応方法についてご相談いただきました。',
    response: '現地で受信機・感知器の状態を詳しく確認し、不具合箇所について必要な部品交換と動作確認を行いました。改修後は動作テストを実施し、結果を管理者様にご報告しています。',
    consideration: '工場の操業時間に影響が出ないよう、作業時間や手順を事前に調整しました。改修内容や今後の点検時の確認ポイントについても、管理者様にわかりやすくお伝えすることを心がけました。',
    related: '消防設備点検・保守 / 火災報知設備・警報設備工事'
  },
  g2: {
    loc: '岩手県内 事務所',
    title: '誘導灯の交換工事',
    inquiry: '事務所内の誘導灯について、点滅や点灯不良の症状が見られるとのご相談をいただきました。既存設備の状態確認と必要な交換対応についてご依頼いただきました。',
    response: '既存の誘導灯の状態と設置位置を確認し、対象の器具を新しい誘導灯に交換しました。交換後の点灯確認と、関連書類のご案内まで対応しています。',
    consideration: '業務時間中の作業となったため、来客や社員の方の動線に配慮し、できるだけ短時間で完了できるよう作業計画を立てました。',
    related: '火災報知設備・警報設備工事 / 関連書類の作成・届出対応'
  },
  g3: {
    loc: '一関市内 アパート',
    title: '消防設備点検・不良箇所の修繕',
    inquiry: '定期点検後、点検結果報告書で確認された不良箇所について、修繕の必要性と対応方法を管理会社様よりご相談いただきました。',
    response: '点検結果に基づき、不良箇所の優先度を整理して修繕計画をご提案しました。修繕作業は管理会社様・入居者様への影響を考慮しながら段階的に進めました。',
    consideration: '入居者様の生活時間帯を避け、作業前のご案内や挨拶を丁寧に行いました。共用部の整理整頓にも気を配り、現場をきれいに保つよう心がけました。',
    related: '消防設備点検・保守 / 緊急時のご相談・修繕'
  },
  g4: {
    loc: '岩手県内 施設',
    title: '避難設備の点検・整備',
    inquiry: '施設の避難設備（避難はしご・救助袋など）の経年劣化が気になるため、状態の確認と必要な整備についてご相談いただきました。',
    response: '避難設備の動作確認と外観点検を行い、機能上問題のある箇所について部品交換・整備をご案内しました。整備後は動作テストを実施し、結果をご報告しています。',
    consideration: '施設利用者の方の動線に支障が出ないよう、作業時間と場所を調整しました。整備後の使い方や定期的な確認のポイントについても、わかりやすくお伝えしました。',
    related: '避難設備・排煙設備工事 / 消防設備点検・保守'
  },
  g5: {
    loc: '宮城県北エリア 店舗',
    title: '火災報知設備の点検・修繕',
    inquiry: '店舗の火災報知設備について、警報が誤作動を起こすことがあるとのご相談をいただきました。状況確認と必要な修繕をご依頼いただきました。',
    response: '現地で感知器・受信機の動作を確認し、誤作動の原因となっていた箇所について部品交換と調整を実施しました。修繕後は店舗営業中も問題なく動作することを確認しています。',
    consideration: '店舗の営業時間に配慮し、作業時間を事前に調整しました。お客様や店舗スタッフの方への影響を最小限に抑えるよう、作業範囲と動線を計画的に管理しました。',
    related: '火災報知設備・警報設備工事 / 緊急時のご相談・修繕'
  },
  g6: {
    loc: '岩手県内 工場',
    title: '消火設備の改修相談',
    inquiry: '工場の既存消火設備について、老朽化に伴う改修や更新の必要性について、内容や費用感も含めてご相談をいただきました。',
    response: '現地で既存設備の状態と工場の用途・規模を確認し、優先順位を整理した改修内容をご提案しました。複数の対応パターンとそれぞれのお見積もりをご案内しています。',
    consideration: '工場の操業計画に影響が出ない範囲で、段階的な改修方法をご提案しました。協力会社との連携が必要な部分についても事前にご説明しています。',
    related: 'スプリンクラー・消火設備工事 / 消火栓設備工事'
  }
};

function openCaseModal(id) {
  var d = caseDetails[id];
  if (!d) return;
  document.getElementById('cmLoc').textContent = d.loc;
  document.getElementById('cmTitle').textContent = d.title;
  document.getElementById('cmInquiry').textContent = d.inquiry;
  document.getElementById('cmResponse').textContent = d.response;
  document.getElementById('cmConsideration').textContent = d.consideration;
  document.getElementById('cmRelated').textContent = d.related;
  // 写真状態を既存カードからコピー
  var cardImg = document.getElementById(id + 'Img');
  var modalImg = document.getElementById('cmImg');
  var modalPh = document.getElementById('cmPhIcon');
  if (cardImg && cardImg.src && cardImg.style.display !== 'none' && cardImg.src.indexOf('data:') === 0 || (cardImg && cardImg.src && cardImg.src.length > 10)) {
    modalImg.src = cardImg.src;
    modalImg.style.display = 'block';
    modalPh.style.display = 'none';
  } else {
    modalImg.src = '';
    modalImg.style.display = 'none';
    modalPh.style.display = 'flex';
  }
  document.getElementById('caseModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCaseModal() {
  document.getElementById('caseModal').classList.remove('open');
  document.body.style.overflow = '';
}
// ESC キーで閉じる
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') closeCaseModal();
});

var defaultNews = [
  {date:'2026-07-17', cat:'お知らせ', title:'消防設備点検・工事のご相談を随時受け付けています\n工場・店舗・事務所・アパートなど、建物の用途や規模を問わず、消防設備の点検・工事・修繕のご相談を随時お受けしています。\nお電話またはお問い合わせフォームよりお気軽にお寄せください。'},
  {date:'2026-07-17', cat:'お知らせ', title:'ホームページを公開しました\n有限会社一関防災設備のホームページをご覧いただき、ありがとうございます。\nこのたび、業務内容や会社情報、施工・対応事例などをご覧いただけるホームページを公開しました。\n消防設備の点検・工事・修繕に関するご相談は、お電話またはお問い合わせフォームよりお気軽にお寄せください。'}
];
var photoSlotDefs = [
  {id:'hero1',         name:'ヒーロー写真①',       desc:'トップスライドショー 1枚目'},
  {id:'hero2',         name:'ヒーロー写真②',       desc:'トップスライドショー 2枚目'},
  {id:'hero3',         name:'ヒーロー写真③',       desc:'トップスライドショー 3枚目'},
  {id:'bannerService', name:'バナー（業務内容）',    desc:'業務内容ページのタイトル背景'},
  {id:'bannerGallery', name:'バナー（施工・対応事例）', desc:'施工・対応事例ページのタイトル背景'},
  {id:'bannerCompany', name:'バナー（会社情報）',    desc:'会社情報ページのタイトル背景'},
  {id:'bannerNews',    name:'バナー（お知らせ）',    desc:'お知らせページのタイトル背景'},
  {id:'bannerContact', name:'バナー（お問い合わせ）',desc:'お問い合わせページのタイトル背景'},
  {id:'g1', name:'施工・対応事例 写真①', desc:'施工・対応事例ページ 1枚目'},
  {id:'g2', name:'施工・対応事例 写真②', desc:'施工・対応事例ページ 2枚目'},
  {id:'g3', name:'施工・対応事例 写真③', desc:'施工・対応事例ページ 3枚目'},
  {id:'g4', name:'施工・対応事例 写真④', desc:'施工・対応事例ページ 4枚目'},
  {id:'g5', name:'施工・対応事例 写真⑤', desc:'施工・対応事例ページ 5枚目'},
  {id:'g6', name:'施工・対応事例 写真⑥', desc:'施工・対応事例ページ 6枚目'},
  {id:'company', name:'会社・スタッフ写真', desc:'会社情報ページの写真'}
];


function toggleMenu() {
  var btn = document.getElementById('hamburger');
  var menu = document.getElementById('mobileMenu');
  btn.classList.toggle('open');
  menu.classList.toggle('open');
}
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

function nav(page) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  var el = document.getElementById('page-' + page);
  if (el) { el.classList.add('active'); window.scrollTo(0,0); document.documentElement.scrollTop = 0; document.body.scrollTop = 0; }
  document.querySelectorAll('#navLinks a').forEach(function(a) {
    a.classList.toggle('active', a.getAttribute('data-page') === page);
  });
  if (page === 'news') renderFullNews();
  // Inner pages use white sticky header; home uses transparent
  if (page === 'home') {
    document.body.classList.remove('inner-page');
    document.getElementById('site-header').classList.remove('scrolled');
  } else {
    document.body.classList.add('inner-page');
    // Ensure scroll to absolute top so sticky header doesn't cover content

  }
}

function navTo(page, sectionId) {
  nav(page);
  setTimeout(function() {
    var el = document.getElementById(sectionId);
    if (el) {
      var top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({top: top, behavior: 'smooth'});
      el.classList.remove('highlight');
      void el.offsetWidth;
      el.classList.add('highlight');
      setTimeout(function() { el.classList.remove('highlight'); }, 900);
    }
  }, 50);
}

function submitForm() {
  var n = document.getElementById('f-name').value.trim();
  var t = document.getElementById('f-tel').value.trim();
  var tp = document.getElementById('f-type').value;
  var m = document.getElementById('f-msg').value.trim();
  if (!n) { alert('お名前をご入力ください'); return; }
  if (!t) { alert('電話番号をご入力ください'); return; }
  if (!tp) { alert('お問い合わせ種別を選択してください'); return; }
  if (!m) { alert('お問い合わせ内容をご入力ください'); return; }
  document.getElementById('formArea').style.display = 'none';
  document.getElementById('thanksArea').style.display = 'block';
}

function fmtDate(d) { return d.replace(/-/g, '.'); }

async function getNews() {
  try {
    var r = await supabase.from('news').select('date,category,heading,body,sort_order').order('date',{ascending:false}).order('sort_order',{ascending:true});
    if (r.error) throw r.error;
    if (r.data && r.data.length > 0) {
      return r.data.map(function(n) {
        return { date: n.date, cat: n.category, title: n.heading + (n.body ? '\n' + n.body : '') };
      });
    }
    return defaultNews;
  } catch(e) {
    return defaultNews;
  }
}

async function renderHomeNews(list) {
  if (!list) list = await getNews();
  var el = document.getElementById('homeNewsList');
  if (!el) return;
  el.innerHTML = list.slice(0, 1).map(function(n) {
    var title = n.title.split('\n')[0];
    return '<div class="ni"><span class="nd">' + fmtDate(n.date) + '</span><span class="nt">' + title + '</span></div>';
  }).join('');
}

async function renderFullNews(list) {
  if (!list) list = await getNews();
  var el = document.getElementById('fullNewsList');
  if (!el) return;
  if (!list.length) { el.innerHTML = '<p style="color:var(--muted);padding:20px 0;text-align:center">お知らせはありません</p>'; return; }
  el.innerHTML = list.map(function(n) {
    var p = n.date.split('-');
    var dateStr = p[0] + '.' + p[1] + '.' + p[2];
    var parts = n.title.split('\n');
    var heading = parts[0];
    var body = parts.slice(1).join('\n');
    var catClass = '';
    if (n.cat === '採用情報') catClass = ' nfi-cat-chip-saiyou';
    else if (n.cat === '施工・対応事例') catClass = ' nfi-cat-chip-case';
    else if (n.cat === 'イベント') catClass = ' nfi-cat-chip-event';
    var hasBody = body && body.trim().length > 0;
    return '<article class="nfi' + (hasBody ? ' nfi-has-body' : '') + '">' +
      '<div class="nfi-head"' + (hasBody ? ' onclick="toggleNews(this)"' : '') + '>' +
        '<div class="nfi-head-main"><div class="nfi-meta"><span class="nfi-date">' + dateStr + '</span><span class="nfi-sep"></span><span class="nfi-cat-chip' + catClass + '">' + (n.cat || 'お知らせ') + '</span></div><h3 class="nfi-heading">' + heading + '</h3></div>' +
        (hasBody ? '<span class="nfi-toggle"><svg viewBox="0 0 24 24"><path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>' : '') +
      '</div>' +
      (hasBody ? '<div class="nfi-body-wrap"><div class="nfi-body-txt">' + body + '</div></div>' : '') +
    '</article>';
  }).join('');
}

var heroIdx = 0;
var heroTimer = null;
var HERO_COUNT = 3;

function heroGetActive() {
  var active = [];
  for (var i = 1; i <= HERO_COUNT; i++) {
    var sl = document.getElementById('heroSlide' + i);
    if (sl && sl.style.backgroundImage && sl.style.backgroundImage.indexOf('url(') >= 0) active.push(i - 1);
  }
  return active;
}
function heroGo(idx) {
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.hero-dot');
  slides.forEach(function(s) { s.classList.remove('active'); });
  dots.forEach(function(d) { d.classList.remove('active'); });
  heroIdx = idx;
  if (slides[idx]) slides[idx].classList.add('active');
  if (dots[idx]) dots[idx].classList.add('active');
}
function heroNext() {
  var active = heroGetActive();
  if (active.length === 0) return;
  var cur = active.indexOf(heroIdx);
  heroGo(active[(cur + 1) % active.length]);
  heroRestartTimer();
}
function heroRestartTimer() {
  if (heroTimer) clearInterval(heroTimer);
  heroTimer = setInterval(heroNext, 4000);
}
function heroUpdateDots() {
  var active = heroGetActive();
  var dotsEl = document.querySelector('.hero-dots');
  if (dotsEl) dotsEl.style.display = active.length > 1 ? 'flex' : 'none';
  if (active.length > 0 && active.indexOf(heroIdx) < 0) heroGo(active[0]);
}

function toggleFaq(el) {
  var item = el.parentElement;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i) { i.classList.remove('open'); });
  if (!isOpen) item.classList.add('open');
}

function toggleNews(head) {
  var nfi = head.parentElement;
  var wrap = nfi.querySelector('.nfi-body-wrap');
  var willOpen = !nfi.classList.contains('open');
  nfi.classList.toggle('open', willOpen);
  if (wrap) { wrap.style.maxHeight = willOpen ? (wrap.scrollHeight + 'px') : '0'; }
}

async function init() {
  var news = await getNews();
  renderHomeNews(news);
  heroUpdateDots();
  heroRestartTimer();
  document.querySelectorAll('#navLinks a').forEach(function(a) {
    a.classList.toggle('active', a.getAttribute('data-page') === 'home');
  });
  // Scroll handler for sticky header effect on home page
  function updateHeaderScrolled() {
    var header = document.getElementById('site-header');
    if (!header) return;
    if (document.body.classList.contains('inner-page')) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  // ページ読み込み直後にも判定（途中スクロール位置で開かれた場合に対応）
  updateHeaderScrolled();
  window.addEventListener('scroll', updateHeaderScrolled);
}
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
window.nav = nav;
window.navTo = navTo;
window.submitForm = submitForm;
window.openCaseModal = openCaseModal;
window.closeCaseModal = closeCaseModal;
window.toggleFaq = toggleFaq;
window.toggleNews = toggleNews;

init();
