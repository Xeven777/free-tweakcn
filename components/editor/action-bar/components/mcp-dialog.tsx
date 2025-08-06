import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Check, Copy } from "lucide-react";
import TabsTriggerPill from "../../theme-preview/tabs-trigger-pill";

interface MCPDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mcpConfig = {
  mcpServers: {
    shadcn: {
      command: "npx",
      args: ["-y", "shadcn@canary", "registry:mcp"],
      env: {
        REGISTRY_URL: "https://free-tweakcn.vercel.app/r/themes/registry.json",
      },
    },
  },
};

export function MCPDialog({ open, onOpenChange }: MCPDialogProps) {
  const { hasCopied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = async (config: typeof mcpConfig) => {
    copyToClipboard(JSON.stringify(config, null, 2));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-6 overflow-hidden rounded-lg border p-0 py-6 shadow-lg sm:max-w-4xl">
        <DialogHeader className="px-6">
          <DialogTitle>Setup MCP</DialogTitle>
          <DialogDescription>
            Use the code below to configure the registry in your IDE.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6">
          <Tabs defaultValue="cursor" className="w-full">
            <TabsList className="bg-background text-muted-foreground mb-2 inline-flex w-fit items-center justify-center rounded-full px-0">
              <TabsTriggerPill value="cursor">Cursor</TabsTriggerPill>
              <TabsTriggerPill value="windsurf">Windsurf</TabsTriggerPill>
            </TabsList>

            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border">
              <div className="bg-muted/50 flex flex-none items-center justify-between border-b px-4 py-2">
                <TabsContent value="cursor" className="contents">
                  <p className="text-muted-foreground text-sm font-medium">
                    Copy and paste the code into{" "}
                    <span className="bg-muted text-foreground rounded-md px-1">
                      .cursor/mcp.json
                    </span>
                  </p>
                </TabsContent>
                <TabsContent value="windsurf" className="contents">
                  <p className="text-muted-foreground text-sm font-medium">
                    Copy and paste the code into{" "}
                    <span className="bg-muted text-foreground rounded-md px-1">
                      .codeium/windsurf/mcp_config.json
                    </span>
                  </p>
                </TabsContent>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopy(mcpConfig)}
                  className="h-8"
                  aria-label={hasCopied ? "Copied to clipboard" : "Copy to clipboard"}
                >
                  {hasCopied ? (
                    <>
                      <Check className="size-4" />
                      <span className="sr-only md:not-sr-only">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      <span className="sr-only md:not-sr-only">Copy</span>
                    </>
                  )}
                </Button>
              </div>

              <pre className="h-full p-4 text-sm">
                <code>{JSON.stringify(mcpConfig, null, 2)}</code>
              </pre>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
