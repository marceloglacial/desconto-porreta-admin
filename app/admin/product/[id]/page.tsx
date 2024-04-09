import Image from "next/image"
import {
    ChevronLeft,
    Upload,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
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
import { getSingleProduct } from '@/lib/products'
import Link from 'next/link'
import { getVendors } from '@/lib/vendors'

export default async function ProductDetail({ params }: { params: { id: string } }) {

    const product = await getSingleProduct(params.id)
    const vendors = await getVendors()
    const allVendors = vendors.data
    const hasVendors = allVendors.length > 1

    if (!product) return <div>Produto não encontrado!</div>

    return (
        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Voltar</span>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                    Editar Produto
                </h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button variant="outline" size="sm">
                        Cancelar
                    </Button>
                    <Button size="sm">Salvar Produto</Button>
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
                                        id="name"
                                        type="text"
                                        className="w-full"
                                        defaultValue={product.title}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="description">Descrição</Label>
                                    <Textarea
                                        id="description"
                                        defaultValue={product.description}
                                        className="min-h-60"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Link</Label>
                                    <Input
                                        id="link"
                                        type="url"
                                        className="w-full"
                                        defaultValue={product.link}
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
                            {hasVendors && <Select defaultValue={product.vendor.id}>
                                <SelectTrigger
                                    id="category"
                                    aria-label="Selecione a loja"
                                >
                                    <SelectValue placeholder="Selecione a loja" />
                                </SelectTrigger>
                                <SelectContent>
                                    {allVendors.map(vendor =>
                                        <SelectItem key={vendor.id} value={vendor.id}>{vendor.name}</SelectItem>
                                    )}
                                </SelectContent>
                            </Select>}
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
                            <div className="flex flex-col gap-2">
                                <img
                                    alt="Product image"
                                    className="aspect-square w-full rounded-md object-contain"
                                    height="300"
                                    src={product.image.src}
                                    width="300"
                                />
                                <button className="flex gap-3 w-full items-center justify-center rounded-md border border-dashed">
                                    <Upload className="h-8 w-4 text-muted-foreground" />
                                    <span>Alterar Imagem</span>
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-07-chunk-5">
                        <CardHeader>
                            <CardTitle>Arquivar Produto</CardTitle>
                            {/* <CardDescription>
                                O produto continuará no sistema mas não será exibido para o usuário final.
                            </CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <div></div>
                            <Button size="sm" variant="secondary">
                                Arquivar Produto
                            </Button>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-07-chunk-5">
                        <CardHeader>
                            <CardTitle>Remover Produto</CardTitle>
                            {/* <CardDescription>
                                O produto será <span className=' text-red-600'>removido parmanentemente</span> do sistema.
                            </CardDescription> */}
                        </CardHeader>
                        <CardContent>
                            <div></div>
                            <Button size="sm" variant='destructive'>
                                Remover Produto
                            </Button>
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
    )
}
