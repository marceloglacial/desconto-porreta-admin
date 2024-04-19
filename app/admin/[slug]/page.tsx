
export default async function ItemsPage({ params }: { params: { slug: string } }) {
    return (
        <div>{params.slug}</div>
    )
}
