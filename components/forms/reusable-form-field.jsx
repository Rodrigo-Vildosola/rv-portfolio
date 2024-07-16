// components/custom/ReusableFormField.js
"use client";

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

const ReusableFormField = ({
  control,
  name,
  label,
  placeholder,
  type,
  isPending,
  required = true,
}) => {
  const t = useTranslations("Layout.Form");

  const renderInput = (field) => {
    if (type === "textarea") {
      return (
        <Textarea
          {...field}
          disabled={isPending}
          placeholder={placeholder}
          className="mt-1 block w-full h-24 shadow-lg"
        />
      );
    }
    return (
      <Input
        {...field}
        disabled={isPending}
        placeholder={placeholder}
        type={type}
        className="mt-1 block w-full shadow-lg"
      />
    );
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t(label)}</FormLabel>
          <FormControl>
            {renderInput(field)}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ReusableFormField;
