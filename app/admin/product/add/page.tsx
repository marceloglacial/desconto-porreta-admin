import { getVendors } from '@/lib/vendors'
import ProductForm from '../components/product-form'

export default async function ProductAdd() {
    const vendors = await getVendors()
    const data = {
        vendors: vendors.data,
    }
    return <ProductForm {...data} />
}
