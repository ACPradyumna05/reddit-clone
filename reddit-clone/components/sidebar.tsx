import { useState } from "react";
import Link from "next/link";
import { Home, Compass, Users, BarChart, ChevronDown, ChevronUp, Plus, Inbox, Mail, Star } from "lucide-react";

const Sidebar = () => {
  // Move useState inside the Sidebar component
  const [moderationOpen, setModerationOpen] = useState(true);
  const [feedsOpen, setFeedsOpen] = useState(true);
  const [recentOpen, setRecentOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(true); // This is the state for the sidebar toggling

  return (
    <aside className={`static top-[6.5%] overflow-hidden left-0 w-64 h-screen bg-black text-white p-4 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
      {/* Navigation */}
      <nav className="space-y-2">
        <SidebarItem href="/" icon={Home} text="Home" active />
        <SidebarItem href="/popular" icon={Compass} text="Popular" />
        <SidebarItem href="/explore" icon={Users} text="Explore" />
        <SidebarItem href="/all" icon={BarChart} text="All" />
      </nav>

      <div className="border-t border-gray-700 my-4"></div>

      {/* Moderation Section */}
      <CollapsibleSection 
        title="MODERATION" 
        isOpen={moderationOpen} 
        toggle={() => setModerationOpen(!moderationOpen)}
      >
        <SidebarItem href="/mod-queue" icon={Inbox} text="Mod Queue" />
        <SidebarItem href="/mod-mail" icon={Mail} text="Mod Mail" />
        <SidebarItem href="/r/mod" icon={Inbox} text="r/Mod" />
        <SidebarItem href="/r/example1" icon={Star} text="r/Example1" />
      </CollapsibleSection>

      {/* Custom Feeds */}
      <CollapsibleSection 
        title="CUSTOM FEEDS" 
        isOpen={feedsOpen} 
        toggle={() => setFeedsOpen(!feedsOpen)}
      >
        <SidebarItem href="/create-feed" icon={Plus} text="Create a custom feed" />
        <SidebarItem href="/educational" icon={Star} text="Educational" />
      </CollapsibleSection>

      {/* Recent */}
      <CollapsibleSection 
        title="RECENT" 
        isOpen={recentOpen} 
        toggle={() => setRecentOpen(!recentOpen)}
      />
      
      {/* Sidebar toggle button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white bg-gray-800">
        {isOpen ? "Close" : "Open"}
      </button>
    </aside>
  );
};

interface SidebarItemProps {
  href: string;
  icon: React.ElementType;
  text: string;
  active?: boolean;
}

const SidebarItem = ({ href, icon: Icon, text, active }: SidebarItemProps) => (
  <Link
    href={href}
    className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${active ? "bg-gray-800" : "hover:bg-gray-700"}`}
  >
    <Icon className="w-5 h-5" />
    <span>{text}</span>
  </Link>
);

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  toggle: () => void;
  children?: React.ReactNode;
}

const CollapsibleSection = ({ title, isOpen, toggle, children }: CollapsibleSectionProps) => (
  <div className="mb-2">
    <button onClick={toggle} className="flex justify-between w-full text-sm font-semibold text-gray-400 hover:text-white">
      {title}
      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
    {isOpen && <div className="mt-2 space-y-2">{children}</div>}
  </div>
);

export default Sidebar;
