"use client";

import Image from "next/image";
import Container from "../container";
import { ChevronDown, Instagram } from "lucide-react";
import { FaFacebookF, FaHeart, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[1px] bg-[#EBEBEB]" />
      <Container className="mt-20">
        <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row justify-between w-full">
          <div className="flex flex-col">
            <Image
              src={"/Logo.png"}
              alt=""
              width={92}
              height={20}
              className="mb-6"
            />
            <p className="font-normal text-[#555555]">
              268 St, South New York/NY 98944, United States
            </p>
            <p className="font-normal my-2 text-[#555555]">+222-1800-2628</p>
            <p className="font-normal text-[#555555]">
              blueskytechcompany@gmail.com
            </p>

            <div className="flex my-5 gap-x-3">
              <div className="border border-[#555555] p-3 rounded-full">
                <Instagram size={12} />
              </div>
              <div className="border border-[#555555] p-3 rounded-full">
                <FaTiktok size={12} />
              </div>
              <div className="border border-[#555555] p-3 rounded-full">
                <FaYoutube size={12} />
              </div>
              <div className="border border-[#555555] p-3 rounded-full">
                <FaXTwitter size={12} />
              </div>
              <div className="border border-[#555555] p-3 rounded-full">
                <FaFacebookF size={12} />
              </div>
            </div>
            <div className="flex items-center ">
              <div className="size-9 rounded-full bg-[#5A31F4] flex justify-center items-center ">
                <FaHeart size={14} color="white" />
              </div>
              <p className="text-[#555555] font-semibold ml-5">
                Follow on <span className="text-[#111111]">shop</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-[#111111] uppercase">
              Hot Categories
            </h3>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Special Offers
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Performance
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                T-shirts
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Underwear
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Top Brands
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Exclusive
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-[#111111] uppercase">
              Customer Service
            </h3>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Privacy Policy
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Refund Policy
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Shipping & Return
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Term & Conditions
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Advanced Search
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Theme FAQs
              </p>
              <p className="hover:ml-2 hover:text-[#111111] hover:cursor-pointer text-[#555555]">
                Store Locations
              </p>
            </div>
          </div>

          <div className="flex flex-col md:w-[450px]">
            <h3 className="font-semibold text-[#111111] uppercase">
              Sign Up to Newsletter
            </h3>
            <p className="text-[#555555] mt-5">
              Enter your email address to get $10 off your first order and free
              shipping. Updates information on Sales and Offers.
            </p>
            <div className="flex w-full justify-between mt-8">
              <input
                type="text"
                className="flex md:flex-1 border rounded-full pl-4"
                placeholder="Enter your email"
              />
              <button className="md:ml-3 px-5 uppercase font-semibold bg-black md:px-8 py-3 rounded-full text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-20">
        <div className="flex flex-col w-full ">
          <div className="flex w-full h-[1px] bg-[#EBEBEB]" />
          <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row items-center justify-between my-10 text-[#555555]">
            <div className="flex gap-x-4">
              <p className="flex items-center">
                English <ChevronDown className="ml-2" size={14} />
              </p>
              <p className="flex items-center">
                United States (USD $) <ChevronDown className="ml-2" size={14} />
              </p>
            </div>
            <div className="flex">© 2023 Umino Store. All Rights Reserved.</div>
            <Image src={"/payment.png"} alt="" width={331} height={26} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
