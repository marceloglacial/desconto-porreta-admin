import { Button } from '@/components/ui/button'
import { FC } from 'react'
import { useFormStatus } from 'react-dom'

interface FormAddButtonProps {
    isEditing?: boolean
}

const FormAddButton: FC<FormAddButtonProps> = ({ isEditing }): JSX.Element => {
    const { pending } = useFormStatus()

    const message = {
        adding: pending ? 'Adicionando ...' : 'Adicionar Item',
        edditing: pending ? 'Salvando ...' : 'Salvar Item',
    }

    return (
        <Button type='submit' size='sm' className='w-full' disabled={pending}>
            {isEditing ? message.edditing : message.adding}
        </Button>
    )
}

export default FormAddButton
