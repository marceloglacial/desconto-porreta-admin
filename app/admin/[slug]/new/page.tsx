import ErrorState from '@/components/error-state'
import FormVendors from '@/components/forms/vendors-form'
import { ReactElement } from 'react'

type FormsType = {
    [k: string]: ReactElement
}

const UpdateItemPage = async ({ params }: { params: { id: string, slug: string } }) => {

    const forms: FormsType = {
        vendors: <FormVendors />,
        products: <>Form Product</>
    }
    return forms[params.slug]
}
export default UpdateItemPage
