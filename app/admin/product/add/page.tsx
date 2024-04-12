import { getVendors } from '@/lib/vendors'
import ProductAddForm from './components/form'

export default async function ProductAdd() {
    const vendors = (await getVendors()).data
    const formProps = {
        vendors,
    }
    return (
        <ProductAddForm {...formProps} />
    )
}
