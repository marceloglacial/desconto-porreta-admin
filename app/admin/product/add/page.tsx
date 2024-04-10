import ProductAddForm from '@/components/product-add-form'
import { getVendors } from '@/lib/vendors'


export default async function ProductAdd() {
    const allVendors = (await getVendors()).data
    const hasVendors = allVendors.length > 0


    async function createInvoice(formData: FormData) {
        'use server'

        const rawFormData = {
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status'),
        }

        // WIP https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms

        // mutate data
        // revalidate cache
    }

    const formProps = {
        allVendors,
        hasVendors,
        createInvoice
    }


    return (
        <ProductAddForm {...formProps} />
    )
}
