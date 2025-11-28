"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalDetailsSchema, PersonalDetailsFormValues } from "@/lib/schemas/profile";
import { updatePersonalDetails } from "@/app/(dashboard)/dashboard/application/actions";
import { useState } from "react";
import { toast } from "sonner"; // Ensure you have Sonner installed or use alert
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

// Props: Allow passing existing data so the form is pre-filled
export function PersonalDetailsForm({ initialData }: { initialData?: any }) {
  const [isSaving, setIsSaving] = useState(false);

  // Initialize form
  const form = useForm({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      dob: initialData?.dob ? new Date(initialData.dob) : undefined,
      gender: initialData?.gender || "",
      social_category: initialData?.social_category || "",
      nationality: initialData?.nationality || "Indian",
      aadhar_number: initialData?.aadhar_number || "",
      address_permanent: initialData?.address_permanent || "",
      is_financial_aid_seeker: initialData?.is_financial_aid_seeker || false,
    },
  });

  async function onSubmit(data: PersonalDetailsFormValues) {
    setIsSaving(true);
    const result = await updatePersonalDetails(data);
    setIsSaving(false);

    if (result.error) {
      toast.error("Error saving profile: " + result.error);
    } else {
      toast.success("Personal details saved successfully!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        {/* ROW 1: DOB & Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ROW 2: Category & Nationality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="social_category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Social Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="General">General</SelectItem>
                    <SelectItem value="SC">SC (Scheduled Caste)</SelectItem>
                    <SelectItem value="ST">ST (Scheduled Tribe)</SelectItem>
                    <SelectItem value="OBC-NCL">OBC-NCL</SelectItem>
                    <SelectItem value="EWS">EWS (Economically Weaker Section)</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Used for statutory Indian admissions reporting.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality</FormLabel>
                <FormControl>
                  <Input placeholder="Indian" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ROW 3: Aadhar (Optional) */}
        <FormField
          control={form.control}
          name="aadhar_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aadhar Number (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="XXXX-XXXX-XXXX" {...field} />
              </FormControl>
              <FormDescription>
                Providing this now speeds up final enrollment verification later.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ROW 4: Address */}
        <FormField
          control={form.control}
          name="address_permanent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Permanent Address</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="House No, Street, City, State, Pincode" 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSaving}>
          {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Changes
        </Button>
      </form>
    </Form>
  );
}
