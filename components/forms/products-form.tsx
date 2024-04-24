'use client'
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FC, useEffect } from 'react';
import FormAddButton from './form-add-button';
import FormUploadImage from './form-upload-image';
import { useFormState } from 'react-dom';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';
import FormRemoveButton from './form-remove-button';
import { addProduct, updateProduct } from '@/actions/products';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface FormProductsProps {
    item?: ApiProduct
    isEditing?: boolean
    vendors?: IVendor[]
}

const initialState = null

const FormProducts: FC<FormProductsProps> = ({ item, isEditing, vendors }): JSX.Element => {
    const allFormActions = isEditing ? updateProduct : addProduct
    const [state, formAction] = useFormState(allFormActions, initialState)
    const slug = 'products'

    const stateActions = (stateAction: any) => {
        if (stateAction?.status === 'error') {
            return toast.error(stateAction.message)
        }
        toast.success(stateAction.message)
        redirect(`/admin/${slug}/${stateAction.product?.id}`)
    }
    useEffect(() => {
        if (state?.status) stateActions(state)
    }, [state])

    return (
        <>
            <form action={formAction}>
                <div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
                    <div className='flex items-center gap-4'>
                        <Button variant='outline' size='icon' className='h-7 w-7' asChild>
                            <Link href={`/admin/${slug}`}>
                                <ChevronLeft className='h-4 w-4' />
                                <span className='sr-only'>Voltar</span>
                            </Link>
                        </Button>
                        <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
                            {item ? 'Editar' : 'Adicionar'} item
                        </h1>
                        <div className='hidden items-center gap-2 md:ml-auto md:flex'>
                            <Button variant='outline' size='sm' asChild>
                                <Link href={`/admin/${slug}`}>Cancelar</Link>
                            </Button>
                            <FormAddButton isEditing={isEditing} />
                        </div>
                    </div>
                    <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
                        <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
                            <Card x-chunk='dashboard-07-chunk-0'>
                                <CardHeader>
                                    <CardTitle>Detalhes</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {isEditing && (
                                        <Input type='hidden' name='id' defaultValue={item?._id} />
                                    )}
                                    <div className='grid gap-6'>
                                        <div className='grid gap-3'>
                                            <Label htmlFor='name'>Nome</Label>
                                            <Input
                                                id='title'
                                                name='title'
                                                type='text'
                                                className='w-full'
                                                required
                                                defaultValue={item?.title}
                                            />
                                        </div>
                                        <div className='grid gap-3'>
                                            <Label htmlFor='description'>Descrição</Label>
                                            <Textarea
                                                id='description'
                                                name='description'
                                                required
                                                className='min-h-60'
                                                defaultValue={item?.description}
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
                                                defaultValue={item?.link}
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
                                                defaultValue={item?.price.regular}
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
                                                defaultValue={item?.price.discount}
                                            />
                                        </div>
                                        <div className='grid gap-3'>
                                            <Label htmlFor='name'>Vendor</Label>
                                            <Select required name='vendor' defaultValue={item?.vendor}>
                                                <SelectTrigger aria-label='Selecione a loja'>
                                                    <SelectValue placeholder='Selecione a loja' />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {vendors?.map((vendorItem: any) => (
                                                        <SelectItem key={vendorItem._id} value={vendorItem._id}>
                                                            {vendorItem.title}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='grid auto-rows-max items-start gap-4 lg:gap-8'>
                            <FormUploadImage item={item} />
                        </div>
                    </div>
                    <div className='flex items-center gap-2 md:hidden'>
                        <Button variant='outline' className='w-full' asChild>
                            <Link href={`/admin/${slug}`}>Cancelar</Link>
                        </Button>
                        <FormAddButton isEditing={isEditing} />
                    </div>
                </div>
            </form>
            {isEditing && (
                <div>
                    <div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
                        <div className='grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8'>
                            <div className='grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8'>
                                <Card className='overflow-hidden text-center md:text-left' x-chunk='dashboard-07-chunk-4'>
                                    <CardHeader>
                                        <CardTitle>Apagar Item</CardTitle>
                                        <CardDescription>Essa ação é irreversível.</CardDescription>
                                        <FormRemoveButton type={slug} id={item?._id} />
                                    </CardHeader>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default FormProducts
