
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContributionForm from "@/components/ContributionForm";
import { stories } from "@/lib/data";
import { Story, Contribution } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

const StoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [story, setStory] = useState<Story | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    const foundStory = stories.find(s => s.id === id);
    if (foundStory) {
      setStory(foundStory);
    } else {
      toast({
        title: "Story not found",
        description: "This story doesn't exist or has been removed.",
        variant: "destructive"
      });
      navigate("/");
    }
  }, [id, navigate, toast]);
  
  if (!story) {
    return (
      <div className="min-h-screen bg-[#faf7ed] flex items-center justify-center">
        <div className="animate-pulse text-[#1a365d]">Loading story...</div>
      </div>
    );
  }
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };
  
  const handleNewContribution = (content: string, author: string) => {
    // Create new contribution
    const newContribution: Contribution = {
      id: `${story.id}-${story.contributions.length + 1}`,
      content,
      author,
      createdAt: new Date()
    };
    
    // Update the story with the new contribution
    const updatedStory: Story = {
      ...story,
      contributions: [...story.contributions, newContribution],
      updatedAt: new Date()
    };
    
    // In a real app, this would call an API to save the new contribution
    // For now, we'll update our local state and the stories array
    setStory(updatedStory);
    
    // Find and update the story in our "database"
    const storyIndex = stories.findIndex(s => s.id === story.id);
    if (storyIndex !== -1) {
      stories[storyIndex] = updatedStory;
    }
    
    toast({
      title: "Contribution added!",
      description: "Your part of the story has been added successfully.",
    });
  };
  
  return (
    <div className="min-h-screen bg-[#faf7ed]">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white shadow-sm rounded-lg border border-[#1a365d]/10 overflow-hidden">
          <div className="p-6 border-b border-[#1a365d]/10 bg-[#f8f5e6]">
            <h1 className="text-3xl font-serif font-bold text-[#1a365d] mb-2">{story.title}</h1>
            <p className="text-gray-600">
              Started on {formatDate(story.createdAt)} • {story.contributions.length} contribution{story.contributions.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="divide-y divide-[#1a365d]/10">
            {story.contributions.map((contribution, index) => (
              <div key={contribution.id} className="p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-800 leading-relaxed">{contribution.content}</p>
                </div>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                  <span>Contributed by {contribution.author}</span>
                  <span>{formatDate(contribution.createdAt)}</span>
                </div>
                {index === story.contributions.length - 1 && (
                  <div className="mt-2 text-right">
                    <span className="inline-block px-3 py-1 bg-[#1a365d]/5 rounded-full text-xs font-medium text-[#1a365d]">
                      Latest contribution
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <ContributionForm onSubmit={handleNewContribution} />
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
