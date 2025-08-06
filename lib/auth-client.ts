"use client";

import { createAuthClient } from "better-auth/react";
import { oneTapClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL,
  plugins: [
    oneTapClient({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      autoSelect: false,
      cancelOnTapOutside: true,
      context: "signin",
      additionalOptions: {},
      promptOptions: {
        baseDelay: 2000,
        maxAttempts: 5,
      },
    }),
  ],
});
