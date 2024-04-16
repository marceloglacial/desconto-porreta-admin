"use client";
import { Button } from '@/components/ui/button'
import { FC, useEffect } from 'react'
import { removeProduct } from '@/actions/products'
import { Input } from '@/components/ui/input'
import { useFormState } from 'react-dom'
import { useToast } from '@/components/ui/use-toast'
import { redirect } from 'next/navigation'

const initialState = {
    message: '',
    status: '',
    action: '',
    product: {},
}


const RemoveButton: FC = ({ id }): JSX.Element => {
    const [state, formAction] = useFormState(removeProduct, initialState)
    const { toast } = useToast()

    const stateActions = (state: any) => {
        if (!state?.message) return
        toast({
            title: state?.message,
            variant: state?.status === 'error' ? 'destructive' : 'default',
        })
        if (state?.action === 'delete') redirect(`/admin/`)
    }

    useEffect(() => {
        if (state?.action) stateActions(state)
    }, [state])


    return (
        <form action={formAction}>
            <Input type='hidden' value={"661dce280f818d7cea824cd2"} id='id' name='id' />
            <Button size='sm' variant='destructive' type='submit'>
                Apagar produto
            </Button>
        </form>
    )
}

export default RemoveButton
