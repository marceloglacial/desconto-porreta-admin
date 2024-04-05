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

export default async function Dashboard() {

    const products = await getProducts();
    const allProducts = products.data

    return (

        <Card>
            <CardHeader>
                <CardTitle>Produtos</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                Image,
                            </TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Status</TableHead>
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
    )
}
