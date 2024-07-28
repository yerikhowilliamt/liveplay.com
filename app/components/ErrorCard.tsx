import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { TriangleAlertIcon } from "lucide-react";

const ErrorCard = () => {
  return (
    <Card className="p-6 shadow-md flex flex-col items-center bg-black/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-col items-center gap-2">
        <TriangleAlertIcon className="text-destructive"/>
        <h3 className="text-xl text-gray-500 font-head font-bold">
          Oops! Somenthing went wrong!
        </h3>
        </div>
      </CardHeader>
      <CardFooter>
        <Button className="font-head font-semibold">Back to sign in</Button>
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
