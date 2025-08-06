import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET(_req: NextRequest) {
  // No more subscription management - redirect to settings
  redirect("/settings");
}
