import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FC } from 'react'
import PageTable from './page-table'
import { PageTableItemProps } from './page-table-row'

export interface PagePanelProps {
    title: string
    items: PageTableItemProps[]
    total: number
}

const PagePanel: FC<PagePanelProps> = ({ title, items, total }): JSX.Element => {
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
                    Showing <strong>{total}</strong> of{' '}
                    <strong>{total}</strong> products
                </div>
            </CardFooter>
        </Card>
    )
}
export default PagePanel
