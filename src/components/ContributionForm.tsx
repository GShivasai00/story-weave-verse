import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface ContributionFormProps {
  onSubmit: (content: string, author: string) => void;
}

const ContributionForm = ({ onSubmit }: ContributionFormProps) => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please add some content to your contribution.",
        variant: "destructive"
      });
      return;
    }
    
    if (!author.trim()) {
      toast({
        title: "Name required",
        description: "Please provide your name.",
        variant: "destructive"
      });
      return;
    }
    
    onSubmit(content, author);
    setContent("");
    // Keep the author name for convenience
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-[#f8f5e6] p-6 rounded-lg border border-[#1a365d]/10 shadow-sm">
      <h3 className="text-xl font-serif font-bold text-[#1a365d] mb-4">Continue the story</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Your contribution
          </label>
          <Textarea
            id="content"
            placeholder="Add your part to the story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[120px]"
          />
        </div>
        
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Your name
          </label>
          <Input
            id="author"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        
        <Button 
          type="submit" 
          className="bg-[#1a365d] hover:bg-[#1a365d]/90 transition-colors"
        >
          Submit Contribution
        </Button>
      </div>
    </form>
  );
};

export default ContributionForm;
