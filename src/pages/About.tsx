import useDocumentTitle from "../hooks/useDocumentTitle";
import { SectionContentLayout } from "../components/layouts";
import { useSectionRegistry } from "../hooks/useSectionRegistry";
import {
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineClock,
  HiOutlineCalendar,
} from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import {
  ABugsLifeImg,
  KidsPaintImg,
  KidTibiaImg,
  KidMaintenanceImg,
  YoungTeacherImg,
  LeanInceptionImg,
  Summit2023Img,
  Summit2024Img,
} from "../assets/images/about";

export default function About() {
  // Page Title
  useDocumentTitle("About • Bruno");

  // Registering sections in NavHub
  useSectionRegistry("spark-section", HiOutlineSparkles, "Spark", 96);
  useSectionRegistry("devDesign-section", HiOutlineLightBulb, "DevDesign", 96);
  useSectionRegistry("career-section", IoGameControllerOutline, "Career", 96);
  useSectionRegistry("goals-section", GoGoal, "Goals", 96);

  return (
    <SectionContentLayout className="pt-16" contentClassName="gap-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <p className="text-white/64 font-medium">About</p>
        <h1 className="text-4xl/12 md:text-4xl/12 font-bold">
          From Pixels to Product
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-row items-center gap-1 text-white/64 font-light">
            <HiOutlineClock />
            <p className="text-xs">Total reading time: 6 min</p>
          </div>
          <div className="flex flex-row items-center gap-1 text-white/64 font-light">
            <HiOutlineCalendar />
            <p className="text-xs">Published: 6/11/2025</p>
          </div>
        </div>
      </div>

      {/* Section's Cards */}
      <div className="flex flex-col gap-16">
        {/* First Section: The Spark */}
        <section
          id="spark-section"
          className="flex flex-col overflow-hidden p-4 sm:p-8 gap-8 rounded-xl bg-neutral-800"
        >
          {/* Section Header */}
          <div className="flex flex-row items-center gap-2">
            <p className="font-medium">The Spark</p>
            <div className="flex flex-row gap-1 text-white/64 font-light">
              <HiOutlineClock />
              <p className="text-xs">1 min</p>
            </div>
          </div>

          {/* Section Content */}
          <div className="flex flex-col gap-2">
            <p className="text-white/64 font-medium">Super Nintendo</p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>
                1996: A future tech guy was born... He'd never guess his early
                fascination!
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white/64 font-medium">The Neighborhood</p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>
                2002 (6-7 yo): My childhood friend and neighbor got the first
                computer on our block. No internet yet, but my curiosity led me
                to explore Paint almost daily. While my friend drew cartoon
                characters, I meticulously crafted pixel-detailed maps, like the
                map of Brasil. This certainly cultivated my detail-oriented
                side.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white/64 font-medium">
              First PC & Discovering Tibia
            </p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>
                2003 (7-8 yo): Our family got our own computer, continuing my
                Paint artistry. My cousins, however, had the internet. Riding my
                bike 4km almost daily to their house, I first encountered Tibia.
                What amazed me was the possibility of connecting globally and,
                coming from 2D Paint, Tibia's visually detailed 2D world utterly
                enchanted me.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white/64 font-medium">Internet Arrives! BOOM!</p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>
                2005 (9 yo): We got internet. First thing: a Tibia account. My
                online gaming journey began with "Layd Infernal," a female
                knight chosen to avoid in-game bullying. An early strategic
                choice to avoid PVP! Yep, there was a time where the
                gaming-community was nicer to the ladies than to the boyz :(
              </li>
            </ul>
          </div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <img
                src={ABugsLifeImg}
                className="w-full h-auto rounded-lg border border-white/6"
              />
            </div>
            <div>
              <img
                src={KidsPaintImg}
                className="w-full h-auto rounded-lg border border-white/6"
              />
            </div>
          </div>
        </section>

        {/* Second Section: The Unconscious Developer & Designer */}
        <section
          id="devDesign-section"
          className="flex flex-col overflow-hidden p-4 sm:p-8 gap-8 rounded-xl bg-neutral-800"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="font-medium">The Unconscious Developer & Designer</p>
            <div className="flex flex-row gap-1 text-white/64 font-light">
              <HiOutlineClock />
              <p className="text-xs">2 min</p>
            </div>
          </div>

          {/* Section Content */}
          {/* First Block */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex grow flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">Tibia OT Servers</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2006-2007 (10-11 yo): A few months later, my parents decided
                    to move and it was closer to my cousins, like as neighbors,
                    it meant "deep-dive" into Tibia for me! We dreamed of
                    opening our own Tibia OT (Open Tibia) Server on our home PC
                    with 200kbps internet. This silently birthed my developer
                    side. We editing files, modifying existing code, a
                    foundational step in understanding system logic.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">Map Editor</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2006-2007 (10-11 yo): We discovered Tibia Map Editor, a
                    software to "draw" maps. I started editing Tibia Global
                    maps, then learned to switch OT Server's map to custom-built
                    maps. Hours and hours were spent creating these. Not
                    knowing, this fostered my empathy, designer, and user
                    experience instincts. Adding to that, I was "coding" new
                    game-spells without knowing what "coding" was. I was just
                    doing it.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">Immersion</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2007-2011 (11-15 yo): My deep dive into Tibia involved
                    learning organization, code and design, cross-cultural
                    communication, and mastering game mechanics. I earned the
                    nickname "TibiaWiki" for my love of discovering quests, lore
                    and the game mechanics.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-none">
              <img
                src={KidTibiaImg}
                className="w-full max-w-md h-auto rounded-lg border border-white/6"
              />
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-none">
              <img
                src={KidMaintenanceImg}
                className="w-full max-w-md h-auto rounded-lg border border-white/6"
              />
            </div>
            <div className="flex grow flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">First Hobby Begins</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2007-2011 (11-15 yo): My curiosity drove me to assemble and
                    disassemble our first PC, without prior knowledge, just to
                    see how it looks and works inside. As a "search first, then
                    act" guy, I constantly used Google and YouTube. The biggest
                    challenge: not breaking our only PC! This hobby evolved.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">My Own PC</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2012 (16 yo): I bought and assembled my own PC (AMD FX,
                    famously hot at that time!). Making it filled me with
                    immense pride, a testament to my growing technical skills.
                    Later I was helping friends with theirs, gaining deep
                    knowledge of hardware and software installations.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">Side Hustle</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2014 (18 yo): By 18, my PC maintenance hobby evolved into a
                    side hustle. Helping friends with cleaning, preventive
                    maintenance, software updates, and OS resets became so
                    time-consuming I needed to start charging a little, even
                    though I loved it.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section: From Gamer to Professional: My Path into Tech */}
        <section
          id="career-section"
          className="flex flex-col overflow-hidden p-4 sm:p-8 gap-8 rounded-xl bg-neutral-800"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="font-medium">From Tech Guy to Tech Career</p>
            <div className="flex flex-row gap-1 text-white/64 font-light">
              <HiOutlineClock />
              <p className="text-xs">1 min</p>
            </div>
          </div>

          {/* Section Content */}
          {/* First Block */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-none">
              <img
                src={YoungTeacherImg}
                className="w-full max-w-md h-auto rounded-lg border border-white/6"
              />
            </div>
            <div className="flex grow flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">Defining My Future</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2012-2014 (16-18 yo): The need to make a decision for my
                    career path was getting closer. My lifelong familiarity with
                    tech, its ability to make my eyes "shine" on every
                    discovery, my deep curiosity and perception of technology's
                    immense potentials sealed my choice. I always thought big
                    about tech's future as a whole.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">A Farewell to Tibia</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2014 (18 yo): After 10 years, I sold my Tibia account to pay
                    for my driver's license, symbolic end to an era! Many
                    memorable screenshots that, now, are encrypted on an old HD
                    due to my dumbness, awaiting future tech to unlock them.
                    Please, I need them back! 🥲
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">
                  University & The Remote Dream
                </p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2015 (19 yo): I began my Bachelor's in Information Systems
                    at UFES, choosing it for its broad IT vision covering coding
                    and layout, unlike more focused engineering or science
                    degrees. My goal was always clear to me: start as a trainee,
                    gain experience, and eventually work remotely with autonomy.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col gap-2">
            <p className="text-white/64 font-medium">Early Career</p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>
                2018 (22 yo): Started my first internship at the City Hall as an
                IT Support for government welfare programs.
              </li>
              <li>
                2019 (23 yo): Switched from internship to instructor of Digital
                Literacy, teaching to diverse audiences, including the elderly
                and people with disabilities.
              </li>
              <li>
                2020 (24 yo): Bachelor's Degree & Domótica Thesis. Completed my
                degree in 2020. My thesis on "Domótica" (home automation,
                systems for controlling and automating a home's activities like
                lighting, climate, security, etc...) was, a clear indication of
                my strong UX inclination, and again, unknowingly to me at the
                time, as it centered on improving daily human interaction with
                technology.
              </li>
              <li>
                My early career at C2TI started as a Developer Trainee. However,
                my bosses soon realized I spent more time worrying about UI and
                UX than just producing code. This led them to introduce me to
                UX/UI.
              </li>
            </ul>
          </div>
        </section>

        {/* Fourth Section: Present & Future Aspirations */}
        <section
          id="goals-section"
          className="flex flex-col overflow-hidden p-4 sm:p-8 gap-8 rounded-xl bg-neutral-800"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="font-medium">Present & Future Aspirations</p>
            <div className="flex flex-row gap-1 text-white/64 font-light">
              <HiOutlineClock />
              <p className="text-xs">2 min</p>
            </div>
          </div>

          {/* Section Content */}
          {/* First Block */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-none">
              <img
                src={LeanInceptionImg}
                className="w-full max-w-md h-auto rounded-lg border border-white/6"
              />
            </div>
            <div className="flex grow flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">
                  C2TI & First UX Projects
                </p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2020-2022: At C2TI, I quickly progressed from Developer
                    Trainee to UX/UI Designer Trainee and then Product Designer.
                    My proudest project involved redesigning an internal tool,
                    where I led my first User Research, UI Testing, and User
                    Interviews. I was intuitively applying UX principles even
                    before knowing all the formal terms.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">
                  Globalsys & International Experience
                </p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2022-2025: Joined Globalsys as a UX/UI Designer Jr, evolving
                    till Product Designer Analyst. Gained extensive experience
                    helping and then leading design initiatives across diverse
                    industries like ecommerce, retail, health, security,
                    agriculture, logistics... Designing for web, desktop,
                    mobile, smartwatch and embedded systems. I learned how to
                    run projects independently, often as the UX/UI role, that
                    was still maturing within the tech community. Also had my
                    first contact with a international project.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col gap-2">
            <p className="text-white/64 font-medium">
              California Exchange Programs
            </p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>
                2023-2025: I participated in two transformative 4-month exchange
                programs in Truckee, CA (Winters 2023/24 & 2024/25). This was a
                life-changing experience where I evolved from an Entry Cook to
                Sub Chef in the second season, gained responsibilities in team
                coordination and problem-solving in high-pressure environments,
                and most importantly, developed profound communication,
                adaptability, and leadership skills in multicultural
                environments. I worked closely with people from Brazil, USA,
                Jamaica, Argentina, Chile, Peru, Costa Rica, Colombia, Paraguay,
                Uruguay, Guam, Hawaii, the list is long... Enriching my cultural
                knowledge and personal growth.
              </li>
            </ul>
          </div>

          {/* Fourth Block: Images */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <img
                src={Summit2023Img}
                className="w-full h-auto rounded-lg border border-white/6"
              />
            </div>
            <div>
              <img
                src={Summit2024Img}
                className="w-full h-auto rounded-lg border border-white/6"
              />
            </div>
          </div>

          {/* Fifth Block */}
          <div className="flex flex-col gap-2">
            <p className="text-white/64 font-medium">Remote & Growth</p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>
                Present Goals: My immediate goal is to secure a remote,
                English-speaking role overseas.
              </li>
              <li>
                How am I doing it? With save0d funds from the Exchange Programs,
                I'm now heavily reiforcing my design foundation with studies,
                networking, etc... Actively returning to coding to build my own
                website, showcasing my holistic understanding of product
                development.
              </li>
              <li>
                If overseas, I'm open to a Junior role so it allows me to
                solidify my design foundation. My aspiration is to combine
                design and development skills, bridging the gap between design,
                tech teams, and business needs.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </SectionContentLayout>
  );
}
