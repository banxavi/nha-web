type ServicePagePlaceholderProps = {
  title: string;
  description?: string;
};

/**
 * Placeholder tạm cho trang dịch vụ — thay bằng nội dung đầy đủ sau.
 */
export function ServicePagePlaceholder({
  title,
  description = "Nội dung trang đang được cập nhật. Vui lòng quay lại sau hoặc liên hệ Nhà Web để được tư vấn.",
}: ServicePagePlaceholderProps) {
  return (
    <section className="scroll-mt-24 bg-bg-primary">
      <div className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-foreground/70 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
