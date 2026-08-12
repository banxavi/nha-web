import type { Metadata } from "next";
import { ServicePagePlaceholder } from "@/components/sections/ServicePagePlaceholder";

export const metadata: Metadata = {
  title: "Thiết kế Landing page | Nhà Web",
  description:
    "Dịch vụ thiết kế Landing page tại Nhà Web — nội dung đang được cập nhật.",
};

export default function ThietKeLandingPagePage() {
  return <ServicePagePlaceholder title="Thiết kế Landing page" />;
}
