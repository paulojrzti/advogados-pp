import { cleanString, postToCrmWebhook } from "@/lib/crm";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const email = cleanString(body?.email);

  if (!email) {
    return Response.json({ error: "E-mail é obrigatório." }, { status: 400 });
  }

  return postToCrmWebhook("cases", {
    email,
    nome: cleanString(body?.nome),
  });
}
