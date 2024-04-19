import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FC } from 'react'
import EmptyList from './empty-list'
import { PageType } from '@/lib/pages'

const PagePanel: FC<PageType> = ({ title, slug, data }): JSX.Element => {
    const hasData = data && data?.length > 0
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {!hasData && <EmptyList slug={slug} title={title} />}
            </CardContent>
            <CardFooter>
                <div className='text-xs text-muted-foreground'>
                    Showing <strong>{data?.length}</strong> of{' '}
                    <strong>{data?.length}</strong> products
                </div>
            </CardFooter>
        </Card>
    )
}
export default PagePanel
