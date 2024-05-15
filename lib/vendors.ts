interface IgetVendors {
    data: IVendor[]
    meta: Object
}


export const getVendors = async (): Promise<IgetVendors> => {
    const res = await fetch(`${process.env.API_URL}/api/vendors`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('Error')
    }
    const apiData = await res.json()
    return apiData
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

export const addVendors = async (formData: any) => {
    const res = await fetch(`${process.env.API_URL}/api/vendors`, {
        method: 'POST',
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
