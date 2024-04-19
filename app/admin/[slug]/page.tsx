import { getSinglePage } from '@/lib/pages'
import AddItemButton from './_component/add-item-button'
import PagePanel from './_component/page-panel'

export default async function ItemsPage({ params }: { params: { slug: string } }) {

    const pageData = await getSinglePage(params.slug)
    if (!pageData) return <>Página não encontrada!</>

    const { title, slug } = pageData

    // TODO Move it to API
    const getData = (slug: string) => {
        return []
    }

    return (
        <>
            <AddItemButton slug={slug} />
            <PagePanel title={title} data={getData(slug)} slug={slug} />
        </>
    )
}
