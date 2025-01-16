import React from "react";
import { Alert, type AlertProps } from "@nextui-org/alert";

export type FormSubmitMessageProps = {
  status: "success" | "failed";
  message: string;
};

const mapStatusColor: Record<FormSubmitMessageProps["status"], AlertProps["color"]> = {
  success: "success",
  failed: "danger"
};

export default function FormSubmitMessage({ status = "success", message }: FormSubmitMessageProps) {
  return (
    <>
      {message && status && <Alert color={mapStatusColor[status]} title={message} description={null} />}
    </>
  );
}
