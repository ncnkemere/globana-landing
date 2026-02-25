import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account | Globana",
  robots: { index: false, follow: true },
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
