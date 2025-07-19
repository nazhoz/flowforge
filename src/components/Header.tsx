"use client";

import { Button } from "@/components/ui/button";

type HeaderProps = {
  onSave: () => void;
};

export function Header({ onSave }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-card border-b shadow-sm z-10">
      <div className="flex items-center gap-3">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <path
            d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7L12 12L22 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-xl font-bold text-foreground">FlowForge</h1>
      </div>
      <Button onClick={onSave} className="font-semibold">
        Save Flow
      </Button>
    </header>
  );
}
