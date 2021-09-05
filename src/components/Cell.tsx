import { PixelPainterStore, setCanvas } from "../stores/PixelPainterStore"

type CellProps = {
  x: number;
  y: number;
}

const Cell = ({ x, y }: CellProps) => {

  const state = PixelPainterStore.useState()
  // add onclick and ondrag
  return (
    <td className="w-6 h-6 cursor-pointer" style={{backgroundColor: state.canvas[y][x]}}
    onClick = {() => {setCanvas(y,x)}}
    onDrag = {() => {setCanvas(y,x)}}>
    </td>
  )
}

export default Cell