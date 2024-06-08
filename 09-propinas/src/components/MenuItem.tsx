/* se debe tipar el dato, en este caso el item */
import type { MenuItem } from "../types"
type MenuItemsProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void  /* addItem es de tipo function */
}


export default function MenuItem ({item, addItem}:MenuItemsProps) {
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between" 
        onClick={() => addItem(item)}
    >
        
        <p>{item.name}</p>
        <p className="font-black" >${item.price}</p>  
    </button>
  )
}


