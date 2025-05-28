import BR from '../../assets/images/flags/br.svg';
import US from '../../assets/images/flags/us.svg';
import ES from '../../assets/images/flags/es.svg';

export default function LanguageChips() {
  const flags = [BR, US, ES];
  return (
    <div className="bg-white/8 rounded-full flex w-max space-x-1 p-1 lg:space-x-2 lg:p-2">
      {flags.map((src, i) => (
        <img key={i} src={src} alt={src} className="h-4 w-4 rounded-full xl:h-6 xl:w-6" />
      ))}
    </div>
  );
}
