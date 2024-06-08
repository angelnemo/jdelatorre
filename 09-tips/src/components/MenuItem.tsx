import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"
type MenuItemProps = { /* se debe tipar los datos con los que se trabaja */
    item: MenuItem,
    addItem: (item:MenuItem) => void /* addItem es funcion, y tambien se tipa */
}


/* rafce: componente tipo arrow */
const MenuItem = ({item, addItem} : MenuItemProps) => { 
  return (
    <div>
      <button
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p>{ formatCurrency(item.price)}</p>
      </button>
    </div>
  )
}

export default MenuItem
