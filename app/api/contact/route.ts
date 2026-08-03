import { NextResponse } from "next/server";

type ContactPayload = {
  variant?: "consult" | "register";
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  selectedSample?: string;
};

function normalizePhone(value: string) {
  return value.replace(/[\s.\-]/g, "");
}

/**
 * Stub nhận lead form (consult / register).
 * TODO: gửi email tới nhaweb.vn@gmail.com (Resend / Nodemailer / form service).
 * Khi có selectedSample (Form 8), kèm tên mẫu vào nội dung mail.
 */
export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Payload không hợp lệ." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const phone = normalizePhone(body.phone ?? "");
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const variant = body.variant === "consult" ? "consult" : "register";
  const selectedSample = body.selectedSample?.trim() || undefined;

  if (!name) {
    return NextResponse.json({ error: "Thiếu tên." }, { status: 400 });
  }
  if (!/^0\d{9}$/.test(phone)) {
    return NextResponse.json(
      { error: "Số điện thoại không hợp lệ." },
      { status: 400 },
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email không hợp lệ." }, { status: 400 });
  }

  // Placeholder — log payload until mail provider is chosen
  console.info("[contact]", {
    variant,
    name,
    phone,
    email: email || null,
    message: message || null,
    selectedSample: selectedSample ?? null,
    to: "nhaweb.vn@gmail.com",
  });

  return NextResponse.json({ ok: true });
}
