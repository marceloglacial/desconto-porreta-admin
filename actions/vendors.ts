'use server'
import { addVendors, putVendors } from '@/lib/vendors'
import { revalidatePath } from 'next/cache'

const formatVendor = (vendor: any) => {
    return {
        ...vendor,
        image: JSON.parse(vendor.image)
    }
}

export async function updateVendor(prevState: any, formData: any) {
    'use server'
    try {
        const vendor = Object.fromEntries(formData)
        const formattedVendor: any = formatVendor(vendor)

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

export async function addVendor(prevState: any, formData: any) {
    'use server'
    try {
        const vendor = Object.fromEntries(formData)
        const formattedVendor: any = formatVendor(vendor)
        delete formattedVendor.id
        const result = await addVendors(formattedVendor)


        revalidatePath('/admin')
        console.info('Atualizado com sucesso.')

        return {
            message: 'Atualizado com sucesso.',
            status: 'success',
            vendor: { id: result },
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
