


export const getPages = async (): Promise<IPages[]> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/pages`, { cache: 'no-store' })
    const data = await res.json()
    return data
}

export const getSinglePage = async (slug: string): Promise<ISinglePage> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/pages/${slug}`, { cache: 'no-store' })
    const data = await res.json()
    return data
}
