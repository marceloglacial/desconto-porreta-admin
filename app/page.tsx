'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation'

export default function Login() {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (user) return redirect('/admin')
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Card className='mx-auto max-w-sm'>
                <CardHeader>
                    <CardTitle className='text-2xl'>Login</CardTitle>
                    <CardDescription>Entre com seu email do Google para logar na sua conta</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='grid gap-4'>
                        <Button variant="outline" className="w-full" asChild>
                            <a href="/api/auth/login">Login</a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
