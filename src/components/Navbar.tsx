
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#f8f5e6] border-b border-[#1a365d]/10 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-[#1a365d]">
          StoryWeave
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-[#1a365d] hover:text-[#1a365d]/70 transition-colors">
            Home
          </Link>
          <Link to="/create" className="bg-[#1a365d] text-white px-4 py-2 rounded-md hover:bg-[#1a365d]/90 transition-colors">
            Start a Story
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
