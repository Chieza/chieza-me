import useDocumentTitle from "../hooks/useDocumentTitle";
import { SectionContentLayout } from "../components/layouts/index";
import { Link } from 'react-router-dom'

export default function SideProjects() {
  useDocumentTitle("Side Projects • Bruno");
  return (
    <>
      <SectionContentLayout>
        <div className="text-white p-8 w-full max-h-[1200]">
          I currently have 2 strong Side Projects, a Whatsapp Bot and this
          website! I'll publish it ASAP, keep posted! After that I'll keep
          running new projects and posting some other if I can find it's
          materials.
        </div>
        <div>
          <Link to="https://github.com/Chieza/botips" target="_blank">WhatsappBot Link: https://github.com/Chieza/botips</Link>
        </div>
      </SectionContentLayout>
    </>
  );
}
