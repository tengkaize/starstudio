import type { Metadata } from "next";
import { CssBaseline, Box } from "@mui/material";
import NavBar from "./NavBar";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata: Metadata = {
  title: "星辰前端招新题",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hans">
      <body>
        <CssBaseline />
        <NavBar />
        <Box
          sx={{
            paddingTop: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
