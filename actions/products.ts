'use server'
import { deleteProduct, postProducts, putProducts } from '@/lib/products'
import { revalidatePath } from 'next/cache'

export async function formatEntry(obj: any) {
    const result = {
        ...obj,
        image: JSON.parse(obj.image),
        price: {
            regular: parseInt(obj['price-regular']),
            discount: parseInt(obj['price-discount']),
        }
    }
    Object.keys(result).forEach((key) => key.startsWith('$ACTION_') && delete result[key])
    delete result['price-regular']
    delete result['price-discount']
    return result
}

export async function addProduct(prevState: any, formData: any) {
    'use server'
    try {
        const product = Object.fromEntries(formData)

        if (!product.image) {
            return {
                message: 'Favor adicionar a imagem do produto.',
                status: 'error',
                prevState,
            }
        }

        const result = await formatEntry(product)
        const response = await postProducts(result)
        revalidatePath('/admin')
        console.info('Produto adicionado com sucesso.')

        return {
            message: 'Produto adicionado com sucesso.',
            product: { ...result, id: response.data },
            status: 'success',
            action: 'add',
            type: 'products'
        }
    } catch (e) {
        console.error(e)
        return {
            message: 'Erro ao adicionar o produto',
            status: 'error',
            prevState,
        }
    }
}

export async function updateProduct(prevState: any, formData: any) {
    'use server'
    try {
        const product = Object.fromEntries(formData)
        const result = await formatEntry(product)

        await putProducts(result)
        revalidatePath('/admin')
        revalidatePath(`/admin/product/${product.id}`)

        console.info('Produto atualizado com sucesso.')

        return {
            message: 'Produto atualizado com sucesso.',
            status: 'success',
            action: 'update',
            product: result,
        }
    } catch (e) {
        console.error(e)

        return {
            message: 'Erro ao atualizar as informações.',
            status: 'error',
            prevState,
        }
    }
}

export async function removeProduct(prevState: any, formData: any) {
    'use server'
    try {
        const product = Object.fromEntries(formData)

        await formatEntry(product)
        await deleteProduct(product)
        revalidatePath('/admin')
        console.info('Produto apagado com sucesso.')

        return {
            message: 'Produto apagado com sucesso.',
            status: 'success',
            action: 'delete',
        }
    } catch (e) {
        console.error(e)

        return {
            message: 'Erro ao apagar o produto.',
            status: 'error',
        }
    }
}
