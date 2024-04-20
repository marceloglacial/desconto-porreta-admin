import { TableRow, TableCell } from '@/components/ui/table'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const PageTableItem: FC<any> = ({ slug, item }): JSX.Element => {
    const { _id, title, image } = item
    const link = `${slug}/update/${_id}`
    return (
        <TableRow>
            <TableCell className=''>
                <Link href={link}>
                    <Image
                        alt={image.alt}
                        className='aspect-square rounded-md object-cover'
                        height='64'
                        src={image.src || 'https://res.cloudinary.com/dw2wjwhuv/image/upload/v1713585446/zcn9xrcaqouvvro2jilr.jpg'}
                        width='64'
                        priority
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
export default PageTableItem
