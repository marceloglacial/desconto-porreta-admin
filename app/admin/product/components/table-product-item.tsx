import { TableRow, TableCell } from '@/components/ui/table'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const TableProductItem: FC<IProduct> = ({ id, title, image }): JSX.Element => {
    const link = `admin/product/${id}`
    return (
        <TableRow>
            <TableCell className=''>
                <Link href={link}>
                    <Image
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
        </TableRow>
    )
}
export default TableProductItem
