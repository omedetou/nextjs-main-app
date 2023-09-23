'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navbar() {
    const pathname = usePathname()

    return (
        <nav>
            <ul>
                <li>
                    <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === '/about' ? 'active' : ''}`}
                        href="/"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}