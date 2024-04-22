export const getItemsBySlug = async (slug: string): Promise<any> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/${slug}`, { cache: 'no-store' })
    const data = await res.json()
    return data
}
