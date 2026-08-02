/**
 * Site-wide nav + contact + footer copy.
 * Swap values here without editing layout components.
 *
 * TODO (Task 2.2 / Section 9): thay nội dung Footer bằng sheet "Trang chủ" item #9–#14
 * khi khách export text từ sheet.
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

export const siteContact = {
  /** TODO: số thật từ sheet / khách */
  phoneDisplay: "0900 000 000",
  phoneTel: "0900000000",
  /** TODO: link Zalo OA / số Zalo thật */
  zaloUrl: "https://zalo.me/0900000000",
  email: "lienhe@nhaweb.vn",
};

export const navItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Dịch vụ",
    href: "/#dich-vu",
    children: [
      { label: "Thiết kế website", href: "/#dich-vu" },
      { label: "Website chuẩn SEO", href: "/#dich-vu" },
      { label: "Giao diện quản trị", href: "/#dich-vu" },
    ],
  },
  { label: "Quy trình", href: "/#quy-trinh" },
  {
    label: "Mẫu website",
    href: "/#mau-website",
    children: [
      { label: "Mẫu nổi bật", href: "/#mau-website" },
      { label: "Tất cả mẫu", href: "/#mau-carousel" },
    ],
  },
  { label: "Tin tức", href: "/#tin-tuc" },
  { label: "Liên hệ", href: "/#lien-he" },
];

export const footerContent = {
  /**
   * TODO: paste nội dung sheet "Trang chủ" #9–#14 vào đây.
   * Hiện dùng placeholder để giữ layout — Section 9 sẽ fill đầy đủ.
   */
  about: {
    title: "Nhà Web",
    description:
      "TODO [#9]: Giới thiệu ngắn về Nhà Web — thay bằng nội dung sheet Trang chủ.",
  },
  columns: [
    {
      title: "Dịch vụ",
      /** TODO [#10] */
      links: [
        { label: "Thiết kế website", href: "/#dich-vu" },
        { label: "Website chuẩn SEO", href: "/#dich-vu" },
        { label: "Mẫu giao diện", href: "/#mau-website" },
      ],
    },
    {
      title: "Thông tin",
      /** TODO [#11] */
      links: [
        { label: "Quy trình làm việc", href: "/#quy-trinh" },
        { label: "Câu hỏi thường gặp", href: "/#faq" },
        { label: "Tin tức", href: "/#tin-tuc" },
      ],
    },
    {
      title: "Liên hệ",
      /** TODO [#12–#14]: địa chỉ, giờ làm việc, MXH… */
      links: [
        { label: `Hotline: ${siteContact.phoneDisplay}`, href: `tel:${siteContact.phoneTel}` },
        { label: siteContact.email, href: `mailto:${siteContact.email}` },
        { label: "TODO: Địa chỉ văn phòng", href: "/#lien-he" },
      ],
    },
  ],
  bottomNote:
    "TODO [#14]: Dòng pháp lý / MST / giấy phép kinh doanh từ sheet Trang chủ.",
  copyright: `© ${new Date().getFullYear()} Nhà Web. All rights reserved.`,
};

export const logoPath = "/logo/Nhà_Web_logo.webp";

/**
 * Section 1 — Hero (layout web4s.vn).
 * TODO: thay `image.src` bằng ảnh hero thật khi khách cung cấp.
 */
export const heroContent = {
  headline: "Dịch vụ thiết kế website chuyên nghiệp, uy tín, chuẩn SEO",
  promo: "Giảm giá lên tới 90% trong tháng này",
  promoHighlight: "90%",
  bullets: [
    "Thời gian triển khai 5–7 ngày",
    "Giao diện hiện đại & chuẩn SEO (PageSpeed >90 điểm)",
    "Hiển thị tốt trên mọi thiết bị",
    "Giao diện quản trị dễ sử dụng",
    "Sử dụng công nghệ hiện đại, bền vững",
    "Đội ngũ hỗ trợ chuyên nghiệp",
  ],
  priceLabel: "Chỉ từ",
  priceValue: "9.000",
  priceUnit: "đồng/ngày",
  ctaLabel: "Đăng ký ngay!",
  ctaHref: "/#lien-he",
  guarantee: "*Cam kết hoàn tiền nếu lỗi thuộc về chúng tôi!",
  image: {
    src: "/hero/section1-media.svg",
    alt: "Minh họa dịch vụ thiết kế website Nhà Web",
  },
};

/**
 * Section 3+4 gộp — heading (ref 99designs) + grid flexible kiểu MSN.
 * Desktop: lưới 5 cột; mỗi hàng đúng 4 item = 1 wide (span 2) + 3 small (span 1).
 * TODO: thay ảnh / title / href bằng mẫu website thật.
 */
export type SampleSize = "wide" | "small";

export type SampleItem = {
  id: string;
  title: string;
  category: string;
  href: string;
  image: { src: string; alt: string };
  /** wide = span 2 cột (item to); small = span 1 (item nhỏ) */
  size: SampleSize;
};

/** Mỗi hàng: đúng 4 item, đúng 1 item `wide`, tổng span = 5 */
export type SampleRow = [SampleItem, SampleItem, SampleItem, SampleItem];

export const websiteSamplesContent = {
  heading: "Mẫu website nổi bật",
  tagline: "Giao diện hiện đại, chuẩn SEO, đa dạng lĩnh vực",
  autoplayMs: 4000,
  itemsPerRow: 4 as const,
  /**
   * Mỗi page = nhiều hàng × 4 item.
   * Pattern wide xen kẽ như MSN: hàng chẵn wide lệch phải, hàng lẻ wide lệch trái.
   */
  pages: [
    [
      // Row 1: S S W S
      {
        id: "p1-1",
        title: "Website doanh nghiệp chuyên nghiệp",
        category: "Doanh nghiệp",
        href: "/#mau-website",
        image: { src: "/samples/sample-1.svg", alt: "Mẫu website doanh nghiệp" },
        size: "small",
      },
      {
        id: "p1-2",
        title: "Landing page bán hàng chuyển đổi cao",
        category: "Landing page",
        href: "/#mau-website",
        image: { src: "/samples/sample-2.svg", alt: "Mẫu landing page" },
        size: "small",
      },
      {
        id: "p1-3",
        title: "Website nhà hàng & F&B hiện đại",
        category: "Nhà hàng",
        href: "/#mau-website",
        image: { src: "/samples/sample-3.svg", alt: "Mẫu website nhà hàng" },
        size: "wide",
      },
      {
        id: "p1-4",
        title: "Cổng thông tin giáo dục",
        category: "Giáo dục",
        href: "/#mau-website",
        image: { src: "/samples/sample-4.svg", alt: "Mẫu website giáo dục" },
        size: "small",
      },
      // Row 2: W S S S
      {
        id: "p1-5",
        title: "Website bất động sản đa dự án",
        category: "Bất động sản",
        href: "/#mau-website",
        image: { src: "/samples/sample-5.svg", alt: "Mẫu website bất động sản" },
        size: "wide",
      },
      {
        id: "p1-6",
        title: "Shop thời trang online",
        category: "Thương mại",
        href: "/#mau-website",
        image: { src: "/samples/sample-6.svg", alt: "Mẫu shop thời trang" },
        size: "small",
      },
      {
        id: "p1-7",
        title: "Website phòng khám & y tế",
        category: "Y tế",
        href: "/#mau-website",
        image: { src: "/samples/sample-7.svg", alt: "Mẫu website y tế" },
        size: "small",
      },
      {
        id: "p1-8",
        title: "Website sự kiện & hội thảo",
        category: "Sự kiện",
        href: "/#mau-website",
        image: { src: "/samples/sample-8.svg", alt: "Mẫu website sự kiện" },
        size: "small",
      },
    ] satisfies SampleItem[],
    [
      // Row 1: S S W S
      {
        id: "p2-1",
        title: "Portfolio kiến trúc & nội thất",
        category: "Portfolio",
        href: "/#mau-website",
        image: { src: "/samples/sample-8.svg", alt: "Mẫu portfolio kiến trúc" },
        size: "small",
      },
      {
        id: "p2-2",
        title: "Website spa & làm đẹp",
        category: "Làm đẹp",
        href: "/#mau-website",
        image: { src: "/samples/sample-1.svg", alt: "Mẫu website spa" },
        size: "small",
      },
      {
        id: "p2-3",
        title: "Trang giới thiệu startup công nghệ",
        category: "Công nghệ",
        href: "/#mau-website",
        image: { src: "/samples/sample-2.svg", alt: "Mẫu website startup" },
        size: "wide",
      },
      {
        id: "p2-4",
        title: "Website du lịch & khách sạn",
        category: "Du lịch",
        href: "/#mau-website",
        image: { src: "/samples/sample-3.svg", alt: "Mẫu website du lịch" },
        size: "small",
      },
      // Row 2: W S S S
      {
        id: "p2-5",
        title: "Website luật & tư vấn",
        category: "Dịch vụ",
        href: "/#mau-website",
        image: { src: "/samples/sample-4.svg", alt: "Mẫu website luật" },
        size: "wide",
      },
      {
        id: "p2-6",
        title: "Cửa hàng điện máy đa ngành",
        category: "Thương mại",
        href: "/#mau-website",
        image: { src: "/samples/sample-5.svg", alt: "Mẫu cửa hàng điện máy" },
        size: "small",
      },
      {
        id: "p2-7",
        title: "Website gym & thể hình",
        category: "Thể thao",
        href: "/#mau-website",
        image: { src: "/samples/sample-6.svg", alt: "Mẫu website gym" },
        size: "small",
      },
      {
        id: "p2-8",
        title: "Blog nội dung & tạp chí online",
        category: "Truyền thông",
        href: "/#mau-website",
        image: { src: "/samples/sample-7.svg", alt: "Mẫu blog tạp chí" },
        size: "small",
      },
    ] satisfies SampleItem[],
  ],
};
