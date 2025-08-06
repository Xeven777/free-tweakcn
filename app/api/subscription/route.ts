import { getCurrentUserId, logError } from "@/lib/shared";
import { SubscriptionStatus } from "@/types/subscription";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await getCurrentUserId(request); // Still validate auth but don't use the result

    // Always return unlimited access - no subscription required
    const response: SubscriptionStatus = {
      isSubscribed: true, // Treat everyone as subscribed
      requestsRemaining: Infinity,
      requestsUsed: 0,
    };

    return NextResponse.json(response);
  } catch (error) {
    logError(error as Error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
