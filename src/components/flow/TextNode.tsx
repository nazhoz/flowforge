"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";
import { Handle, Position, type NodeProps } from "reactflow";

export function TextNode({
  data,
  isConnectable,
  selected,
}: NodeProps<{ label: string }>) {
  return (
    <Card
      className={cn(
        "w-64 shadow-md border-2 border-transparent",
        selected && "border-primary shadow-lg"
      )}
    >
      <CardHeader className="bg-card p-2 rounded-t-lg flex flex-row items-center gap-2 space-y-0">
        <MessageSquare className="w-4 h-4 text-primary" />
        <CardTitle className="text-sm font-semibold text-foreground">
          Send Message
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 bg-card rounded-b-lg">
        <p className="text-sm text-muted-foreground whitespace-pre-wrap break-words">
          {data.label || "Text message"}
        </p>
      </CardContent>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className="!w-3 !h-3 !bg-primary"
      />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="!w-3 !h-3 !bg-primary"
      />
    </Card>
  );
}
