// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { AppProvider } from "@/context/AppContext";
import Footer from "@/components/Footer";
import RootClientWrapper from "@/components/RootClientWrapper";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="w-full overflow-x-hidden">
        <AppProvider>
          <div className="flex flex-col min-h-screen">
            <RootClientWrapper>
              <main className="flex-grow">{children}</main>
              <Footer />
            </RootClientWrapper>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
