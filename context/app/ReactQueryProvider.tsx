"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "react-query/devtools";

type Props = {
  children: React.ReactNode;
};

const ReactQueryProvider = ({ children }: Props) => {
  const [queryClient] = React.useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
