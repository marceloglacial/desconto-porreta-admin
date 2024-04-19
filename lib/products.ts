interface IgetProducts {
    data: IProduct[]
    meta: Object
}

const formatProduct = (product: ApiProduct): IProduct => {
    const { _id, title, description, link, price, vendor_info, image } = product
    const vendorInfo = vendor_info[0]

    return {
        id: _id,
        title,
        link,
        description: description,
        image: {
            src: image.src,
            alt: image.alt || title,
            width: image.width || 300,
            height: image.height || 300,
        },
        vendor: {
            id: vendorInfo._id,
            title: vendorInfo.title,
            slug: vendorInfo.slug,
            logo: vendorInfo.logo,
            image: vendorInfo.image
        },
        price: {
            regular: price.regular,
            discount: price.discount ? price.discount : undefined,
        },
    }
}

export function getDiscount(regularPrice: number, finalPrice: number): number {
    const discountPercentage = ((regularPrice - finalPrice) / regularPrice) * 100
    return Math.round(discountPercentage)
}

export const getCurrency = (value: number): string =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const getProducts = async (): Promise<IgetProducts> => {
    'use server'
    const res = await fetch(`${process.env.API_URL}/api/products`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Error while getting product list. Please check you API connection.')
    }
    const apiData = await res.json()
    const result = {
        data: apiData.map((item: ApiProduct) => formatProduct(item)),
        meta: apiData?.meta,
    }
    return result
}

export const postProducts = async (postData: any) => {
    const res = await fetch(`${process.env.API_URL}/api/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
    if (!res.ok) {
        throw new Error('Error')
    }
    const apiData = await res.json()
    return apiData
}

export const putProducts = async (formData: any) => {
    const res = await fetch(`${process.env.API_URL}/api/products`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    if (!res.ok) {
        throw new Error('Error')
    }
    const apiData = await res.json()
    return apiData.data
}

export const deleteProduct = async (formData: any) => {
    const res = await fetch(`${process.env.API_URL}/api/products`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })

    if (!res.ok) {
        throw new Error('Error deleting product')
    }
    const apiData = await res.json()
    return apiData
}

export const getSingleProduct = async (id: string): Promise<IProduct | undefined> => {
    'use server'
    const apiData = await getProducts()
    return apiData.data.find((product) => product.id === id) || undefined
}

export const getProductsByVendor = async (id: string) => {
    const apiData = await getProducts()
    return apiData.data.filter((product) => product.vendor.id === id)
}
