import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ras-sh/ui";
import { createFileRoute } from "@tanstack/react-router";
import packageJson from "../../package.json" with { type: "json" };

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-8 py-12 sm:space-y-16 md:py-20">
      <main className="space-y-16">
        <section>
          <div className="mb-4 flex items-center gap-2">
            <Badge variant="secondary">Template</Badge>
            <Badge variant="outline">v{packageJson.version}</Badge>
          </div>
          <h1 className="mb-8 font-bold text-4xl tracking-tight">
            ras.sh TanStack Start Template
          </h1>

          <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
            <p>
              🚀 A production-ready template for building full-stack
              applications with{" "}
              <a
                className="underline transition-colors hover:text-zinc-100"
                href="https://tanstack.com/start"
                rel="noopener"
                target="_blank"
              >
                TanStack Start
              </a>
              . Configured with best practices and modern tooling.
            </p>
            <p>
              Start building by editing{" "}
              <code className="rounded bg-zinc-800 px-2 py-1 text-sm">
                src/routes/index.tsx
              </code>
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            What's Included
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>TanStack Start</CardTitle>
                <CardDescription>
                  Full-stack React framework with powerful routing and data
                  loading
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>
                  Type-safe development with full TypeScript support
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tailwind CSS</CardTitle>
                <CardDescription>
                  Utility-first CSS framework for rapid UI development
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>@ras-sh/ui</CardTitle>
                <CardDescription>
                  Beautiful UI components built on Radix UI primitives
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            UI Components
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>@ras-sh/ui Component Library</CardTitle>
              <CardDescription>
                This template includes the full ras.sh UI component library with
                50+ customizable components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            Quick Start
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <div className="space-y-3">
              <div>
                <p className="mb-2 font-medium text-zinc-100">
                  1. Install dependencies
                </p>
                <code className="block rounded bg-zinc-900 p-3 text-sm">
                  pnpm install
                </code>
              </div>
              <div>
                <p className="mb-2 font-medium text-zinc-100">
                  2. Start development server
                </p>
                <code className="block rounded bg-zinc-900 p-3 text-sm">
                  pnpm dev
                </code>
              </div>
              <div>
                <p className="mb-2 font-medium text-zinc-100">
                  3. Build for production
                </p>
                <code className="block rounded bg-zinc-900 p-3 text-sm">
                  pnpm build
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6 border-zinc-800/50 border-b pb-2 font-bold text-2xl text-zinc-100">
            Learn More
          </h2>
          <div className="space-y-3 text-zinc-300">
            <a
              className="block underline transition-colors hover:text-zinc-100"
              href="https://tanstack.com/router/latest/docs/framework/react/start/getting-started"
              rel="noopener"
              target="_blank"
            >
              TanStack Start Documentation →
            </a>
            <a
              className="block underline transition-colors hover:text-zinc-100"
              href="https://ras.sh"
              rel="noopener"
              target="_blank"
            >
              More templates by ras.sh →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
