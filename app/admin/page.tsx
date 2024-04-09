import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getProducts } from '@/lib/products'
import TableProductItem from '@/components/table-product-item'
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default async function Dashboard() {

    const products = await getProducts();
    const allProducts = products.data

    return (
        <>
            <div className="flex items-center">
                <div className="flex items-center gap-2">
                    <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sm:whitespace-nowrap">
                            Adicionar Novo Produto
                        </span>
                    </Button>
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Produtos</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">
                                    Imagem
                                </TableHead>
                                <TableHead>Nome</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Preço
                                </TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {allProducts.map(product => <TableProductItem key={product.id} {...product} />)}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>{allProducts.length}</strong> of <strong>{allProducts.length}</strong>{" "}
                        products
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}
