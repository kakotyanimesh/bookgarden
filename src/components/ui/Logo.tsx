import { forwardRef } from 'react'
import Link from 'next/link'

type LogoProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
    href?: string
}

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>(({ className, href = "/", ...props }, ref) => {
    return (
        <Link
            ref={ref}
            href={href}
            className={`font-dotted text-secondary text-2xl font-bold tracking-wide inline-block transition-opacity hover:opacity-80 ${className}`}
            {...props}
        >
            Pinnly
        </Link>
    )
})

Logo.displayName = 'Logo'
