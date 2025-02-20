import React from "react";
import Frame from "../assets/Frame 15.png";
import { Link } from "react-router-dom";
import Photo from "../assets/hans-isaacson-mn9p8kfsi3Y-unsplash (1).png";

export const Index = () => {
  return (
    <div className="bg-slate-100 w-full h-full">
      <header className="flex  items-center gap-3 justify-between px-12 py-4 ">
        <div>
          <Link to="/">
            <img src={Frame} alt="logo" />
          </Link>
        </div>

        <ul className="flex justify-center items-center gap-8">
          <li>
            <button className="underline">
              <Link>Bosh sahifa</Link>
            </button>
          </li>
          <li>
            <button className="underline">
              <Link>Statistikalar</Link>
            </button>
          </li>
          <li>
            <button className="underline">
              <Link>Sozlamalar</Link>
            </button>
          </li>
        </ul>
      </header>
      <div className=" flex justify-between  items-center p-10 ">
        <div className="border border-blue-500 w-full gap-6 flex justify-between items-center">
          <div className="flex w-8/12 flex-col">
            <h2 className="uppercase text-6xl">
              Maskan - benefits we provide and something else
            </h2>

            <p></p>
          </div>
          <div>
            <img src={Photo} alt="" className="w-full h-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
