# Next.js Monorepo 템플릿

> Turborepo + pnpm을 활용한 확장 가능한 Next.js 모노레포 템플릿
> 모노레포 구조 이해하기 위한 [템플릿 노션](https://sour-rainforest-ad6.notion.site/nextjs-turborep-pnpm-29e1940e16a480ce88f5c9b30d2fe04c)

## 📚 목차

- [소개](#소개)
- [주요 특징](#주요-특징)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [주요 명령어](#주요-명령어)
- [패키지 설명](#패키지-설명)
- [개발 가이드](#개발-가이드)
- [배포](#배포)

## 🎯 소개

이 템플릿은 여러 Next.js 애플리케이션과 공유 패키지를 효율적으로 관리할 수 있는 모노레포 구조입니다. Turborepo의 강력한 캐싱과 병렬 처리 기능으로 빠른 빌드 환경을 제공합니다.

## ✨ 주요 특징

- **🚀 Turborepo**: 빠른 빌드와 효율적인 캐싱
- **📦 pnpm Workspace**: 효율적인 의존성 관리
- **⚛️ Next.js 14**: 최신 React 프레임워크
- **🎨 Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **📝 TypeScript**: 타입 안전성 보장
- **🔍 ESLint + Prettier**: 일관된 코드 스타일
- **🧩 shadcn/ui**: 고품질 UI 컴포넌트 라이브러리

## 📂 프로젝트 구조

```
nextjs-monoguide/
├── apps/
│   └── web/                 # 메인 Next.js 애플리케이션
│       ├── app/            # App Router
│       ├── src/            # 소스 코드
│       └── package.json    # 앱 전용 의존성
│
├── packages/
│   ├── ui/                 # 공유 UI 컴포넌트 (@chat/ui)
│   │   ├── src/
│   │   │   ├── components/ # Button, Input 등
│   │   │   ├── lib/       # 유틸리티 함수
│   │   │   └── index.ts   # Export
│   │   └── package.json
│   │
│   ├── eslint-config/      # 공유 ESLint 설정
│   └── typescript-config/  # 공유 TypeScript 설정
│
├── package.json            # 루트 설정
├── pnpm-workspace.yaml     # pnpm workspace 설정
├── turbo.json              # Turborepo 설정
└── README.md
```

## 🚀 시작하기

### 필수 요구사항

- **Node.js**: 18 이상
- **pnpm**: 9.0.0 이상

### 설치

```bash
# 저장소 클론
git clone https://github.com/helloa1109/nextjs-monoguide.git
cd nextjs-monoguide

# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# 모든 앱 동시 실행
pnpm dev

# 특정 앱만 실행
pnpm dev --filter=web
```

웹 앱은 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 🛠 주요 명령어

### 개발

```bash
pnpm dev              # 개발 서버 시작
pnpm build            # 프로덕션 빌드
pnpm start            # 프로덕션 서버 시작
```

### 코드 품질

```bash
pnpm lint             # 린트 검사
pnpm format           # 코드 포맷팅
pnpm format:check     # 포맷팅 확인
pnpm type-check       # 타입 체크
```

### 정리

```bash
pnpm clean            # 빌드 캐시 정리
```

## 📦 패키지 설명

### `@chat/ui`

공유 UI 컴포넌트 라이브러리입니다.

**포함된 컴포넌트:**
- `Button`: 다양한 variant와 size 지원
- `Input`: 커스텀 스타일 적용된 입력 필드

**사용 예시:**

```tsx
import { Button, Input } from "@chat/ui";

export default function Page() {
  return (
    <div>
      <Button variant="default">클릭하세요</Button>
      <Input placeholder="이메일을 입력하세요" type="email" />
    </div>
  );
}
```

### `@repo/eslint-config`

공유 ESLint 설정입니다.

- `base`: 기본 설정
- `next-js`: Next.js 앱용 설정
- `react-internal`: React 컴포넌트 라이브러리용 설정

### `@repo/typescript-config`

공유 TypeScript 설정입니다.

- `base.json`: 기본 설정
- `nextjs.json`: Next.js용 설정
- `react-library.json`: React 라이브러리용 설정

## 💻 개발 가이드

### 새로운 컴포넌트 추가하기

1. **UI 컴포넌트 생성**

```bash
# packages/ui/src/components/card.tsx
"use client";

import * as React from "react";
import { cn } from "../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          className
        )}
        {...props}
      >
        {title && <h3 className="font-semibold">{title}</h3>}
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
```

2. **Export 추가**

```typescript
// packages/ui/src/index.ts
export * from "./components/button";
export * from "./components/input";
export * from "./components/card"; // 추가
```

3. **앱에서 사용**

```tsx
// apps/web/app/page.tsx
import { Card } from "@chat/ui";

export default function Home() {
  return <Card title="제목">내용</Card>;
}
```

### 새로운 앱 추가하기

```bash
# apps/ 디렉토리에 새 Next.js 앱 생성
cd apps
npx create-next-app@latest admin --typescript --tailwind --app
```

`package.json` 설정:

```json
{
  "name": "admin",
  "dependencies": {
    "@chat/ui": "workspace:*"
  },
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",
    "@repo/typescript-config": "workspace:*"
  }
}
```

### Tailwind CSS 설정

각 앱의 `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // UI 패키지 포함
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 커스텀 테마
    }
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

## 🚢 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 프로젝트 연결
2. Build Command: `pnpm build --filter=web`
3. Output Directory: `apps/web/.next`
4. Install Command: `pnpm install`

### 환경변수 설정

각 앱의 `.env.local` 파일:

```bash
# apps/web/.env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

## 📖 참고 자료

- [Turborepo 문서](https://turborepo.org/docs)
- [pnpm Workspace](https://pnpm.io/workspaces)
- [Next.js 문서](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)

## 👤 작성자

**helloa1109**

- GitHub: [@helloa1109](https://github.com/helloa1109)

---

⭐️ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!