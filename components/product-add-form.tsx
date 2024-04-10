'use client'
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
import { useState } from 'react'
export default function ProductAddForm({ allVendors, hasVendors, createInvoice }: { allVendors: IVendor[], hasVendors: boolean, createInvoice: () => void }) {
    const [formData, setFormData] = useState({})
    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} action={createInvoice}>
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
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="description">Descrição</Label>
                                        <Textarea
                                            id="description"
                                            required
                                            className="min-h-60"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Link</Label>
                                        <Input
                                            id="link"
                                            type="url"
                                            className="w-full"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Preço Regular</Label>
                                        <Input
                                            id="price"
                                            type="number"
                                            className="w-full"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Preço com desconto</Label>
                                        <Input
                                            id="discount"
                                            type="number"
                                            className="w-full"
                                            required
                                            onChange={handleChange}
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
                                        onValueChange={(e) => handleChange({ target: { id: 'vendor', value: e } })
                                        }
                                    >
                                        <SelectTrigger
                                            id="vendor"
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
                                        id="image"
                                        type="text"
                                        className="w-full"
                                        required
                                        onChange={handleChange}
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
