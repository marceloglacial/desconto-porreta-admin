import { Home, Package, ShoppingCart } from 'lucide-react'
import { FC, ReactElement } from 'react'


interface IconProps {
    icon: string
    size?: number
}

type icontComponentType = {
    [key: string]: ReactElement
}

const Icon: FC<IconProps> = ({ icon, size }): JSX.Element => {
    const iconSize = size || 5
    const icontComponent: icontComponentType = {
        package: <Package className={`h-${iconSize} w-${iconSize}`} />,
        shoppingcart: <ShoppingCart className={`h-${iconSize} w-${iconSize}`} />,
        home: <Home className={`h-${iconSize} w-${iconSize}`} />
    }
    return icontComponent[icon]
}

export default Icon
