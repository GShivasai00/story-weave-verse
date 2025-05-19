
import Navbar from "@/components/Navbar";
import StoryList from "@/components/StoryList";
import { stories } from "@/lib/data";

const Index = () => {
  // Sort stories by updated date (most recent first)
  const recentStories = [...stories].sort((a, b) => 
    b.updatedAt.getTime() - a.updatedAt.getTime()
  );
  
  // Get stories with most contributions
  const popularStories = [...stories].sort((a, b) => 
    b.contributions.length - a.contributions.length
  );
  
  return (
    <div className="min-h-screen bg-[#faf7ed]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-4">
            Welcome to StoryWeave
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Collaborative storytelling where imagination meets community. 
            Read stories, continue them with your own twist, or start a new tale.
          </p>
        </div>
        
        <StoryList stories={recentStories} title="Recently Updated Stories" />
        <StoryList stories={popularStories} title="Most Collaborative Stories" />
      </div>
    </div>
  );
};

export default Index;
