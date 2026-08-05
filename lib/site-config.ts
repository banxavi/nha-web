/**
 * Site-wide nav + contact + footer copy.
 * Swap values here without editing layout components.
 */

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type SocialLink = {
  id: "facebook" | "youtube" | "tiktok";
  label: string;
  href: string;
};

export const siteContact = {
  phoneDisplay: "0907 566 279",
  phoneTel: "0907566279",
  zaloUrl: "https://zalo.me/0907566279",
  email: "nhaweb.vn@gmail.com",
  address: "208 Trường Chinh, Phường Tân Bình, TP.Hồ Chí Minh",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=208+Tr%C6%B0%E1%BB%9Dng+Chinh,+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+B%C3%ACnh,+TP.+H%E1%BB%93+Ch%C3%AD+Minh",
};

/** Menu Title Case — thứ tự theo luồng trang */
export const navItems: NavItem[] = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Cửa hàng", href: "/#mau-website" },
  { label: "Tin tức", href: "/#tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

/** Footer cột Dịch vụ — anchor về section CTA trên trang chủ. */
export const serviceNavLinks: NavChild[] = [
  { label: "Thiết kế website", href: "/#dich-vu" },
  { label: "Website chuẩn SEO", href: "/#dich-vu" },
  { label: "Giao diện quản trị", href: "/#dich-vu" },
];

/** TODO: thay href bằng fanpage / channel thật khi có. */
export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/" },
];

export const footerContent = {
  /** #10 — tái dùng `serviceNavLinks` */
  servicesTitle: "Dịch vụ",
  /** #11 — link/nội dung cập nhật sau */
  info: {
    title: "Thông tin",
    links: [
      { label: "Giới thiệu", href: "/gioi-thieu" },
      { label: "Quy trình làm việc", href: "/#quy-trinh" },
      { label: "Dự án", href: "/#mau-website" },
      { label: "Tin tức", href: "/#tin-tuc" },
    ],
  },
  /** #12 — link/nội dung cập nhật sau */
  help: {
    title: "Trợ giúp",
    links: [
      { label: "Hướng dẫn sử dụng", href: "/#huong-dan" },
      { label: "Các chính sách", href: "/#chinh-sach" },
      { label: "Bảo mật thông tin", href: "/#bao-mat" },
    ],
  },
  contactTitle: "Liên hệ",
  /** #14 */
  copyright:
    "Bản quyền © 2026 | Nhà Web – Thiết kế & Vận hành website",
};

export const logoPath = "/logo/Nha_Web_logo.png";
export const footerLogoPath = "/logo/nha-web-trang.png";

/**
 * Trang Giới thiệu — Section 1: Giới thiệu chung.
 * Layout 2 cột text trái / hình phải (ref interdata.vn/about-us).
 * Ảnh: `public/about-us/gioi-thieu-chung.webp` (395×600).
 * `imagePosition` dùng lại cho Section 2 (hình trái / text phải).
 */
export type AboutIntroImagePosition = "left" | "right";

export const aboutIntroContent = {
  id: "gioi-thieu-chung",
  /** Brand line — hiển thị "Nhà" cam + "Web" navy */
  brandNha: "NHÀ",
  brandWeb: "WEB",
  tagline: "Đồng hành chuyển đổi số cùng bạn",
  body: [
    "Nhà Web mang đến giải pháp thiết kế và vận hành website hiện đại, tối ưu trải nghiệm người dùng với chi phí hợp lý. Chúng tôi giúp cá nhân và doanh nghiệp sở hữu website chuyên nghiệp mà không cần am hiểu công nghệ, để tập trung phát triển kinh doanh và tăng trưởng doanh số.",
  ],
  image: {
    src: "/about-us/gioi-thieu-chung.webp",
    alt: "Nhà Web — giới thiệu chung, đồng hành chuyển đổi số cùng bạn",
    width: 395,
    height: 600,
  },
  imagePosition: "right" as AboutIntroImagePosition,
};

/**
 * Trang Giới thiệu — Section 2: Tầm nhìn – Sứ mệnh – Giá trị cốt lõi.
 * Layout 2 cột hình trái / text phải (ref interdata.vn/about-us “Tham vọng & mục tiêu”).
 * Ảnh: `public/about-us/gioi-thieu-chung-tam-nhin.webp` (680×516).
 */
export type AboutVisionBlockIcon =
  | "team"
  | "vision"
  | "values"
  | "growth";

export type AboutVisionBlock = {
  id: string;
  icon: AboutVisionBlockIcon;
  title: string;
  body: string;
};

export const aboutVisionContent = {
  id: "tam-nhin-su-menh",
  title: "Tầm nhìn - Sứ mệnh - Giá trị cốt lõi",
  /** Badge dưới title — "Nhà" cam + "Web" trắng trên nền navy (ref InterData brand chip). */
  brandNha: "Nhà",
  brandWeb: "Web",
  image: {
    src: "/about-us/gioi-thieu-chung-tam-nhin.webp",
    alt: "Nhà Web — tầm nhìn, sứ mệnh và giá trị cốt lõi",
    width: 680,
    height: 516,
  },
  imagePosition: "left" as AboutIntroImagePosition,
  blocks: [
    {
      id: "doi-ngu",
      icon: "team" as AboutVisionBlockIcon,
      title: "Đội ngũ",
      body: "Nhà Web được xây dựng bởi đội ngũ có hơn 7 năm kinh nghiệm phát triển website và 17 năm kinh nghiệm kiểm thử chất lượng phần mềm tại TMA Solutions. Nền tảng chuyên môn vững chắc giúp chúng tôi tạo ra những website hiện đại, ổn định, dễ sử dụng và đáp ứng tốt nhu cầu kinh doanh thực tế.",
    },
    {
      id: "tam-nhin",
      icon: "vision" as AboutVisionBlockIcon,
      title: "Tầm nhìn",
      body: "Ứng dụng công nghệ hiện đại và bền vững để giúp cá nhân, hộ kinh doanh và doanh nghiệp vừa và nhỏ xây dựng hiện diện trực tuyến chuyên nghiệp, từng bước phát triển thương hiệu và nâng cao hiệu quả kinh doanh trên môi trường số.",
    },
    {
      id: "gia-tri",
      icon: "values" as AboutVisionBlockIcon,
      title: "Giá trị cốt lõi",
      body: "Nhà Web lấy trải nghiệm người dùng làm trung tâm, không ngừng sáng tạo và đổi mới trong từng giải pháp. Chúng tôi đề cao sự trung thực, minh bạch và luôn nỗ lực hoàn thiện sản phẩm đúng với những gì đã cam kết cùng khách hàng.",
    },
    {
      id: "dinh-huong",
      icon: "growth" as AboutVisionBlockIcon,
      title: "Định hướng phát triển",
      body: "Nhà Web hướng đến trở thành đơn vị cung cấp dịch vụ thiết kế và vận hành website tiên phong trong việc ứng dụng công nghệ hiện đại. Mục tiêu của chúng tôi là mang đến những giải pháp website hiệu quả, dễ mở rộng và có khả năng hỗ trợ doanh nghiệp vừa và nhỏ tiếp cận khách hàng, phát triển thương hiệu và thúc đẩy doanh số.",
    },
  ] satisfies AboutVisionBlock[],
};

/**
 * Section 1 — Hero (text trái + banner phải).
 * Ảnh thật trong `public/hero` — tỉ lệ 3:2 (export 1800×1200).
 * Desktop: khung stretch theo chiều cao cột text; object-top giữ phần trên.
 */
export const heroContent = {
  headline: "Dịch vụ thiết kế website chuyên nghiệp, uy tín, chuẩn SEO",
  bullets: [
    "Thời gian triển khai 5–7 ngày",
    "Giao diện hiện đại & chuẩn SEO (PageSpeed >90 điểm)",
    "Hiển thị tốt trên mọi thiết bị",
    "Giao diện quản trị dễ sử dụng",
    "Sử dụng công nghệ hiện đại, bền vững",
    "Đội ngũ hỗ trợ chuyên nghiệp",
  ],
  ctaLabel: "Đăng ký ngay!",
  ctaHref: "/#lien-he",
  autoplayMs: 5000,
  banners: [
    {
      src: "/hero/hero-banner-1.webp.png",
      alt: "Thiết kế website theo yêu cầu — Nhà Web",
    },
    {
      src: "/hero/hero-banner-2.webp.png",
      alt: "Dịch vụ thiết kế website — Nhà Web",
    },
  ],
};

/**
 * Section 2 — Quy trình 5 bước (icon + title blocks).
 * Icon crop từ `public/process/image.png` → `public/process/icons/`.
 * Ảnh infographic chuyển sang `processImagesContent` / ProcessImagesSection.
 */
export type ProcessStepItem = {
  id: string;
  step: string;
  title: string;
  description: string;
  /** Path relative to /public */
  iconSrc: string;
};

export const processStepsContent = {
  heading: "Quy trình 5 bước",
  steps: [
    {
      id: "step-1",
      step: "Bước 1",
      title: "Tiếp nhận yêu cầu và tư vấn\ngiải pháp",
      description: "Lắng nghe nhu cầu, ngành nghề, chức năng cần thiết",
      iconSrc: "/process/icons/step-1-consult.png",
    },
    {
      id: "step-2",
      step: "Bước 2",
      title: "Lập kế hoạch và chốt phạm vi",
      description:
        "Xây dựng cấu trúc, tính năng, nội dung cần chuẩn bị, tiến độ",
      iconSrc: "/process/icons/step-2-plan.png",
    },
    {
      id: "step-3",
      step: "Bước 3",
      title: "Thiết kế và xây dựng website",
      description:
        "Thiết kế giao diện, màu sắc, hình ảnh, nội dung theo phạm vi đã chốt",
      iconSrc: "/process/icons/step-3-build.png",
    },
    {
      id: "step-4",
      step: "Bước 4",
      title: "Kiểm thử và tối ưu",
      description: "Kiểm tra website trước khi bàn giao",
      iconSrc: "/process/icons/step-4-test.png",
    },
    {
      id: "step-5",
      step: "Bước 5",
      title: "Nghiệm thu, bàn giao, vận hành",
      description:
        "Gửi website hoàn chỉnh cho khách, bàn giao tài khoản, hướng dẫn và hỗ trợ vận hành",
      iconSrc: "/process/icons/step-5-handover.png",
    },
  ] satisfies ProcessStepItem[],
};

/**
 * Section 3 — 5 mẫu website nổi bật.
 * Layout bento: 1 card cao trái (featured) + 4 card nhỏ 2×2 bên phải.
 * TODO: thay ảnh / title / href bằng mẫu website thật.
 */
export type SampleItem = {
  id: string;
  title: string;
  category: string;
  href: string;
  image: { src: string; alt: string };
  /** Card cao full-height bên trái (chỉ 1 item) */
  featured?: boolean;
};

export const websiteSamplesContent = {
  heading: "Mẫu website nổi bật",
  tagline: "Giao diện hiện đại, chuẩn SEO, đa dạng lĩnh vực",
  /** Đúng 5 item: featured đứng đầu, 4 còn lại xếp 2×2 */
  items: [
    {
      id: "s1",
      title: "Website doanh nghiệp",
      category: "Doanh nghiệp",
      href: "/#mau-website",
      image: { src: "/samples/sample-1.svg", alt: "Mẫu website doanh nghiệp" },
      featured: true,
    },
    {
      id: "s2",
      title: "Landing page bán hàng",
      category: "Landing page",
      href: "/#mau-website",
      image: { src: "/samples/sample-2.svg", alt: "Mẫu landing page" },
    },
    {
      id: "s3",
      title: "Website nhà hàng & F&B",
      category: "Nhà hàng",
      href: "/#mau-website",
      image: { src: "/samples/sample-3.svg", alt: "Mẫu website nhà hàng" },
    },
    {
      id: "s4",
      title: "Website bất động sản",
      category: "Bất động sản",
      href: "/#mau-website",
      image: { src: "/samples/sample-5.svg", alt: "Mẫu website bất động sản" },
    },
    {
      id: "s5",
      title: "Shop thời trang online",
      category: "Thương mại",
      href: "/#mau-website",
      image: { src: "/samples/sample-6.svg", alt: "Mẫu shop thời trang" },
    },
  ] satisfies SampleItem[],
};

/**
 * Section 4 — Tất cả mẫu websites (ref msn.com/vi-vn).
 * Desktop: lưới 5 cột; mỗi hàng đúng 4 item = 1 wide (span 2) + 3 small (span 1).
 * Carousel `<` `>` + auto next 4s (cùng pattern slider mẫu website cũ).
 * TODO: thay ảnh / title bằng mẫu website thật.
 */
export type AllSampleSize = "wide" | "small";

export type AllSampleItem = {
  id: string;
  title: string;
  category: string;
  image: { src: string; alt: string };
  /** wide = span 2 cột; small = span 1 */
  size: AllSampleSize;
};

/** Mỗi hàng: đúng 4 item, đúng 1 item `wide`, tổng span = 5 */
export type AllSampleRow = [
  AllSampleItem,
  AllSampleItem,
  AllSampleItem,
  AllSampleItem,
];

export const allWebsiteSamplesContent = {
  heading: "Dịch vụ thiết kế website Chuyên Nghiệp - Chuẩn SEO",
  tagline: "Giao diện hiện đại, chuẩn SEO, đa dạng lĩnh vực",
  autoplayMs: 4000,
  /**
   * Mỗi page = 1–2 hàng × 4 item.
   * `size` trong data chỉ là fallback SSR — client sẽ random lại
   * vị trí item wide mỗi hàng (index 0–3) khi mount.
   */
  pages: [
    [
      [
        {
          id: "all-1",
          title: "Website doanh nghiệp",
          category: "Doanh nghiệp",
          size: "wide",
          image: {
            src: "/samples/sample-1.svg",
            alt: "Mẫu website doanh nghiệp",
          },
        },
        {
          id: "all-2",
          title: "Landing page bán hàng",
          category: "Landing page",
          size: "small",
          image: { src: "/samples/sample-2.svg", alt: "Mẫu landing page" },
        },
        {
          id: "all-3",
          title: "Website nhà hàng & F&B",
          category: "Nhà hàng",
          size: "small",
          image: {
            src: "/samples/sample-3.svg",
            alt: "Mẫu website nhà hàng",
          },
        },
        {
          id: "all-4",
          title: "Website giáo dục",
          category: "Giáo dục",
          size: "small",
          image: { src: "/samples/sample-4.svg", alt: "Mẫu website giáo dục" },
        },
      ],
      [
        {
          id: "all-5",
          title: "Shop thời trang online",
          category: "Thương mại",
          size: "small",
          image: { src: "/samples/sample-6.svg", alt: "Mẫu shop thời trang" },
        },
        {
          id: "all-6",
          title: "Website spa & beauty",
          category: "Làm đẹp",
          size: "wide",
          image: { src: "/samples/sample-7.svg", alt: "Mẫu website spa" },
        },
        {
          id: "all-7",
          title: "Website công nghệ",
          category: "Công nghệ",
          size: "small",
          image: { src: "/samples/sample-8.svg", alt: "Mẫu website công nghệ" },
        },
        {
          id: "all-8",
          title: "Website bất động sản",
          category: "Bất động sản",
          size: "small",
          image: {
            src: "/samples/sample-5.svg",
            alt: "Mẫu website bất động sản",
          },
        },
      ],
    ],
    [
      [
        {
          id: "all-9",
          title: "Website phòng khám",
          category: "Y tế",
          size: "small",
          image: { src: "/samples/sample-3.svg", alt: "Mẫu website y tế" },
        },
        {
          id: "all-10",
          title: "Website du lịch",
          category: "Du lịch",
          size: "small",
          image: { src: "/samples/sample-1.svg", alt: "Mẫu website du lịch" },
        },
        {
          id: "all-11",
          title: "Website sự kiện",
          category: "Sự kiện",
          size: "wide",
          image: { src: "/samples/sample-2.svg", alt: "Mẫu website sự kiện" },
        },
        {
          id: "all-12",
          title: "Website nội thất",
          category: "Nội thất",
          size: "small",
          image: { src: "/samples/sample-4.svg", alt: "Mẫu website nội thất" },
        },
      ],
      [
        {
          id: "all-13",
          title: "Website luật & tư vấn",
          category: "Dịch vụ",
          size: "small",
          image: { src: "/samples/sample-8.svg", alt: "Mẫu website luật" },
        },
        {
          id: "all-14",
          title: "Website xây dựng",
          category: "Xây dựng",
          size: "small",
          image: { src: "/samples/sample-7.svg", alt: "Mẫu website xây dựng" },
        },
        {
          id: "all-15",
          title: "Website nông sản",
          category: "Nông nghiệp",
          size: "small",
          image: { src: "/samples/sample-6.svg", alt: "Mẫu website nông sản" },
        },
        {
          id: "all-16",
          title: "Website logistics",
          category: "Logistics",
          size: "wide",
          image: {
            src: "/samples/sample-5.svg",
            alt: "Mẫu website logistics",
          },
        },
      ],
    ],
  ] satisfies AllSampleRow[][],
};

/**
 * Task 4 — Tin tức / Sự kiện mới nhất.
 * Cấu trúc carousel giống slider mẫu website cũ: 5 item/hàng, `<` `>` + auto next.
 * TODO: thay title/excerpt/date/image bằng bài thật khi có CMS / content.
 */
export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  category: string;
  image: { src: string; alt: string };
};

export const newsContent = {
  heading: "Tin tức / Sự kiện mới nhất",
  tagline: "Cập nhật xu hướng thiết kế web, SEO và vận hành số",
  /** Auto-next carousel (ms) — cùng pattern slider mẫu website */
  autoplayMs: 4000,
  /** Số tin / hàng (desktop) */
  itemsPerRow: 5 as const,
  items: [
    {
      id: "news-1",
      title: "5 xu hướng thiết kế website doanh nghiệp năm 2026",
      excerpt:
        "TODO: Tóm tắt ngắn — giao diện tối giản, tốc độ tải và chuẩn SEO kỹ thuật.",
      date: "01/08/2026",
      href: "/#tin-tuc",
      category: "Xu hướng",
      image: {
        src: "/samples/sample-1.svg",
        alt: "Minh họa tin tức xu hướng thiết kế website",
      },
    },
    {
      id: "news-2",
      title: "Vì sao website chuẩn SEO giúp tăng khách hàng tiềm năng",
      excerpt:
        "TODO: Tóm tắt ngắn — cấu trúc nội dung, tốc độ PageSpeed và trải nghiệm mobile.",
      date: "28/07/2026",
      href: "/#tin-tuc",
      category: "SEO",
      image: {
        src: "/samples/sample-2.svg",
        alt: "Minh họa tin tức SEO website",
      },
    },
    {
      id: "news-3",
      title: "Checklist bàn giao website cho đội vận hành nội bộ",
      excerpt:
        "TODO: Tóm tắt ngắn — tài khoản, hướng dẫn CMS và quy trình bảo trì.",
      date: "22/07/2026",
      href: "/#tin-tuc",
      category: "Vận hành",
      image: {
        src: "/samples/sample-3.svg",
        alt: "Minh họa checklist bàn giao website",
      },
    },
    {
      id: "news-4",
      title: "Landing page bán hàng: bố cục chuyển đổi tốt nhất",
      excerpt:
        "TODO: Tóm tắt ngắn — hero rõ ràng, CTA nổi bật và social proof.",
      date: "15/07/2026",
      href: "/#tin-tuc",
      category: "Landing page",
      image: {
        src: "/samples/sample-4.svg",
        alt: "Minh họa tin tức landing page",
      },
    },
    {
      id: "news-5",
      title: "Nhà Web đồng hành cùng shop Luvini & Co nâng cấp website",
      excerpt:
        "TODO: Tóm tắt ngắn — case study thiết kế theo ngành thời trang.",
      date: "08/07/2026",
      href: "/#tin-tuc",
      category: "Dự án",
      image: {
        src: "/samples/sample-5.svg",
        alt: "Minh họa case study dự án Nhà Web",
      },
    },
    {
      id: "news-6",
      title: "Giao diện quản trị dễ dùng: tiêu chí chọn nền tảng website",
      excerpt:
        "TODO: Tóm tắt ngắn — cập nhật nội dung nhanh, phân quyền và bảo mật.",
      date: "01/07/2026",
      href: "/#tin-tuc",
      category: "Công nghệ",
      image: {
        src: "/samples/sample-6.svg",
        alt: "Minh họa giao diện quản trị website",
      },
    },
    {
      id: "news-7",
      title: "Sự kiện: Workshop tối ưu trải nghiệm người dùng trên web",
      excerpt:
        "TODO: Tóm tắt ngắn — chia sẻ thực tế UX/UI cho doanh nghiệp vừa và nhỏ.",
      date: "24/06/2026",
      href: "/#tin-tuc",
      category: "Sự kiện",
      image: {
        src: "/samples/sample-7.svg",
        alt: "Minh họa sự kiện workshop UX",
      },
    },
    {
      id: "news-8",
      title: "Thiết kế web F&B: ảnh món ăn và đặt bàn online hiệu quả",
      excerpt:
        "TODO: Tóm tắt ngắn — gallery, menu số và tích hợp đặt chỗ.",
      date: "18/06/2026",
      href: "/#tin-tuc",
      category: "Ngành nghề",
      image: {
        src: "/samples/sample-8.svg",
        alt: "Minh họa website ngành F&B",
      },
    },
    {
      id: "news-9",
      title: "Bảo mật thông tin khách hàng trên website doanh nghiệp",
      excerpt:
        "TODO: Tóm tắt ngắn — HTTPS, form liên hệ an toàn và chính sách dữ liệu.",
      date: "10/06/2026",
      href: "/#tin-tuc",
      category: "Bảo mật",
      image: {
        src: "/samples/sample-1.svg",
        alt: "Minh họa bảo mật website",
      },
    },
    {
      id: "news-10",
      title: "Lịch bảo trì website định kỳ giúp giảm rủi ro downtime",
      excerpt:
        "TODO: Tóm tắt ngắn — backup, cập nhật plugin và giám sát tốc độ.",
      date: "02/06/2026",
      href: "/#tin-tuc",
      category: "Bảo trì",
      image: {
        src: "/samples/sample-2.svg",
        alt: "Minh họa bảo trì website",
      },
    },
  ] satisfies NewsItem[],
};

/**
 * Section 5 — FAQ (layout ref web4s.vn).
 * TODO: content/ảnh final CHƯA CÓ — đang dùng text + crop ảnh mẫu tạm.
 * Swap `heading` / `items` / `image` khi khách cung cấp bản Nhà Web.
 */
export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqContent = {
  heading:
    "Câu hỏi thường gặp về dịch vụ thiết kế website chuyên nghiệp tại Nhà Web",
  image: {
    src: "/faq/faq-nha-web.webp.png",
    alt: "Minh họa FAQ — giải pháp, chi phí, quy trình thiết kế website",
  },
  items: [
    {
      id: "faq-1",
      question: "Lợi ích của việc thiết kế website là gì ?",
      answer:
        "Việc sở hữu một website đã trở thành một nhu cầu thiết yếu đối với các doanh nghiệp, tổ chức và cá nhân muốn bán hàng trực tuyến, mở rộng thị trường, tương tác với khách hàng qua môi trường online từ đó đưa ra các chiến lược kinh doanh hiệu quả.",
    },
    {
      id: "faq-2",
      question:
        "Bảng giá thiết kế website chuyên nghiệp Nhân Hòa trọn gói giá khoảng bao nhiêu?",
      /** TODO: thay bằng câu trả lời Nhà Web */
      answer:
        "TODO: Nội dung trả lời tạm — sẽ cập nhật bảng giá / gói dịch vụ Nhà Web khi có content final.",
    },
    {
      id: "faq-3",
      question: "Vì sao cần thiết kế web trọn gói chuẩn SEO?",
      /** TODO: thay bằng câu trả lời Nhà Web */
      answer:
        "TODO: Nội dung trả lời tạm — giải thích lợi ích website trọn gói chuẩn SEO.",
    },
    {
      id: "faq-4",
      question:
        "Chi phí cho dịch vụ chăm sóc website thường dao động như thế nào?",
      /** TODO: thay bằng câu trả lời Nhà Web */
      answer:
        "TODO: Nội dung trả lời tạm — khoảng chi phí chăm sóc / bảo trì website.",
    },
    {
      id: "faq-5",
      question:
        "Khi thiết kế website trọn gói có đội ngũ hỗ trợ tôi trong quá trình sử dụng không?",
      /** TODO: thay bằng câu trả lời Nhà Web */
      answer:
        "TODO: Nội dung trả lời tạm — mô tả đội ngũ hỗ trợ sau bàn giao.",
    },
    {
      id: "faq-6",
      question:
        "Web4s có hỗ trợ hướng dẫn hoặc nhập liệu bài viết chuẩn SEO lên cho khách được không?",
      /** TODO: thay bằng câu trả lời Nhà Web (đổi brand Web4s → Nhà Web) */
      answer:
        "TODO: Nội dung trả lời tạm — chính sách hướng dẫn / nhập liệu bài viết SEO.",
    },
  ] satisfies FaqItem[],
};

/**
 * Section 6 — tiêu đề giữa "Quy trình 5 bước" + text trái / hình phải.
 * TODO: Content/hình final CHƯA CÓ — `image.src` rỗng = placeholder;
 * gán đường dẫn ảnh (vd. `/process/section6-media.png`) khi khách cung cấp.
 */
/**
 * Section 6 — ảnh infographic quy trình full-width (không chia text / image).
 * Ảnh: `public/process/quy-trinh-5-buoc.webp.png` (1920×902).
 */
export const processImagesContent = {
  heading: "Quy trình 5 bước",
  image: {
    src: "/process/quy-trinh-5-buoc.webp.png",
    alt: "Quy trình 5 bước Nhà Web — tiếp nhận yêu cầu, lập kế hoạch, thiết kế & xây dựng, kiểm thử & tối ưu, nghiệm thu bàn giao",
  },
};

/** @deprecated Dùng `processImagesContent` — giữ alias tạm nếu có import cũ. */
export const section6Content = processImagesContent;

/**
 * Section 7 — Why choose Nhà Web (format tạm ref Mắt Bão WS glass cards).
 * TODO: swap `backgroundImage` + icon assets khi khách cung cấp ảnh final.
 */
export type WhyChooseItem = {
  id: string;
  label: string;
  /** Số lớn accent (vd. "7+", "17+") — ưu tiên hơn icon */
  highlight?: string;
  /**
   * Icon key khi không có highlight.
   * Map tới SVG nội bộ trong `WhyChooseSection`.
   */
  icon?:
    | "code"
    | "templates"
    | "tech"
    | "admin"
    | "scale"
    | "support";
};

export const whyChooseContent = {
  heading:
    "Tại sao bạn nên chọn dịch vụ thiết kế website chuyên nghiệp tại Nhà Web?",
  subheading: "Nền tảng công nghệ tạo nên sự khác biệt của Nhà Web",
  ctaLabel: "Đăng ký tư vấn",
  ctaHref: "/#lien-he",
  /** Collage tạm từ mẫu web — thay bằng ảnh nền section 7 khi có */
  backgroundImage: {
    src: "/samples/sample-1.svg",
    alt: "",
  },
  items: [
    {
      id: "reason-1",
      highlight: "7+",
      label: "năm kinh nghiệm trong lĩnh vực thiết kế website",
    },
    {
      id: "reason-2",
      highlight: "17+",
      label: "năm kinh nghiệm công nghệ",
    },
    {
      id: "reason-3",
      icon: "code",
      label: "Phát triển hoàn toàn bằng mã nguồn riêng",
    },
    {
      id: "reason-4",
      icon: "templates",
      label: "Mẫu web hiện đại theo từng ngành nghề",
    },
    {
      id: "reason-5",
      icon: "tech",
      label: "Sử dụng công nghệ hiện đại, bền vững",
    },
    {
      id: "reason-6",
      icon: "admin",
      label: "Giao diện quản trị dễ sử dụng",
    },
    {
      id: "reason-7",
      icon: "scale",
      label: "Dễ nâng cấp và mở rộng",
    },
    {
      id: "reason-8",
      icon: "support",
      label: "Đội ngũ hỗ trợ chuyên nghiệp",
    },
  ] satisfies WhyChooseItem[],
};

/**
 * Mục 5 — Nhận xét khách hàng (layout card ref web4s.vn, hiển thị carousel).
 * Thêm item vào `items` khi có review mới — không cần sửa layout.
 * TODO: thay `image.src` bằng ảnh thật của khách khi có.
 */
export type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: { src: string; alt: string };
};

export const testimonialsContent = {
  eyebrow: "Khách hàng nói gì về dịch vụ thiết kế website",
  heading: "Phản hồi trong quá trình phục vụ khách hàng",
  items: [
    {
      id: "t1",
      name: "Phạm Minh Luân",
      role: "Chủ shop Luvini & Co",
      quote:
        "Thiết kế của Nhà Web rất tỉ mỉ và chuyên nghiệp — màu sắc, bố cục đều phù hợp đúng ngành hàng của shop. Từ ý tưởng đến bàn giao được chăm chút, giúp Luvini & Co có diện mạo online đúng chất thương hiệu.",
      image: {
        src: "/testimonials/avatar-placeholder.svg",
        alt: "Ảnh Phạm Minh Luân — Chủ shop Luvini & Co",
      },
    },
  ] satisfies TestimonialItem[],
};

/**
 * Section — CTA dịch vụ cao cấp (trên PhoneContactSection).
 * Ref layout interdata.vn: heading + domain underline + pill buttons gradient.
 */
export type PremiumServiceIcon =
  | "website"
  | "landing"
  | "branding"
  | "fullpackage"
  | "care";

export type PremiumServiceItem = {
  id: string;
  label: string;
  icon: PremiumServiceIcon;
};

export const premiumServicesContent = {
  id: "dich-vu",
  eyebrow: "Trải nghiệm dịch vụ cao cấp ngay tại",
  /** Domain-style brand line (ref INTERDATA.VN) */
  brandDomain: "NHAWEB.VN",
  services: [
    {
      id: "thiet-ke-website",
      label: "Thiết kế website",
      icon: "website",
    },
    {
      id: "thiet-ke-landing-page",
      label: "Thiết kế Landing page",
      icon: "landing",
    },
    {
      id: "thiet-ke-nhan-dien",
      label: "Thiết kế nhận diện thương hiệu",
      icon: "branding",
    },
    {
      id: "thiet-ke-tron-goi",
      label: "Thiết kế website trọn gói",
      icon: "fullpackage",
    },
    {
      id: "cham-soc-website",
      label: "Chăm sóc website",
      icon: "care",
    },
  ] satisfies PremiumServiceItem[],
};

/**
 * Shared contact form (Form 7 "Đăng ký tư vấn" + Form 8 "Đăng ký ngay").
 * Dùng qua `ContactFormModal` với `variant`: "consult" | "register".
 * TODO: swap `image` khi có ảnh Nhà Web thật; nối `/api/contact` gửi mail.
 */
export type ContactFormVariant = "consult" | "register";

export const contactFormContent = {
  image: {
    src: "/contact/dang-ky-tu-van.webp.png",
    alt: "Nhà Web — dịch vụ thiết kế website chuyên nghiệp",
  },
  consult: {
    heading: "NHÀ WEB XIN CHÀO!",
    subheading:
      "Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành trình số hóa.",
    submitLabel: "Đăng ký tư vấn",
  },
  register: {
    /** Dùng khi mở form không gắn mẫu cụ thể */
    defaultHeading: "Đăng ký ngay",
    subheading:
      "Để lại thông tin — Nhà Web sẽ liên hệ tư vấn và triển khai mẫu website phù hợp.",
    submitLabel: "Đăng ký ngay",
  },
  fields: {
    name: { label: "Tên của bạn", placeholder: "Nguyễn Văn A", required: true },
    phone: {
      label: "Số điện thoại",
      placeholder: "0907 566 279",
      required: true,
    },
    email: {
      label: "Email",
      placeholder: "email@domain.com",
      required: false,
    },
    message: {
      label: "Nội dung bạn cần hỗ trợ",
      placeholder: "Mô tả ngắn nhu cầu của bạn…",
      required: false,
    },
  },
  successTitle: "Gửi thông tin thành công!",
  successMessage:
    "Cảm ơn bạn đã tin tưởng Nhà Web. Chúng tôi sẽ liên hệ sớm nhất.",
  /** Section 8 CTA banner — mở modal register */
  section: {
    id: "lien-he",
    headline:
      "Khởi tạo Web đơn giản - Dễ vận hành - Dễ tăng trưởng doanh thu",
    subheadline: "Thiết kế Website chuyên nghiệp tại Nhà Web ngay",
    ctaLabel: "Đăng ký ngay",
    bannerColor: "#1B78E0",
    illustration: {
      src: "/contact/lien-he-phone.webp.png",
      alt: "Minh họa đăng ký website Nhà Web",
    },
  },
};

/** @deprecated Dùng `contactFormContent` — giữ alias tạm nếu còn import cũ */
export const phoneContactContent = contactFormContent.section;

/**
 * Trang Liên hệ — hero form (ref interdata.vn/contact).
 * Layout: info trái + form phải trên nền gradient xanh.
 * Form thêm field Số điện thoại so với mẫu InterData gốc.
 */
export const lienHePageContent = {
  id: "lien-he",
  eyebrow: "Liên hệ",
  heading: "LIÊN HỆ NHÀ WEB",
  intro:
    "Để lại thông tin — đội ngũ Nhà Web sẽ tư vấn giải pháp website phù hợp với nhu cầu của bạn.",
  hotlineLabel: "Hotline",
  workingHours: "Giờ làm việc: Thứ 2 - Thứ 7: 8:00 - 18:00",
  termsLabel: "Tôi đồng ý với Thỏa thuận & Điều khoản sử dụng",
  termsHref: "/#chinh-sach",
  submitLabel: "Gửi liên hệ",
  fields: {
    name: {
      label: "Họ tên",
      placeholder: "Nguyễn Văn A",
      required: true,
    },
    phone: {
      label: "Số điện thoại",
      placeholder: "0907 566 279",
      required: true,
    },
    email: {
      label: "Email",
      placeholder: "email@domain.com",
      required: true,
    },
    message: {
      label: "Nội dung liên hệ",
      placeholder: "Mô tả ngắn nhu cầu dịch vụ của bạn…",
      required: false,
    },
  },
  successTitle: "Gửi liên hệ thành công!",
  successMessage:
    "Cảm ơn bạn đã liên hệ Nhà Web. Chúng tôi sẽ phản hồi sớm nhất.",
};
