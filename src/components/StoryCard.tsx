
import { Link } from "react-router-dom";
import { Story } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  // Format date to be more readable
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  // Get first 100 characters of the first contribution as preview
  const previewText = story.contributions[0]?.content.substring(0, 100) + "...";

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md border-[#1a365d]/10 overflow-hidden flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="font-serif text-xl text-[#1a365d]">{story.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm italic">
          Started by {story.contributions[0]?.author} on {formatDate(story.createdAt)}
        </p>
        <p className="mt-3 text-gray-700">{previewText}</p>
      </CardContent>
      <CardFooter className="border-t border-[#1a365d]/10 pt-4 bg-[#f8f5e6]/50">
        <div className="w-full flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {story.contributions.length} contribution{story.contributions.length !== 1 ? 's' : ''}
          </span>
          <Link 
            to={`/story/${story.id}`}
            className="text-[#1a365d] underline decoration-dotted underline-offset-4 hover:text-[#1a365d]/70 transition-colors text-sm"
          >
            Read more
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
