'use client'
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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
import { addVendor, updateVendor } from '@/actions/vendors';

interface FormVendorsProps {
    item?: ApiVendor
    isEditing?: boolean
}

const initialState = {
    status: '',
}

const FormVendors: FC<FormVendorsProps> = ({ item, isEditing }): JSX.Element => {
    const allFormActions = isEditing ? updateVendor : addVendor
    const [state, formAction] = useFormState(allFormActions, initialState)

    const stateActions = (state: any) => {
        if (state?.status === 'error') {
            return toast.error(state.message)
        }
        toast.success(state.message)
        console.log(state);

        redirect(`/admin/vendors/${state.vendor?.id}`)
    }
    useEffect(() => {
        if (state?.status) stateActions(state)
    }, [state])


    return (
        <form action={formAction}>
            <div className='mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4'>
                <div className='flex items-center gap-4'>
                    <Button variant='outline' size='icon' className='h-7 w-7' asChild>
                        <Link href={'/admin/vendors'}>
                            <ChevronLeft className='h-4 w-4' />
                            <span className='sr-only'>Voltar</span>
                        </Link>
                    </Button>
                    <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
                        {item ? 'Editar' : 'Adicionar'} item
                    </h1>
                    <div className='hidden items-center gap-2 md:ml-auto md:flex'>
                        <Button variant='outline' size='sm' asChild>
                            <Link href={'/admin/vendors'}>Cancelar</Link>
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
                                    <Input type='hidden' name='id' value={item?._id} />
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
                                        <Label htmlFor='name'>Link</Label>
                                        <Input
                                            id='slug'
                                            name='slug'
                                            type='text'
                                            className='w-full'
                                            required
                                            defaultValue={item?.slug}
                                        />
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
                        <Link href={'/admin/vendors'}>Cancelar</Link>
                    </Button>
                    <FormAddButton isEditing={isEditing} />
                </div>
            </div>
        </form>
    )
}
export default FormVendors
