import Image from "next/image";

type BlogDetails = {
    id: number
    blogTitle: string
    description: string
}

export function SetImage() {
    return(
        <div>
            <Image src="../logo.svg" alt="Set your picture here" width={100} height={100}/>
        </div>
    );
}

export function SetBlogEntry() {
    return(
        <div>
            <SetImage />
            <GetBlogEntryIntro />
        </div>
    );
}

function GetBlogEntryIntro() {
    const [blogTitle, description] = "Test"
    return (
        <div>
            <h1>{blogTitle}</h1>
            <p>{description}</p>
        </div>
    );
}