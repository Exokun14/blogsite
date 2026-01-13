import { NavigationBar } from "../../components/navigationcomponents";
import { SetUserName, SetUserProfilePicture, SetUserGreeting } from "../../components/userdetails";
import { SetBlogEntry } from "../../components/blogcomponents";

export default function About(){
    return(
        <div>
            <div>About page</div>

            <SetUserProfilePicture/>

            <div>
                <h1 className="flex flex-col"><SetUserGreeting /></h1>
                <h3> <SetUserName /></h3>
            </div>

            <div className="flex flex-col">
                <SetBlogEntry />
            </div>

            <NavigationBar />
        </div>
    );
}