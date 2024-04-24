'use server'

export const getPages = async (): Promise<IPages> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/pages`, { cache: 'no-store' })
    const data = await res.json()
    return data
}

export const getPageBySlug = async (slug: string): Promise<IPages> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/${slug}`, { cache: 'no-store' })
    const data = await res.json()
    return data
}


export const getSinglePage = async (id: string): Promise<ISinglePage> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/pages/${id}`, { cache: 'no-store' })
    const data = await res.json()
    return data
}

export const getSinglePageBySlug = async (slug: string): Promise<ISinglePage> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/pages/slug/${slug}`, { cache: 'no-store' })
    const data = await res.json()
    return data
}

export const getSingleIntem = async (slug: string, id: string): Promise<IResponse> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/${slug}/${id}`, { cache: 'no-store' })
    const data = await res.json()
    return data
}


export const deleteItem = async (type: string, id: string): Promise<any> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/${type}/${id}`, { cache: 'no-store', method: 'DELETE' })
    const data = await res.json()
    return data
};
