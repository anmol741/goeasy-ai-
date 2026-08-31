export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
};

export async function submitLead(payload: LeadPayload): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error(
      "NEXT_PUBLIC_LEAD_WEBHOOK_URL is not set — confirm the GoEasyAI CRM automation ID before going live."
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Lead webhook responded with ${response.status}`);
  }
}
