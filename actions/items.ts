'use server'
import { deleteItem } from '@/lib/pages'
import { revalidatePath } from 'next/cache'

export async function deleteItemAction(prevState: any, formData: any) {
    'use server'
    try {
        const item = Object.fromEntries(formData)
        await deleteItem(item.type, item.id)
        revalidatePath('/admin')
        console.info('Item apagado com sucesso.')

        return {
            message: 'Item apagado com sucesso.',
            status: 'success',
            type: item.type
        }
    } catch (e) {
        console.error(e)

        return {
            message: 'Erro ao apagar o item.',
            status: 'error',
        }
    }
}
