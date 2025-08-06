import { authClient } from "@/lib/auth-client";
import { useAuthStore } from "@/store/auth-store";
import { PostLoginActionType } from "./use-post-login-action";

export function useGuards() {
  const { checkValidSession } = useSessionGuard();
  const { checkValidSubscription } = useSubscriptionGuard();

  return {
    checkValidSession,
    checkValidSubscription,
  };
}

export function useSessionGuard() {
  const { data: session } = authClient.useSession();
  const { openAuthDialog } = useAuthStore();

  const checkValidSession = (
    mode: "signin" | "signup" = "signin",
    postLoginActionType?: PostLoginActionType,
    postLoginActionData?: unknown
  ) => {
    if (!session) {
      openAuthDialog(mode, postLoginActionType, postLoginActionData);
      return false;
    }

    return true;
  };

  return {
    checkValidSession,
  };
}

export function useSubscriptionGuard() {
  const checkValidSubscription = () => {
    return true; // Always allow access - no subscription required
  };

  return {
    checkValidSubscription,
  };
}
