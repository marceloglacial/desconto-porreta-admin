interface IgetVendors {
    data: IVendor[],
    meta: Object
}

const formatVendor = (vendor: ApiVendor): IVendor => {
    return {
        id: vendor._id,
        name: vendor.title,
        slug: vendor.slug,
        logo: {
            src: vendor.logo,
            alt: vendor.title,
            width: 150,
            height: 150
        },
    };
}

export const getVendors = async (): Promise<IgetVendors> => {
    const res = await fetch(`${process.env.API_URL}/api/vendors`)
    if (!res.ok) {
        throw new Error('Error')
    }
    const apiData = await res.json()
    const result = {
        data: apiData.map((item: ApiVendor) => formatVendor(item)),
        meta: apiData?.meta
    }
    return result
};

export const getSingleVendor = async (id: string): Promise<IVendor | undefined> => {
    const apiData = await getVendors()
    return (
        apiData.data.find((vendor) => vendor.id === id) ||
        undefined
    );
};
