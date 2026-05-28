"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      closeButton
      position="bottom-right"
      richColors
      toastOptions={{
        classNames: {
          description: "!text-white/60",
          toast:
            "!border-white/14 !bg-[#151515] !text-white !shadow-[0_24px_90px_rgba(0,0,0,0.45)]",
        },
      }}
    />
  );
}
