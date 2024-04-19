import { Button } from '@/components/ui/button'
import Link from 'next/link'

const EmptyList = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                    Nenhum produto cadatrado.
                </h3>
                <p className="text-sm text-muted-foreground">
                    Você pode começar a vender adicionando os produtos usando o botão abaixo.
                </p>
                <Button className="mt-4" asChild>
                    <Link href='/admin/product/add'>
                        Adicionar produto
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default EmptyList
