'use server'
import { putVendors } from '@/lib/vendors'
import { revalidatePath } from 'next/cache'

export async function updateVendor(prevState: any, formData: any) {
    'use server'
    try {
        const vendor = Object.fromEntries(formData)
        const formattedVendor: any = {
            ...vendor,
            image: JSON.parse(vendor.image)
        }
        await putVendors(formattedVendor)
        revalidatePath('/admin')
        revalidatePath(`/admin/vendor/${formattedVendor._id}`)
        console.info('Atualizado com sucesso.')
        return {
            message: 'Atualizado com sucesso.',
            status: 'success',
            vendor: formattedVendor,
        }
    } catch (e) {
        console.error(e)
        return {
            message: 'Erro ao salvar as informações.',
            status: 'error',
            prevState,
        }
    }
}
