import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentProps = {
    order:OrderItem[]
}


const OrderContent = ({order}:OrderContentProps) => {
  return (
    <div>
      {
        order.map ( item =>(
            <div key={item.id}>
                <p>
                    {item.name} - {formatCurrency(item.price)}
                </p>
                <p>
                    {item.quantity}
                </p>
            </div>
        ) )
      }
    </div>
  )
}

export default OrderContent
