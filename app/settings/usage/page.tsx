import { UsageStats } from "@/app/settings/components/usage-stats";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SettingsHeader } from "../components/settings-header";
import { Card, CardContent } from "@/components/ui/card";
import { Infinity } from "lucide-react";

export default async function UsagePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/editor/theme");

  return (
    <div className="space-y-6">
      <SettingsHeader title="AI Usage" description="Track your AI theme generation requests" />

      <Card>
        <CardContent className="pt-6">
          <div className="bg-primary/5 flex items-center gap-3 rounded-lg border p-4">
            <Infinity className="text-primary size-5" />
            <div>
              <p className="font-medium">Unlimited Usage</p>
              <p className="text-muted-foreground text-sm">
                All AI features are now completely free with no limits!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <UsageStats />
    </div>
  );
}
