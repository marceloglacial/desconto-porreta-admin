'use server'
import { deleteProduct, postProducts, putProducts } from '@/lib/products'
import { revalidatePath } from 'next/cache'

export async function formatEntry(obj: any) {
    obj.price = {
        regular: parseInt(obj['price-regular']),
        discount: parseInt(obj['price-discount']),
    }
    obj.image = {
        src: obj.file,
        alt: '',
        width: 150,
        height: 150,
    }
    Object.keys(obj).forEach((key) => key.startsWith('$ACTION_') && delete obj[key])
    delete obj.file
    delete obj['price-regular']
    delete obj['price-discount']
}

export async function addProduct(prevState: any, formData: any) {
    'use server'
    try {
        const product = Object.fromEntries(formData)
        await formatEntry(product)
        const response = await postProducts(product)
        return {
            message: 'Produto adicionado com sucesso.',
            product: { ...product, id: response.id },
            status: 'success',
            action: 'add'
        }
    } catch (e) {
        console.error(e);
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
        await formatEntry(product)
        await putProducts(product)
        revalidatePath('/admin')
        revalidatePath(`/admin/product/${product.id}`)
        return {
            message: 'Produto atualizado com sucesso.',
            status: 'success',
            action: 'update',
            product
        }
    } catch (e) {
        console.error(e);

        return {
            message: 'Erro ao salvar as informações.',
            status: 'error',
            prevState
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
        return {
            message: 'Produto apagado com sucesso.',
            status: 'success',
            action: 'delete',
        }
    } catch (e) {
        console.error(e);

        return {
            message: 'Erro ao apagar o produto.',
            status: 'error',
        }
    }
}
