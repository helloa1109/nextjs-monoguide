"use client";

import { Button } from "@chat/ui";

interface SidebarProps {
  activeTab: string;
  onSelect: (tab: string) => void;
}

export function Sidebar({ activeTab, onSelect }: SidebarProps) {
  return (
    <aside className="w-64 border-r border-zinc-800 flex flex-col justify-between bg-zinc-950">
      {/* 상단 탭 목록 */}
      <div>
        {["임시1", "임시2"].map((tab) => (
          <div
            key={tab}
            onClick={() => onSelect(tab)}
            className={`p-4 cursor-pointer hover:bg-zinc-800 ${
              activeTab === tab ? "bg-zinc-800 font-semibold" : ""
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* 하단 로그인/회원가입 버튼 */}
      <div className="p-4 border-t border-zinc-800 space-y-2">
        <Button variant="outline" className="w-full">
          로그인
        </Button>
        <Button variant="secondary" className="w-full">
          회원가입
        </Button>
      </div>
    </aside>
  );
}