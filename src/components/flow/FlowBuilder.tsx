"use client";

import React, { useRef, useCallback, useMemo } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  type OnConnect,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

import { TextNode } from "./TextNode";

let id = 2;
const getId = () => `${id++}`;

type FlowCanvasProps = {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node<any, string | undefined>[]>>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge<any>[]>>;
  onNodeClick: (event: React.MouseEvent, node: Node) => void;
  onPaneClick: () => void;
};

function FlowCanvas({
  nodes,
  setNodes,
  edges,
  setEdges,
  onNodeClick,
  onPaneClick,
}: FlowCanvasProps) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { project, getEdges } = useReactFlow();

  const nodeTypes = useMemo(() => ({ textNode: TextNode }), []);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect: OnConnect = useCallback(
    (params) => {
      const existingEdges = getEdges().filter(
        (edge) => edge.source === params.source
      );
      if (existingEdges.length > 0) {
        console.warn("Source handle can only have one outgoing edge.");
        return;
      }
      setEdges((eds) =>
        addEdge(
          { ...params, animated: true, style: { stroke: "hsl(var(--primary))", strokeWidth: 2 } },
          eds
        )
      );
    },
    [setEdges, getEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (typeof type === "undefined" || !type) {
        return;
      }
      
      const position = project({
        x: event.clientX,
        y: event.clientY - 60, 
      });

      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `Text message` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [project, setNodes]
  );

  return (
    <div className="h-full w-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
        className="bg-background"
      >
        <Controls />
        <Background color="hsl(var(--border))" gap={16} />
      </ReactFlow>
    </div>
  );
}

export function FlowBuilder(props: FlowCanvasProps) {
  return (
    <ReactFlowProvider>
      <FlowCanvas {...props} />
    </ReactFlowProvider>
  );
}
