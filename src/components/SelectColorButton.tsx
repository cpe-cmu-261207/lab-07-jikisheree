import { PixelPainterStore, setColorselected } from "../stores/PixelPainterStore"

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {
const state = PixelPainterStore.useState()
  //modify this function to highlight correctly
  const computeRingSize = () => {
    if(state.colorselected === color)
    return "ring-8 ring-green-400"
    else return ""
  }

  return (
    <div className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }}
      onClick ={() =>{setColorselected(color)}}
    >
    </div>
  )
}

export default SelectColorButton