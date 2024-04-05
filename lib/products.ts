interface IgetProducts {
    data: IProduct[],
    meta: Object
}

const formatProduct = (product: ApiProduct): IProduct => {
    const { _id, title, link, price, vendor_info, image } = product;
    const vendorInfo = vendor_info[0]

    return {
        id: _id,
        title,
        link,
        description: title,
        image: {
            src: image.src,
            alt: image.alt || title,
            width: image.width || 300,
            height: image.height || 300
        },
        vendor: {
            id: vendorInfo._id,
            name: vendorInfo.title,
            slug: vendorInfo.slug,
        },
        price: {
            regular: price.regular,
            discount: price.discount || undefined,
        },
    };
}

export const getProducts = async (): Promise<IgetProducts> => {
    const res = await fetch(`${process.env.API_URL}/api/products`)
    if (!res.ok) {
        throw new Error('Error')
    }
    const apiData = await res.json()
    const result = {
        data: apiData.map((item: ApiProduct) => formatProduct(item)),
        meta: apiData?.meta
    }
    return result
};

export const getSingleProduct = async (id: string): Promise<IProduct | undefined> => {
    const apiData = await getProducts()
    return (
        apiData.data.find((product) => product.id === id) ||
        undefined
    );
};

export const getProductsByVendor = async (id: string) => {
    const apiData = await getProducts()
    return apiData.data.filter((product) => product.vendor.id === id);
};

export function getDiscount(regularPrice: number, finalPrice: number): number {
    const discountPercentage = ((regularPrice - finalPrice) / regularPrice) * 100;
    return Math.round(discountPercentage);
}

export const getCurrency = (value: number): string =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
