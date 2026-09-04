// サイトテキスト編集用コンテンツマップ
// content_key → CSSセレクタ の対応表
// このマップは管理画面で編集可能なテキスト要素を定義します

export const CONTENT_MAP = {
  // ===== ホーム =====
  home: [
    { key: 'home_hero_title', label: 'ヒーロータイトル', selector: '#page-home .hero .hero-title' },
    { key: 'home_hero_sub', label: 'ヒーローサブタイトル', selector: '#page-home .hero .hero-sub' },
    { key: 'home_about_title', label: '弊社について タイトル', selector: '#page-home .sec-about .sec-title' },
    { key: 'home_about_text', label: '弊社について 本文', selector: '#page-home .sec-about .sec-text' },
    { key: 'home_services_title', label: '業務内容 タイトル', selector: '#page-home .sec-services .sec-title' },
    { key: 'home_why_title', label: '選ばれる理由 タイトル', selector: '#page-home .sec-why .sec-title' },
    { key: 'home_faq_title', label: 'よくある質問 タイトル', selector: '#page-home .sec-faq .sec-title' },
    { key: 'home_cta_title', label: 'CTA タイトル', selector: '#page-home .sec-cta .cta-title' },
    { key: 'home_cta_text', label: 'CTA 本文', selector: '#page-home .sec-cta .cta-text' },
    { key: 'home_cta_btn', label: 'CTA ボタンテキスト', selector: '#page-home .sec-cta .cta-btn' },
    // サービスカード（6つ）
    { key: 'home_svc1_title', label: 'サービス①タイトル', selector: '#page-home .sec-services .svc-card:nth-child(1) .svc-title' },
    { key: 'home_svc1_desc', label: 'サービス①説明', selector: '#page-home .sec-services .svc-card:nth-child(2) .svc-desc' },
    { key: 'home_svc2_title', label: 'サービス②タイトル', selector: '#page-home .sec-services .svc-card:nth-child(3) .svc-title' },
    { key: 'home_svc2_desc', label: 'サービス②説明', selector: '#page-home .sec-services .svc-card:nth-child(4) .svc-desc' },
    { key: 'home_svc3_title', label: 'サービス③タイトル', selector: '#page-home .sec-services .svc-card:nth-child(5) .svc-title' },
    { key: 'home_svc3_desc', label: 'サービス③説明', selector: '#page-home .sec-services .svc-card:nth-child(6) .svc-desc' },
    // FAQ（6つ）
    { key: 'home_faq_q1', label: 'FAQ質問①', selector: '#page-home .faq-item:nth-child(1) .faq-qtxt' },
    { key: 'home_faq_a1', label: 'FAQ回答①', selector: '#page-home .faq-item:nth-child(1) .faq-atxt' },
    { key: 'home_faq_q2', label: 'FAQ質問②', selector: '#page-home .faq-item:nth-child(2) .faq-qtxt' },
    { key: 'home_faq_a2', label: 'FAQ回答②', selector: '#page-home .faq-item:nth-child(2) .faq-atxt' },
    { key: 'home_faq_q3', label: 'FAQ質問③', selector: '#page-home .faq-item:nth-child(3) .faq-qtxt' },
    { key: 'home_faq_a3', label: 'FAQ回答③', selector: '#page-home .faq-item:nth-child(3) .faq-atxt' },
    { key: 'home_faq_q4', label: 'FAQ質問④', selector: '#page-home .faq-item:nth-child(4) .faq-qtxt' },
    { key: 'home_faq_a4', label: 'FAQ回答④', selector: '#page-home .faq-item:nth-child(4) .faq-atxt' },
    { key: 'home_faq_q5', label: 'FAQ質問⑤', selector: '#page-home .faq-item:nth-child(5) .faq-qtxt' },
    { key: 'home_faq_a5', label: 'FAQ回答⑤', selector: '#page-home .faq-item:nth-child(5) .faq-atxt' },
    { key: 'home_faq_q6', label: 'FAQ質問⑥', selector: '#page-home .faq-item:nth-child(6) .faq-qtxt' },
    { key: 'home_faq_a6', label: 'FAQ回答⑥', selector: '#page-home .faq-item:nth-child(6) .faq-atxt' }
  ],

  // ===== 業務内容ページ =====
  service: [
    { key: 'service_hero_title', label: 'ヒーロータイトル', selector: '#page-service .hero .hero-title' },
    { key: 'service_intro', label: 'ページ導入文', selector: '#page-service .service-intro' },
    { key: 'service_flow_title', label: 'フロータイトル', selector: '#page-service .flow-title' },
    { key: 'service_cta_title', label: 'CTAタイトル', selector: '#page-service .sec-cta .cta-title' },
    { key: 'service_cta_text', label: 'CTA本文', selector: '#page-service .sec-cta .cta-text' },
    { key: 'service_cta_btn', label: 'CTAボタンテキスト', selector: '#page-service .sec-cta .cta-btn' },
    { key: 'svc_detail1_title', label: '業務詳細①タイトル', selector: '#page-service .svc-detail:nth-child(1) h3' },
    { key: 'svc_detail1_desc', label: '業務詳細①説明', selector: '#page-service .svc-detail:nth-child(1) p' },
    { key: 'svc_detail2_title', label: '業務詳細②タイトル', selector: '#page-service .svc-detail:nth-child(2) h3' },
    { key: 'svc_detail2_desc', label: '業務詳細②説明', selector: '#page-service .svc-detail:nth-child(2) p' },
    { key: 'svc_detail3_title', label: '業務詳細③タイトル', selector: '#page-service .svc-detail:nth-child(3) h3' },
    { key: 'svc_detail3_desc', label: '業務詳細③説明', selector: '#page-service .svc-detail:nth-child(3) p' },
    { key: 'svc_detail4_title', label: '業務詳細④タイトル', selector: '#page-service .svc-detail:nth-child(4) h3' },
    { key: 'svc_detail4_desc', label: '業務詳細④説明', selector: '#page-service .svc-detail:nth-child(4) p' },
    { key: 'svc_detail5_title', label: '業務詳細⑤タイトル', selector: '#page-service .svc-detail:nth-child(5) h3' },
    { key: 'svc_detail5_desc', label: '業務詳細⑤説明', selector: '#page-service .svc-detail:nth-child(5) p' },
    { key: 'svc_detail6_title', label: '業務詳細⑥タイトル', selector: '#page-service .svc-detail:nth-child(6) h3' },
    { key: 'svc_detail6_desc', label: '業務詳細⑥説明', selector: '#page-service .svc-detail:nth-child(6) p' },
    { key: 'flow_step1_title', label: 'フロー①タイトル', selector: '#page-service .flow-step:nth-child(1) h4' },
    { key: 'flow_step1_desc', label: 'フロー①説明', selector: '#page-service .flow-step:nth-child(1) p' },
    { key: 'flow_step2_title', label: 'フロー②タイトル', selector: '#page-service .flow-step:nth-child(2) h4' },
    { key: 'flow_step2_desc', label: 'フロー②説明', selector: '#page-service .flow-step:nth-child(2) p' },
    { key: 'flow_step3_title', label: 'フロー③タイトル', selector: '#page-service .flow-step:nth-child(3) h4' },
    { key: 'flow_step3_desc', label: 'フロー③説明', selector: '#page-service .flow-step:nth-child(3) p' },
    { key: 'flow_step4_title', label: 'フロー④タイトル', selector: '#page-service .flow-step:nth-child(4) h4' },
    { key: 'flow_step4_desc', label: 'フロー④説明', selector: '#page-service .flow-step:nth-child(4) p' }
  ],

  // ===== 施工・対応事例ページ =====
  gallery: [
    { key: 'gallery_hero_title', label: 'ヒーロータイトル', selector: '#page-gallery .hero .hero-title' },
    { key: 'gallery_intro', label: 'ページ導入文', selector: '#page-gallery .gallery-intro' },
    { key: 'gallery_case1_loc', label: '事例①設置場所', selector: '#page-gallery .case-card:nth-child(1) .case-loc' },
    { key: 'gallery_case1_title', label: '事例①タイトル', selector: '#page-gallery .case-card:nth-child(1) .case-title' },
    { key: 'gallery_case1_desc', label: '事例①説明', selector: '#page-gallery .case-card:nth-child(1) .case-desc' },
    { key: 'gallery_case2_loc', label: '事例②設置場所', selector: '#page-gallery .case-card:nth-child(2) .case-loc' },
    { key: 'gallery_case2_title', label: '事例②タイトル', selector: '#page-gallery .case-card:nth-child(2) .case-title' },
    { key: 'gallery_case2_desc', label: '事例②説明', selector: '#page-gallery .case-card:nth-child(2) .case-desc' },
    { key: 'gallery_case3_loc', label: '事例③設置場所', selector: '#page-gallery .case-card:nth-child(3) .case-loc' },
    { key: 'gallery_case3_title', label: '事例③タイトル', selector: '#page-gallery .case-card:nth-child(3) .case-title' },
    { key: 'gallery_case3_desc', label: '事例③説明', selector: '#page-gallery .case-card:nth-child(3) .case-desc' },
    { key: 'gallery_case4_loc', label: '事例④設置場所', selector: '#page-gallery .case-card:nth-child(4) .case-loc' },
    { key: 'gallery_case4_title', label: '事例④タイトル', selector: '#page-gallery .case-card:nth-child(4) .case-title' },
    { key: 'gallery_case4_desc', label: '事例④説明', selector: '#page-gallery .case-card:nth-child(4) .case-desc' },
    { key: 'gallery_case5_loc', label: '事例⑤設置場所', selector: '#page-gallery .case-card:nth-child(5) .case-loc' },
    { key: 'gallery_case5_title', label: '事例⑤タイトル', selector: '#page-gallery .case-card:nth-child(5) .case-title' },
    { key: 'gallery_case5_desc', label: '事例⑤説明', selector: '#page-gallery .case-card:nth-child(5) .case-desc' },
    { key: 'gallery_case6_loc', label: '事例⑥設置場所', selector: '#page-gallery .case-card:nth-child(6) .case-loc' },
    { key: 'gallery_case6_title', label: '事例⑥タイトル', selector: '#page-gallery .case-card:nth-child(6) .case-title' },
    { key: 'gallery_case6_desc', label: '事例⑥説明', selector: '#page-gallery .case-card:nth-child(6) .case-desc' }
  ],

  // ===== 会社情報ページ =====
  company: [
    { key: 'company_hero_title', label: 'ヒーロータイトル', selector: '#page-company .hero .hero-title' },
    { key: 'company_profile_title', label: '会社概要タイトル', selector: '#page-company .sec-profile .sec-title' },
    { key: 'company_philosophy_title', label: '経営理念タイトル', selector: '#page-company .sec-philosophy .sec-title' },
    { key: 'company_philosophy_text', label: '経営理念本文', selector: '#page-company .sec-philosophy .sec-text' },
    { key: 'company_access_title', label: 'アクセスタイトル', selector: '#page-company .sec-access .sec-title' },
    { key: 'company_access_addr', label: '住所', selector: '#page-company .sec-access .access-addr' },
    { key: 'company_access_tel', label: '電話番号', selector: '#page-company .sec-access .access-tel' },
    { key: 'company_access_hours', label: '営業時間', selector: '#page-company .sec-access .access-hours' }
  ],

  // ===== 選ばれる理由ページ =====
  why: [
    { key: 'why_hero_title', label: 'ヒーロータイトル', selector: '#page-why .hero .hero-title' },
    { key: 'why_reasons_title', label: '理由タイトル', selector: '#page-why .sec-reasons .sec-title' },
    { key: 'why_testimonials_title', label: 'お客様の声タイトル', selector: '#page-why .sec-testimonials .sec-title' },
    { key: 'why_cta_title', label: 'CTAタイトル', selector: '#page-why .sec-cta .cta-title' },
    { key: 'why_cta_text', label: 'CTA本文', selector: '#page-why .sec-cta .cta-text' },
    { key: 'why_cta_btn', label: 'CTAボタンテキスト', selector: '#page-why .sec-cta .cta-btn' }
  ],

  // ===== お知らせページ =====
  news: [
    { key: 'news_hero_title', label: 'ヒーロータイトル', selector: '#page-news .hero .hero-title' }
  ],

  // ===== お問い合わせページ =====
  contact: [
    { key: 'contact_hero_title', label: 'ヒーロータイトル', selector: '#page-contact .hero .hero-title' },
    { key: 'contact_form_title', label: 'フォームタイトル', selector: '#page-contact .contact-form-title' },
    { key: 'contact_form_intro', label: 'フォーム導入文', selector: '#page-contact .contact-form-intro' },
    { key: 'contact_tel_label', label: '電話番号ラベル', selector: '#page-contact .contact-tel-label' },
    { key: 'contact_tel_number', label: '電話番号', selector: '#page-contact .contact-tel-number' }
  ],

  // ===== フッター・共通 =====
  footer: [
    { key: 'footer_company_name', label: '会社名', selector: '.site-footer .footer-company-name' },
    { key: 'footer_address', label: '住所', selector: '.site-footer .footer-address' },
    { key: 'footer_tel', label: '電話番号', selector: '.site-footer .footer-tel' },
    { key: 'footer_copyright', label: 'コピーライト', selector: '.site-footer .footer-copyright' },
    { key: 'header_tel', label: 'ヘッダー電話番号', selector: '.site-header .h-tel' }
  ]
};

// 全ページのキーをフラット化
export function getAllEntries() {
  var all = [];
  Object.keys(CONTENT_MAP).forEach(function(page) {
    CONTENT_MAP[page].forEach(function(entry) {
      all.push({ page: page, key: entry.key, label: entry.label, selector: entry.selector });
    });
  });
  return all;
}

// ページ名の日本語表示用
export const PAGE_LABELS = {
  home: 'ホーム',
  service: '業務内容',
  gallery: '施工・対応事例',
  company: '会社情報',
  why: '選ばれる理由',
  news: 'お知らせ',
  contact: 'お問い合わせ',
  footer: 'フッター・共通'
};
