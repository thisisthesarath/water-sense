"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@/assets/icons";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { cn } from "@/lib/utils";
import { LogOutIcon } from "./icons";

export function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    fetch("https://server-water-sense.onrender.com/admins/all")
      .then((response) => response.json())
      .then((users) => {
        console.log("Fetched Users:", users);
  
        const loggedInUserId = localStorage.getItem("loggedInUser");
        console.log("Logged-in User ID:", loggedInUserId);
  
        const currentUser = users.find((admin: any) => admin.user_id === loggedInUserId);
        console.log("Current User:", currentUser);
  
        if (currentUser) {
          setUser({ name: currentUser.name, email: currentUser.email });
        } else {
          console.warn("No matching user found");
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);
  
  
  return (
    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
      <DropdownTrigger className="rounded align-middle outline-none ring-primary ring-offset-2 focus-visible:ring-1 dark:ring-offset-gray-dark">
        <span className="sr-only">My Account</span>

        <figure className="flex items-center gap-3">
          <figcaption className="flex items-center gap-1 font-medium text-dark dark:text-dark-6 max-[1024px]:sr-only">
            <span>{user ? user.name : "Loading..."}</span>

            <ChevronUpIcon
              aria-hidden
              className={cn(
                "rotate-180 transition-transform",
                isOpen && "rotate-0"
              )}
              strokeWidth={1.5}
            />
          </figcaption>
        </figure>
      </DropdownTrigger>

      <DropdownContent
        className="border border-stroke bg-white shadow-md dark:border-dark-3 dark:bg-gray-dark min-[230px]:min-w-[17.5rem]"
        align="end"
      >
        <h2 className="sr-only">User information</h2>

        <figure className="flex items-center gap-2.5 px-5 py-3.5">
          <figcaption className="space-y-1 text-base font-medium">
            <div className="mb-2 leading-none text-dark dark:text-white">
              {user ? user.name : "Loading..."}
            </div>

            <div className="leading-none text-gray-6">
              {user ? user.email : "Loading..."}
            </div>
          </figcaption>
        </figure>

        <hr className="border-[#E8E8E8] dark:border-dark-3" />

        <div className="p-2 text-base text-[#4B5563] dark:text-dark-6">
        <button
          className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("loggedInUser");
            window.location.reload(); // Refresh the page to clear any cached user data
          }}
        >
          <LogOutIcon />
          <span className="text-base font-medium">Log out</span>
        </button> 
        </div>
      </DropdownContent>
    </Dropdown>
  );
}
