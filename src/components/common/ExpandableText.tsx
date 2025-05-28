import { useState, useRef, useEffect } from 'react';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ExpandableTextProps {
  /** Full text to render */
  text: string;
  /** Lines to show by default (on smallest screens) */
  initialLines: number;
  /** Override lines at or above each breakpoint */
  responsiveLines?: Partial<Record<Breakpoint, number>>;
  /** Extra container classes */
  className?: string;
}

/** pixel widths matching Tailwind’s breakpoints */
const bpValues: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export default function ExpandableText({
  text,
  initialLines,
  responsiveLines = {},
  className = '',
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const [clampLines, setClampLines] = useState(initialLines);
  const [overflowing, setOverflowing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // update clampLines when viewport resizes
  useEffect(() => {
    const updateClamp = () => {
      const w = window.innerWidth;
      // find highest matching breakpoint override
      let lines = initialLines;
      (['2xl','xl','lg','md','sm'] as Breakpoint[]).forEach((bp) => {
        if (w >= bpValues[bp] && responsiveLines[bp] != null) {
          lines = responsiveLines[bp]!;
        }
      });
      setClampLines(lines);
    };
    updateClamp();
    window.addEventListener('resize', updateClamp);
    return () => window.removeEventListener('resize', updateClamp);
  }, [initialLines, responsiveLines]);

  // detect overflow once clampLines or text changes
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // apply clamp styles
    Object.assign(el.style, {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: String(clampLines),
      overflow: 'hidden',
    });
    setOverflowing(el.scrollHeight > el.clientHeight);
  }, [text, clampLines]);

  const clampStyles = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical' as const,
    WebkitLineClamp: String(clampLines),
    overflow: 'hidden',
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div
        ref={ref}
        className="leading-relaxed"
        style={!expanded && overflowing ? clampStyles : {}}
      >
        {text}
      </div>
      {overflowing && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-base font-semibold self-start hover:cursor-pointer hover:text-blue-600 transition-all duration-300"
        >
          {expanded ? 'see less' : 'see more'}
        </button>
      )}
    </div>
  );
}
