import React from "react";
import FlexMusicItems from "../FlexMusicItems";
import { FaShareAlt } from "react-icons/fa";

function SongInfo({ song }) {
  return (
    <div className="w-full xl:h-screen relative text-white">
      <img
        src={`/images/Background.jpg`}
        alt={song.title}
        className="w-full hidden xl:inline-block h-full object-cover"
      />
      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden ">
            <img
              src={`/images/Album.jpg`}
              alt={song.title}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10">
              {/* Title */}
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {song?.title}
              </h1>
              {/* flex-items */}
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <div className="flex-colo bg-subMain text-xs px-2 py-1">
                  {song.genre} 
                </div>
                <FlexMusicItems song={song} />
              </div>
              {/* description */}
              <p className="text-text text-sm leading-7">{song?.lyrics}</p>
              <div className="grid sm:grid-cols-5 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                {/* share */}
                <div className="col-span-1 flex-colo border-r border-border">
                  <button className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                    <FaShareAlt />
                  </button>
                </div>
                {/* language */}
                <div className="col-span-2 flex-colo font-medium text-sm">
                  <p>
                    Language :{" "}
                    <span className="ml-2 truncate">{song?.language}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongInfo;
