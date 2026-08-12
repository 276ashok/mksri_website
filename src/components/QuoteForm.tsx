
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { API_BASE_URL } from '@/lib/constants';

// Form validation schema
const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service_type: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your project")
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize the form
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service_type: "",
      message: ""
    }
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/api.php?action=quote_requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || null,
          service_type: values.service_type || null,
          message: values.message,
          status: 'new' // Assuming 'new' is a default status for new requests
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }
      
      // Show success toast
      toast({
        title: "Request Submitted",
        description: "We've received your request for a quote and will be in touch shortly.",
        duration: 5000,
      });
      
      // Reset form
      form.reset();
      
    } catch (error: any) {
      console.error('Error submitting quote request:', error);
      toast({
        title: "Error",
        description: `There was a problem submitting your request: ${error.message}. Please try again.`,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="quote" className="bg-white rounded-lg p-8 shadow-md">
      <h2 className="text-2xl font-semibold text-brand-dark mb-6">
        Get a Quote
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="service_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type (Optional)</FormLabel>
                  <FormControl>
                    <select 
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
                      {...field}
                    >
                      <option value="">Select a service</option>
                      <option value="Construction">Construction</option>
                      <option value="Land Surveying">Land Surveying</option>
                      <option value="Project Planning">Project Planning</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Details</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your project requirements, timeline, location, and any other important details..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-brand-orange hover:bg-brand-orange/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request a Quote"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuoteForm;
