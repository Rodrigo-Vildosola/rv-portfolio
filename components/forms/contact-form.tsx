// components/forms/contact-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";

import { ContactSchema, ContactFormValues } from "@/schemas";
import {
  Form,
} from "@/components/ui/form";

import { CardWrapper } from "@/components/custom/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { contact } from "@/actions/contact";
import ReusableFormField from "./reusable-form-field";
import useEmailJS from "@/hooks/use-emailjs";

const ContactForm = () => {
  useEmailJS();
  const t = useTranslations("Layout.Form");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();


  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      await contact(values)
        .then((data) => {
          if (data?.error) {
            setError(data?.error);
          }

          if (data?.success) {
            setSuccess(data?.success);
          }

          form.reset();
        })
        .catch(() => {
          setError("An error occurred. Please try again.");
        })
    });
  };

  return (
    <CardWrapper
      headerLabel={t("contact")}
      headerTitle={t("headerTitle")}
      showSocial={false}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <ReusableFormField 
              control={form.control}
              name="name"
              label="name"
              placeholder="John Doe"
              type="text"
              isPending={ isPending}
            />
            <ReusableFormField 
              control={form.control}
              name="email"
              label="email"
              placeholder="john.doe@email.com"
              type="email"
              isPending={ isPending}
            />
            <ReusableFormField 
              control={form.control}
              name="message"
              label="message"
              placeholder="Write here"
              type="textarea"
              isPending={ isPending}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
          >
            {t("submit")}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ContactForm;
