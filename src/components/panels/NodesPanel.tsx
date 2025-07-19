"use client";

import { MessageSquare } from "lucide-react";

export function NodesPanel() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="border-l bg-card w-80 p-4">
      <h3 className="text-lg font-semibold text-center text-foreground mb-4">
        Nodes Panel
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-4">Drag and drop nodes to the canvas.</p>
      <div
        className="p-4 border-2 border-dashed border-primary bg-primary/10 rounded-lg cursor-grab flex flex-col items-center justify-center gap-2 text-primary hover:bg-primary/20 hover:text-primary-foreground transition-colors duration-200"
        onDragStart={(event) => onDragStart(event, "textNode")}
        draggable
      >
        <MessageSquare className="w-8 h-8" />
        <span className="font-semibold">Message</span>
      </div>
    </aside>
  );
}
