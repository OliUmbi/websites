import Text from "../text/text";
import IconButton from "../icon/button/icon-button";
import Flex from "../flex/flex";

interface Props {
  total: number
  size: number
  offset: number
  setOffset: (value: number) => void
}

const Pagination = (props: Props) => {

  const previous = () => {
    let value = props.offset - props.size;

    if (value < 0) {
      value = 0
    }

    props.setOffset(value)
  }

  const next = () => {
    let value = props.offset + props.size;

    if (value >= props.total) {
      value = props.offset
    }

    props.setOffset(value)
  }

  const elements = () => {
    let value = props.offset + props.size

    if (value > props.total) {
      value = props.total
    }

    return value
  }

  return (
      <Flex xl={{direction: "row", align: "center", justify: "end", gap: 1}}>
        <Text type="p" primary={true} mono={true}>{props.offset + 1}-{elements()} von {props.total} Resultaten</Text>
        <IconButton size={1.5} onClick={previous} highlight={false}>chevron-left</IconButton>
        <IconButton size={1.5} onClick={next} highlight={false}>chevron-right</IconButton>
      </Flex>
  )
}

export default Pagination;
