"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button,Input } from "@chat/ui";

export default function Page() {
  const [activeTab, setActiveTab] = useState("임시1");

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* 사이드바 */}
      <div className="w-64 border-r border-zinc-800 p-4">
        <Sidebar activeTab={activeTab} onSelect={setActiveTab} />
      </div>

      {/* 메인 미리보기 영역 */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-10 py-20">
        <h1 className="text-3xl font-bold text-zinc-100 mb-6">🎨 Component Sample</h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button appName="web">Default</Button>
          <Button appName="web" variant="secondary">Secondary</Button>
          <Button appName="web" variant="outline">Outline</Button>
          <Button appName="web" variant="ghost">Ghost</Button>
          <Button appName="web" variant="destructive">Destructive</Button>
        </div>

        {/* Size variations */}
        <div className="flex gap-4 justify-center">
          <Button appName="web" size="lg" variant="default">
            Large Button
          </Button>
          <Button appName="web" size="sm" variant="secondary">
            Small Button
          </Button>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3 w-80 mt-6">
          <Input placeholder="이메일을 입력하세요" type="email" />
          <Input placeholder="비밀번호를 입력하세요" type="password" />
        </div>
      </div>
    </div>
  );
}
