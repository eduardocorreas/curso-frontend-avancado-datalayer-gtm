"use client";
import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";
import { useEffect } from "react";
import { sendToDatalayer } from "../utils";

declare global {
  interface Window {
      dataLayer:any;
  }
}

export function Intro() {

  function handleLinkIntro(){
    const mq = window.matchMedia('(max-width: 768px)').matches;
    if(mq){
      sendToDatalayer('click_link','click','mobile','Next.js')
    }else{
      sendToDatalayer('click_link','click','desktop','Next.js')
    }
  }

  useEffect(() => {
  },[]);

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <Link
          onClick={handleLinkIntro}
          target="_blank"
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </Link>{" "}
        and {CMS_NAME}.
      </h4>
    </section>
  );
}
