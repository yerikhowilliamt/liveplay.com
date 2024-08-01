"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "../components/FormError";
import { FormSuccess } from "../components/FormSuccess";
import { useState, useTransition } from "react";
import { login } from "@/actions/signin";
import Link from "next/link";

type LoginFormProps = {
  label: string;
};

const LoginForm = ({ label }: LoginFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className="text-3xl font-head font-semibold">{label}</h3>
        <div className="space-y-4 mt-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="email"
                    className="bg-[#3333] text-body py-6 placeholder:text-gray-500 inline-block w-full"
                    placeholder="Enter your email here"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="password"
                    className="bg-[#3333] text-body py-6 placeholder:text-gray-500 inline-block w-full"
                    placeholder="Enter your password here"
                  />
                </FormControl>
                <FormMessage />
                <Button
                  className="ml-auto px-0 bg-transparent font-normal"
                  size="sm"
                  variant="link"
                  asChild
                >
                  <Link href="/reset" className="text-sm text-gray-500">
                    Forgot password?
                  </Link>
                </Button>
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            variant="destructive"
            className="bg-[#db0000] w-full"
            type="submit"
          >
            {isPending ? "Loading..." : label}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
