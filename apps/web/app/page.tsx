import { Button, Input } from "@chat/ui";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-black">
      <Button appName="web">Default</Button>
      <Button appName="web" variant="secondary">Secondary</Button>
      <Button appName="web" variant="outline">Outline</Button>
      <Button appName="web" variant="ghost">Ghost</Button>
      <Button appName="web" variant="destructive">Destructive</Button>

      <Button appName="web" size="lg" variant="default">
        Large Button
      </Button>
      <Button appName="web" size="sm" variant="secondary">
        Small Button
      </Button>
      <Input placeholder="이메일을 입력하세요" type="email" />
      <Input placeholder="비밀번호를 입력하세요" type="password" />
    </div>
  );
}
