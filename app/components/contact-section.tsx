"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { toast } from "sonner";

type ContactFormValues = {
  brandProduct: string;
  budgetRange: string;
  email: string;
  message: string;
  name: string;
  timeline: string;
  videoLength: string;
};

type ContactPrefillValues = Pick<
  ContactFormValues,
  "budgetRange" | "message" | "timeline" | "videoLength"
>;

const trustStats = [
  "48h average turnaround",
  "Hook-first creative",
  "Built for paid social",
];

const bestFor = [
  "Ecommerce",
  "Beauty",
  "Wellness",
  "Digital products",
  "Creator brands",
];

export function ContactSection() {
  const [feedback, setFeedback] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error" | "success">(
    "idle",
  );
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    setFocus,
    setValue,
  } = useForm<ContactFormValues>({
    defaultValues: {
      brandProduct: "",
      budgetRange: "",
      email: "",
      message: "",
      name: "",
      timeline: "",
      videoLength: "",
    },
  });

  useEffect(() => {
    function handlePrefill(event: Event) {
      const { detail } = event as CustomEvent<ContactPrefillValues>;

      setFeedback("");
      setSubmitStatus("idle");
      setValue("budgetRange", detail.budgetRange, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue("message", detail.message, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue("timeline", detail.timeline, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setValue("videoLength", detail.videoLength, {
        shouldDirty: true,
        shouldValidate: true,
      });

      toast.success("Engagement added to contact form", {
        description: "Add your email and brand details, then send it over.",
      });

      window.setTimeout(() => {
        setFocus("email");
      }, 500);
    }

    window.addEventListener("astvilelabs:prefill-contact", handlePrefill);

    return () => {
      window.removeEventListener("astvilelabs:prefill-contact", handlePrefill);
    };
  }, [setFocus, setValue]);

  async function onSubmit(values: ContactFormValues) {
    setFeedback("");
    setSubmitStatus("idle");

    try {
      const sendInquiry = async () => {
        const response = await fetch("/api/contact", {
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        const result = (await response.json()) as { error?: string };

        if (!response.ok) {
          throw new Error(result.error ?? "Unable to send your inquiry.");
        }

        return result;
      };

      const inquiryPromise = sendInquiry();

      toast.promise(inquiryPromise, {
        error: (error) =>
          error instanceof Error
            ? error.message
            : "Unable to send your inquiry right now.",
        loading: "Sending project inquiry...",
        success: "Project inquiry sent",
      });

      await inquiryPromise;
      setSubmitStatus("success");
      setFeedback(
        `Thanks, ${values.name}. Your inquiry was sent to AstvileLabs.`,
      );
      reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry right now.";

      setSubmitStatus("error");
      setFeedback(message);
    }
  }

  return (
    <section
      id="contact"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-hidden border-b border-white/12 bg-[#111111] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-8"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute right-[-18rem] top-10 size-[38rem] rounded-full bg-[#ff7a59]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-18rem] left-[-10rem] size-[34rem] rounded-full bg-[#87f7ff]/6 blur-3xl" />
      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid gap-6 overflow-hidden border border-white/14 bg-white/[0.04] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 hover:border-white/26 sm:p-6 lg:grid-cols-[0.78fr_1.22fr] lg:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,122,89,0.14),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(135,247,255,0.1),transparent_30%)]" />
          <div className="relative flex flex-col justify-between gap-7">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#ff7a59]">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-4 max-w-[11ch] text-4xl font-normal leading-none tracking-normal text-white sm:text-5xl lg:text-[3.35rem]"
              >
                Let&apos;s build ads people actually watch.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="max-w-lg text-sm leading-6 text-white/64 sm:text-base">
                Share your offer, audience, and goals. I&apos;ll turn it into
                AI-powered creative designed for modern platforms.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {trustStats.map((stat) => (
                  <div
                    key={stat}
                    className="border border-white/12 bg-black/20 p-3 text-sm leading-5 text-white/68"
                  >
                    {stat}
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/12" />

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                  Best for:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {bestFor.map((item) => (
                    <span
                      key={item}
                      className="border border-white/12 bg-white/[0.035] px-3 py-1.5 text-sm text-white/68"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form
            aria-busy={isSubmitting}
            onSubmit={handleSubmit(onSubmit)}
            className="relative grid gap-4 border border-white/12 bg-[#101010]/86 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur sm:p-6"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                error={errors.name?.message}
                label="Name"
                inputProps={register("name", {
                  required: "Name is required.",
                })}
              />
              <Field
                error={errors.email?.message}
                label="Email"
                inputProps={register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email.",
                  },
                })}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                error={errors.brandProduct?.message}
                label="Brand / Product"
                inputProps={register("brandProduct", {
                  required: "Brand or product is required.",
                })}
              />
              <Field
                error={errors.videoLength?.message}
                label="Video Length"
                inputProps={register("videoLength", {
                  required: "Video length is required.",
                })}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                error={errors.budgetRange?.message}
                label="Budget Range"
                inputProps={register("budgetRange", {
                  required: "Budget range is required.",
                })}
              />
              <Field
                error={errors.timeline?.message}
                label="Timeline"
                inputProps={register("timeline", {
                  required: "Timeline is required.",
                })}
              />
            </div>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">Message</span>
              <textarea
                {...register("message", {
                  required: "Message is required.",
                  minLength: {
                    value: 12,
                    message: "Add a little more detail.",
                  },
                })}
                className="min-h-40 resize-none rounded-none border border-white/14 bg-white/[0.045] px-4 py-3 text-base text-white outline-none transition placeholder:text-white/28 focus:border-[#ff7a59] focus:bg-white/[0.07] focus:shadow-[0_0_0_1px_rgba(255,122,89,0.2),0_0_28px_rgba(255,122,89,0.08)]"
                placeholder="Tell me about your product, audience, goals, and preferred style."
              />
              {errors.message?.message ? (
                <span className="text-sm text-white/55">
                  {errors.message.message}
                </span>
              ) : null}
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                disabled={isSubmitting}
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-3 border border-[#ff7a59]/55 bg-[#ff7a59]/8 px-6 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-[#ff7a59] hover:bg-[#ff7a59] hover:text-[#101010] hover:shadow-[0_14px_40px_rgba(255,122,89,0.18)] disabled:cursor-not-allowed disabled:border-white/14 disabled:bg-white/[0.035] disabled:text-white/34 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="size-4 animate-spin rounded-full border border-white/20 border-t-white" />
                    Sending
                  </>
                ) : (
                  "Start Project"
                )}
              </button>
              {feedback ? (
                <p
                  aria-live="polite"
                  className={
                    submitStatus === "error"
                      ? "text-sm text-[#ff7a59]"
                      : "text-sm text-white/60"
                  }
                >
                  {feedback}
                </p>
              ) : null}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

type FieldProps = {
  error?: string;
  inputProps: UseFormRegisterReturn;
  label: string;
};

function Field({ error, inputProps, label }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-white/70">{label}</span>
      <input
        {...inputProps}
        className="h-12 rounded-none border border-white/14 bg-white/[0.045] px-4 text-base text-white outline-none transition placeholder:text-white/28 focus:border-[#ff7a59] focus:bg-white/[0.07] focus:shadow-[0_0_0_1px_rgba(255,122,89,0.2),0_0_28px_rgba(255,122,89,0.08)]"
        placeholder={label}
      />
      {error ? <span className="text-sm text-white/55">{error}</span> : null}
    </label>
  );
}
