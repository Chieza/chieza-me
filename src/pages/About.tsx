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
  useSectionRegistry("spark-section", HiOutlineSparkles, "Spark");
  useSectionRegistry("unconscious-section", HiOutlineLightBulb, "Unconscious");
  useSectionRegistry("career-section", IoGameControllerOutline, "Career");
  useSectionRegistry("goals-section", GoGoal, "Goals");

  return (
    <SectionContentLayout className="pt-16" contentClassName="gap-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4">
        <p className="text-white/64 font-medium">About</p>
        <h1 className="text-4xl/12 md:text-4xl/12 font-bold">
          My Tech Journey: From Pixels to Product
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
            <p className="font-medium">The Spark: Early Fascination</p>
            <div className="flex flex-row gap-1 text-white/64 font-light">
              <HiOutlineClock />
              <p className="text-xs">1 min</p>
            </div>
          </div>

          {/* Section Content */}
          <div className="flex flex-col gap-2">
            <p className="text-white/64 font-medium">The Super Nintendo Era</p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>1996: A future tech guy was born... He'd never guess!</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white/64 font-medium">
              The Neighborgood's First PC & Paint
            </p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>
                2002 (6-7 yo): A neighbor got the first computer on our block.
                No internet yet, but my curiosity led me to explore Microsoft
                Paint almost daily. While my friend drew cartoon characters, I
                meticulously crafted pixel-detailed maps, like the map of
                Brazil. This time cultivated my detail-oriented side.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white/64 font-medium">
              Our First PC & Discovering Tibia
            </p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>
                2003 (7-8 yo): Our family got our own computer, continuing my
                Paint artistry. My cousins, however, had the internet. Riding my
                bike 4km almost daily, I first encountered Tibia. What amazed me
                was the possibility of connecting globally. Coming from 2D
                Paint, Tibia's visually detailed 2D world utterly enchanted me.
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
                gaming-community was nice to the ladies :(
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

        {/* Second Section: The Unconscious Dev & Designer */}
        <section
          id="unconscious-section"
          className="flex flex-col overflow-hidden p-4 sm:p-8 gap-8 rounded-xl bg-neutral-800"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="font-medium">
              The Unconscious Developer & Designer: Seeds of Innovation
            </p>
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
                <p className="text-white/64 font-medium">
                  Tibia OT Servers & .lua files
                </p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2006-2007 (10-11 yo): Moving closer to cousins meant deeper
                    Tibia dives. We dreamed of opening our own Tibia OT (Open
                    Tibia) Server on our home PC with 200kbps internet. This
                    silently birthed my developer side. We edited .lua files
                    (e.g., "World type=pvp"), initially modifying existing code,
                    a foundational step in understanding system logic.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">Tibia Map Editor</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2006-2007 (10-11 yo): Soon after, we discovered Tibia Map
                    Editor, a tool to "draw" maps. I started editing Tibia
                    Global maps, then learned to configure our OT Server to
                    switch to custom-built maps. Hours were spent creating
                    these. Unbeknownst to me, this fostered my empathy,
                    designer, and user experience instincts. I was "coding" new
                    spells without knowing what "coding" was.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">
                  Continued Tibia Immersion
                </p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2007-2011 (11-15 yo): My deep dive into Tibia involved
                    learning organization, cross-cultural communication, and
                    mastering game mechanics. I earned the nickname "TibiaWiki"
                    for my love of discovering quests and lore.
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
                <p className="text-white/64 font-medium">
                  PC Maintenance Hobby Begins
                </p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2007-2011 (11-15 yo): My curiosity drove me to assemble and
                    disassemble our first PC, without prior knowledge, just to
                    see inside. As a "search first, then act" person, I
                    constantly used Google and YouTube. The biggest challenge:
                    not breaking our only PC! This hobby evolved; at 16, I built
                    my own PC and later helped friends, gaining deep knowledge
                    of hardware and software installations.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">Building My Own PC</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2012 (16 yo): I bought and assembled my own PC (an AMD FX,
                    famously hot!). This project filled me with immense pride, a
                    testament to my growing technical skills.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">
                  PC Maintenance Side Hustle
                </p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2014 (18 yo): By 18, my PC maintenance hobby evolved into a
                    side hustle. Helping friends with cleaning, preventive
                    maintenance, software updates, and OS resets became so
                    time-consuming I started charging a little, even though I
                    loved the work.
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
            <p className="font-medium">
              From Gamer to Professional: My Path into Tech
            </p>
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
                    2012-2014 (16-18 yo): The decision of my career path loomed.
                    My lifelong familiarity with tech, its ability to make my
                    eyes "shine," and my deep curiosity, coupled with
                    technology's immense potential for evolution and pervasive
                    impact, sealed my choice. I always thought big about tech's
                    future.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-white/64 font-medium">A Farewell to Tibia</p>
                <ul className="list-disc list-inside font-light text-sm">
                  <li>
                    2014 (18 yo): After 10 years, I sold my Tibia account to pay
                    for my driver's license – a symbolic end to an era! Many
                    memorable screenshots are now encrypted on an old hard
                    drive, awaiting future tech to unlock them.
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
                    at Multivix University, choosing it for its broad IT vision
                    covering coding and layout, unlike more focused engineering
                    degrees. My goal was clear: start as a trainee, gain
                    experience, and eventually work remotely with autonomy.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col gap-2">
            <p className="text-white/64 font-medium">
              Early Career & The UX Discovery
            </p>
            <ul className="list-disc list-inside font-light text-sm">
              <li>2018 (22 yo): Started my first internship.</li>
              <li>
                2019-2020: Worked as an IT & Digital Literacy Instructor at City
                Hall, providing IT support for government welfare programs and
                teaching digital literacy to diverse audiences, including the
                elderly and people with disabilities.
              </li>
              <li>
                2021 (24 yo): Bachelor's Degree & Domótica Thesis. Completed my
                degree in 2020. My thesis on "Domótica" (home automation –
                systems for controlling and automating a home's activities like
                lighting, climate, and security) was, unknowingly at the time, a
                clear indication of my strong UX inclination, as it centered on
                improving human interaction with technology in living spaces.
              </li>
              <li>
                My early career at C2TI started as a Developer Trainee. However,
                my bosses soon realized I spent more time worrying about UI and
                user experience than just producing code. This led them to
                introduce me to UX/UI.
              </li>
            </ul>
          </div>
        </section>

        {/* Fourth Section: Current Role & Future Aspirations */}
        <section
          id="goals-section"
          className="flex flex-col overflow-hidden p-4 sm:p-8 gap-8 rounded-xl bg-neutral-800"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="font-medium">Current Role & Future Aspirations</p>
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
                    where I led my first user research, UI testing, and
                    interviews. I was intuitively applying UX principles even
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
                    2022-Present: I joined Globalsys as an Analyst Product
                    Designer in February 2022, progressing through various
                    roles. Here, I gained extensive experience leading design
                    initiatives across diverse industries like commerce, retail,
                    health, security, agriculture, and logistics, designing
                    scalable solutions for web, mobile, smartwatch, and embedded
                    systems. I learned how to run projects independently, often
                    as the UX/UI role was still maturing within the tech
                    community.
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
                Sub Chef, gained responsibilities in team coordination and
                problem-solving in high-pressure environments, and most
                importantly, developed profound communication, adaptability, and
                leadership skills in multicultural environments. I worked
                closely with people from Brazil, the USA, Jamaica, Argentina,
                Chile, Peru, Costa Rica, Colombia, Paraguay, Uruguay, Guam, and
                Hawaii, enriching my cultural knowledge and personal growth.
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
                Present Goals: Back home in Brazil after my second exchange, I'm
                leveraging saved funds to strengthen my design base and build my
                website. My immediate goal is to secure a remote,
                English-speaking role overseas. I'm open to a Junior role if it
                allows me to solidify my design foundation. I'm also actively
                returning to coding to build my own website, showcasing my
                holistic understanding of product development. My aspiration is
                to combine design and development skills, bridging the gap
                between design, tech teams, and business needs.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </SectionContentLayout>
  );
}
