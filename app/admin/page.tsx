import { getPages } from '@/lib/pages'
import DashboardCard from '@/components/dashboard-card'

export default async function Dashboard() {
    const data = await getPages()
    const cards = data.data

    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {cards.map((card) => <DashboardCard key={card._id} {...card} />)}
        </div>
    )
}
