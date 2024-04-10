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
    const stylesMobile = `flex h-9 gap-3 items-center px-4 py-2 rounded-lg text-muted-foreground transition-colors ${isActive}`
    const stylesDesktop = `md:w-9 md:justify-center md:px-0 md:py-0 hover:text-foreground ${isActive}`
    return (
        <div className='navbar-item'>
            <div className='navbar-item__desktop'>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={link}
                            className={`${stylesMobile} ${stylesDesktop}`}
                        >
                            {icon}
                            <span className="md:sr-only">{title}</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{title}</TooltipContent>
                </Tooltip>
            </div>

        </div>
    )
}

export default NavBarItem
