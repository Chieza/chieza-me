import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Experiences() {
  useDocumentTitle('Experiences • Bruno')
  return (
    <>
      <div className="text-white p-8 w-full max-h-[1200]">
        Here I'll have all my experience, including non-tech ones, from the
        kitchen to Uni, starting as a Front-End Trainee and migrating to UX,
        back to the kitchen on 2 international exchanges and now back home...
        It's gonna be a long ass story.
      </div>
    </>
  );
}
