'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Upload } from 'lucide-react'
import { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import Image, { ImageProps } from 'next/image';


function UploadImage({ product }: { product: any }) {
    const [info, updateInfo] = useState<ImageProps>();

    const handleUpload = (result: any, { widget }: { widget: any }) => {
        const info = result.info
        const image: ImageProps = {
            src: info.secure_url,
            width: info.width,
            height: info.height,
            alt: ''
        }
        updateInfo(image)
        widget.close()
    }

    const updatedImage = info ? info : product?.image

    return (
        <Card className='overflow-hidden' x-chunk='dashboard-07-chunk-4'>
            <CardHeader>
                <CardTitle>Imagem do Produto</CardTitle>
            </CardHeader>
            <CardContent>
                <Input
                    type='hidden'
                    name='file'
                    defaultValue={info?.src || product?.image.src}
                    required
                />
                <div className='grid gap-3'>
                    {updatedImage && <div className='flex items-center justify-center'>
                        <Image alt={updatedImage?.alt} {...updatedImage} />
                    </div>}
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <CldUploadButton className='flex gap-3 items-center justify-center rounded-md border border-dashed bg-white shadow-md py-1 w-full'
                            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                            options={{
                                folder: 'admin',
                                multiple: false
                            }}
                            onSuccess={handleUpload}
                        >
                            <Upload className='h-8 w-4 text-muted-foreground' />
                            <span>
                                {product ? 'Alterar' : 'Adicionar'} Imagem
                            </span>
                        </CldUploadButton>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default UploadImage
