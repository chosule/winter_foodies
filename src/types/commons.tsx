import { NextPage } from "next";
import React, { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: Children) => Children;
};

export type Children = React.ReactNode;
