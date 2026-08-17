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
  /** Mega dropdown — chia đều 2 cột (vd. Mẫu giao diện 5 | 5) */
  columns?: 2;
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

/**
 * 10 nhóm ngành — nguồn: docs/10-nhom-nganh.md
 * Dùng chung mega menu "Mẫu giao diện" + AllWebsiteSamplesSection.
 */
export type IndustryGroup = {
  id: string;
  label: string;
  /** Ngành nghề thuộc nhóm — tham chiếu content, chưa dùng UI */
  occupations: string[];
};

export const industryGroups: IndustryGroup[] = [
  {
    id: "dich-vu-thuong-mai",
    label: "Dịch vụ & Thương mại",
    occupations: [
      "Nhà hàng, quán ăn",
      "Quán cà phê, trà sữa",
      "Spa, thẩm mỹ viện",
      "Salon tóc, nail",
      "Dịch vụ giặt ủi",
      "Trung tâm gym, yoga",
    ],
  },
  {
    id: "ban-le-tmdt",
    label: "Bán lẻ & Thương mại điện tử",
    occupations: [
      "Cửa hàng thời trang",
      "Cửa hàng mỹ phẩm",
      "Cửa hàng thú cưng",
      "Siêu thị mini, tạp hóa",
      "Thực phẩm & Đồ uống",
      "Cửa hàng hoa, cây cảnh",
      "Cửa hàng đồ gia dụng",
      "Cửa hàng thiết bị điện tử",
      "Cửa hàng điện máy",
    ],
  },
  {
    id: "san-xuat-cong-nghiep",
    label: "Sản xuất & Công nghiệp",
    occupations: [
      "Xưởng may mặc",
      "Nhà máy thực phẩm chế biến",
      "Xưởng gỗ & nội thất",
      "Sản xuất bao bì, in ấn",
      "Cơ khí, kim loại",
    ],
  },
  {
    id: "xay-dung-bds",
    label: "Xây dựng & Bất động sản",
    occupations: [
      "Công ty xây dựng, thiết kế nội thất",
      "Đại lý bất động sản",
      "Dự án khu đô thị, căn hộ",
      "Cho thuê văn phòng, nhà ở",
    ],
  },
  {
    id: "giao-duc-dao-tao",
    label: "Giáo dục & Đào tạo",
    occupations: [
      "Trường mầm non, tiểu học, trung học",
      "Trung tâm ngoại ngữ",
      "Trung tâm đào tạo kỹ năng",
      "Gia sư, dạy kèm",
    ],
  },
  {
    id: "y-te-suc-khoe",
    label: "Y tế & Sức khỏe",
    occupations: [
      "Phòng khám đa khoa",
      "Nhà thuốc, dược phẩm",
      "Thiết bị y tế",
      "Trung tâm vật lý trị liệu",
    ],
  },
  {
    id: "du-lich-khach-san",
    label: "Du lịch & Khách sạn",
    occupations: [
      "Công ty du lịch, lữ hành",
      "Khách sạn, resort",
      "Homestay, căn hộ dịch vụ",
      "Địa điểm vui chơi, giải trí",
    ],
  },
  {
    id: "luat-tai-chinh",
    label: "Luật, Tài chính",
    occupations: [
      "Công ty luật, văn phòng luật sư",
      "Tư vấn tài chính, đầu tư",
      "Bảo hiểm",
      "Kế toán, thuế",
    ],
  },
  {
    id: "cong-nghe-dich-vu-so",
    label: "Công nghệ & Dịch vụ số",
    occupations: [
      "Công ty phần mềm",
      "Dịch vụ IT",
      "Marketing số",
      "AI và tự động hóa",
    ],
  },
  {
    id: "dich-vu-chuyen-nghiep",
    label: "Dịch vụ chuyên nghiệp",
    occupations: ["Thương hiệu cá nhân"],
  },
];

/** Mega menu "Mẫu giao diện" (trái 5 | phải 5) — trang sản phẩm theo nhóm ngành. */
export const templateCategoryLinks: NavChild[] = industryGroups.map((group) => ({
  label: group.label,
  href: `/san-pham#${group.id}`,
}));

/** Footer cột Dịch vụ — cùng danh sách submenu Header. */
export const serviceNavLinks: NavChild[] = [
  { label: "Thiết kế website", href: "/thiet-ke-website" },
  { label: "Thiết kế Landing page", href: "/thiet-ke-landing-page" },
  {
    label: "Thiết kế nhận diện thương hiệu",
    href: "/thiet-ke-nhan-dien-thuong-hieu",
  },
  {
    label: "Thiết kế website trọn gói",
    href: "/thiet-ke-website-tron-goi",
  },
  { label: "Chăm sóc website", href: "/cham-soc-website" },
];

/** Menu chính — logo + CTA giữ nguyên ở Header; cấu trúc theo mockup. */
export const navItems: NavItem[] = [
  {
    label: "Trang chủ",
    href: "/",
    children: [
      { label: "Giới thiệu", href: "/gioi-thieu" },
      { label: "Liên hệ", href: "/lien-he" },
    ],
  },
  {
    label: "Dịch vụ",
    href: "/#dich-vu",
    children: serviceNavLinks,
  },
  {
    label: "Mẫu giao diện",
    href: "/san-pham",
    columns: 2,
    children: templateCategoryLinks,
  },
  { label: "Tin tức", href: "/#tin-tuc" },
];

export const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/nhaweb.vn/",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@nhàweb",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@nhaweb.vn",
  },
];

export const footerContent = {
  /** #10 — tái dùng `serviceNavLinks` */
  servicesTitle: "Dịch vụ",
  /** #11 — link/nội dung cập nhật sau */
  info: {
    title: "Thông tin",
    links: [
      { label: "Giới thiệu", href: "/gioi-thieu" },
      { label: "Liên hệ", href: "/lien-he" },
      { label: "Quy trình làm việc", href: "/#quy-trinh" },
      { label: "Dự án", href: "/san-pham" },
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
 * Header search — gợi ý hardcode (ref luvini.vn dropdown).
 * Lọc có dấu / không dấu ở `Header` (normalize NFD).
 */
export type SearchSuggestion = {
  id: string;
  label: string;
  href: string;
};

export const searchPopularSuggestions: SearchSuggestion[] = [
  {
    id: "thiet-ke-website",
    label: "Thiết kế website",
    href: "/thiet-ke-website",
  },
  {
    id: "thiet-ke-landing-page",
    label: "Thiết kế Landing page",
    href: "/thiet-ke-landing-page",
  },
  {
    id: "mau-web-ban-hang",
    label: "Mẫu web bán hàng",
    href: "/san-pham#ban-le-tmdt",
  },
  {
    id: "cham-soc-website",
    label: "Chăm sóc website",
    href: "/cham-soc-website",
  },
  {
    id: "thiet-ke-tron-goi",
    label: "Thiết kế website trọn gói",
    href: "/thiet-ke-website-tron-goi",
  },
  {
    id: "nhan-dien-thuong-hieu",
    label: "Thiết kế nhận diện thương hiệu",
    href: "/thiet-ke-nhan-dien-thuong-hieu",
  },
  { id: "mau-giao-dien", label: "Mẫu giao diện website", href: "/san-pham" },
  { id: "quy-trinh", label: "Quy trình làm việc", href: "/#quy-trinh" },
];

export const searchPromoSuggestions: SearchSuggestion[] = [
  {
    id: "uu-dai-thiet-ke",
    label: "Ưu đãi thiết kế website",
    href: "/#lien-he",
  },
];

/**
 * Trang Giới thiệu — Section 1: Giới thiệu chung.
 * Layout 2 cột text trái / hình phải (ref interdata.vn/about-us).
 * Ảnh: `public/about-us/gioi-thieu-chung1.webp` (1360×1032) — nền asset trắng.
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
    src: "/about-us/gioi-thieu-chung1.webp",
    alt: "Nhà Web — giới thiệu chung, đồng hành chuyển đổi số cùng bạn",
    width: 1360,
    height: 1032,
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
 * Ảnh 930×429; khung desktop cao bằng cột text, mobile giữ tỉ lệ gốc.
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
 * Section 3 — 5 nhóm ngành nổi bật (không phải 5 mẫu web đơn lẻ).
 * Layout bento: 1 card cao trái (featured) + 4 card nhỏ 2×2 bên phải.
 * Nguồn nhãn: docs/10-nhom-nganh.md (+ “Thương hiệu cá nhân” thuộc nhóm 10).
 * Click → trang `/san-pham` (lọc theo nhóm ngành).
 * TODO: thay ảnh placeholder SVG bằng mockup/ảnh thật theo nhóm ngành.
 */
export type SampleItem = {
  id: string;
  /** Tên nhóm ngành hiển thị trên card */
  title: string;
  category: string;
  /** Link tới catalog sản phẩm (có thể kèm hash nhóm ngành) */
  href: string;
  image: { src: string; alt: string };
  /** Card cao full-height bên trái (chỉ 1 item) */
  featured?: boolean;
};

export const websiteSamplesContent = {
  heading: "Mẫu website nổi bật",
  tagline: "Giao diện hiện đại, chuẩn SEO, đa dạng lĩnh vực",
  /** Đúng 5 nhóm ngành: featured đứng đầu, 4 còn lại xếp 2×2 */
  items: [
    {
      id: "s1",
      title: "Dịch vụ & Thương mại",
      category: "Dịch vụ & Thương mại",
      href: "/san-pham#dich-vu-thuong-mai",
      image: {
        src: "/samples/sample-1.svg",
        alt: "Mẫu website nhóm Dịch vụ & Thương mại",
      },
      featured: true,
    },
    {
      id: "s2",
      title: "Bán lẻ & Thương mại điện tử",
      category: "Bán lẻ & Thương mại điện tử",
      href: "/san-pham#ban-le-tmdt",
      image: {
        src: "/samples/sample-2.svg",
        alt: "Mẫu website nhóm Bán lẻ & Thương mại điện tử",
      },
    },
    {
      id: "s3",
      title: "Xây dựng & Bất động sản",
      category: "Xây dựng & Bất động sản",
      href: "/san-pham#xay-dung-bds",
      image: {
        src: "/samples/sample-3.svg",
        alt: "Mẫu website nhóm Xây dựng & Bất động sản",
      },
    },
    {
      id: "s4",
      title: "Du lịch & Khách sạn",
      category: "Du lịch & Khách sạn",
      href: "/san-pham#du-lich-khach-san",
      image: {
        src: "/samples/sample-5.svg",
        alt: "Mẫu website nhóm Du lịch & Khách sạn",
      },
    },
    {
      id: "s5",
      title: "Thương hiệu cá nhân",
      category: "Dịch vụ chuyên nghiệp",
      href: "/san-pham#dich-vu-chuyen-nghiep",
      image: {
        src: "/samples/sample-4.svg",
        alt: "Mẫu website Thương hiệu cá nhân",
      },
    },
  ] satisfies SampleItem[],
};

/**
 * Section 4 — Tất cả mẫu websites theo 10 nhóm ngành (docs/10-nhom-nganh.md).
 * Desktop: lưới 5 cột; hàng đủ 4 item = 1 wide (span 2) + 3 small (span 1).
 * Hàng cuối có thể 2 item (nhóm 9–10).
 * Carousel `<` `>` + auto next 4s khi >1 page.
 * TODO: thay ảnh placeholder bằng mẫu website thật theo từng nhóm.
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

/** Mỗi hàng: 2–4 item; hàng đủ 4 thì đúng 1 item `wide` (tổng span = 5) */
export type AllSampleRow = AllSampleItem[];

const SAMPLE_IMAGE_SRC = [
  "/samples/sample-1.svg",
  "/samples/sample-2.svg",
  "/samples/sample-3.svg",
  "/samples/sample-4.svg",
  "/samples/sample-5.svg",
  "/samples/sample-6.svg",
  "/samples/sample-7.svg",
  "/samples/sample-8.svg",
] as const;

function industryGroupToSample(
  group: IndustryGroup,
  index: number,
  size: AllSampleSize,
): AllSampleItem {
  const src = SAMPLE_IMAGE_SRC[index % SAMPLE_IMAGE_SRC.length];
  return {
    id: group.id,
    title: group.label,
    category: group.label,
    size,
    image: {
      src,
      alt: `Mẫu website ${group.label}`,
    },
  };
}

/** Chia 10 nhóm thành các hàng mosaic: 4 + 4 + 2 */
function buildIndustrySampleRows(groups: IndustryGroup[]): AllSampleRow[] {
  const chunkSizes = [4, 4, 2] as const;
  const rows: AllSampleRow[] = [];
  let offset = 0;

  for (const chunkSize of chunkSizes) {
    const slice = groups.slice(offset, offset + chunkSize);
    if (slice.length === 0) break;
    const wideIndex = 0;
    rows.push(
      slice.map((group, i) =>
        industryGroupToSample(
          group,
          offset + i,
          slice.length <= 2 || i === wideIndex ? "wide" : "small",
        ),
      ),
    );
    offset += chunkSize;
  }

  return rows;
}

export const allWebsiteSamplesContent = {
  heading: "Dịch vụ thiết kế website Chuyên Nghiệp - Chuẩn SEO",
  tagline: "Giao diện hiện đại, chuẩn SEO, đa dạng lĩnh vực",
  autoplayMs: 4000,
  /**
   * 1 page = 10 nhóm ngành (3 hàng: 4 + 4 + 2).
   * `size` trong data chỉ là fallback SSR — client sẽ random lại
   * vị trí item wide mỗi hàng khi mount.
   */
  pages: [buildIndustrySampleRows(industryGroups)] satisfies AllSampleRow[][],
};

/**
 * Trang `/san-pham` — catalog tất cả mẫu giao diện theo ngành nghề
 * (docs/10-nhom-nganh.md). Mỗi nghề = 1 mẫu; lọc theo nhóm ngành.
 * TODO: thay ảnh placeholder bằng mockup thật theo từng nghề.
 */
export type ProductSampleItem = {
  id: string;
  title: string;
  /** Id nhóm ngành — dùng filter + hash `/san-pham#…` */
  groupId: string;
  groupLabel: string;
  image: { src: string; alt: string; width?: number; height?: number };
  /** URL xem thực tế — hiện nút "Xem thực tế" khi có */
  liveUrl?: string;
  /**
   * `true` (mặc định) = mẫu có sẵn, bàn giao 3–5 ngày.
   * `false` = thiết kế mới, 15–20 ngày tùy độ phức tạp.
   */
  isReadyTemplate?: boolean;
};

function slugifyOccupation(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Demo live theo nghề — bổ sung khi có site thật. */
const TEMPLATE_LIVE_DEMOS: Record<string, string> = {
  "Thực phẩm & Đồ uống": "https://luvini.vn",
};

/** Screenshot full-page theo nghề — hover-scroll trên trang chi tiết. */
const TEMPLATE_PREVIEW_IMAGES: Record<
  string,
  { src: string; width: number; height: number }
> = {
  "Thực phẩm & Đồ uống": {
    src: "/san-pham/thuc-pham-do-uong/luvini.png",
    width: 1651,
    height: 4240,
  },
};

function buildProductSamples(groups: IndustryGroup[]): ProductSampleItem[] {
  const items: ProductSampleItem[] = [];
  let imageIndex = 0;

  for (const group of groups) {
    for (const occupation of group.occupations) {
      const preview = TEMPLATE_PREVIEW_IMAGES[occupation];
      const src =
        preview?.src ?? SAMPLE_IMAGE_SRC[imageIndex % SAMPLE_IMAGE_SRC.length];
      imageIndex += 1;
      items.push({
        id: `${group.id}-${slugifyOccupation(occupation)}`,
        title: occupation,
        groupId: group.id,
        groupLabel: group.label,
        liveUrl: TEMPLATE_LIVE_DEMOS[occupation],
        isReadyTemplate: true,
        image: {
          src,
          alt: `Mẫu website ${occupation}`,
          width: preview?.width,
          height: preview?.height,
        },
      });
    }
  }

  return items;
}

export const productsPageContent = {
  heading: "Mẫu giao diện website",
  tagline: "Đa dạng ngành nghề — chọn mẫu phù hợp và đăng ký triển khai",
  /** Dòng phụ trên banner — bổ sung ngữ cảnh catalog mẫu. */
  description:
    "Giao diện hiện đại, chuẩn SEO, dễ vận hành trên mọi thiết bị. Chọn mẫu sẵn — bàn giao chỉ 3–5 ngày.",
  highlights: ["10 nhóm ngành", "Chuẩn SEO", "Bàn giao 3–5 ngày"],
  banner: {
    src: "/san-pham/banner/banner.webp",
    alt: "Mẫu giao diện website Nhà Web — không gian làm việc hiện đại",
    /** Ảnh gốc 1920×500 — hiển thị gọn (object-cover) để catalog còn trong viewport. */
    width: 1920,
    height: 500,
  },
  allFilterLabel: "Tất cả",
  emptyFilterMessage: "Chưa có mẫu trong nhóm ngành này.",
  registerHint: "Chọn mẫu để xem chi tiết và đăng ký triển khai",
  filters: industryGroups.map((group) => ({
    id: group.id,
    label: group.label,
  })),
  items: buildProductSamples(industryGroups),
};

export type TemplateFeatureIcon =
  | "devices"
  | "seo"
  | "admin"
  | "speed";

/**
 * Trang chi tiết mẫu `/san-pham/[slug]` (ref web4s.vn/thoitrang09).
 * Trái: preview + "Xem thực tế". Phải: 2 form viền cam (ref card luvini.vn).
 *
 * Tốc độ tải: ghi "dưới 2 giây" — ngưỡng LCP tốt của Google là < 2.5s;
 * "dưới 1 giây" trên mobile 4G không ổn định nên không dùng cho copy marketing.
 */
export const templateDetailContent = {
  liveViewLabel: "Xem thực tế",
  /** Fallback demo khi mẫu chưa có liveUrl riêng — swap khi có site thật */
  liveViewFallbackUrl: "https://luvini.vn/",
  consultLabel: "Đăng ký tư vấn",
  similarHeading: "Mẫu website tương tự",
  breadcrumbHome: "Trang chủ",
  breadcrumbCatalog: "Mẫu giao diện",
  form1TitlePrefix: "Mẫu Website",
  features: [
    {
      icon: "devices" as const,
      label: "Hiển thị tốt trên mọi thiết bị",
    },
    {
      icon: "seo" as const,
      label: "Giao diện hiện đại, chuẩn SEO",
    },
    {
      icon: "admin" as const,
      label: "Giao diện quản trị dễ sử dụng",
    },
    {
      icon: "speed" as const,
      label: "Tốc độ tải trang dưới 3 giây",
    },
  ] satisfies Array<{ icon: TemplateFeatureIcon; label: string }>,
  benefitsTitle: "Quyền lợi khi sở hữu website tại Nhà Web",
  readyHandover: "Thời gian bàn giao: 3–5 ngày",
  customHandover: "Thời gian bàn giao: 15–20 ngày (tùy độ phức tạp)",
  benefits: [
    "Bảo hành trọn đời website",
    "Bàn giao đầy đủ mã nguồn website",
    "Tặng thêm ngôn ngữ tiếng Anh",
    "Tặng SSL/HTTPS bảo mật",
    "Tặng gói gửi email: tối đa 20 mail/ngày đến địa chỉ email cá nhân",
    "Tặng thiết kế Hero Banner (số lượng tùy theo gói)",
    "Hỗ trợ nhập bài viết/sản phẩm (số lượng tùy theo gói)",
    "Mã nguồn sử dụng: Next.js, Tailwind CSS, Headless CMS",
  ],
};

export function productSampleHref(item: Pick<ProductSampleItem, "id">) {
  return `/san-pham/${item.id}`;
}

export function getProductSampleById(
  id: string,
): ProductSampleItem | undefined {
  return productsPageContent.items.find((item) => item.id === id);
}

export function getRelatedProductSamples(
  item: ProductSampleItem,
  limit = 8,
): ProductSampleItem[] {
  const sameGroup = productsPageContent.items.filter(
    (candidate) =>
      candidate.groupId === item.groupId && candidate.id !== item.id,
  );
  if (sameGroup.length >= limit) return sameGroup.slice(0, limit);

  const others = productsPageContent.items.filter(
    (candidate) =>
      candidate.id !== item.id && candidate.groupId !== item.groupId,
  );
  return [...sameGroup, ...others].slice(0, limit);
}

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
 * Ảnh: `public/update/faq-nha-web.webp` (964×656).
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
    src: "/update/faq-nha-web.webp",
    alt: "Minh họa FAQ — giải pháp, chi phí, quy trình thiết kế website",
  },
  items: [
    {
      id: "faq-1",
      question:
        "Bảng giá thiết kế website chuyên nghiệp tại Nhà Web giá khoảng bao nhiêu?",
      answer:
        "Tại Nhà Web mức giá thiết kế website trọn gói thông thường sẽ là 4.000.000 ngoài ra bạn còn được thêm rất nhiều các quà tặng hấp dẫn như: tặng tên miền, tặng SSL... Trong trường hợp những website có nhiều yêu cầu phức tạp chúng tôi sẽ luôn đưa ra mức giá mà bạn cảm thấy hài lòng nhất.",
    },
    {
      id: "faq-2",
      question: "Thiết kế website có chuẩn SEO không?",
      answer:
        "Tất cả website đều chuẩn SEO là quá trình tạo dựng một trang web không chỉ đẹp mắt, thân thiện với người dùng mà còn được tối ưu hóa để các công cụ tìm kiếm như Google, Bing... dễ dàng hiểu và xếp hạng cao trong kết quả tìm kiếm. Điều này giúp website của bạn có khả năng tiếp cận được nhiều khách hàng tiềm năng hơn.",
    },
    {
      id: "faq-3",
      question:
        "Chi phí cho dịch vụ chăm sóc website thường dao động như thế nào?",
      answer:
        "Chi phí cho dịch vụ chăm sóc website tại Nhà Web được xác định dựa trên nhiều yếu tố. Chúng tôi cung cấp nhiều gói dịch vụ với mức giá linh hoạt, giúp khách hàng dễ dàng lựa chọn gói phù hợp với ngân sách và nhu cầu của mình.",
    },
    {
      id: "faq-4",
      question:
        "Khi thiết kế website trọn gói có đội ngũ hỗ trợ tôi trong quá trình sử dụng không?",
      answer:
        "Chắc chắn là Có. Chúng tôi luôn có những đội ngũ chuyên gia giàu kinh nghiệm luôn túc trực qua các kênh như Zalo, Messenger, Hotline nếu bạn cần hỗ trợ gì hãy liên hệ với chúng tôi qua những kênh trên nhé.",
    },
    {
      id: "faq-5",
      question:
        "Nhà Web có hỗ trợ hướng dẫn hoặc nhập liệu bài viết chuẩn SEO lên cho khách được không?",
      answer:
        "Sau khi hoàn thành website, Nhà Web sẽ hướng dẫn khách hàng nhập liệu bài viết chuẩn SEO thông qua giao diện quản trị mà chúng tôi thiết kế người không rành về công nghệ cũng có thể làm được.",
    },
  ] satisfies FaqItem[],
};

/**
 * Section 6 — ảnh infographic quy trình full-width (không chia text / image).
 * Desktop: `public/update/quy-trinh-5-buoc.webp` (1920×902).
 * Mobile: `public/process/5-step-mobile.png` (864×1821).
 */
export const processImagesContent = {
  heading: "Quy trình 5 bước",
  image: {
    src: "/update/quy-trinh-5-buoc.webp",
    alt: "Quy trình 5 bước Nhà Web — tiếp nhận yêu cầu, lập kế hoạch, thiết kế & xây dựng, kiểm thử & tối ưu, nghiệm thu bàn giao",
    width: 1920,
    height: 902,
  },
  imageMobile: {
    src: "/process/5-step-mobile.png",
    alt: "Quy trình 5 bước Nhà Web — tiếp nhận yêu cầu, lập kế hoạch, thiết kế & xây dựng, kiểm thử & tối ưu, nghiệm thu bàn giao",
    width: 864,
    height: 1821,
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
  /** Khi có — pill điều hướng tới trang dịch vụ thay vì mở form đăng ký. */
  href?: string;
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
      href: "/thiet-ke-website",
    },
    {
      id: "thiet-ke-landing-page",
      label: "Thiết kế Landing page",
      icon: "landing",
      href: "/thiet-ke-landing-page",
    },
    {
      id: "thiet-ke-nhan-dien",
      label: "Thiết kế nhận diện thương hiệu",
      icon: "branding",
      href: "/thiet-ke-nhan-dien-thuong-hieu",
    },
    {
      id: "thiet-ke-tron-goi",
      label: "Thiết kế website trọn gói",
      icon: "fullpackage",
      href: "/thiet-ke-website-tron-goi",
    },
    {
      id: "cham-soc-website",
      label: "Chăm sóc website",
      icon: "care",
      href: "/cham-soc-website",
    },
  ] satisfies PremiumServiceItem[],
};

/**
 * Shared contact form (Form 7 "Đăng ký tư vấn" + Form 8 "Đăng ký ngay").
 * Dùng qua `ContactFormModal` với `variant`: "consult" | "register".
 * TODO: swap `image` khi có ảnh Nhà Web thật.
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
      src: "/support/bot-remove-bg.png",
      alt: "Bot hỗ trợ đăng ký website Nhà Web",
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

/**
 * Trang Thiết kế website theo yêu cầu (`/thiet-ke-website-theo-yeu-cau`).
 * Bố cục ref web4s.vn/thiet-ke-website-theo-yeu-cau; hero/FAQ/why/process tái dùng pattern trang chủ.
 * Ảnh minh họa: `public/services/thiet-ke-website-theo-yeu-cau.webp.png` (swap khi có bản final).
 */
export const customWebsiteHeroContent = {
  headline: "Thiết Kế Website Theo Yêu Cầu, Độc Quyền Giao Diện",
  bullets: [
    "Thiết kế độc quyền theo thương hiệu",
    "Tùy chỉnh tính năng linh hoạt",
    "Tối ưu trải nghiệm người dùng",
    "Dễ dàng mở rộng trong tương lai",
    "Chủ động về công nghệ & hiệu suất",
  ],
  ctaLabel: "Đăng ký ngay",
  ctaHref: "/#lien-he",
  autoplayMs: 5000,
  banners: [
    {
      src: "/hero/hero-banner-1.webp.png",
      alt: "Thiết kế website theo yêu cầu — Nhà Web",
    },
    {
      src: "/hero/hero-banner-2.webp.png",
      alt: "Dịch vụ thiết kế website độc quyền — Nhà Web",
    },
  ],
};

export const customWebsiteIntroContent = {
  id: "ban-biet-gi",
  heading: "Bạn biết gì về thiết kế website theo yêu cầu?",
  intro:
    "Thiết kế website theo yêu cầu là dựa vào nhu cầu, sở thích riêng biệt của mỗi khách hàng về website mà từ đó chúng tôi sẽ xây dựng một trang web đúng như họ mong muốn. Đây được xem là một loại hình dịch vụ được sử dụng khá phổ biến hiện nay, giúp doanh nghiệp sở hữu một giao diện hoàn chỉnh và độc nhất cho thương hiệu của mình.",
  highlightTitle:
    "Thiết kế web theo yêu cầu sẽ dễ dàng thu hút được sự chú ý của người dùng hơn bởi ý tưởng website đẹp – độc – lạ",
  points: [
    "Bạn là người luôn ưu thích sự khác biệt, có nhiều ý tưởng mới lạ và không muốn tuân theo bất kỳ một khuôn mẫu hay nguyên tắc nào về thiết kế website.",
    "Bạn cần tích hợp nhiều yếu tố vào trong hệ thống trang web của mình và có những yêu cầu riêng biệt mà một mẫu web sẵn không thể đáp ứng.",
    "Bạn mong muốn được thoải mái sáng tạo và thể hiện phong cách của riêng mình giúp sản phẩm trở nên hoàn hảo và độc đáo nhất.",
  ],
  note: "Tuy nhiên, do tính chất trang website được thiết kế riêng dựa trên yêu cầu của khách hàng, vậy nên cần có thời gian bàn bạc và thống nhất, lên kế hoạch cụ thể cho từng thành phần của website.",
  image: {
    src: "/services/thiet-ke-website-theo-yeu-cau.webp.png",
    alt: "Thiết kế website theo yêu cầu — giao diện độc quyền Nhà Web",
  },
};

export const customWebsiteCostContent = {
  id: "chi-phi",
  heading: "Chi phí làm website theo yêu cầu có cao không?",
  body: "Chi phí thiết kế web theo yêu cầu chắc chắn sẽ cao hơn so với thiết kế theo mẫu giao diện web đã có sẵn (tùy theo mức độ thiết kế đơn giản hay phức tạp). Tuy nhiên, việc xây dựng một website theo yêu cầu sẽ giúp bạn sở hữu ngay một trang web độc đáo, “có 1 không 2” và mang phong cách riêng của mình giúp khách hàng dễ dàng ghi nhớ thương hiệu của bạn hơn.",
};

export const customWebsiteDetailsContent = {
  id: "thong-tin-chi-tiet",
  heading:
    "Thông tin chi tiết dịch vụ thiết kế website theo yêu cầu tại Nhà Web",
  items: [
    "Tất cả các gói thiết kế website của Nhà Web bao gồm tính năng và nội dung website, tùy vào gói dịch vụ khách hàng lựa chọn mà bạn sẽ được tặng thêm tên miền quốc tế, banner, Google Maps, công cụ hỗ trợ SEO để chạy quảng cáo.",
    "Chi phí: Khi Nhà Web nắm bắt được ý tưởng và yêu cầu của khách hàng, chúng tôi sẽ gửi bảng giá thiết kế website theo yêu cầu phù hợp nhằm tiết kiệm chi phí tối đa nhất cho khách hàng.",
    "Các module cơ bản được tích hợp trên website: Trang chủ, Giới thiệu, Sản phẩm, Dịch vụ, Tin tức, Đối tác, Tuyển dụng, Liên hệ,… Tuy nhiên, phụ thuộc vào lĩnh vực kinh doanh và nhu cầu mà khách hàng có thể tạo web theo yêu cầu với những tính năng riêng để phục vụ mục đích của mình.",
    "Thời gian hoàn thiện web đúng tiến độ trong hợp đồng, đảm bảo chất lượng.",
    "Chế độ bảo trì, chăm sóc khách hàng sau khi hoàn thiện Website vẫn tận tình, chu đáo.",
  ],
};

export const customWebsiteWhyChooseContent = {
  ...whyChooseContent,
  heading:
    "Tại sao bạn nên chọn dịch vụ thiết kế website theo yêu cầu tại Nhà Web?",
  subheading:
    "Nếu bạn đang khó khăn trong việc chưa biết lựa chọn một đơn vị thiết kế web theo yêu cầu giá cả phải chăng, chuyên nghiệp, vậy đến ngay với Nhà Web bạn sẽ hài lòng tuyệt đối bởi:",
};

export const customWebsiteProcessContent = {
  ...processStepsContent,
  heading: "Quy trình thiết kế website theo yêu cầu tại Nhà Web",
};

export const customWebsiteFaqContent = {
  heading:
    "Câu hỏi thường gặp về thiết kế website theo yêu cầu tại Nhà Web",
  image: faqContent.image,
  items: [
    {
      id: "cyw-faq-1",
      question: "Thiết kế website theo yêu cầu là gì?",
      answer:
        "Thiết kế website theo yêu cầu là thiết kế một website theo mong muốn để phù hợp với cá tính cũng như sở thích của người sở hữu chúng. Cá nhân hay một chủ doanh nghiệp đầy ắp các ý tưởng độc đáo, bạn mong muốn sở hữu được một website mang đậm chất riêng của mình, vậy tạo website theo yêu cầu sẽ là lựa chọn thích hợp dành cho bạn.",
    },
    {
      id: "cyw-faq-2",
      question: "Tôi được yêu cầu những gì khi làm website theo yêu cầu?",
      answer:
        "Bạn có thể yêu cầu chọn tên miền/ hạ tầng máy chủ lưu trữ phù hợp; yêu cầu thiết kế giao diện web theo ý tưởng của mình; yêu cầu sắp xếp bố cục, vị trí các module; yêu cầu tích hợp thêm hoặc bỏ bớt tính năng không cần thiết để đảm bảo đúng mục đích sử dụng web.",
    },
    {
      id: "cyw-faq-3",
      question:
        "Chi phí đầu tư cho một website thiết kế riêng theo yêu cầu có cao không?",
      answer:
        "Chi phí thiết kế web theo yêu cầu chắc chắn sẽ cao hơn so với thiết kế theo mẫu giao diện web đã có sẵn (tùy theo mức độ thiết kế đơn giản hay phức tạp). Nhưng bạn hoàn toàn yên tâm bởi chi phí đầu tư tương xứng với chất lượng, bạn sẽ sở hữu một website độc nhất vô nhị, theo đúng mong muốn của bản thân.",
    },
    {
      id: "cyw-faq-4",
      question: "Tôi sẽ nhận được web sau bao nhiêu ngày?",
      answer:
        "Phụ thuộc vào yêu cầu của khách hàng, độ phức tạp của website mà thời gian tạo web sẽ dao động từ 20 đến 30 ngày.",
    },
    {
      id: "cyw-faq-5",
      question:
        "Tôi chưa có ý tưởng gì cho giao diện web, vậy có tạo website được không?",
      answer:
        "Hoàn toàn được, nếu bạn chưa có ý tưởng thiết kế giao diện hay chưa lựa chọn được màu sắc web, đội ngũ Nhà Web sẽ tư vấn giao diện/ màu sắc phù hợp với nhu cầu, lĩnh vực kinh doanh của bạn.",
    },
    {
      id: "cyw-faq-6",
      question: "Tôi có thể tự chỉnh sửa/ cập nhật thông tin lên web không?",
      answer:
        "Chắc chắn là được. Khi thiết kế website tại Nhà Web, khách hàng sẽ được cung cấp một tài khoản quản trị admin để chủ động cập nhật nội dung/ chỉnh sửa theo mong muốn của mình.",
    },
  ] satisfies FaqItem[],
};
