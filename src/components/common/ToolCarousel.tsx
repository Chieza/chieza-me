// Define a props interface including iconSizeClass
export interface ToolCarouselProps {
  /** Tailwind classes to size the icons */
  iconSizeClass?: string;
}

export default function ToolCarousel({
  iconSizeClass = 'h-8 w-8',
}: ToolCarouselProps) {
  // Glob‐import SVG URLs
  const modules = import.meta.glob(
    '../../assets/icons/carouselIcons/*.svg',
    { eager: true, import: 'default' }
  ) as Record<string, string>;

  const icons = Object.values(modules);
  const looped = [...icons, ...icons];

  return (
    <div className="relative overflow-hidden bg-neutral-900 rounded-full py-4 px-8">
      <div
        className="flex whitespace-nowrap space-x-8 animate-[marquee_8s_linear_infinite]"
        style={{ willChange: 'transform' }}
      >
        {looped.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            // Apply the passed‐in sizing classes
            className={`${iconSizeClass} flex-shrink-0`}
          />
        ))}
      </div>
    </div>
  );
}
