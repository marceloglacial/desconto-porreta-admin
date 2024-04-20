import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FC } from 'react'
import PageTable from './page-table'

const PagePanel: FC<ISinglePage> = async (props): Promise<JSX.Element> => {

    const { total, data } = props
    const { title, items } = data
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <PageTable {...props} />
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
