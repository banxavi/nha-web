import type { Metadata } from "next";
import { ServicePagePlaceholder } from "@/components/sections/ServicePagePlaceholder";

export const metadata: Metadata = {
  title: "Thiết kế website | Nhà Web",
  description:
    "Dịch vụ thiết kế website chuyên nghiệp tại Nhà Web — nội dung đang được cập nhật.",
};

export default function ThietKeWebsitePage() {
  return <ServicePagePlaceholder title="Thiết kế website" />;
}
