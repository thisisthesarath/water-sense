import "@/css/satoshi.css";
import "@/css/style.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import ProtectedLayout from "./ProtectedLayout";
import { Metadata } from "next";
import { Providers } from "@/components/Providers"; // ✅ Import Providers

export const metadata: Metadata = {
  title: "Water Sense",
  description: "An intelligent water monitoring system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-gray-900">
        <Providers> {/* ✅ Wrap ProtectedLayout with Providers */}
          <ProtectedLayout>{children}</ProtectedLayout>
        </Providers>
      </body>
    </html>
  );
}
