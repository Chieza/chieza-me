//import React from "react";
import meImg from "../../assets/images/me_480x600.jpg";
import ExpandableText from "../common/ExpandableText";
import { GradientButton } from "../buttons";

export default function MeCard() {
  return (
    // Card Start
    <div
      className={`
        flex
        flex-col
        items-center
        p-4
        gap-4
        bg-neutral-800
        rounded-2xl
        overflow-hidden
        shadow-2xl
        shadow-purple-500/8
        max-w-[1200px]
        border
        border-neutral-700
        text-white
        lg:flex-row
        lg:p-8
        lg:gap-8
      `}
    >
      {/* IMAGE */}
      <img
        src={meImg}
        alt="Me"
        className={"object-cover w-full max-w-[240px] h-auto rounded-lg"}
      />

      {/* CONTENT */}
      <div className="flex flex-col gap-4 lg:gap-8">
        <h1 className="text-center lg:text-left text-2xl font-bold lg:text-4xl">
          5 years hiking the Design Mountain
        </h1>

        <ExpandableText
          text={
            "From designing scalable solutions for logistics and retail to enhancing user flows in finance and security systems, my experience spans industries and platforms. In the process of migrating to UX Design, my developer background has been a game changer, making it easier to align business demands with functional interfaces"
          }
          initialLines={1}
          responsiveLines={{ lg: 4 }}
          className="text-base lg:text-lg"
        />
        <GradientButton to="/about" className="w-full lg:w-auto">
          My Trajectory →
        </GradientButton>
      </div>
    </div>
  );
}
