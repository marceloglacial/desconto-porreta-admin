import { Inter } from 'next/font/google'
import Aside from '@/components/aside'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { PanelLeft } from 'lucide-react'
import { TooltipProvider } from '@/components/ui/tooltip'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import NavBar from '@/components/navbar'
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <TooltipProvider>
                <body className={inter.className}>
                    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
                        <Aside />
                        <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
                            <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button size='icon' variant='outline' className='sm:hidden'>
                                            <PanelLeft className='h-5 w-5' />
                                            <span className='sr-only'>Menu</span>
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side='left' className='sm:max-w-xs'>
                                        <NavBar variant={'mobile'} />
                                    </SheetContent>
                                </Sheet>
                                <Breadcrumb className='hidden md:flex'>
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink asChild>
                                                <Link href='/admin'>Desconto Porreta</Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                    </BreadcrumbList>
                                </Breadcrumb>
                                <div className='flex items-center ml-auto'>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant='outline'
                                                size='icon'
                                                className='overflow-hidden rounded-full'
                                            >
                                                <img
                                                    src='https://images.unsplash.com/photo-1510623040244-1f396031f3ed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                                    width={36}
                                                    height={36}
                                                    alt='Avatar'
                                                    className='w-full h-full object-cover'
                                                />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align='end'>
                                            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>configurações</DropdownMenuItem>
                                            <DropdownMenuItem>Ajuda</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <Link href='/'>Sair</Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </header>
                            <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
                                {children}
                            </main>
                        </div>
                    </div>
                    <Toaster />
                </body>
            </TooltipProvider>
        </html>
    )
}
