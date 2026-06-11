import { Link } from 'react-router-dom';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Survey', path: '/survey' },
  { label: 'Game', path: '/game' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <Link to="/" className="text-base font-bold text-ink">
            TwoPercent
          </Link>
          <p className="mt-2 max-w-md text-sm text-slate-600">
            Practical workplace skill development through short, engaging, measurable practice.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm text-slate-600">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-pine">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
