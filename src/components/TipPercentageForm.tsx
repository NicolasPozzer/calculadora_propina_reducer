const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

// Props
interface TipPercentageFormProps{
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">
                Propina:
            </h3>

            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    
                    <input 
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}//esto va para que deje seleccionar uno solo
                        //Obtenemos el evento con e y le asignamos el valor de tip.value
                        //con ese "+" transformamos a number un string
                        onChange={e => setTip(+e.target.value)}// para ejecutar algo cada vez que presione en una opcion
                        checked={tipOption.value === tip}
                    />
                    </div>
                ))}

            </form>
        </div>
    )
}
