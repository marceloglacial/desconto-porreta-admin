import { Home, Package, ShoppingCart } from 'lucide-react'
import { FC } from 'react'
import NavBarItem, { NavbarItem } from './navbar-item'
export interface NavBarProps {
    variant: 'desktop' | 'mobile'
    items?: NavbarItem[]
}

const NavBar: FC<NavBarProps> = ({ variant }): JSX.Element => {
    const isMobile = variant === 'mobile'
    const fontStyle = `text-lg font-medium`

    const navbarStyles = {
        desktop: `flex flex-col items-center gap-4 px-2 sm:py-5`,
        mobile: `grid gap-4 text-lg font-medium ${fontStyle} mt-8`,
    }

    const items: NavbarItem[] = [
        {
            title: `Home`,
            link: `/admin`,
            icon: <Home className='h-5 w-5' />,
            active: true,
        },
        {
            title: `Produtos`,
            link: `/admin`,
            icon: <Package className='h-5 w-5' />,
        },
        {
            title: `Lojas`,
            link: `/admin/vendors`,
            icon: <ShoppingCart className='h-5 w-5' />,
        },
    ]

    const topItems = items.filter((item) => item.variant !== 'bottom')
    const bottomItems = items.filter((item) => item.variant === 'bottom')

    return (
        <>
            <nav className={navbarStyles[variant]}>
                {topItems.map((item, index) => (
                    <NavBarItem key={index} {...item} />
                ))}
            </nav>
            <nav
                className={
                    isMobile
                        ? `${fontStyle} mt-4`
                        : 'mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'
                }
            >
                {bottomItems.map((item, index) => (
                    <NavBarItem key={index} {...item} />
                ))}
            </nav>
        </>
    )
}

export default NavBar
