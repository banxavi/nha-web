import Image from "next/image";
import { processStepsContent } from "@/lib/site-config";

/**
 * Section 2 — Quy trình 5 bước dạng hình tròn.
 * Background: ảnh abstract đen + đường sóng; tiêu đề trắng in đậm giữa;
 * 5 vòng pastel theo sóng + mô tả dưới mỗi bước.
 */
export function ProcessSection() {
  const { heading, steps } = processStepsContent;

  return (
    <section
      id="quy-trinh"
      aria-labelledby="process-heading"
      className="relative scroll-mt-24 overflow-hidden text-black"
    >
      <Image
        src="/process/section2-bg.png"
        alt=""
        fill
        priority={false}
        className="object-contain object-center"
        sizes="100vw"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2
          id="process-heading"
          className="text-center text-2xl font-bold uppercase tracking-wide sm:text-3xl"
        >
          {heading}
        </h2>

        {/* Desktop / tablet: wave of circles */}
        <ol className="relative mx-auto mt-12 hidden max-w-7xl grid-cols-5 gap-3 md:grid lg:gap-6">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className="flex flex-col items-center text-center"
              style={{ marginTop: waveOffset(index) }}
            >
              <StepCircle
                step={step.step}
                className={step.circleClassName}
                size="lg"
              />
              <p className="mt-5 text-sm font-bold uppercase tracking-wide lg:text-base">
                {step.title}
              </p>
              <p className="mt-2 max-w-[11.5rem] text-xs font-bold uppercase leading-relaxed tracking-wide text-black/70 lg:text-sm">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Mobile: stacked steps */}
        <ol className="mt-10 space-y-8 md:hidden">
          {steps.map((step) => (
            <li key={step.id} className="flex flex-col items-center text-center">
              <StepCircle
                step={step.step}
                className={step.circleClassName}
                size="md"
              />
              <p className="mt-4 text-base font-bold uppercase tracking-wide">
                {step.title}
              </p>
              <p className="mt-2 max-w-sm text-sm font-bold uppercase leading-relaxed tracking-wide text-black/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function waveOffset(index: number): string {
  const offsets = ["2.5rem", "0", "1.75rem", "0.25rem", "2.25rem"];
  return offsets[index] ?? "0";
}

function StepCircle({
  step,
  className,
  size,
}: {
  step: number;
  className: string;
  size: "md" | "lg";
}) {
  const dim =
    size === "lg"
      ? "h-[5.5rem] w-[5.5rem] text-2xl lg:h-28 lg:w-28 lg:text-3xl"
      : "h-20 w-20 text-2xl";

  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold shadow-[0_8px_28px_rgba(0,0,0,0.35)] ring-1 ring-white/15 ${dim} ${className}`}
      aria-hidden
    >
      {String(step).padStart(2, "0")}
    </div>
  );
}
