import React from "react";
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Portfolio() {
  useDocumentTitle('Portfolio • Bruno')
  return (
    <>
      <div className="text-white p-8 w-full max-h-[1200]">
        Oh boy, this guy is gonna take me some time to get ready. Check out some
        projects I've participated: <br />
        <br />• C2TI Web Platform: improvements to the internal system and
        creation of new features. <br />
        <br />• Wine Mobile App: migration and redesign of the experience,
        moving from Adobe XD to Figma.
        <br />
        <br />• Sipolatti Website: complete eCommerce. Tablet App: tool for
        store salespeople. Mobile App: focused on furniture delivery logistics.{" "}
        <br />
        <br />• EJA (Jurong Aracruz Shipyard) Website: payment management
        system. <br />
        <br />• Farmly Website: social and marketplace platform for coffee
        exports. <br />
        <br />• Kora Health Web platform: dashboards and backoffice system for
        managing healthcare units. <br />
        <br />• VIX Tablet App: digital support for factory workers.
        <br />
        <br />• VIP Auctions Website (mobile first): platform for auctioning
        properties and vehicles. <br />
        <br />• Aluminum Profile Website: institutional showcase for aluminum
        distributor. <br />
        <br />• (Fully Confidential) Mobile App: social network for young sports talents. Desktop
        Platform: backoffice for brands, clubs and agents (Nike, Adidas, etc...).
        <br />
        <br />
      </div>
      <div className="p-8">
        <div className="text-white p-8 bg-red-700/64 rounded-2xl flex flex-col text-center">
          For anyone concerned, rest assured! I know that some of
          of the projects above are under confidentiality terms and will confirm whether I can publish any project
          before sharing it.
        </div>
      </div>
    </>
  );
}
