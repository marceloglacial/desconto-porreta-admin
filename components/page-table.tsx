import { FC } from 'react';
import EmptyList from './empty-list';
import { Table, TableHeader, TableRow, TableHead, TableBody } from '@/components/ui/table';
import PageTableRow from './page-table-row';

const PageTable: FC<ISinglePage> = (props): JSX.Element => {
    const { slug, title, items } = props.data
    const hasItems = items && items?.length > 0

    if (!hasItems) return <EmptyList slug={slug} title={title} />

    return <Table>
        <TableHeader>
            <TableRow>
                <TableHead className='w-[100px]'>Imagem</TableHead>
                <TableHead>Nome</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {items.map((item: any) => <PageTableRow key={item._id} slug={slug} item={item} />)}
        </TableBody>
    </Table>
}

export default PageTable
