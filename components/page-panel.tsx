import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FC } from 'react'
import PageTable from './page-table'
import { getItemsBySlug } from '@/lib/items'
import { PageTableItemProps } from './page-table-row'

export interface PagePanelProps {
    title: string
    type: string
}

const PagePanel: FC<PagePanelProps> = async ({ title, type }): Promise<JSX.Element> => {

    const tableData = await getItemsBySlug(type)
    const items: PageTableItemProps[] = tableData.data.map((item: any) => {
        return {
            page: `/admin/${type}/${item._id}`,
            ...item
        }
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <PageTable items={items} />
            </CardContent>
            <CardFooter>
                <div className='text-xs text-muted-foreground'>
                    Showing <strong>{tableData.total}</strong> of{' '}
                    <strong>{tableData.total}</strong> products
                </div>
            </CardFooter>
        </Card>
    )
}
export default PagePanel
