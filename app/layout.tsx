import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorWaitlist — Launch With Your Community",
  description:
    "Join thousands of creators getting early access to the platform built for creators who move fast. Exclusive features, direct connections, zero noise.",
  openGraph: {
    title: "CreatorWaitlist — Launch With Your Community",
    description:
      "Join thousands of creators getting early access to the platform built for creators who move fast.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreatorWaitlist — Launch With Your Community",
    description:
      "Join thousands of creators getting early access to the platform built for creators who move fast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
