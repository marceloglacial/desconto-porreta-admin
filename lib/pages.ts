// TODO: https://github.com/marceloglacial/desconto-porreta-admin/issues/15 

type PageType = {
    slug: string,
    title: string
}
export const pageData: PageType[] = [
    {
        slug: 'products',
        title: 'Produtos'
    },
    {
        slug: 'vendors',
        title: 'Lojas'
    }
]

interface IgetPages {
    data: PageType[],
    meta: Object
}

export const getPages = async (): Promise<IgetPages> => {
    'use server'
    const result = {
        data: pageData,
        meta: {},
    }
    return result
}

export const getSinglePage = async (slug: string): Promise<PageType | undefined> => {
    'use server'
    const apiData = await getPages()
    return apiData.data.find((item) => item.slug === slug) || undefined
}
