import React from "react";
import { Link } from "react-router-dom";
import mint from "../assets/Group.svg";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="h-auto bg-primary text-white md:w-auto lg:w-full py-10">
      <div className="flex justify-center items-center flex-row-reverse">
        <hr className="w-[40%] h-3 mr-2 md:w-[50%]" />

        <h1 className="text-3xl font-bold">نعناع</h1>
        <img className="w-16 h-16" src={mint} alt="mint" />
        <hr className="w-[40%] h-3 md:w-[50%] " />
      </div>
      <div className="h-[20%] flex justify-around items-center md:justify-center md:gap-16 text-xl py-5">
        <Link className="hover:underline" to="/doctor">
          الاطباء
        </Link>
        <Link className="hover:underline" to="/pharmacy">
          الصيدليات
        </Link>
        <Link className="hover:underline" to="/articles">
          المقالات
        </Link>
        <Link className="hover:underline" to="/about">
          حولنا
        </Link>
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:gap-10 mt-3">
        <a href="/">
          <FaFacebook className="lg:h-9 lg:w-9" />
        </a>
        <a href="/">
          <FaXTwitter className="lg:h-9 lg:w-9" />
        </a>
        <a href="/">
          <FaInstagram className="lg:h-9 lg:w-9" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
