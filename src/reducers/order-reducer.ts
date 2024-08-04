import { MenuItem, OrderItem } from "../types"


export type OrderState = {
    order: OrderItem[],
    tip: number
}


export const initialState : OrderState = {
    order: [],
    tip: 0
}

export type OrderActions =
    // Disparadores
    { type: 'add-item', payload: {item: MenuItem } } |
    { type: 'remove-item', payload: {id: number} } |
    { type: 'vaciar-orders'} |
    { type: 'add-tip', payload: {value: number} }


export const orderReducer = (
    state: OrderState = initialState,
    actions: OrderActions
) => {

        // Aca va la logica para cada disparador

        if(actions.type === "add-item"){
            // Pregunta si existe
            const itemExist = state.order.find(orderItem => orderItem.id === actions.payload.item.id)

            let updatedOrder : OrderItem[] =[]
            // si existe retornaria true y entra al condicional
            if(itemExist){
                // Si se repite hay que aumentar la cantidad de la orden
                updatedOrder = state.order.map(orderItem => orderItem.id === actions.payload.item.id ?
                    {...orderItem, quantity: orderItem.quantity + 1} : 
                    orderItem
                )
            } else{
                // Se crea una nueva variable de item y se le agrega cantidad
                //ya que sino luego nos salta error en la linea de abajo
                const newItem : OrderItem = {...actions.payload.item, quantity: 1}
                updatedOrder = [...state.order, newItem]
            }

            return{
                ...state,
                order: updatedOrder
            }
        }
        
        if(actions.type === "remove-item"){
            let updatedOrder : OrderItem[] =[]
            updatedOrder = state.order.filter(item => item.id !== actions.payload.id)

            return{
                ...state,
                order: updatedOrder
            }
        }

        if(actions.type === "vaciar-orders"){
            
            const clearOrders: OrderItem[] = []
            
            return{
                ...state,
                order: clearOrders,
                tip: 0
            }
        }
        
        if(actions.type === "add-tip"){
            const tip = actions.payload.value

            return{
                ...state,
                tip
            }
        }

    return state
}
