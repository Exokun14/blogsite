"use client";

import { NavigationBar } from "./components/navigationcomponents";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <NavigationBar />

      <div className="w-full min-h-[90vh] flex flex-col items-center gap-2">

        <div className="px-[10vh] mt-[12.5vh]">
          <h1>Say hello to the world, share your passions</h1>
        </div>

        <h3>Blogging and sharing made easy.</h3>

        <div className="mt-[3vh]">
          <Link href={"/pages/register"}>
            <button className="button">Create your blog</button>
          </Link>
        </div>
        
      </div>
      
    </div>
  );
}
