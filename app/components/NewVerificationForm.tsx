"use client";

import { newVerification } from "@/actions/newVerification";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { useRouter } from "next/navigation";

const NewVerificationForm = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [click, setClick] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const handleClick = () => {
    setClick(true);
    router.push('/signin');
  };

  const onSubmit = useCallback(async () => {
    if (success || error) return;
    
    if (!token) {
      setError("Missing token!");
      setLoading(false);
      return;
    }

    try {
      const data = await newVerification(token);
      setSuccess(data.success);
      setError(data.error);
    } catch {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <Card className="p-6 shadow-md flex flex-col items-center bg-black/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl text-gray-500 font-head font-bold">
            Confirming your verification
          </h3>
          {loading && !success && !error && (
            <BeatLoader color="white" loading={loading} />
          )}
          <FormSuccess message={success} />
          <FormError message={error} />
        </div>
      </CardHeader>
      <CardFooter>
        <Button onClick={handleClick} className="font-head font-semibold">Back to sign in</Button>
      </CardFooter>
    </Card>
  );
};

export default NewVerificationForm;
