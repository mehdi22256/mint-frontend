import React from "react";
import { Link } from "react-router-dom";
import mint from "../assets/Group.svg";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="h-40 bg-primary text-white md:w-auto lg:w-full relative bottom-0">
      <div className="h-[50%] flex justify-center items-center flex-row-reverse">
        <hr className="w-[40%] h-3 mr-2 md:w-[50%]" />

        <h1>نعناع</h1>
        <img className="w-16 h-16" src={mint} alt="mint" />
        <hr className="w-[40%] h-3 md:w-[50%] " />
      </div>
      <div className="h-[20%] flex justify-around items-center md:justify-center md:gap-16">
        <Link className="hover:underline" to="/doctors">
          الاطباء
        </Link>
        <Link className="hover:underline" to="/pharmacies">
          الصيدليات
        </Link>
        <Link className="hover:underline" to="/articles">
          المقالات{" "}
        </Link>
        <Link className="hover:underline" to="/about">
          {" "}
          حولنا{" "}
        </Link>
      </div>
      <div className="hidden md:flex md:justify-center md:items-center md:gap-3 md:h-[30%]">
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaXTwitter />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Footer;
