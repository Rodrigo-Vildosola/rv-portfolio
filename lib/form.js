import { z } from "zod";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const generateFormFields = (schema, form, isPending) => {
  return Object.keys(schema.shape).map((key) => {
    const fieldSchema = schema.shape[key];

    return (
      <FormField
        key={key}
        control={form.control}
        name={key}
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder={`Enter ${key}`}
                disabled={isPending}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  });
};
