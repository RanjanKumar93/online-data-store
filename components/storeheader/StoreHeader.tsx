"use server";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";

async function StoreHeader() {
  const user = await currentUser();
  return (
    <div className="flex justify-between items-center p-6 md:px-20 shadow-sm">
      <span className="text-2xl font-medium">Data-Store</span>
      <div className="flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent outline-none w-full" />
        <Search />
      </div>

      <div className="flex gap-5">
        {!user ? (
          <>
            <SignInButton mode="modal">
              <Button variant="outline">Login</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>SignUp</Button>
            </SignUpButton>
          </>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </div>
  );
}

export default StoreHeader;
