"use client";

import type { ReactNode } from "react";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../src/store/store";

/**
 * Client-side Providers wrapper
 * - Redux toolkit is wired via `store`
 * - next-auth SessionProvider is included (configure in app/api/auth/[...nextauth]/route.ts)
 *
 * Install dependencies (from repo root):
 * npm install next react react-dom tailwindcss postcss autoprefixer @reduxjs/toolkit react-redux next-auth
 *
 * Replace or extend providers as needed (Theme provider, Chakra, etc.).
 */

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </SessionProvider>
  );
}
