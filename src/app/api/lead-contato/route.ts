import { cleanString, postToCrmWebhook } from "@/lib/crm";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nome = cleanString(body?.nome);
  const whatsapp = cleanString(body?.whatsapp);

  if (!nome || !whatsapp) {
    return Response.json({ error: "Nome e WhatsApp são obrigatórios." }, { status: 400 });
  }

  return postToCrmWebhook("contato", {
    nome,
    whatsapp,
    email: cleanString(body?.email),
    instagram: cleanString(body?.instagram),
    faturamento_mensal: cleanString(body?.faturamento_mensal),
  });
}
