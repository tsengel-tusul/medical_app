import { Loader2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
type SubmitButtonProps = {
  title: string;
  buttonType?: "submit" | "reset" | "button" | undefined;
  isLoading: boolean;
  loadingTitle: string;
};
export default function SubmitButton({
  title,
  buttonType = "submit",
  isLoading = false,
  loadingTitle,
}: SubmitButtonProps) {
  return (
    <>
      {isLoading ? (
        <Button disabled>
          <Loader2 className="animate-spin" />
          {loadingTitle}
        </Button>
      ) : (
        <Button type={buttonType} className="w-full">
          {title}
        </Button>
      )}
    </>
  );
}
