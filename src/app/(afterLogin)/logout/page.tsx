"use client";
import { auth } from "@/auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  signOut({ redirect: false }).then(() => {
    router.replace("/");
  });
}
