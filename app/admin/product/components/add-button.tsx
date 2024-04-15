import { Button } from '@/components/ui/button'
import { FC, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { useToast } from "@/components/ui/use-toast"

interface FormAddButtonProps {
    isEditing?: boolean
}

const FormAddButton: FC<FormAddButtonProps> = ({ isEditing }): JSX.Element => {
    const { pending, data } = useFormStatus()
    const { toast } = useToast()

    const triggerToast = () => {
        toast({
            description: "Produto salvo com sucesso!",
        })
    }

    useEffect(() => {
        if (data) triggerToast()
    }, [data])

    const message = {
        adding: pending ? 'Adicionando ...' : 'Adicionar Produto',
        edditing: pending ? 'Salvando ...' : 'Salvar Produto'
    }

    return (
        <Button type='submit' size='sm' disabled={pending}>
            {isEditing ? message.edditing : message.adding}
        </Button>
    )
}

export default FormAddButton
