import Container from "@/components/container";
import Rating from "@/components/rating";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-col items-center justify-end w-full h-[550px] md:h-[810px] bg-cover bg-center bg-[url('/bg.jpg')]">
        <div className="flex w-full pl-5 md:px-10 justify-between ">
          <div className="flex">
            <div className="hidden md:flex items-center justify-center bg-white text-black hover:text-white hover:bg-black rounded-full size-[60px] hover:cursor-pointer">
              <ChevronLeft size={28} />
            </div>
            <div className="flex flex-col md:text-center md:w-[437px] md:items-center md:ml-36 md:-mt-28">
              <p className="font-normal text-[40px] md:text-[80px] leading-none">
                Stylish
              </p>
              <p className="text-nowrap font-normal text-[40px] md:text-[80px] leading-none">
                Top Trending
              </p>
              <p className="mt-5">{`So soft you don't want to take it off.`}</p>
              <button className="flex text-white mt-10">
                <p className="py-5 px-14 bg-black rounded-full">Explore Now</p>
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center bg-white text-black hover:text-white hover:bg-black rounded-full size-[60px] hover:cursor-pointer">
            <ChevronRight size={28} />
          </div>
        </div>
        <div className="flex gap-x-2 mb-5 mt-20 md:mt-60">
          <div className="size-2 rounded-full bg-black opacity-30" />
          <div className="size-2 rounded-full bg-black" />
          <div className="size-2 rounded-full bg-black opacity-30" />
        </div>
      </div>

      <Container>
        <div className="flex flex-col w-full items-center justify-center mt-20">
          <h2 className="font-normal text-[45px]">Featured Collections</h2>
          <p className="text-[#555555]">
            Elevate your style with our chic featured collection—where fashion
            meets flair effortlessly.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-9 mt-14 w-full">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col items-center justify-end rounded-3xl bg-[url('/sp1.jpg')] bg-cover w-full h-[300px] md:h-[730px]">
                <button className="px-4 md:px-12 text-black bg-white py-3 mb-5 rounded-full">
                  Clothing
                </button>
              </div>
              <div className="md:hidden flex flex-col items-center justify-end bg-[url('/sp2.jpg')] rounded-3xl bg-cover w-full h-[144px] md:h-[350px]">
                <button className="px-4 text-black bg-white py-3 mb-5 rounded-full">
                  Sunglasses
                </button>
              </div>
            </div>

            <div className="md:flex flex-col justify-between hidden">
              <div className="flex flex-col items-center justify-end bg-[url('/sp2.jpg')] rounded-3xl bg-cover w-full h-[144px] md:h-[350px]">
                <button className="px-12 text-black bg-white py-3 mb-5 rounded-full">
                  Sunglasses
                </button>
              </div>
              <div className="flex flex-col items-center justify-end bg-[url('/sp3.jpg')] rounded-3xl bg-cover w-full h-[144px] md:h-[350px]">
                <button className="px-12 text-black bg-white py-3 mb-5 rounded-full">
                  Bags
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex md:hidden flex-col items-center justify-end bg-[url('/sp3.jpg')] rounded-3xl bg-cover w-full h-[144px] md:h-[350px]">
                <button className="px-4 text-black bg-white py-3 mb-5 rounded-full">
                  Bags
                </button>
              </div>
              <div className="flex flex-col items-center justify-end rounded-3xl bg-[url('/sp4.jpg')] bg-cover w-full h-[300px] md:h-[730px]">
                <button className="px-4 md:px-12 text-black bg-white py-3 mb-5 rounded-full">
                  Sneaker
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col w-full items-center justify-center my-20">
          <h2 className="font-normal text-[45px]">New Arrivals</h2>
          <p className="text-[#555555]">
            Here’s some of our new arrivals products people are in love with.
          </p>
          <div className="md:hidden flex gap-x-4">
            <div className="flex items-center justify-center border border-[#EBEBEB] rounded-full size-10">
              <ChevronLeft />
            </div>
            <div className="flex items-center justify-center border border-[#EBEBEB] rounded-full size-10">
              <ChevronRight />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-9 mt-14 w-full">
            <div className="hidden md:flex flex-col relative">
              <Image
                src={"/img.png"}
                alt=""
                width={330}
                height={440}
                className="rounded-2xl mb-4"
              />
              <div className="absolute text-[13px] text-white rounded-full top-5 left-4 px-2 py-[2px] bg-[#757575]">
                Sold Out
              </div>
              <h3 className="font-normal mb-2">Square Textured Striped</h3>
              <Rating totalStars={5} rating={4} />
              <p className="mt-2 text-[14px] font-medium">$150.00</p>
              <div className="flex gap-x-1 mt-2">
                <div className="rounded-full border-2 border-black p-[2px]">
                  <div className="rounded-full size-5 bg-[#272D43]"></div>
                </div>
                <div className="rounded-full border-2 border-[#DDDDDD] p-[2px]">
                  <div className="rounded-full size-5 bg-[#A93A3A]"></div>
                </div>
                <div className="rounded-full border-2 border-[#DDDDDD] p-[2px]">
                  <div className="rounded-full size-5 bg-[#E1D6C7]"></div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col">
              <Image
                src={"/img-1.png"}
                alt=""
                width={330}
                height={440}
                className="rounded-2xl mb-4"
              />
              <h3 className="font-normal mb-2">Square Textured Striped</h3>
              <Rating totalStars={5} rating={5} />
              <div className="flex items-center mt-2">
                <p className="text-[14px] font-medium text-red-500 mr-2">
                  $150.00
                </p>
                <p className="text-[14px] font-medium line-through text-[#999999]">
                  $490.00
                </p>
              </div>
              <div className="flex gap-x-1 mt-2">
                <div className="rounded-full border-2 border-black p-[2px]">
                  <div className="rounded-full size-5 bg-[#EEEEEE]"></div>
                </div>
                <div className="rounded-full border-2 border-[#DDDDDD] p-[2px]">
                  <div className="rounded-full size-5 bg-[#D6D6D6]"></div>
                </div>
                <div className="rounded-full border-2 border-[#DDDDDD] p-[2px]">
                  <div className="rounded-full size-5 bg-[#C2CADF]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src={"/img-2.png"}
                alt=""
                width={330}
                height={440}
                className="rounded-2xl mb-4"
              />
              <h3 className="font-normal mb-2">Square Textured Striped</h3>
              <Rating totalStars={5} rating={5} />
              <p className="mt-2 text-[14px] font-medium">$150.00</p>
              <div className="flex gap-x-1 mt-2">
                <div className="rounded-full border-2 border-black p-[2px]">
                  <div className="rounded-full size-5 bg-[#08382C]"></div>
                </div>
                <div className="rounded-full border-2 border-[#DDDDDD] p-[2px]">
                  <div className="rounded-full size-5 bg-[#492919]"></div>
                </div>
                <div className="rounded-full border-2 border-[#DDDDDD] p-[2px]">
                  <div className="rounded-full size-5 bg-[#DFD3C2]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src={"/img-3.png"}
                alt=""
                width={330}
                height={440}
                className="rounded-2xl mb-4"
              />
              <h3 className="font-normal mb-2">Square Textured Striped</h3>
              <Rating totalStars={5} rating={5} />
              <p className="mt-2 text-[14px] font-medium">$150.00</p>
              <div className="flex gap-x-1 mt-2">
                <div className="rounded-full border-2 border-black p-[2px]">
                  <div className="rounded-full size-5 bg-[#08382C]"></div>
                </div>
                <div className="rounded-full border-2 border-[#DDDDDD] p-[2px]">
                  <div className="rounded-full size-5 bg-[#492919]"></div>
                </div>
                <div className="rounded-full border-2 border-[#DDDDDD] p-[2px]">
                  <div className="rounded-full size-5 bg-[#DFD3C2]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
