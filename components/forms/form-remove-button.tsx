'use client'
import { Button } from '@/components/ui/button'
import { FC, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'
import ErrorState from '../error-state'
import { deleteItemAction } from '@/actions/items'

const initialState = null

interface FormRemoveButtonProps {
    id?: string
    type: string
}

const FormRemoveButton: FC<FormRemoveButtonProps> = ({ id, type }): JSX.Element => {
    const [state, formAction] = useFormState(deleteItemAction, initialState)

    const stateActions = (state: any) => {
        toast.error(state?.message)
        redirect(`/admin/${state.type}`)
    }

    useEffect(() => {
        if (state?.status) stateActions(state)
    }, [state])

    if (!id || !type) return <ErrorState title={'Error'} message={'Item não encontrado'} />

    return (
        <form action={formAction}>
            <Input type='hidden' defaultValue={id} id='id' name='id' />
            <Input type='hidden' defaultValue={type} id='type' name='type' />
            <Button
                className='w-full md:w-auto'
                variant='destructive'
                type='submit'
                onClick={(e) => {
                    const confirmation = confirm('Tem certeza que quer apagar esse item?')
                    if (!confirmation) e.preventDefault()
                }}
            >
                Apagar item
            </Button>
        </form>
    )
}

export default FormRemoveButton
