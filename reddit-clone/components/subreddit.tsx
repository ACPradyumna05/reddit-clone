import { useState } from "react";

const SubredditSidebar = () => {
return (
    <aside className="bg-gray-900 p-4 rounded-lg">
    <h2 className="text-xl font-bold">r/example</h2>
    <p className="text-sm text-gray-400 mt-2">
        This is an example subreddit for demonstration purposes.
    </p>
    <div className="mt-4 text-sm text-gray-300">
        <p>Members: 100K</p>
        <p>Online: 500</p>
    </div>
    <button className="mt-4 w-full">Join</button>
    </aside>
);
};

export default function SubredditPage() {
const [posts, setPosts] = useState([
    { id: 1, title: "Welcome to the subreddit!", votes: 120, comments: 30 },
    { id: 2, title: "Discussion Thread", votes: 90, comments: 15 },
]);

return (
    <div className="flex flex-1 gap-6 p-6 bg-black text-white min-h-screen">
    <div className="flex-1 max-w-3xl">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">r/example</h1>
        <button>Create Post</button>
        </div>
        <div className="mt-4 space-y-4">
        {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-400 text-sm">
                {post.votes} votes • {post.comments} comments
            </p>
            </div>
        ))}
        </div>
    </div>
    <div className="p-5 h-full">
        <SubredditSidebar />
    </div>

    </div>
);
}
