import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

export function Header() {
  return (
    <div className="flex h-14 bg-gray-800 justify-between rounded-full items-center px-4">
      <div className="flex space-x-2 items-center">
        <Avatar>
          <AvatarImage
            className="rounded-full w-8 h-8"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>Bruno Branco</AvatarFallback>
        </Avatar>
        <h1 className="text-lg">Bruno Branco</h1>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li>Text 1</li>
          <li>Text 2</li>
          <li>Text 3</li>
        </ul>
      </nav>
      <div className="flex space-x-6">
        <h1>Test</h1>
        <h1>Test</h1>
      </div>
    </div>
  );
}
