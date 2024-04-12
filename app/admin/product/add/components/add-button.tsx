import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export default function FormAddButton() {
    const { pending } = useFormStatus()

    return (
        <Button type='submit' size="sm" disabled={pending}>
            {pending ? 'Adicionando ...' : 'Adicionar Produto'}
        </Button>
    )
}
