
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { stories } from "@/lib/data";
import { Story, Contribution } from "@/lib/types";

const CreateStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please provide a title for your story.",
        variant: "destructive"
      });
      return;
    }
    
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please provide the beginning of your story.",
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
    
    // Create new story
    const now = new Date();
    const firstContribution: Contribution = {
      id: `new-1`,
      content,
      author,
      createdAt: now
    };
    
    const newStory: Story = {
      id: `${stories.length + 1}`,
      title,
      contributions: [firstContribution],
      createdAt: now,
      updatedAt: now
    };
    
    // In a real app, this would call an API to save the new story
    // For now, we'll add it to our local "database"
    stories.push(newStory);
    
    toast({
      title: "Story created!",
      description: "Your story has been created successfully.",
    });
    
    // Navigate to the new story
    navigate(`/story/${newStory.id}`);
  };
  
  return (
    <div className="min-h-screen bg-[#faf7ed]">
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white shadow-sm rounded-lg border border-[#1a365d]/10 overflow-hidden">
          <div className="p-6 border-b border-[#1a365d]/10 bg-[#f8f5e6]">
            <h1 className="text-2xl font-serif font-bold text-[#1a365d]">Start a New Story</h1>
            <p className="text-gray-600 mt-1">
              Create the beginning of a story and invite others to continue it
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Story Title
              </label>
              <Input
                id="title"
                placeholder="Enter a captivating title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Story Beginning
              </label>
              <Textarea
                id="content"
                placeholder="Once upon a time..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[200px]"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                Your Name
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
              className="w-full bg-[#1a365d] hover:bg-[#1a365d]/90 transition-colors"
            >
              Publish Story
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
