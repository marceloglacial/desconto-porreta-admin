'use client'
import { Button } from '@/components/ui/button'
import { FC, useEffect } from 'react'
import { removeProduct } from '@/actions/products'
import { Input } from '@/components/ui/input'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'

const initialState = {
    message: '',
    status: '',
    action: '',
    product: {},
}

interface RemoveButtonProps {
    id?: string
}

const RemoveButton: FC<RemoveButtonProps> = ({ id }): JSX.Element => {
    const [state, formAction] = useFormState(removeProduct, initialState)

    const stateActions = (state: any) => {
        toast.error(state?.message)
        redirect('/admin')
    }

    useEffect(() => {
        if (state?.action) stateActions(state)
    }, [state])

    if (!id) return <></>

    return (
        <form action={formAction}>
            <Input type='hidden' value={id} id='id' name='id' />
            <Button
                size='sm'
                variant='destructive'
                type='submit'
                onClick={(e) => {
                    const confirmation = confirm('Tem certeza que quer apagar esse produto?')
                    if (!confirmation) e.preventDefault()
                }}
            >
                Apagar produto
            </Button>
        </form>
    )
}

export default RemoveButton
