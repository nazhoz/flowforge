# FlowForge

FlowForge is a modern, intuitive web application for visually building and managing chatbot conversation flows. Using a drag-and-drop interface, users can create complex and interactive chatbot experiences with ease.

## Tech Stack

This project is built with a modern, component-based architecture:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Flow Canvas**: [React Flow](https://reactflow.dev/)
- **AI Integration**: [Genkit (Firebase AI)](https://firebase.google.com/docs/genkit)

## Features

- **Visual Flow Builder**: A drag-and-drop canvas to design conversation flows.
- **Node-Based System**: Create different types of nodes, like sending a message, to build the chatbot's logic.
- **Customizable Nodes**: Easily edit the content and properties of each node through a settings panel.
- **Connection Validation**: Ensures that the created flow is valid before saving.
- **Responsive Design**: A clean and modern interface that works on all screen sizes.

## Getting Started

To run the project locally, follow these steps:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## Project Structure

- `src/app/page.tsx`: The main entry point and homepage of the application.
- `src/components/`: Contains all the reusable React components.
  - `ui/`: Auto-generated Shadcn UI components.
  - `flow/`: Components related to the React Flow canvas, including custom nodes.
  - `panels/`: The side panels for adding new nodes and editing selected nodes.
- `src/ai/`: Contains Genkit flows for integrating generative AI capabilities.
- `src/lib/`: Utility functions.
- `src/hooks/`: Custom React hooks.