import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobOpening } from "../Careers";
import { useToast } from "../../hooks/use-toast";
import { User, Mail, Phone, Briefcase, CheckCircle2, AlertCircle } from "lucide-react";

// Form validation schema
export const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  resume: z.instanceof(File)
    .refine((file) => file.size <= 5000000, "File size must be less than 5MB")
    .refine(
      (file) => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type),
      "Only PDF, DOC, and DOCX files are accepted"
    ),
  job_title: z.string().optional(),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;

interface ApplicationFormProps {
  isSubmitting: boolean;
  submitError: string | null;
  selectedJob: JobOpening | null;
  onSubmit: (values: ApplicationFormValues) => Promise<void>;
  onCancel: () => void;
}

const ApplicationForm = ({ 
  isSubmitting, 
  submitError, 
  selectedJob, 
  onSubmit, 
  onCancel 
}: ApplicationFormProps) => {
  const { toast } = useToast();

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      job_title: selectedJob?.title || "",
    },
  });

  const handleFormSubmit = async (values: ApplicationFormValues) => {
    try {
      await onSubmit(values);
      toast({
        title: "Application Submitted!",
        description: "Your application has been successfully submitted.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6 pt-2">
      <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">
        Please complete the form below to apply for this position. All fields are required.
      </p>
      
      {submitError && (
        <Alert variant="destructive" className="bg-red-50 text-red-800 border-red-200">
          <AlertCircle className="h-4 w-4 text-red-800" />
          <AlertDescription className="text-xs font-semibold">{submitError}</AlertDescription>
        </Alert>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-5">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[#0B132B] font-bold text-xs uppercase tracking-wider block">
                  Full Name
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5 pointer-events-none" />
                    <input
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-150 rounded-lg text-xs md:text-sm text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-200 placeholder-gray-400 font-medium"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-bold text-red-500 mt-1" />
              </FormItem>
            )}
          />
          
          {/* Email Address */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[#0B132B] font-bold text-xs uppercase tracking-wider block">
                  Email Address
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5 pointer-events-none" />
                    <input
                      placeholder="john@example.com"
                      type="email"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-150 rounded-lg text-xs md:text-sm text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-200 placeholder-gray-400 font-medium"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-bold text-red-500 mt-1" />
              </FormItem>
            )}
          />
          
          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[#0B132B] font-bold text-xs uppercase tracking-wider block">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5 pointer-events-none" />
                    <input
                      placeholder="+91 98765 43210"
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-150 rounded-lg text-xs md:text-sm text-brand-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all duration-200 placeholder-gray-400 font-medium"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-bold text-red-500 mt-1" />
              </FormItem>
            )}
          />
          
          {/* Position */}
          <FormField
            control={form.control}
            name="job_title"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[#0B132B] font-bold text-xs uppercase tracking-wider block">
                  Position
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-gray-400 absolute left-3 top-3.5 pointer-events-none" />
                    <input
                      value={selectedJob?.title || ""}
                      readOnly
                      className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-150 rounded-lg text-xs md:text-sm text-[#4F5B73] font-bold cursor-not-allowed select-none"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-bold text-red-500 mt-1" />
              </FormItem>
            )}
          />
          
          {/* Resume Upload Box */}
          <FormField
            control={form.control}
            name="resume"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[#0B132B] font-bold text-xs uppercase tracking-wider block">
                  Resume (PDF, DOC, or DOCX, max 5MB)
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <input 
                      type="file" 
                      id="resume-upload"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) onChange(file);
                      }}
                      {...fieldProps}
                    />
                    <label
                      htmlFor="resume-upload"
                      className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-5 cursor-pointer transition-all duration-200 ${
                        value
                          ? "border-green-400 bg-green-50/10 text-green-800"
                          : "border-gray-250 bg-gray-50 hover:border-brand-orange hover:bg-white text-gray-500"
                      }`}
                    >
                      {value ? (
                        <div className="flex items-center space-x-3 text-center sm:text-left">
                          <CheckCircle2 className="w-7 h-7 text-green-500 animate-bounce flex-shrink-0" />
                          <div>
                            <span className="font-extrabold text-sm block text-green-700">Resume File Selected</span>
                            <span className="text-xs text-gray-500 max-w-xs truncate block mt-0.5">{(value as File).name}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center space-y-2">
                          <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                          </svg>
                          <span className="font-bold text-xs block text-brand-orange uppercase">Upload Resume File</span>
                          <span className="text-[10px] text-gray-400 block font-medium">PDF, DOC, DOCX up to 5MB</span>
                        </div>
                      )}
                    </label>
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-bold text-red-500 mt-1" />
              </FormItem>
            )}
          />
          
          {/* Action Buttons */}
          <div className="flex space-x-3 pt-3">
            <button 
              type="button" 
              className="flex-1 px-5 py-3 border border-gray-250 text-gray-500 hover:text-brand-dark hover:bg-gray-50 rounded-lg font-extrabold text-xs transition-all duration-200"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex-1 px-5 py-3 bg-brand-orange hover:bg-[#0B132B] text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-extrabold text-xs transition-all duration-200 shadow"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplicationForm;
