"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async (prevState: any, formData: FormData) => {
  if (!formData.get("id")) {
    return { message: "no_id" };
  }
  if (!formData.get("password")) {
    return { message: "no_password" };
  }
  let shouldRedirect = false;
  try {
    shouldRedirect = true;
    signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (err) {
    console.log("로그인 에러", err);
    return;
  }
  if (shouldRedirect) {
    redirect("/");
  }
  return { message: null };
};
