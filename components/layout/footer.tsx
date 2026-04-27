import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-zinc-900 via-zinc-900 to-black border-zinc-800 py-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Link href="/" className="font-bold text-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Haifa Khiari
            </span>
          </Link>
          <p className="text-sm text-zinc-500 mt-2">
            © {new Date().getFullYear()} Haifa Khiari . All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/haifa17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-purple-500 hover:bg-white text-white hover:text-purple-500"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/haifa-khiari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-purple-500 hover:bg-white text-white hover:text-purple-500"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:haifa.khiari@outlook.fr">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-purple-500 hover:bg-white text-white hover:text-purple-500"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
