/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { DEFAULT_SIGNIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

type AuthContainerProps = {
  page: string;
  label: string;
};

const AuthContainer = ({ page, label }: AuthContainerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const onClick = (provider: "google") => {
    setIsLoading(!isLoading);

    signIn(provider, {
      callbackUrl: DEFAULT_SIGNIN_REDIRECT,
    });
  };

  return (
    <>
      {page === "signup" ? (
        <>
          <RegisterForm label={label} />
          <p className="text-gray-500 text-sm font-body text-center my-4">
            Already have an account?
            <Link href="/signin" className="text-white hover:underline">
              Sign in now
            </Link>
          </p>
        </>
      ) : (
        <>
          <LoginForm label={label} />
          <p className="text-gray-500 text-sm font-body text-center my-4">
            Didn't have an account?
            <Link href="/signup" className="text-white hover:underline">
              Sign up now
            </Link>
          </p>
        </>
      )}
      <Button
        onClick={() => onClick("google")}
        className="flex gap-2 w-full font-body"
      >
        <Image src="/google.svg" alt="Google icon" width={35} height={35} />
        {isLoading ? "Loading..." : `${label} with google`}
      </Button>
    </>
  );
};

export default AuthContainer;
