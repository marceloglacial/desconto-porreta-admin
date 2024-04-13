interface IProduct {
    id: string
    title: string
    description?: string
    image: IImage
    vendor: IVendor
    link: string
    price: {
        regular: number
        discount?: number
    }
}
