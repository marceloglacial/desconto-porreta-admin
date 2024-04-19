import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FC } from 'react'

type DataItemType = {
    id: string
    title: string
    link: string
}


interface PagePanelProps {
    title: string,
    data: DataItemType[]
}

const PagePanel: FC<PagePanelProps> = ({ title, data }): JSX.Element => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter>
                <div className='text-xs text-muted-foreground'>
                    Showing <strong>100</strong> of{' '}
                    <strong>1000</strong> products
                </div>
            </CardFooter>
        </Card>
    )
}
export default PagePanel
