'use server'
import { putVendors } from '@/lib/vendors'
import { revalidatePath } from 'next/cache'

export async function updateVendor(prevState: any, formData: any) {
    'use server'
    try {
        const vendor = Object.fromEntries(formData)
        await putVendors(vendor)
        revalidatePath('/admin')
        revalidatePath(`/admin/vendor/${vendor.id}`)
        console.info('Produto atualizado com sucesso.')
        return {
            message: 'Produto atualizado com sucesso.',
            status: 'success',
            action: 'update',
            vendor,
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
