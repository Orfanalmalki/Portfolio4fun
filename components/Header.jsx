"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { IoLogoWebComponent } from "react-icons/io5";
import { DownloadButton } from "@/components/ui/downloadButton";

const Header = () => {
  return (
    <header className="py-8 xl:pb-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" items-center gap-8">
          <Link href="/" className="logo-container">
            <h1 className="text-4xl font-semibold flex">
              <span className="text-accent">
                <IoLogoWebComponent />
              </span>
              rfan{" "}
            </h1>
            {/* <Image
              src="/files/logo1.png" 
              alt="Logo"
              layout="fixed"
              width={200}
              height={100}
              className="logo"
            /> */}
          </Link>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <DownloadButton className="uppercase flex items-center gap-2" />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
