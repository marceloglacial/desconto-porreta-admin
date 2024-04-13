'use client'
import { addProduct, updateProduct } from '@/actions/products'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ChevronLeft, Upload } from 'lucide-react'
import FormAddButton from './add-button'
import Link from 'next/link'
import { FC } from 'react'

interface ProductFormProps {
    product?: IProduct
    vendors: IVendor[]
}

const ProductForm: FC<ProductFormProps> = ({ product, vendors }): JSX.Element => {
    const hasVendors = vendors.length > 0
    const formActions = product ? updateProduct : addProduct

    return (
        <form action={formActions}>
            <div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
                <div className='flex items-center gap-4'>
                    <Button variant='outline' size='icon' className='h-7 w-7' asChild>
                        <Link href={'/admin/'}>
                            <ChevronLeft className='h-4 w-4' />
                            <span className='sr-only'>Voltar</span>
                        </Link>
                    </Button>
                    <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
                        {product ? 'Editar' : 'Adicionar'} produto
                    </h1>
                    <div className='hidden items-center gap-2 md:ml-auto md:flex'>
                        <Button variant='outline' size='sm' asChild>
                            <Link href={'/admin/'}>Cancelar</Link>
                        </Button>
                        <FormAddButton isEditing={!!product} />
                    </div>
                </div>
                <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
                    <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
                        <Card x-chunk='dashboard-07-chunk-0'>
                            <CardHeader>
                                <CardTitle>Detalhes do Produto</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {product && <Input type='hidden' name='id' value={product?.id} />}
                                <div className='grid gap-6'>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='name'>Nome</Label>
                                        <Input
                                            id='title'
                                            name='title'
                                            type='text'
                                            className='w-full'
                                            required
                                            defaultValue={product?.title}
                                        />
                                    </div>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='description'>Descrição</Label>
                                        <Textarea
                                            id='description'
                                            name='description'
                                            required
                                            className='min-h-60'
                                            defaultValue={product?.description}
                                        />
                                    </div>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='name'>Link</Label>
                                        <Input
                                            id='link'
                                            name='link'
                                            type='url'
                                            className='w-full'
                                            required
                                            defaultValue={product?.link}
                                        />
                                    </div>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='name'>Preço Regular</Label>
                                        <Input
                                            id='price'
                                            name='price-regular'
                                            type='number'
                                            className='w-full'
                                            required
                                            defaultValue={product?.price.regular}
                                        />
                                    </div>
                                    <div className='grid gap-3'>
                                        <Label htmlFor='name'>Preço com desconto</Label>
                                        <Input
                                            id='discount'
                                            name='price-discount'
                                            type='number'
                                            className='w-full'
                                            required
                                            defaultValue={product?.price.discount}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card x-chunk='dashboard-07-chunk-2'>
                            <CardHeader>
                                <CardTitle>Loja afiliada</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {!hasVendors && (
                                    <span>
                                        Nenuma loja cadastrada.{' '}
                                        <Link href={`/vendors/new`} className=' font-bold'>
                                            Clique aqui
                                        </Link>
                                        para cadastrar a loja parceira
                                    </span>
                                )}
                                {hasVendors && (
                                    <Select required name='vendor' value={product?.vendor.id}>
                                        <SelectTrigger aria-label='Selecione a loja' >
                                            <SelectValue placeholder='Selecione a loja' />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {vendors.map((vendor: IVendor) => (
                                                <SelectItem key={vendor.id} value={vendor.id}>
                                                    {vendor.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                    <div className='grid auto-rows-max items-start gap-4 lg:gap-8'>
                        <Card className='overflow-hidden' x-chunk='dashboard-07-chunk-4'>
                            <CardHeader>
                                <CardTitle>Imagem do Produto</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Input type='hidden' name='file' value={product?.image.src} />
                                <div className='grid gap-3'>
                                    <div className='flex items-center justify-center'><img {...product?.image} /></div>
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <button className="flex gap-3 items-center justify-center rounded-md border border-dashed bg-white shadow-md py-1 w-full">
                                            <Upload className="h-8 w-4 text-muted-foreground" />
                                            <span>{product ? 'Alterar' : 'Adicionar'} Imagem</span>
                                        </button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 md:hidden'>
                    <Button variant='outline' size='sm'>
                        Cancelar
                    </Button>
                    <Button size='sm'>Salvar Produto</Button>
                </div>
            </div>
        </form>
    )
}
export default ProductForm
