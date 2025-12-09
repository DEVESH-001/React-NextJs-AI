"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function QueryProvide({ children }) {
  const [client] = useState(() => new QueryClient()); // create a QueryClient instance only once
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
