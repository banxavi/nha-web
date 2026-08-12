import type { Metadata } from "next";
import { ServicePagePlaceholder } from "@/components/sections/ServicePagePlaceholder";

export const metadata: Metadata = {
  title: "Chăm sóc website | Nhà Web",
  description:
    "Dịch vụ chăm sóc website tại Nhà Web — nội dung đang được cập nhật.",
};

export default function ChamSocWebsitePage() {
  return <ServicePagePlaceholder title="Chăm sóc website" />;
}
