import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/ui/navigation-menu";
import { Button } from "@/components/ui/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 h-16 flex justify-center ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-full">
        <div className="flex">
          <div className="flex-shrink-0 flex-col">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-black-300 text-white ml-4 text-base">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent className=" text-xs px-3 py-2 rounded-md  flex flex-col">
                    <NavigationMenuLink >Support</NavigationMenuLink>
                    <NavigationMenuLink>Help</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/price" legacyBehavior passHref>
                    <NavigationMenuLink className="text-black-300 text-white ml-4 text-base">Pricing</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="text-black-300 text-white ml-4 text-base">For Developers</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>
    <div className="mr-10 flex justify-center items-center">
      <Button className="h-10  text-xs text-cyan-50" variant={"blockPen"}>Account</Button>
    </div>
  </nav>
  
  );
}
