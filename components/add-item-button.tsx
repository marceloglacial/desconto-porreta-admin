import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

export interface AddItemButtonProps {
    slug: string
}

const AddItemButton: FC<AddItemButtonProps> = ({ slug }): JSX.Element => {
    return (
        <div className='flex items-center'>
            <div className='flex items-center gap-2'>
                <Button size='sm' className='h-8 gap-1' asChild>
                    <Link href={`/admin/${slug}/new/`}>
                        <PlusCircle className='h-3.5 w-3.5' />
                        <span className='sm:whitespace-nowrap'>Adicionar</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
export default AddItemButton
