const japaneseKeywords = [
  "纐纈",
  "纐纈 北新地",
  "纐纈 日本料理",
  "こうけつ 北新地",
  "こうけつ 大阪",
  "北新地 纐纈",
  "北新地 日本料理",
  "北新地 和食",
  "北新地 割烹",
  "北新地 季節料理",
  "北新地 おまかせ",
  "北新地 おまかせコース",
  "北新地 ディナー",
  "北新地 会食",
  "北新地 接待",
  "北新地 記念日",
  "北新地 食事",
  "北新地 予約",
  "北新地駅 日本料理",
  "北新地駅 和食",
  "北新地駅 ディナー",
  "北新地駅 会食",
  "曽根崎新地 日本料理",
  "曽根崎新地 和食",
  "曽根崎新地 割烹",
  "曽根崎新地 ディナー",
  "曽根崎新地 会食",
  "曽根崎新地 予約",
  "大阪 北新地 日本料理",
  "大阪 北新地 和食",
  "大阪 北新地 割烹",
  "大阪 北新地 おまかせ",
  "大阪 北新地 ディナー",
  "大阪 北新地 会食",
  "大阪 北新地 接待",
  "大阪 北新地 記念日",
  "大阪 日本料理",
  "大阪 和食",
  "大阪 割烹",
  "大阪 季節料理",
  "大阪 おまかせ料理",
  "大阪 おまかせコース",
  "大阪 会食 和食",
  "大阪 接待 和食",
  "大阪 記念日 和食",
  "梅田 日本料理",
  "梅田 和食",
  "梅田 割烹",
  "梅田 ディナー",
  "梅田 会食",
  "梅田 接待",
  "大阪市北区 日本料理",
  "大阪市北区 和食",
  "大阪市北区 割烹",
  "大阪市北区 ディナー",
  "大阪市北区 会食",
  "北区曽根崎新地 日本料理",
  "北区曽根崎新地 和食",
  "北新地プレイス 日本料理",
  "北新地プレイス 6F",
  "和食 おまかせ 北新地",
  "日本料理 おまかせ 北新地",
  "割烹 おまかせ 北新地",
  "季節料理 北新地",
  "旬の食材 日本料理",
  "旬の魚介 和食",
  "旬の野菜 和食",
  "大阪 旬の食材",
  "北新地 旬の食材",
  "日本酒 和食 北新地",
  "ワイン 和食 北新地",
  "日本酒 日本料理 大阪",
  "ワイン 日本料理 大阪",
  "香りを大切にした料理",
  "素材の旨み 日本料理",
  "素材本来の味 和食",
  "落ち着いた空間 和食",
  "上質な時間 日本料理",
  "大切な食事 北新地",
  "大切な方との食事",
  "記念日の食事 大阪",
  "接待ディナー 北新地",
  "会食ディナー 北新地",
  "大阪 予約 日本料理",
  "北新地 OMAKASE 予約",
  "OMAKASE 北新地",
  "OMAKASE 日本料理 大阪",
  "大阪 料理人 日本料理",
  "大阪 本格和食",
  "北新地 本格和食",
  "大阪 割烹ディナー",
  "北新地 割烹ディナー",
  "大阪 季節の献立",
  "北新地 季節の献立",
  "日本料理 大阪 予約",
  "和食 大阪 予約",
  "大阪 祝日定休 和食",
  "北新地 日曜定休 和食",
  "18時営業 北新地",
  "深夜24時まで 北新地",
  "大阪市北区曽根崎新地 食事",
  "北新地 公式サイト 日本料理",
  "北新地 Googleマップ 日本料理",
  "北新地 インスタグラム 和食",
  "纐纈 予約",
  "纐纈 住所",
  "纐纈 営業時間",
  "纐纈 電話番号"
];

const englishKeywords = [
  "Koketsu",
  "Koketsu Kitashinchi",
  "Koketsu Osaka",
  "Koketsu Japanese restaurant",
  "Kitashinchi Japanese restaurant",
  "Kitashinchi washoku restaurant",
  "Kitashinchi kaiseki style dinner",
  "Kitashinchi omakase restaurant",
  "Kitashinchi omakase course",
  "Kitashinchi dinner",
  "Kitashinchi business dinner",
  "Kitashinchi anniversary dinner",
  "Kitashinchi seasonal Japanese cuisine",
  "Kitashinchi sake pairing",
  "Kitashinchi wine pairing",
  "Japanese restaurant near Kitashinchi Station",
  "washoku near Kitashinchi Station",
  "dinner near Kitashinchi Station",
  "restaurant near Kitashinchi Station",
  "Sonezakishinchi Japanese restaurant",
  "Sonezakishinchi washoku",
  "Sonezakishinchi dinner",
  "Sonezakishinchi omakase",
  "Sonezakishinchi business dinner",
  "Osaka Japanese restaurant",
  "Osaka washoku restaurant",
  "Osaka omakase restaurant",
  "Osaka seasonal Japanese cuisine",
  "Osaka Japanese dinner",
  "Osaka business dinner",
  "Osaka anniversary dinner",
  "Osaka sake and wine",
  "Osaka Japanese course dinner",
  "Osaka restaurant reservation",
  "Umeda Japanese restaurant",
  "Umeda washoku restaurant",
  "Umeda omakase dinner",
  "Umeda business dinner",
  "Umeda anniversary dinner",
  "Japanese cuisine in Osaka",
  "Japanese cuisine in Kitashinchi",
  "washoku in Osaka",
  "washoku in Kitashinchi",
  "omakase in Osaka",
  "omakase in Kitashinchi",
  "seasonal omakase Osaka",
  "seasonal omakase Kitashinchi",
  "Japanese restaurant in Kita Ward Osaka",
  "Kita Ward Osaka dinner",
  "Kita Ward Japanese cuisine",
  "Kita Ward washoku",
  "Kita Ward omakase",
  "Osaka Kita Ward business dinner",
  "Japanese restaurant Sonezakishinchi",
  "restaurant in Sonezakishinchi Osaka",
  "Kitashinchi Place restaurant",
  "Kitashinchi Place 6F",
  "Japanese restaurant for special occasions Osaka",
  "Japanese restaurant for anniversary Osaka",
  "Japanese restaurant for business meals Osaka",
  "Japanese restaurant with sake Osaka",
  "Japanese restaurant with wine Osaka",
  "seasonal ingredients Japanese restaurant",
  "seasonal seafood Japanese cuisine",
  "seasonal vegetables Japanese cuisine",
  "refined Japanese dining Kitashinchi",
  "calm Japanese restaurant Osaka",
  "Japanese hospitality Osaka",
  "attentive hospitality Japanese restaurant",
  "Japanese dinner reservation Osaka",
  "OMAKASE reservation Osaka",
  "OMAKASE reservation Kitashinchi",
  "OMAKASE Japanese restaurant Osaka",
  "OMAKASE Japanese restaurant Kitashinchi",
  "Japanese course menu Osaka",
  "Japanese course dinner Kitashinchi",
  "sake pairing Japanese cuisine Osaka",
  "wine pairing Japanese cuisine Osaka",
  "sake pairing Kitashinchi",
  "wine pairing Kitashinchi",
  "Japanese restaurant open until midnight Osaka",
  "Kitashinchi restaurant open until midnight",
  "Sunday closed Japanese restaurant Osaka",
  "holiday closed Japanese restaurant Osaka",
  "Osaka dinner for travelers",
  "Kitashinchi dinner for travelers",
  "Japanese restaurant for visitors to Osaka",
  "Osaka local Japanese cuisine",
  "Kitashinchi local restaurant",
  "Osaka authentic washoku",
  "Kitashinchi authentic washoku",
  "Japanese restaurant official website Osaka",
  "Koketsu official website",
  "Koketsu reservation",
  "Koketsu address",
  "Koketsu phone number",
  "Koketsu opening hours",
  "Koketsu Instagram",
  "Kitashinchi Japanese dinner reservation",
  "Osaka seasonal dinner reservation",
  "Japanese omakase course Kitashinchi",
  "Japanese food Kitashinchi Osaka",
  "where to eat Japanese cuisine in Kitashinchi",
  "where to book Japanese dinner in Osaka",
  "Osaka restaurant near Umeda",
  "Kitashinchi restaurant near Umeda"
];

const faqs = [
  {
    question: "予約はどこからできますか？",
    answer:
      "ご予約はOMAKASEの予約ページより受け付けています。日時ごとのコース内容、価格、キャンセルポリシーは予約画面でご確認ください。"
  },
  {
    question: "営業時間と定休日を教えてください。",
    answer: "営業時間は18:00 - 24:00、定休日は日曜・祝日です。"
  },
  {
    question: "場所はどこですか？",
    answer:
      "大阪府大阪市北区曽根崎新地1-10-2 北新地プレイス 6Fです。北新地駅近く、曽根崎新地にあります。"
  },
  {
    question: "どのような料理のお店ですか？",
    answer:
      "日本料理、和食のお店です。季節の食材を使い、素材本来の香りや旨みを大切にしたおまかせコースを提供しています。"
  },
  {
    question: "写真撮影について案内はありますか？",
    answer:
      "公式サイトでは、料理撮影時に他のお客様が写らないよう配慮すること、他店との比較を含む投稿を控えることが案内されています。"
  },
  {
    question: "来店時のお願いはありますか？",
    answer:
      "料理の香りを大切にしているため、公式サイトでは香水の使用を控えるよう案内されています。"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "纐纈 北新地 日本料理",
  alternateName: [
    "Koketsu is a Japanese restaurant in Kitashinchi",
    "Koketsu"
  ],
  description:
    "北新地駅近く、曽根崎新地に店を構える日本料理店。四季折々の食材を見極め、素材本来の香りや旨みを大切にしたおまかせコースを提供しています。",
  servesCuisine: ["日本料理", "和食", "Japanese cuisine", "Washoku"],
  url: "https://hyperioninc.jp/",
  telephone: "+81-80-3784-3281",
  address: {
    "@type": "PostalAddress",
    postalCode: "530-0002",
    addressRegion: "大阪府",
    addressLocality: "大阪市北区",
    streetAddress: "曽根崎新地1-10-2 北新地プレイス 6F",
    addressCountry: "JP"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:00",
      closes: "24:00"
    }
  ],
  sameAs: [
    "https://hyperioninc.jp/",
    "https://omakase.in/r/hh706476",
    "https://maps.app.goo.gl/vboTDfwvYQDPJ74Q6",
    "https://www.instagram.com/kitashinchikouketsu/?hl=ja"
  ],
  acceptsReservations: true
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="site-header">
        <nav className="nav" aria-label="メインナビゲーション">
          <a className="brand" href="#top">
            <strong>纐纈</strong>
            <span>Koketsu / Kitashinchi Japanese Restaurant</span>
          </a>
          <div className="nav-links">
            <a href="#features">特徴</a>
            <a href="#info">店舗情報</a>
            <a href="#access">アクセス</a>
            <a href="#english">English Guide</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <div>
              <p className="eyebrow">大阪・北新地 / 日本料理・和食</p>
              <h1>纐纈 北新地 日本料理</h1>
              <p className="lead">
                北新地駅近く、曽根崎新地に店を構える日本料理店「纐纈（こうけつ）」です。四季折々の食材を見極め、素材本来の香りや旨みを大切にしたおまかせコースをご提供しております。
              </p>
              <div className="hero-actions">
                <a className="button" href="https://omakase.in/r/hh706476">
                  予約する
                </a>
                <a className="button secondary" href="https://maps.app.goo.gl/vboTDfwvYQDPJ74Q6">
                  地図を見る
                </a>
              </div>
            </div>
            <aside className="hero-panel" aria-label="基本情報">
              <dl>
                <dt>業態</dt>
                <dd>日本料理、和食</dd>
                <dt>エリア</dt>
                <dd>大阪・北新地、曽根崎新地</dd>
                <dt>住所</dt>
                <dd>〒530-0002 大阪府 大阪市北区曽根崎新地1-10-2 北新地プレイス 6F</dd>
                <dt>電話番号</dt>
                <dd><a href="tel:08037843281">080-3784-3281</a></dd>
                <dt>営業時間</dt>
                <dd>18:00 - 24:00</dd>
                <dt>定休日</dt>
                <dd>日・祝日</dd>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-title">
            <p className="eyebrow">Features</p>
            <h2>季節の移ろいを、一皿ずつ丁寧に</h2>
            <p>
              旬の魚介や野菜、滋味深い食材を使い、香り、温度、余韻まで心地よく調和する料理を目指しています。
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature">
              <h3>おまかせコース</h3>
              <p>四季折々の食材を見極め、素材本来の香りや旨みを大切にした献立をご用意しています。</p>
            </article>
            <article className="feature">
              <h3>日本酒とワイン</h3>
              <p>献立に寄り添う日本酒やワインを提案し、料理との調和を楽しめるよう案内しています。</p>
            </article>
            <article className="feature">
              <h3>北新地の落ち着いた時間</h3>
              <p>接待や会食、記念日、大切な方との食事にも向いた、料理に向き合う時間を大切にしています。</p>
            </article>
          </div>
        </section>

        <section className="section alt" id="intro">
          <div className="section-title">
            <p className="eyebrow">About Koketsu</p>
            <h2>纐纈について</h2>
          </div>
          <div className="intro-text">
            <p>
              北新地駅近く、曽根崎新地に店を構える日本料理店「纐纈（こうけつ）」です。四季折々の食材を見極め、素材本来の香りや旨みを大切にしたおまかせコースをご提供しております。
            </p>
            <p>
              旬の魚介や野菜、滋味深い食材を一皿ずつ丁寧に仕立て、季節の移ろいを感じていただける献立をご用意いたします。接待や会食、記念日、大切な方とのお食事にもふさわしい落ち着いた空間で、料理に向き合う上質な時間をお過ごしください。
            </p>
            <p>
              献立に寄り添う日本酒やワインもご提案し、香り、温度、余韻まで心地よく調和する組み合わせをお楽しみいただけます。大阪・北新地で本格和食、割烹、季節料理、おまかせコースをお探しの方は、ぜひ纐纈へ。
            </p>
          </div>
        </section>

        <section className="section" id="info">
          <div className="section-title">
            <p className="eyebrow">Information</p>
            <h2>店舗基本情報</h2>
          </div>
          <div className="info-layout">
            <div className="info-box">
              <dl className="info-list">
                <dt>店舗名</dt>
                <dd>纐纈 北新地 日本料理</dd>
                <dt>英語表記</dt>
                <dd>Koketsu is a Japanese restaurant in Kitashinchi</dd>
                <dt>ローマ字表記</dt>
                <dd>Koketsu is a Japanese restaurant in Kitashinchi</dd>
                <dt>業態</dt>
                <dd>日本料理、和食</dd>
                <dt>住所</dt>
                <dd>〒530-0002 大阪府 大阪市北区曽根崎新地1-10-2 北新地プレイス 6F</dd>
                <dt>電話番号</dt>
                <dd><a href="tel:08037843281">080-3784-3281</a></dd>
                <dt>営業時間</dt>
                <dd>18:00 - 24:00</dd>
                <dt>定休日</dt>
                <dd>日・祝日</dd>
                <dt>公式サイト</dt>
                <dd><a href="https://hyperioninc.jp/">https://hyperioninc.jp/</a></dd>
                <dt>予約URL</dt>
                <dd><a href="https://omakase.in/r/hh706476">OMAKASEで予約</a></dd>
                <dt>Instagram</dt>
                <dd><a href="https://www.instagram.com/kitashinchikouketsu/?hl=ja">公式Instagram</a></dd>
              </dl>
            </div>
            <aside className="info-box">
              <h3>ご来店時のお願い</h3>
              <ul className="note-list">
                <li>料理撮影の際は、他のお客様が写らないようご配慮ください。</li>
                <li>当店に関する写真や感想を、他店と比較する内容で掲載することは控えるよう案内されています。</li>
                <li>料理の香りを大切にしているため、香水の使用を控えるよう案内されています。</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section alt" id="access">
          <div className="section-title">
            <p className="eyebrow">Access</p>
            <h2>アクセス</h2>
            <p>
              住所は大阪府大阪市北区曽根崎新地1-10-2 北新地プレイス 6Fです。地図はAPIを使わず、Googleマップの外部リンクで確認できます。
            </p>
          </div>
          <a className="map-link" href="https://maps.app.goo.gl/vboTDfwvYQDPJ74Q6">
            Googleマップで「纐纈 北新地 日本料理」を開く
          </a>
        </section>

        <section className="section english" id="english">
          <div className="section-title">
            <p className="eyebrow">English Guide</p>
            <h2>Koketsu is a Japanese restaurant in Kitashinchi</h2>
          </div>
          <div className="english-card">
            <p>
              Koketsu is a Japanese restaurant in Kitashinchi, Osaka, located in Sonezakishinchi near Kitashinchi Station. The restaurant offers omakase courses crafted with seasonal ingredients, highlighting the natural aroma, flavor, and elegance of Japanese cuisine in a calm, refined setting.
            </p>
            <p>
              The cuisine focuses on seasonal seafood, vegetables, and carefully prepared Japanese dishes. Sake and wine pairings are suggested in harmony with the menu. Koketsu is suited for business dinners, anniversaries, and special occasions when guests are looking for Japanese cuisine, washoku, seasonal omakase, and a dinner reservation in Kitashinchi or Osaka.
            </p>
            <p>
              Address: Kitashinchi Place 6F, 1-10-2 Sonezakishinchi, Kita-ku, Osaka 530-0002. Opening hours: 18:00 - 24:00. Closed: Sundays and Japanese public holidays. Reservations are accepted through OMAKASE.
            </p>
            <div className="button-row">
              <a className="button" href="https://omakase.in/r/hh706476">
                Reservation
              </a>
              <a className="button secondary" href="https://maps.app.goo.gl/vboTDfwvYQDPJ74Q6">
                Open Map
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-title">
            <p className="eyebrow">FAQ</p>
            <h2>よくある質問</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt" id="keywords">
          <div className="section-title">
            <p className="eyebrow">Search Keywords</p>
            <h2>関連キーワード</h2>
            <p>
              北新地、日本料理、和食、おまかせ、会食、接待、記念日、訪日旅行者向けの検索にも対応できるよう、店舗に関係する語句を整理しています。
            </p>
          </div>
          <h3>日本語キーワード</h3>
          <div className="keyword-cloud" aria-label="日本語関連キーワード">
            {japaneseKeywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
          <h3 style={{ marginTop: 32 }}>English Keywords</h3>
          <div className="keyword-cloud" aria-label="English related keywords">
            {englishKeywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <small>纐纈 北新地 日本料理 / Koketsu is a Japanese restaurant in Kitashinchi</small>
      </footer>
    </>
  );
}
