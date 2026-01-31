import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

type MessageInput = {
  name: string;
  email: string;
  message: string;
};

export function useCreateMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: MessageInput) => {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => null);
        throw new Error(error?.message || "Failed to send message");
      }

      return res.json();
    },

    onSuccess: () => {
      toast({
        title: "Message sent! 📧",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
    },

    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
