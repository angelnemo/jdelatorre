import './App.css'
import MenuItem from './components/MenuItem'
import OrderContent from './components/OrderContent'
import OrderTotals from './components/OrderTotals'
import TipPercetageForm from './components/TipPercetageForm'
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'


function App() {

  // console.log (menuItems) /* trayendo directo la data */
  const {order, tip, setTip, addItem, placeOrder} = useOrder()

  return (
    <>
      <h3>Tips</h3>
      {
        menuItems.map ( item => (
          <MenuItem 
            key={item.id}
            item={item}
            addItem={addItem}
          />
        ) )
      }
      <br />

      {
        order.length > 0 ?
        (
          <>
            <OrderContent 
              order={order}
            />

            <TipPercetageForm 
              setTip = {setTip}
              tip={tip}
            />


            <OrderTotals 
              order={order}
              tip={tip}
              placeOrder={placeOrder}
            />

          </>
        ):(
          <p>Orden esta vacia</p>
        )
      }


    </>
  )
}

export default App
