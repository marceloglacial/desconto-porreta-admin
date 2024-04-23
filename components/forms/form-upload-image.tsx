'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Upload } from 'lucide-react'
import { useEffect, useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import Image, { ImageProps } from 'next/image';

function FormUploadImage({ item }: { item: any }) {
    const [image, updateImage] = useState<ImageProps>(item?.image);


    const handleUpload = (result: any, { widget }: { widget: any }) => {
        const cloudinaryImage = result.info
        const formatedImage: ImageProps = {
            src: cloudinaryImage.secure_url,
            width: cloudinaryImage.width,
            height: cloudinaryImage.height,
            alt: 'Imagem do Item'
        }
        updateImage(formatedImage)
        widget.close()
    }

    return (
        <Card className='overflow-hidden' x-chunk='dashboard-07-chunk-4'>
            <CardHeader>
                <CardTitle>Imagem do Produto</CardTitle>
            </CardHeader>
            <CardContent>
                <Input
                    type='hidden'
                    name='image'
                    defaultValue={JSON.stringify(image)}
                    required
                />
                <div className='grid gap-3'>
                    {image.src && <div className='flex items-center justify-center'>
                        <Image alt={image?.alt} src={image.src} width={image.width} height={image.height} className=' object-cover' />
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
                                {item ? 'Alterar' : 'Adicionar'} Imagem
                            </span>
                        </CldUploadButton>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default FormUploadImage
