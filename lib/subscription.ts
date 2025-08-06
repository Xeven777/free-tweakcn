"use server";

import { NextRequest } from "next/server";

/**
 * Stub function: All users have unlimited access.
 */
export async function validateSubscriptionAndUsage(_userId: string): Promise<{
  canProceed: boolean;
  isSubscribed: boolean;
  requestsUsed: number;
  requestsRemaining: number;
}> {
  return {
    canProceed: true,
    isSubscribed: true,
    requestsUsed: 0,
    requestsRemaining: Infinity,
  };
}

/**
 * Stub function: No subscription required for free usage.
 */
export async function requireSubscriptionOrFreeUsage(_req: NextRequest): Promise<void> {
  // No-op: always allow
}
