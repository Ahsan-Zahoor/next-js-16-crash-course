'use client'

import Link from 'next/link'
import Image from 'next/image'
import posthog from 'posthog-js'

const Navbar = () => {
  const handleNavClick = (label: string, href: string) => {
    posthog.capture("nav_link_clicked", { label, href });
  };

  return (
    <header>
        <nav>
            <Link href="/" className="logo" onClick={() => handleNavClick("Home Logo", "/")}>
                <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
                <p>DevEvent</p>
            </Link>
            <ul>
                <Link href="/" onClick={() => handleNavClick("Home", "/")}>Home</Link>
                <Link href="/events" onClick={() => handleNavClick("Events", "/events")}>Events</Link>
                <Link href="/about" onClick={() => handleNavClick("Create Event", "/about")}>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
