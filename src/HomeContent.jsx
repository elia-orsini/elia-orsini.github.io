import React from "react";
import Image from "./utils/Image";

export default function HomeContent({ ...props }) {
  return (
    <div className="w-full mt-10 sm:mt-44 text-left columns-1 tracking-tight">
      <div>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          hiya im elia{" "}
          <span className="-ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400">
            (el)
          </span>
        </p>
        <div className="text-lg mt-10 sm:text-xl font-bold">
          Please check out my works !
          <span className="ml-2 text-sm font-bold text-gray-400">
            and send me an email if u like them ;)
          </span>
        </div>

        <p className="text-lg mt-10 sm:text-lg font-bold">
          things you might have seen around
        </p>
        <div className="">
          <div className="my-auto columns-1 sm:columns-3 w-full h-max mt-6 font-bold leading-4 text-sm">
            <div className="">
              <a href="https://youtu.be/lbwhHxxFdDE">
                <Image src="/greenpeace.jpeg" />
              </a>
            </div>
            <div className="my-4">
              <a href="https://www.instagram.com/p/CPYFLIHhrUK/">
                <Image src="/hor.jpg" />
              </a>
            </div>
            <div className="my-4">
              <a href="https://het-berlin.bandcamp.com/album/het007-tigerhead-silk-road-ep">
                <Image src="/tigerhead.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
