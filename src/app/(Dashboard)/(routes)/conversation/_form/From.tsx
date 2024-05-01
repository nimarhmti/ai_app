"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../_constants/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//interfaces and data types
type formValuesType = z.infer<typeof formSchema>;
//initialsValues
const formDefaultValue = {
  prompt: "",
};

export default function ConversationFrom() {
  const form = useForm<formValuesType>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValue,
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: formValuesType) => {};

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="rounded-lg w-full border p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
        >
          <FormField
            name="prompt"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl>
                  <FormControl className="m-0 p-0">
                    <Input
                      disabled={isLoading}
                      {...field}
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      placeholder="how do i calculate the radios of circle? "
                    />
                  </FormControl>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="col-span-12 lg:col-span-2 w-full rounded-xl"
            variant="outline"
            disabled={isLoading}
          >
            Generate
          </Button>
        </form>
      </Form>
    </div>
  );
}
