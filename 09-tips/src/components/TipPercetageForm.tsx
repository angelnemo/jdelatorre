import type { Dispatch, SetStateAction } from "react"


const tipOptions = [
    {id:'tip-10', value:.10, label:'10%'},
    {id:'tip-20', value:.20, label:'20%'},
    {id:'tip-50', value:.50, label:'50%'}
]


type TipPercetageFormProps = {
    setTip:Dispatch<SetStateAction<number>>,/* dejamos que VS infiera este tipo de dato */
    tip:number
}


const TipPercetageForm = ({setTip, tip}:TipPercetageFormProps) => {
  return (
    <div>
      <h3>Propina</h3>
      <form action="">
        {
            tipOptions.map ( tipOption => (
                <div key={tipOption.id}>
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input type="radio" 
                        id={tipOption.id}
                        name="tip"
                        value={tipOption.value}
                        checked={tipOption.value === tip}
                        onChange={ e => setTip(+e.target.value) }
                    />
                </div>
            ) )
        }
      </form>
    </div>
  )
}

export default TipPercetageForm
