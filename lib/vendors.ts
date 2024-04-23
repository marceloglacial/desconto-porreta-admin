interface IgetVendors {
    data: IVendor[]
    meta: Object
}

const formatVendor = (vendor: ApiVendor): IVendor => {
    return {
        id: vendor._id,
        title: vendor.title,
        slug: vendor.slug,
        logo: vendor.logo,
        image: {
            src: vendor.image.src,
            alt: vendor.image.alt,
            width: vendor.image.width,
            height: vendor.image.height,
        },
    }
}

export const getVendors = async (): Promise<IgetVendors> => {
    const res = await fetch(`${process.env.API_URL}/api/vendors`)
    if (!res.ok) {
        throw new Error('Error')
    }
    const apiData = await res.json()
    const result = {
        data: apiData.map((item: ApiVendor) => formatVendor(item)),
        meta: apiData?.meta,
    }
    return result
}

export const getSingleVendor = async (id: string): Promise<IVendor | undefined> => {
    const apiData = await getVendors()
    return apiData.data.find((vendor) => vendor.id === id) || undefined
}


export const putVendors = async (formData: any) => {
    const res = await fetch(`${process.env.API_URL}/api/vendors/${formData.id}`, {
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
