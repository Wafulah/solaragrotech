"use client";

import Link from "next/link";
import Image from "next/image";
import { LuPhone, LuMail } from "react-icons/lu";

const Footer = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about Us",
    },
    {
      id: 3,
      link: "Our Services",
    },
    {
      id: 4,
      link: "Pumps",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div
        style={{ backgroundColor: "#020624" }}
        className=" w-11/12 mx-auto mt-10"
      >
        <div className="mx-auto lg:w-1/3  flex flex-col justify-center h-full w-3/4">
          <h1 className="text-white text-3xl font-black lg:pt-1 pt-10">
            Contact Us
          </h1>
          <div className="flex w-full justify-between lg:mt-5 mt-10">
            <LuPhone
              style={{ color: "rgb(3, 178, 82)" }}
              className="text-white text-3xl"
            />
            <p className="text-white pr-2">0794212696</p>
          </div>
          <div className="flex w-full justify-between lg:mt-5 mt-10">
            <LuMail
              style={{ color: "rgb(3, 178, 82)" }}
              className="text-white text-3xl"
            />
            <p className="text-white pr-2">solaragrotech@gmail.com</p>
          </div>
        </div>
      </div>
      <div className=" p-4 text-white w-full text-center">
        <p className="text-white opacity-50 text-sm">
          &copy; SolarAgroTech Copyright 2023
        </p>
      </div>
    </>
  );
};

export default Footer;
