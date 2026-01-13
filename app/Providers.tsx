'use client';

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Registration from "./components/registrationlogic";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}
