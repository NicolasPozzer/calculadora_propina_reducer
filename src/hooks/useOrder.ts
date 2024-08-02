import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){

    // El <OrderItem> es un generic para especificar el tipo de dato
    //al order ya que dice que es never, este se usa si es never_
    //nada mas.
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)
    
    const addItem = (item : MenuItem) => {
        // Pregunta si existe
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        // si existe retornaria true y entra al condicional
        if(itemExist){
            // Si se repite hay que aumentar la cantidad de la orden
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity + 1} : 
                orderItem
            )
            setOrder(updatedOrder)
        } else{
            // Se crea una nueva variable de item y se le agrega cantidad
            //ya que sino luego nos salta error en la linea de abajo
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
           
    }

    const removeItem = (id: number) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const clearItems = () => {
        console.log("limpiando ordenes")
        setOrder([])
        setTip(0)
    }

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        clearItems
    }
}