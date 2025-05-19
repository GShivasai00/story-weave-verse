
import { Story } from "@/lib/types";
import StoryCard from "./StoryCard";

interface StoryListProps {
  stories: Story[];
  title: string;
}

const StoryList = ({ stories, title }: StoryListProps) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default StoryList;
