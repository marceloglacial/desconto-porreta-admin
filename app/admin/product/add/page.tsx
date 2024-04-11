import {
    ChevronLeft,
    Target,
    Upload,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'
import { getVendors } from '@/lib/vendors'
import { postProducts } from '@/lib/products'

function sanitizePost(obj) {
    Object.keys(obj).forEach(key => key.startsWith('$ACTION_ID_') && delete obj[key]);
    delete obj.file
    delete obj['price-regular']
    delete obj['price-discount']
}

export default async function ProductAdd() {
    const allVendors = (await getVendors()).data
    const hasVendors = allVendors.length > 0

    async function addProduct(formData) {
        "use server";
        const product = Object.fromEntries(formData);
        product.price = {
            regular: parseInt(formData.get('price-regular')),
            discount: parseInt(formData.get('price-discount'))
        }
        product.image = {
            src: formData.get('file'),
            alt: '',
            width: 150,
            height: 150
        }
        sanitizePost(product)
        await postProducts(product);
    }

    return (
        <form action={addProduct} >
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="h-7 w-7">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Voltar</span>
                    </Button>
                    <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                        Adicionar Produto
                    </h1>
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                        <Button variant="outline" size="sm">
                            Cancelar
                        </Button>
                        <Button type='submit' size="sm">Adicionar Produto</Button>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-0">
                            <CardHeader>
                                <CardTitle>Detalhes do Produto</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Nome</Label>
                                        <Input
                                            id="title"
                                            name="title"
                                            type="text"
                                            className="w-full"
                                            required

                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="description">Descrição</Label>
                                        <Textarea
                                            id="description"
                                            name="description"
                                            required
                                            className="min-h-60"

                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Link</Label>
                                        <Input
                                            id="link"
                                            name="link"
                                            type="url"
                                            className="w-full"
                                            required

                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Preço Regular</Label>
                                        <Input
                                            id="price"
                                            name="price-regular"
                                            type="number"
                                            className="w-full"
                                            required

                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Preço com desconto</Label>
                                        <Input
                                            id="discount"
                                            name="price-discount"
                                            type="number"
                                            className="w-full"
                                            required

                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card x-chunk="dashboard-07-chunk-2">
                            <CardHeader>
                                <CardTitle>Loja afiliada</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {!hasVendors && <span>Nenuma loja cadastrada. <Link href={`/vendors/new`} className=' font-bold'>Clique aqui</Link> para cadastrar a loja parceira</span>}
                                {hasVendors && (
                                    <Select
                                        required
                                        name='vendor'
                                    >
                                        <SelectTrigger
                                            aria-label="Selecione a loja"
                                        >
                                            <SelectValue placeholder="Selecione a loja" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {allVendors.map((vendor: IVendor) =>
                                                <SelectItem key={vendor.id} value={vendor.id}>{vendor.name}</SelectItem>
                                            )}
                                        </SelectContent>
                                    </Select>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                        <Card
                            className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                        >
                            <CardHeader>
                                <CardTitle>Imagem do Produto</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3">
                                    <Input
                                        id="file"
                                        name="file"
                                        type="text"
                                        className="w-full"
                                        required
                                    />
                                </div>
                                {/* <div className="flex flex-col gap-2">
                                    <button className="flex gap-3 w-full items-center justify-center rounded-md border border-dashed">
                                        <Upload className="h-8 w-4 text-muted-foreground" />
                                        <span>Alterar Imagem</span>
                                    </button>
                                </div> */}
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" size="sm">
                        Cancelar
                    </Button>
                    <Button size="sm">Salvar Produto</Button>
                </div>
            </div>
        </form >
    )
}
