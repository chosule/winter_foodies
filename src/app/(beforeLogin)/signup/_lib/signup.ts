"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async (prevState: any, formData: FormData) => {
  if (!formData.get("id")) {
    return { message: "no_id" };
  }
  if (!formData.get("name")) {
    return { message: "no_name" };
  }
  if (!formData.get("password")) {
    return { message: "no_password" };
  }
  let shouldRedirect = false;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: formData.get("id"),
        name: formData.get("name"),
        password: formData.get("password"),
      }),
      credentials: "include", //쿠키 전달
    });
    console.log("response", response);
    console.log("await response.json()", await response.json());
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    shouldRedirect = true;
    await signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (err) {
    console.log("회원가입 에러", err);
    return;
  }
  if (shouldRedirect) {
    redirect("/");
  }
  return { message: null };
};
