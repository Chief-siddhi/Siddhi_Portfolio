import { WindowControls } from "#components"
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from "lucide-react";

const Safari = () => {
  return (
    <>
     <div id="window-header">
        <WindowControls target="safari"/>

        <PanelLeft className="ml-4 icon hidden sm:block"/>

        <div className="hidden sm:flex items-center gap-1 ml-2">
            <ChevronLeft className="icon"/>
            <ChevronRight className="icon"/>
        </div>

        <div className="flex-1 flex-center gap-2 sm:gap-3 mx-2">
            <ShieldHalf className="icon hidden sm:block"/>

            <div className="search">
                <Search className="icon size-4 sm:size-5 flex-shrink-0"/>
                <input type="text" placeholder="Search or enter website name" className="flex-1 min-w-0" />
            </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
            <Share className="icon"/>
            <Plus className="icon" />
            <Copy className="icon"/>
        </div>
     </div>

     <div className="blog">
        <h2>Some of my posts</h2>
        <div className="space-y-8">
            {blogPosts.map(({id,image,title,date,link})=>(
                <div key={id} className="blog-post">
                    <div className="md:col-span-2 w-full">
                        <img src={image} alt={title} />
                    </div>

                    <div className="content">
                        <p>{date}</p>
                        <h3>{title}</h3>
                        <a href={link} target="_blank" rel="noopener">
                            Check out the full post <MoveRight className="icon-hover"/> 
                        </a>
                    </div>
                </div>
            ))}
        </div>
     </div>
    </>
  );
};
const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;
