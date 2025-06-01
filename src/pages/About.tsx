import useDocumentTitle from '../hooks/useDocumentTitle'

export default function About() {
  useDocumentTitle('About • Bruno')
  return (
    <>
      <div className="text-white p-8 w-full max-h-[1200]">
        Working on it! Here you'll see all about my life in the Tech World,
        since a lil'child.
      </div>
    </>
  );
}