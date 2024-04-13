import { getSingleProduct } from '@/lib/products'
import ProductForm from '../components/product-form'
import { getVendors } from '@/lib/vendors'

export default async function ProductDetail({ params }: { params: { id: string } }) {
    const product = await getSingleProduct(params.id)
    if (!product) return <div>Produto não encontrado!</div>

    const vendors = await getVendors()
    const data = {
        product,
        vendors: vendors.data,
    }

    return <ProductForm {...data} />
}
