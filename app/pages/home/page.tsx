import { BlogList, DisplayBlogList, NewPostButton } from "@/app/components/blogcomponents";
import { NavigationBar } from "@/app/components/navigationcomponents"

export default function HomePage() {
    return(
        <div>
            <NavigationBar />

            <div className="w-full h-[90vh] flex items-center">

                <div className="h-full w-[15vw] bg-white-200 flex flex-col items-center bg-white border-r border-gray-300    ">
                    <p>Hii</p>

                    <DisplayBlogList />
                    <NewPostButton />
                </div>

                <div className="h-full w-[85vw] bg-white-300 flex flex-col items-center">
                    <p>HELLO WORLD</p>

                    <div className="w-[60vw] h-[70vh] mt-10 justify flex flex-col items-center">
                        <BlogList />
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}