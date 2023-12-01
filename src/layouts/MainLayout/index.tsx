import React from "react";

import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout min-h-screen">
      <Header />
      <div className="w-full pb-20">{children}</div>
    </div>
  );
}
