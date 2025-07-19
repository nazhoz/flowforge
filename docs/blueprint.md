# **App Name**: FlowForge

## Core Features:

- Visual Flow Builder: Provides a drag-and-drop interface using React Flow for building chatbot flows.
- Text Node Creation: Allows users to add text nodes to the flow from a node panel.
- Extensible Nodes Panel: Displays available node types in a panel, designed to be extensible for future node types.
- Node Connection Management: Enables connecting nodes using edges, with source handles allowing one outgoing edge and target handles allowing multiple incoming edges.
- Node Settings Panel: Presents a settings panel when a node is selected, allowing users to edit the text content of the selected text node.
- Flow Validation and Saving: Validates the flow to ensure no more than one node has empty target handles before allowing the user to save it. Saves flow for later use.

## Style Guidelines:

- Primary color: HSL(210, 70%, 50%) - A vibrant blue (#3399FF) to represent clarity and flow.
- Background color: HSL(210, 20%, 95%) - A very light blue (#F0F8FF) to provide a calm, neutral backdrop.
- Accent color: HSL(180, 60%, 40%) - A turquoise (#33CCCC) to highlight interactive elements and indicate activity.
- Body and headline font: 'Inter', a sans-serif font providing a modern, machined look suitable for both headlines and body text.
- Use simple, outlined icons to represent different node types and actions within the flow builder.
- Maintain a clean and intuitive layout with clear visual hierarchy to facilitate ease of use.
- Incorporate subtle animations for node connections and panel transitions to enhance user engagement without being distracting.