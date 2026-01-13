import Link from "next/link";
import { SetIcon } from "./blogcomponents";

export function NavigationBar() {
    return(
        <div className="border-b-1 border-gray-300">
            <div className="navbar h-[10vh] w-full flex items-center">
                <div className="flex h-full  w-full mx-auto items-center justify-between px-[1vw]">

                    <div className="flex flex-col items-center gap-1">
                        <SetIcon src="/icons/home.svg"/>
                        <Link href="/pages/explore">Explore</Link>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <SetIcon src="/icons/home.svg"/>
                        <Link href="/">Home</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}