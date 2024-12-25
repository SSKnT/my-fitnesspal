"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { createCommunityPostAPI } from "@/APIs/api";


const RightSidebar = () => {
  return (
    <aside className="w-[24%] h-full hidden md:flex flex-col fixed right-0 py-4 px-2 overflow-y-auto">
      <div className="flex flex-col rounded-2xl space-y-6 p-4 bg-gray-600 bg-opacity-25 shadow-lg">
        <PostSection />
        <ContributorSection />
        <QuickLinks />
        <FooterSection />
      </div>
    </aside>
  );
};

const PostSection = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      console.log(title, image, content);
      const response = await createCommunityPostAPI(title, image, content);
      console.log(response)
      if(response.status === 201){
        alert("Post created successfully");
      }
      else{ 
        alert("Error creating post");
      }
    } catch(error){
      alert("Error creating post");
    }
  }
  
  return (
    <div className="flex items-center justify-between p-2 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl shadow-md">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center space-x-2 bg-transparent hover:bg-transparent text-md text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span>Create Post</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white border-0">
          <DialogHeader>
            <DialogTitle className="text-white">Create a New Post</DialogTitle>
            <DialogDescription className="text-gray-400">
              Fill out the details below to share your post with the community.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={(e) => {handleSubmit(e)}}>
            <div>
              <label htmlFor="title" className="text-sm text-gray-400">
                Title
              </label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post Title"
                className="bg-gray-700 text-white placeholder-gray-500 border-transparent focus:border-pink-400 focus:ring-pink-200 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div>
              <label htmlFor="image" className="text-sm text-gray-400">
                Image URL
              </label>
              <Input
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                className="bg-gray-700 text-white placeholder-gray-500 border-transparent focus:border-pink-400 focus:ring-pink-200 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div>
              <label htmlFor="content" className="text-sm text-gray-400">
                Content
              </label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write something interesting..."
                className="bg-gray-700 text-white placeholder-gray-500 border-transparent focus:border-pink-400 focus:ring-pink-200 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Button type="submit" className="bg-pink-600 hover:bg-pink-700">
              Create Post
            </Button>
          </form>
          <DialogFooter>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const AnnouncementSection = () => {
  return (
    <div className="flex flex-col p-4 bg-gray-500 bg-opacity-30 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-3 text-gray-300">Announcements</h2>
      <ul className="space-y-4">
        <li className="p-3 bg-gray-800 rounded-md shadow-sm text-gray-400">
          <h3 className="text-md font-medium text-white mb-1">New Feature Launch</h3>
          <p className="text-sm">We’ve added a new messaging feature. Check it out now!</p>
        </li>
        <li className="p-3 bg-gray-800 rounded-md shadow-sm text-gray-400">
          <h3 className="text-md font-medium text-white mb-1">Scheduled Maintenance</h3>
          <p className="text-sm">The platform will be down for maintenance this Saturday from 2 AM to 4 AM.</p>
        </li>
        <li className="p-3 bg-gray-800 rounded-md shadow-sm text-gray-400">
          <h3 className="text-md font-medium text-white mb-1">Community Event</h3>
          <p className="text-sm">Join us for a live Q&A session this Friday at 6 PM.</p>
        </li>
      </ul>
    </div>
  );
};

const ContributorSection = () => {
  return (
    <div className="flex flex-col p-4 bg-gray-500 bg-opacity-30 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-3 text-gray-300">Top Contributors</h2>
      <ul className="space-y-3">
        {[
          { name: "John Doe", rating: "4.5", img: "https://randomuser.me/api/portraits/men/1.jpg", border: "blue-500" },
          { name: "Jane Smith", rating: "4.7", img: "https://randomuser.me/api/portraits/women/2.jpg", border: "pink-500" },
          { name: "Mike Johnson", rating: "4.6", img: "https://randomuser.me/api/portraits/men/3.jpg", border: "green-500" },
        ].map((contributor, index) => (
          <li key={index} className="flex items-center space-x-4">
            <img
              src={contributor.img}
              alt="avatar"
              className={`w-10 h-10 rounded-full border-2 border-${contributor.border}`}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">{contributor.name}</span>
              <span className="text-xs text-gray-400">Rating: {contributor.rating}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const QuickLinks = () => {
  return (
    <div className="flex flex-col p-4 bg-gray-500 bg-opacity-30 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-3 text-gray-300">Quick Links</h2>
      <ul className="space-y-2">
        {[
          { name: "Community Guidelines", link: "/guidelines" },
          { name: "Help & Support", link: "/support" },
          { name: "Submit Feedback", link: "/feedback" },
        ].map((item, index) => (
          <li key={index} className="text-sm text-blue-400 hover:underline">
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterSection = () => {
  return (
    <div className="flex justify-center pr-4 pl-4 pt-3  text-xs text-gray-400 border-t border-gray-600">
      © 2024 My FitnessPal
    </div>
  );
};

export default RightSidebar;
