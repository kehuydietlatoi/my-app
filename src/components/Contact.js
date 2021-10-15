import {MailIcon} from "@heroicons/react/solid";
import React from "react";
//lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0
export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <MailIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Contact
          </h1>
        <ul className="flex-wrap-m-4 title-font font-medium text-white">
          <li className="m-8"><p>Email: donghungcp98@gmail.com</p></li>
          <li className="m-8"><p>github: kehuydietlatoi</p></li>
        </ul>      
      </div>
    </section>
  );
}