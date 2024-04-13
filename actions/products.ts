'use server'
import { postProducts } from '@/lib/products'
import { sanitizeEntry } from '@/lib/sanitize-entry'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function addProduct(formData: any) {
    'use server'
    const product = Object.fromEntries(formData)
    product.price = {
        regular: parseInt(formData.get('price-regular')),
        discount: parseInt(formData.get('price-discount')),
    }
    product.image = {
        src: formData.get('file'),
        alt: '',
        width: 150,
        height: 150,
    }
    sanitizeEntry(product)
    const reponse = await postProducts(product)
    revalidatePath('/admin')
    redirect(`/admin/product/${reponse.id}`)
}

export async function updateProduct() {
    console.log('update product')

    return null
}
