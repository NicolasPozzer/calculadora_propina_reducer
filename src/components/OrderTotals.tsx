
import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

interface OrderTotalsProps{
    order: OrderItem[]
    clearItems: () => void
    tip: number
}

export default function OrderTotals({order, clearItems, tip} : OrderTotalsProps) {

    // Subtotal cada orden
    const subtotalAmount = useMemo(() => order.reduce(
        (total, item) => total + (item.quantity * item.price), 0), [order])

    
    // Calcular propina
    const tipAmount = useMemo(() => tip * subtotalAmount, [tip, order])

    // Total + propina
    const total = useMemo(() => {
        return subtotalAmount + tipAmount
    }, [tip, order])

    

  return (
    <>
        { 
            order.length === 0 ?
                <p></p> :
                <div className="text-center pt-8">
                    <div>
                        <p className="font-bold">
                            El Total es: {formatCurrency(subtotalAmount)}
                        </p>
                        <p className="font-bold">
                            La propina es: {formatCurrency(tipAmount)}
                        </p>
                        <p className="font-bold pb-5">
                            El total mas propina es: {formatCurrency(total)}
                        </p>
                    </div>
                    <button
                        className=" bg-blue-300 rounded-full p-2 font-bold"
                        onClick={clearItems}
                    >
                        Enviar Pedido
                    </button>
                </div>
        }
    </>
  )
}
