"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import type { Node } from "reactflow";

type SettingsPanelProps = {
  selectedNode: Node;
  onNodeDataChange: (nodeId: string, data: any) => void;
  onBack: () => void;
};

export function SettingsPanel({
  selectedNode,
  onNodeDataChange,
  onBack,
}: SettingsPanelProps) {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onNodeDataChange(selectedNode.id, { label: event.target.value });
  };

  return (
    <aside className="border-l bg-card w-80">
      <div className="flex items-center border-b p-2">
        <Button variant="ghost" size="icon" onClick={onBack} aria-label="Go back to nodes panel">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h3 className="text-lg font-semibold text-center flex-1 mr-8">
          Settings
        </h3>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <Label htmlFor="node-text" className="text-muted-foreground">
            Text
          </Label>
          <Textarea
            id="node-text"
            value={selectedNode.data.label}
            onChange={handleTextChange}
            rows={6}
            className="mt-1"
          />
        </div>
      </div>
    </aside>
  );
}
