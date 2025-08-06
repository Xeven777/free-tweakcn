import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface AIGenerateButtonProps {
  onClick: () => void;
}

export function AIGenerateButton({ onClick }: AIGenerateButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClick}
          className="text-muted-foreground hover:text-foreground hover:bg-accent/50 h-8 gap-1.5 px-2"
        >
          <Sparkles className="size-3.5" />
          <span className="animate-text from-muted-foreground/80 via-foreground to-muted-foreground hidden bg-gradient-to-r bg-[200%_auto] bg-clip-text text-sm text-transparent md:block">
            Generate
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Generate theme with AI</TooltipContent>
    </Tooltip>
  );
}
