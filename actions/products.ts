'use server'
import { postProducts, putProducts } from '@/lib/products'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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
    Object.keys(obj).forEach((key) => key.startsWith('$ACTION_ID_') && delete obj[key])
    delete obj.file
    delete obj['price-regular']
    delete obj['price-discount']
}

export async function addProduct(formData: any) {
    'use server'
    const product = Object.fromEntries(formData)
    await formatEntry(product)
    const reponse = await postProducts(product)
    revalidatePath('/admin')
    redirect(`/admin/product/${reponse.id}`)
}

export async function updateProduct(formData: any) {
    'use server'
    const product = Object.fromEntries(formData)
    await formatEntry(product)
    await putProducts(product)
    revalidatePath('/admin')
    redirect(`/admin/product/${product.id}?updated`)
}
