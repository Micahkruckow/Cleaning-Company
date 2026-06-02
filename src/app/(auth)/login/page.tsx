import type { Metadata } from "next";

export const metadata: Metadata = { title: "Log In" };

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Log In</h1>
        <p className="text-center text-muted-foreground">Coming soon — auth form.</p>
      </div>
    </div>
  );
}
