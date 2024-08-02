import type { MenuItem } from "../types"

interface MenuItemProps {
    item: MenuItem
    addItem: (item: MenuItem) => void
}


export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
        className="border-2 border-teal-400
         hover:bg-teal-200 w-full p-3 flex
          justify-between"//w-full para que tome todo el ancho
        onClick={() => addItem(item)}//Como tiene que recibir algo,
        // se le agrega el CallBack "() =>" antes de llamar a la funcion.
    >
        
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>

    </button>
  )
}