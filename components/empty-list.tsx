import { FC } from 'react'
import { PageType } from '@/lib/pages'
import AddItemButton from './add-item-button'


const EmptyList: FC<PageType> = ({ slug }): JSX.Element => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                    Nenhum item cadatrado.
                </h3>
                <p className="text-sm text-muted-foreground">
                    Você pode começar seu primeiro item usando o botão abaixo.
                </p>
                <div className="mt-4">
                    <AddItemButton slug={slug} />
                </div>
            </div>
        </div>
    )
}

export default EmptyList
