import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TableRow, TableCell } from '@/components/ui/table'
import { MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

const TableProductItem: FC<IProduct> = ({ id, title, image, price }): JSX.Element => {
    const link = `admin/product/${id}`

    return (
        <TableRow>
            <TableCell className=''>
                <Link href={link}>
                    <img
                        alt={image.alt}
                        className='aspect-square rounded-md object-cover'
                        height='64'
                        src={image.src}
                        width='64'
                    />
                </Link>
            </TableCell>
            <TableCell className='font-medium'>
                <Link href={link}>
                    <span className='line-clamp-3'>{title}</span>
                </Link>
            </TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-haspopup='true' size='icon' variant='ghost'>
                            <MoreHorizontal className='h-4 w-4' />
                            <span className='sr-only'>Menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <Link href={link}>Editar</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Apagar</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    )
}
export default TableProductItem
