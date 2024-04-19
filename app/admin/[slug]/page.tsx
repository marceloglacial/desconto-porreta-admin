import { Button } from '@/components/ui/button'
import { getSinglePage } from '@/lib/pages'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import AddItemButton from './_component/add-item-button'

export default async function ItemsPage({ params }: { params: { slug: string } }) {

    const pageData = await getSinglePage(params.slug)
    if (!pageData) return <>Página não encontrada!</>

    const { title, slug } = pageData

    return (
        <>
            <AddItemButton slug={slug} />
        </>
    )
}
