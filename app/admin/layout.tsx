'use client'
import { Inter } from 'next/font/google'
import Aside from '@/components/aside'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
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
import { Toaster } from '@/components/ui/sonner'
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user) return redirect('/')

    return (
        <UserProvider>
            <TooltipProvider>
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
                                            <Link href='/admin' className='font-bold'>
                                                Desconto Porreta
                                            </Link>
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
                                            <Image
                                                src={user?.picture || 'https://res.cloudinary.com/dmceoybpa/image/upload/v1713414619/admin/bmyavgzvpwewktfwytxa.jpg'}
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
                                        {/* <DropdownMenuItem>configurações</DropdownMenuItem>
                                                <DropdownMenuItem>Ajuda</DropdownMenuItem>
                                                <DropdownMenuSeparator /> */}
                                        <DropdownMenuItem>
                                            <Link className='w-full' href='/api/auth/logout'>Sair</Link>
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
                <Toaster position='top-center' richColors closeButton />
            </TooltipProvider>
        </UserProvider>
    )
}
