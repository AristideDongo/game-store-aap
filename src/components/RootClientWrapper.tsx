"use client";

import { ReactNode } from "react";
import Header from "./Header";

export default function RootClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header cartCount={0} />{" "}
      {/* Tu pourras passer le vrai nombre via contexte si besoin */}
      <div className="min-h-screen bg-gray-100">{children}</div>
    </>
  );
}
