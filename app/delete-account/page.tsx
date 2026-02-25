import { Suspense } from "react";
import type { Metadata } from "next";
import DeleteAccountClient from "./DeleteAccountClient";

export const metadata: Metadata = {
  title: "Delete Account | Globana",
  robots: { index: false, follow: true },
};

export default function DeleteAccountPage() {
  return (
    <Suspense fallback={<Fallback />}>
      <DeleteAccountClient />
    </Suspense>
  );
}

function Fallback() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">
        Delete Your Globana Account
      </h1>
      <p className="mt-4">Loading…</p>
    </main>
  );
}