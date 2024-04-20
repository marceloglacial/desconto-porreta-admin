import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { FC } from 'react'
import Icon from '@/components/icon'
import Link from 'next/link'

const DashboardCard: FC<PagesType> = ({ title, icon, slug }): JSX.Element => {
    return (
        <Link href={`/admin/${slug}`}>
            <Card>
                <CardHeader>
                    <Icon icon={icon} size={12} />
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
            </Card>
        </Link>
    )
}
export default DashboardCard
