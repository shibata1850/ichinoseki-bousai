// サイトテキスト編集用コンテンツマップ
// content_key → CSSセレクタ の対応表
// [data-ck="..."] 属性は index.html の各要素に直接付与されています
// クラス名が存在する要素はクラスベースのセレクタを使用します

export const CONTENT_MAP = {
  // ===== ホーム =====
  home: [
    { key: 'home_hero_kicker', label: 'ヒーローキャッチコピー', selector: '#page-home .hero-kicker' },
    { key: 'home_hero_title', label: 'ヒーロータイトル', selector: '[data-ck="home_hero_title"]' },
    { key: 'home_hero_desc', label: 'ヒーロー説明文', selector: '#page-home .hero-desc' },
    { key: 'home_about_title', label: '弊社について タイトル', selector: '[data-ck="home_about_title"]' },
    { key: 'home_about_text1', label: '弊社について 本文①', selector: '[data-ck="home_about_text1"]' },
    { key: 'home_about_text2', label: '弊社について 本文②', selector: '[data-ck="home_about_text2"]' },
    { key: 'home_services_title', label: '事業内容 タイトル', selector: '[data-ck="home_services_title"]' },
    { key: 'home_services_sub', label: '事業内容 サブテキスト', selector: '[data-ck="home_services_sub"]' },
    { key: 'home_gallery_title', label: '施工事例セクション タイトル', selector: '[data-ck="home_gallery_title"]' },
    { key: 'home_gallery_intro', label: '施工事例セクション 紹介文', selector: '[data-ck="home_gallery_intro"]' },
    { key: 'home_why_title', label: '選ばれる理由 タイトル', selector: '#page-home .why-ttl' },
    { key: 'home_why1_title', label: '理由①タイトル', selector: '#page-home .why-item:nth-child(1) h3' },
    { key: 'home_why1_desc', label: '理由①説明', selector: '#page-home .why-item:nth-child(1) p' },
    { key: 'home_why2_title', label: '理由②タイトル', selector: '#page-home .why-item:nth-child(2) h3' },
    { key: 'home_why2_desc', label: '理由②説明', selector: '#page-home .why-item:nth-child(2) p' },
    { key: 'home_why3_title', label: '理由③タイトル', selector: '#page-home .why-item:nth-child(3) h3' },
    { key: 'home_why3_desc', label: '理由③説明', selector: '#page-home .why-item:nth-child(3) p' },
    { key: 'home_faq_title', label: 'よくある質問 タイトル', selector: '[data-ck="home_faq_title"]' },
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
    { key: 'home_faq_a6', label: 'FAQ回答⑥', selector: '#page-home .faq-item:nth-child(6) .faq-atxt' },
    { key: 'home_cta_text', label: 'CTAテキスト', selector: '#page-home .cta-catch' }
  ],

  // ===== 業務内容ページ =====
  service: [
    { key: 'service_hero_title', label: 'ヒーロータイトル', selector: '[data-ck="service_hero_title"]' },
    { key: 'service_list_title', label: '業務内容一覧タイトル', selector: '[data-ck="service_list_title"]' },
    { key: 'service_intro', label: 'ページ導入文', selector: '[data-ck="service_intro"]' },
    { key: 'svc_detail1_title', label: '業務詳細①タイトル', selector: '#svc-inspection h3' },
    { key: 'svc_detail1_desc', label: '業務詳細①説明', selector: '#svc-inspection .svc-bd p' },
    { key: 'svc_detail2_title', label: '業務詳細②タイトル', selector: '#svc-hydrant h3' },
    { key: 'svc_detail2_desc', label: '業務詳細②説明', selector: '#svc-hydrant .svc-bd p' },
    { key: 'svc_detail3_title', label: '業務詳細③タイトル', selector: '#svc-sprinkler h3' },
    { key: 'svc_detail3_desc', label: '業務詳細③説明', selector: '#svc-sprinkler .svc-bd p' },
    { key: 'svc_detail4_title', label: '業務詳細④タイトル', selector: '#svc-alarm h3' },
    { key: 'svc_detail4_desc', label: '業務詳細④説明', selector: '#svc-alarm .svc-bd p' },
    { key: 'svc_detail5_title', label: '業務詳細⑤タイトル', selector: '#svc-evacuation h3' },
    { key: 'svc_detail5_desc', label: '業務詳細⑤説明', selector: '#svc-evacuation .svc-bd p' },
    { key: 'svc_detail6_title', label: '業務詳細⑥タイトル', selector: '#svc-emergency h3' },
    { key: 'svc_detail6_desc', label: '業務詳細⑥説明', selector: '#svc-emergency .svc-bd p' },
    { key: 'service_flow_title', label: 'ご依頼の流れタイトル', selector: '[data-ck="service_flow_title"]' },
    { key: 'flow_step1_title', label: 'フロー①タイトル', selector: '[data-ck="flow_step1_title"]' },
    { key: 'flow_step1_desc', label: 'フロー①説明', selector: '[data-ck="flow_step1_desc"]' },
    { key: 'flow_step2_title', label: 'フロー②タイトル', selector: '[data-ck="flow_step2_title"]' },
    { key: 'flow_step2_desc', label: 'フロー②説明', selector: '[data-ck="flow_step2_desc"]' },
    { key: 'flow_step3_title', label: 'フロー③タイトル', selector: '[data-ck="flow_step3_title"]' },
    { key: 'flow_step3_desc', label: 'フロー③説明', selector: '[data-ck="flow_step3_desc"]' },
    { key: 'flow_step4_title', label: 'フロー④タイトル', selector: '[data-ck="flow_step4_title"]' },
    { key: 'flow_step4_desc', label: 'フロー④説明', selector: '[data-ck="flow_step4_desc"]' },
    { key: 'service_cta_text', label: 'CTAテキスト', selector: '#page-service .cta-catch' }
  ],

  // ===== 施工・対応事例ページ =====
  gallery: [
    { key: 'gallery_hero_title', label: 'ヒーロータイトル', selector: '[data-ck="gallery_hero_title"]' },
    { key: 'gallery_hero_desc', label: 'ヒーロー説明文', selector: '[data-ck="gallery_hero_desc"]' },
    { key: 'gallery_section_title', label: '事例一覧タイトル', selector: '#page-gallery .sec-title' },
    { key: 'gallery_lead', label: '事例一覧リード文', selector: '#page-gallery .gallery-lead' },
    { key: 'gallery_disclaimer', label: '事例一覧注記', selector: '#page-gallery .gallery-disclaimer' },
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
    { key: 'company_hero_title', label: 'ヒーロータイトル', selector: '[data-ck="company_hero_title"]' },
    { key: 'company_profile_title', label: '会社概要タイトル', selector: '[data-ck="company_profile_title"]' },
    { key: 'company_philosophy_title', label: '経営理念タイトル', selector: '[data-ck="company_philosophy_title"]' },
    { key: 'company_value1_title', label: '価値①タイトル', selector: '[data-ck="company_value1_title"]' },
    { key: 'company_value1_desc', label: '価値①説明', selector: '[data-ck="company_value1_desc"]' },
    { key: 'company_value2_title', label: '価値②タイトル', selector: '[data-ck="company_value2_title"]' },
    { key: 'company_value2_desc', label: '価値②説明', selector: '[data-ck="company_value2_desc"]' },
    { key: 'company_value3_title', label: '価値③タイトル', selector: '[data-ck="company_value3_title"]' },
    { key: 'company_value3_desc', label: '価値③説明', selector: '[data-ck="company_value3_desc"]' },
    { key: 'company_access_title', label: 'アクセスタイトル', selector: '[data-ck="company_access_title"]' },
    { key: 'company_access_addr', label: '住所', selector: '[data-ck="company_access_addr"]' },
    { key: 'company_access_tel', label: '電話番号', selector: '[data-ck="company_access_tel"]' },
    { key: 'company_access_hours', label: '営業時間', selector: '[data-ck="company_access_hours"]' }
  ],

  // ===== 選ばれる理由ページ =====
  why: [
    { key: 'why_hero_title', label: 'ヒーロータイトル', selector: '[data-ck="why_hero_title"]' },
    { key: 'why_hero_desc', label: 'ヒーロー説明文', selector: '[data-ck="why_hero_desc"]' },
    { key: 'why_reasons_title', label: '選ばれ続ける3つの理由', selector: '[data-ck="why_reasons_title"]' },
    { key: 'why_reason1_title', label: '理由①タイトル', selector: '[data-ck="why_reason1_title"]' },
    { key: 'why_reason1_desc1', label: '理由①説明①', selector: '[data-ck="why_reason1_desc1"]' },
    { key: 'why_reason1_desc2', label: '理由①説明②', selector: '[data-ck="why_reason1_desc2"]' },
    { key: 'why_reason2_title', label: '理由②タイトル', selector: '[data-ck="why_reason2_title"]' },
    { key: 'why_reason2_desc1', label: '理由②説明①', selector: '[data-ck="why_reason2_desc1"]' },
    { key: 'why_reason2_desc2', label: '理由②説明②', selector: '[data-ck="why_reason2_desc2"]' },
    { key: 'why_reason3_title', label: '理由③タイトル', selector: '[data-ck="why_reason3_title"]' },
    { key: 'why_reason3_desc1', label: '理由③説明①', selector: '[data-ck="why_reason3_desc1"]' },
    { key: 'why_reason3_desc2', label: '理由③説明②', selector: '[data-ck="why_reason3_desc2"]' },
    { key: 'why_testimonials_title', label: 'お客様の声タイトル', selector: '[data-ck="why_testimonials_title"]' },
    { key: 'why_testimonial1', label: 'お客様の声①', selector: '#page-why .vh-card:nth-child(1) .vh-quote' },
    { key: 'why_testimonial2', label: 'お客様の声②', selector: '#page-why .vh-card:nth-child(2) .vh-quote' },
    { key: 'why_cta_text', label: 'CTAテキスト', selector: '#page-why .cta-catch' }
  ],

  // ===== お知らせページ =====
  news: [
    { key: 'news_hero_title', label: 'ヒーロータイトル', selector: '[data-ck="news_hero_title"]' }
  ],

  // ===== お問い合わせページ =====
  contact: [
    { key: 'contact_hero_title', label: 'ヒーロータイトル', selector: '[data-ck="contact_hero_title"]' },
    { key: 'contact_intro', label: 'ページ導入文', selector: '[data-ck="contact_intro"]' },
    { key: 'contact_form_title', label: 'フォームタイトル', selector: '[data-ck="contact_form_title"]' }
  ],

  // ===== フッター・共通 =====
  footer: [
    { key: 'footer_copyright', label: 'コピーライト', selector: '.ft-copy' }
  ]
};

export function getAllEntries() {
  var all = [];
  Object.keys(CONTENT_MAP).forEach(function(page) {
    CONTENT_MAP[page].forEach(function(entry) {
      all.push({ page: page, key: entry.key, label: entry.label, selector: entry.selector });
    });
  });
  return all;
}

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
