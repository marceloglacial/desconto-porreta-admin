import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip'
import { FC, ReactElement } from 'react'
import Link from 'next/link'

export type NavbarItem = {
    title: string
    link: string
    icon: ReactElement
    variant?: 'top' | 'bottom'
    active?: boolean
}

const NavBarItem: FC<NavbarItem> = ({ link, title, icon, active }): JSX.Element => {
    const isActive = active ? `bg-accent` : ''
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    href={link}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive}`}
                >
                    {icon}
                    <span className="sr-only">{title}</span>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{title}</TooltipContent>
        </Tooltip>
    )
}

export default NavBarItem
