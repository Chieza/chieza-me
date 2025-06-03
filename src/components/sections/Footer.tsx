import { Link } from 'react-router-dom'
import { SectionLayout } from '../layouts/index'

export default function Footer() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/side-projects', label: 'Side Projects' },
    { to: '/login', label: 'Login' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <SectionLayout className="border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-48 md:pb-8">
        {/* nav links */}
        <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-base hover:underline transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* copyright */}
        <p className="mt-6 text-sm text-gray-400 text-center">
          © 2025 Bruno Chieza Caliman. Created by me with ❤️ from Vitória - Brasil.
        </p>
      </div>
    </SectionLayout>
  )
}
