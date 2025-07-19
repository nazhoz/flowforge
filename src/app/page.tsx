"use client";

import { useState, useCallback } from "react";
import type { Node, Edge } from "reactflow";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { FlowBuilder } from "@/components/flow/FlowBuilder";
import { NodesPanel } from "@/components/panels/NodesPanel";
import { SettingsPanel } from "@/components/panels/SettingsPanel";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "textNode",
    position: { x: 250, y: 150 },
    data: { label: "Welcome to FlowForge!" },
  },
];

export default function Home() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const { toast } = useToast();

  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  const handlePaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const handleNodeDataChange = useCallback(
    (nodeId: string, data: any) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === nodeId) {
            // Create a new data object to ensure React detects the change
            node.data = { ...node.data, ...data };
          }
          return node;
        })
      );
      // Also update the selected node to reflect changes immediately in the panel
      if (selectedNode && selectedNode.id === nodeId) {
        setSelectedNode(prevNode => prevNode ? { ...prevNode, data: { ...prevNode.data, ...data } } : null);
      }
    },
    [setNodes, selectedNode]
  );

  const handleSave = () => {
    if (nodes.length <= 1) {
      toast({
        title: "Success",
        description: "Flow saved successfully!",
      });
      console.log("Flow saved:", { nodes, edges });
      return;
    }

    const targetNodes = new Set(edges.map((edge) => edge.target));
    const nodesWithEmptyTargets = nodes.filter(
      (node) => !targetNodes.has(node.id)
    );

    if (nodesWithEmptyTargets.length > 1) {
      toast({
        variant: "destructive",
        title: "Error: Invalid Flow",
        description:
          "More than one node has an empty target handle. Please connect them.",
      });
    } else {
      toast({
        title: "Success",
        description: "Flow saved successfully!",
      });
      console.log("Flow saved:", { nodes, edges });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground font-body">
      <Header onSave={handleSave} />
      <main className="flex flex-1 overflow-hidden">
        <div className="flex-1 h-full">
          <FlowBuilder
            nodes={nodes}
            setNodes={setNodes}
            edges={edges}
            setEdges={setEdges}
            onNodeClick={handleNodeClick}
            onPaneClick={handlePaneClick}
          />
        </div>
        {selectedNode ? (
          <SettingsPanel
            selectedNode={selectedNode}
            onNodeDataChange={handleNodeDataChange}
            onBack={() => setSelectedNode(null)}
          />
        ) : (
          <NodesPanel />
        )}
      </main>
    </div>
  );
}
