import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TableRow, TableCell } from '@/components/ui/table'
import { MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

const TableProductItem = (props: IProduct) => {

    const { id, title, image, price } = props

    return <TableRow>
        <TableCell className="hidden sm:table-cell">
            <Link href={`admin/product/${id}`} >
                <img
                    alt={image.alt}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={image.src}
                    width="64"
                />
            </Link>
        </TableCell>
        <TableCell className="font-medium">
            {title}
        </TableCell>
        <TableCell>
            <Badge variant="outline">Rascunho</Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">
            {price.regular}
        </TableCell>
        <TableCell>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                    >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Açoes</DropdownMenuLabel>
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Apagar</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </TableCell>
    </TableRow>
}
export default TableProductItem
