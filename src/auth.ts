import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    //기본적으로 생성해준 라우트 주소를 내가 원하는 라우트 주소로 변경
    // 로그인과 회원가입 url 변경
    signIn: "/login",
    newUser: "/signup",
  },
  callbacks: {
    jwt({ token, user }) {
      // console.log("user", user);
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    session({ session, token, user }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      // console.log("session", session, token);
      return session;
    },
  },
  events: {
    session(data) {
      // console.log("data", data, data.session);
    },
    signOut(data) {
      // console.log("signout", data && data);
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            //credentials안에 id와 password가 들어있다.
            //하지만 Next auth에서는 Username 과 Password로 고정이 되어있기때문에 이름을 바꿔줘야한다.
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          }
        );

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        if (!user || !user.id) {
          return null;
        }
        // console.log("user?", user);
        return {
          // email: user.id,
          name: user.id,
          ...user,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
