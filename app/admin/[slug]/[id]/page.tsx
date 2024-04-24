import ErrorState from '@/components/error-state'
import FormProducts from '@/components/forms/products-form'
import FormVendors from '@/components/forms/vendors-form'
import { getSingleIntem } from '@/lib/pages'
import { getVendors } from '@/lib/vendors'
import { ReactElement } from 'react'

type FormsType = {
    [k: string]: ReactElement
}


const UpdateItemPage = async ({ params }: { params: { id: string, slug: string } }) => {
    const data = await getSingleIntem(params.slug, params.id)
    const vendors = await getVendors()

    if (data.status === 'error') return <ErrorState title={'Error'} message={'Erro ao carregar o formulário'} />

    const forms: FormsType = {
        vendors: <FormVendors item={data.data} isEditing />,
        products: <FormProducts item={data.data} vendors={(vendors.data)} isEditing />,
    }
    return forms[params.slug]
}
export default UpdateItemPage
