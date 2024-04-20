import { getSinglePage } from '@/lib/pages'
import AddItemButton from './_component/add-item-button'
import PagePanel from './_component/page-panel'

export default async function ItemsPage({ params }: { params: { slug: string } }) {

    const pageInfo = await getSinglePage(params.slug)
    const { status, data } = pageInfo

    if (status === 'error') return <div>Erro ao carregar os datos</div>
    return (
        <>
            <AddItemButton slug={data.slug} />
            <PagePanel {...pageInfo} />
        </>
    )
}
