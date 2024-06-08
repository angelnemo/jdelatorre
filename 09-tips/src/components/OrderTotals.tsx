import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip:number,
    placeOrder: () => void  
}



const OrderTotals = ({order, tip, placeOrder}:OrderTotalsProps) => {

  const subTotalAmount = useMemo(
    () => order.reduce( (total, item) => total + (item.quantity * item.price), 0 ),
    [order] 
  )

  const tipAmount = useMemo( 
    () => subTotalAmount * tip, 
    [tip, order] 
  )


  const totalAmount = useMemo(
    () => subTotalAmount + tipAmount, [tip, order]
  )


  return (


    <div>
      <h2>Totales y propina</h2>
      <p>Subtotal: <span>{formatCurrency(subTotalAmount)}</span></p>
      <p>Propina: <span>{formatCurrency(tipAmount)}</span></p>
      <p>Total a pagar: <span>{formatCurrency(totalAmount)}</span> </p>

      <button 
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </div>
  )
}

export default OrderTotals
