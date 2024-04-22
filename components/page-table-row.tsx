import { TableRow, TableCell } from '@/components/ui/table'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface PageTableItemProps {
    _id: string
    title: string,
    image: ImageProps
    page?: string
}

const PageTableItem: FC<PageTableItemProps> = ({ title, image, page }): JSX.Element => {
    return (
        <TableRow>
            <TableCell className=''>
                <Link href={page || '/'}>
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
                <Link href={page || '/'}>
                    <span className='line-clamp-3'>{title}</span>
                </Link>
            </TableCell>
        </TableRow>
    )
}
export default PageTableItem
