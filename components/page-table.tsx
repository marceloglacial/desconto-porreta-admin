import { FC } from 'react';
import EmptyList from './empty-list';
import { Table, TableHeader, TableRow, TableHead, TableBody } from '@/components/ui/table';
import PageTableRow, { PageTableItemProps } from './page-table-row';

export interface PageTableProps {
    items: PageTableItemProps[]
}

const PageTable: FC<PageTableProps> = ({ items }): JSX.Element => {
    const hasItems = items && items?.length > 0

    if (!hasItems) return <EmptyList />

    return <Table>
        <TableHeader>
            <TableRow>
                <TableHead className='w-[100px]'>Imagem</TableHead>
                <TableHead>Nome</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {items.map((item) => <PageTableRow key={item._id} {...item} />)}
        </TableBody>
    </Table>
}

export default PageTable
