import type { Metadata } from "next";
import { ProductsCatalogSection } from "@/components/sections/ProductsCatalogSection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sản phẩm — Mẫu giao diện | Nhà Web",
  description:
    "Kho mẫu giao diện website Nhà Web theo 10 nhóm ngành nghề. Chọn mẫu phù hợp và đăng ký triển khai chuẩn SEO.",
};

export default function SanPhamPage() {
  return (
    <Reveal>
      <ProductsCatalogSection />
    </Reveal>
  );
}
