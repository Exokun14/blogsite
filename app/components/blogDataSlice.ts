'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../supabaseClient";

type BlogDetails = {
  id: number;
  blogTitle: string;
  description: string;
  imgSrc?: string;
};

const initialState: BlogDetails[] = []

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<BlogDetails[]>) => {
      return action.payload
    }
  },
});


export function useFetchUserBlogs() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (data) {
        const formattedBlogs = data.map((b: any) => ({
          id: b.id,
          blogTitle: b.blogTitle,
          description: b.blogDescription,
          imgSrc: b.coverImage || "",
        }));

        dispatch(setBlogs(formattedBlogs));
      }
    };

    fetchBlogs();
  }, [dispatch]);
}

export const { setBlogs} = blogSlice.actions;
export default blogSlice.reducer
