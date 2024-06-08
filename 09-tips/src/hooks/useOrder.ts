import { useState } from "react"
import { MenuItem, OrderItem } from "../types"



/* funciones para la data: son pasadas a traves del return del final*/
export default function useOrder () {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)



    const addItem = (item:MenuItem) => {

        const itemExists = order.find (orderItem => orderItem.id === item.id) /* verificar si item existe */
        if (itemExists) { /* si el item ya existe, solo le incrementa la cantidad en 1 */
            const updateOrder = order.map ( orderItem => orderItem.id === item.id ? {
                ...orderItem, 
                quantity:orderItem.quantity + 1
            } : orderItem ) /* si no existe entonces entra el item */
            setOrder (updateOrder)
        } else {
            const newItem:OrderItem = {...item, quantity:1 }
            setOrder( [...order, newItem] )
        }
        
        
    }



    const placeOrder = () => {
        setOrder([]) 
        setTip(0)
    }


    /* todo lo que se procese aqui, para poder ser utilizado en la app */
    return {
        order,
        tip,
        setTip,
        addItem,
        placeOrder
    }

}