import { getPages } from '@/lib/pages'
import DashboardCard from './_components/dashboard-card'

export default async function Dashboard() {
    const data = await getPages()
    const cards = data.data

    return (
        <div className='grid grid-cols-3 gap-8'>
            {cards.map((card) => <DashboardCard key={card._id} {...card} />)}
        </div>
    )
}
