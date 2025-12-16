import * as React from "react";

import { cn } from "@/app/_lib/utils";

function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[100px] w-full rounded-lg border border-input bg-transparent px-4 py-3 text-base shadow-xs transition-colors",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "md:text-sm",
        "resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

