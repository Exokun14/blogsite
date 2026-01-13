"use client";

import Image from "next/image";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";

type BlogDetails = {
    id: number
    blogTitle: string
    description: string
}

type BlogPost = {
    blog: BlogDetails[]
}

type Icon = {
    src: string;
}

type StoredImage = {
    src: string
}

export function SetIcon({src}: Icon) {
    return (
        <div>
            <Image width={60} height={60} src={src} alt="" />
        </div>
    );
}

export function SetImage({src}: StoredImage) {
    return (
        <div>
            <Image src={src} alt="Set your picture here" width={100} height={100}/>
        </div>
    );
}

export function SetBlogTitle() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-[24px] font-semibold">Set Blog Title</p>
            <p className="text-[16px]">This will be the title of your first blog.</p>
        </div>
    );
}

function GetBlogTitle() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-[24px] font-semibold">Set Blog Title</p>
        </div>
    );
}

export function SetBlogEntry() {
    return (
        <div>
            <SetImage src="/icons/home.svg" />
            <GetBlogEntryIntro />
        </div>
    );
}

function GetBlogEntryIntro() {
    const blogTitle = "Blog Title"
    const description = "Blog Description"

    return (
        <div>
            <h1>{blogTitle}</h1>
            <p>{description}</p>
        </div>
    );
}

export function DisplayBlogList() {

    const [DisplayBlogState, SetDisplayBlogState] = useState(0)

    if (DisplayBlogState === 0) {
        return (
            <div onClick={() => SetDisplayBlogState(1)}>
                <ContractBlogListEntry />
            </div>
        );
    }
    else if (DisplayBlogState === 1) {
        return (
            <div className="w-[15vw] h-[15vh]" onMouseLeave={() => SetDisplayBlogState(0)}>
                <div>
                    <ExpandBlogListEntry />
                </div>
            </div>
        );
    }
}

function ContractBlogListEntry() {
    return (
        <div>
            <div>
                <GetBlogTitle />
            </div>
        </div>
    );
}

function ExpandBlogListEntry() {
    const [BlogEntries, SetBlogEntries] = useState(6)

    return (
        <div className="flex flex-col items-left h-[18vh] w-[12.5vw] border-1 border-gray-300">
            <div>
                <p className="text-lg text-gray-500 mt-2 mb-2 px-3">Your Blogs</p>
            </div>

            <div className="max=h-[8vh] h-[8vh] overflow-y-auto overflow-x-auto px-3 on hover:bg-gray-100 transition duration-300 ease-in-out" gap-4>
                {Array.from({ length: BlogEntries }).map((_, index) => (
                    <GetBlogTitle key={index} />
                ))}
            </div>

            <div className="min-w-[full] border-t border-black px-4">
                <p className="text-lg   mt-3"> New Blog...</p>
            </div>
        </div>
    );
}

export function NewPostButton() {
    return (
        <div>
            <a href="/pages/createpost">
                <button>New Post</button>
            </a>
            
        </div>
    );
}

export function BlogList() {
    const [BlogEntries, SetBlogEntries] = useState(6)

    return(
        <div>
            {Array.from({ length: BlogEntries }).map((_, index) => (
                    <div className="flex overflow-y-auto">
                        <div className="flex mx-auto">
                            <SetImage src=".icons/home.svg" />
                            <GetBlogTitle key={index} />
                        </div>

                        <div className="flex mx-auto">
                            <p>Discard</p>
                            <p>Name</p>
                        </div>

                    </div>

            ))}
        </div>
    );
}

export function DraftPost() {
    return (
        <div>
            
        </div>
    );
}