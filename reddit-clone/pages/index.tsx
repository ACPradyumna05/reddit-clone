
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import ProfilePage from "../components/profilepg";
import PostPage from "../components/PostOpen";

export default function Home() {
    return (
        <div className="flex flex-col">
                <Header></Header>
            <div className="flex flex-row">
                <Sidebar />
                {/* <ProfilePage></ProfilePage> */}
                <PostPage></PostPage>
                
            </div>
      </div>
    );
  }
  
