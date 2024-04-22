import AddItemButton from '@/components/add-item-button'
import ErrorState from '@/components/error-state';
import PagePanel from '@/components/page-panel'
import { getPageBySlug, getSinglePageBySlug } from '@/lib/pages';

export default async function ItemsPage({ params }: { params: { slug: string } }) {

    const pageInfo = await getSinglePageBySlug(params.slug)
    const { status, data, total } = pageInfo
    const { title, slug } = data
    const itemsData = await getPageBySlug(data.slug)

    const hasError = status === 'error' || itemsData.status === 'error'
    if (hasError) return <ErrorState title={'Error'} message={'Erro ao carregar os dados'} />

    const items: any = itemsData.data

    return (
        <>
            <AddItemButton slug={slug} />
            <PagePanel title={title} items={items} total={total} />
        </>
    )
}
