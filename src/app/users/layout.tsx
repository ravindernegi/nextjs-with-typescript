import React from "react";
export const metadata = {
  title: "User Layout",
  description: "User Layout settings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
