import React from "react";
import { Alert, type AlertProps } from "@nextui-org/alert";

export type FormSubmitMessageStatus = "success" | "failed";

export type FormSubmitMessageProps = {
  status?: FormSubmitMessageStatus;
  message?: string;
};

const mapStatusColor: Record<FormSubmitMessageStatus, AlertProps["color"]> = {
  success: "success",
  failed: "danger"
};

export default function FormSubmitMessage({ status = "success", message }: FormSubmitMessageProps) {
  return (
    <>
      {message && status && (
        <Alert color={mapStatusColor?.[status]} title={message} description={null} />
      )}
    </>
  );
}
