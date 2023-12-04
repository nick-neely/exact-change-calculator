import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";
import { calculateChange } from "../lib/calculateChange";

// Type for the change object
interface Change {
  [key: string]: number;
}

// Props for ChangeForm component
interface ChangeFormProps {
  setChange: React.Dispatch<React.SetStateAction<Change>>;
}

// Form validation schema
const formSchema = z.object({
  amount: z
    .string()
    .refine(
      (value) =>
        value === "" || (!isNaN(parseFloat(value)) && parseFloat(value) >= 0),
      {
        message: "Amount must be a non-negative number",
      },
    ),
});

export function ChangeForm({ setChange }: ChangeFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (data.amount === "") {
      setChange({}); // Reset the output if input is empty
    } else {
      const calculatedChange = calculateChange(String(data.amount));
      setChange(calculatedChange);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel className="font-semibold text-gray-700">
                Amount
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter an amount (e.g. 11.49)"
                  className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm text-red-600" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="rounded-md bg-purple-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-purple-600 active:bg-purple-700"
        >
          <Calculator className="mr-2 h-4 w-4" />
          Calculate
        </Button>
      </form>
    </Form>
  );
}
