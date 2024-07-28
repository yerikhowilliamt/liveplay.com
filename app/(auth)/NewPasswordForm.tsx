"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewPasswordSchema } from "@/schemas";
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
import { newPassword } from "@/actions/newPassword";
import { useSearchParams } from "next/navigation";

const ResetForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: ""
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    console.log(values)

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className="text-xl font-head font-semibold">Forgot password?</h3>
        <div className="space-y-4 mt-5">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="Password"
                    className="bg-[#3333] text-body py-6 placeholder:text-gray-500 inline-block w-full"
                    placeholder="Enter your new password here"
                  />
                </FormControl>
                <FormMessage />
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
            {isPending ? "Loading..." : "Reset password"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ResetForm;
