import InputDate from "../../../components/input/date/input-date";
import useInput from "../../../hooks/use-input";
import Column from "../../../components/column/column";
import Text from "../../../components/text/text";
import InputText from "../../../components/input/text/input-text";
import InputNumber from "../../../components/input/number/input-number";
import InputFile from "../../../components/input/file/input-file";
import InputOptions from "../../../components/input/options/input-options";
import Picture from "../../../components/picture/picture";
import Image from "../../../components/image/image";
import Grid from "../../../components/grid/grid";
import GridItem from "../../../components/grid/item/grid-item";
import Button from "../../../components/button/button";
import Row from "../../../components/row/row";

const OliumbiAdminTest = () => {

  const name = useInput<string>(true, "Umbricht", value => {
    if (value.toLowerCase().includes("oliver")) {
      return "This is already mine"
    }
    return null
  })

  const quantity = useInput<number>(true, 1)

  const birthday = useInput<Date>(true, new Date(), value => {
    if (value.getDate() === 20) {
      return "This is already mine"
    }
    return null
  });

  const image = useInput<File>(false, undefined, value => {
    if (value.name === "yeet") {
      return "This is already mine"
    }
    return null
  });

  const size = useInput<string[]>(true, ["M"]);

  return (
      <Column gap={1}>
        <InputText {...name} label="Name" placeholder="Oliver" characters={10}/>
        <InputNumber {...quantity} label="Age" placeholder="18+" max={25} step={2}/>
        <InputDate {...birthday} label="Birthday" placeholder="20.04.2024" time={true} past={true}/>
        <InputFile {...image} label="Picture" image={true}/>



        <Text type="p" primary={true} mono={true}>{size.valid ? "valid" : "invalid"}</Text>
        <Text type="p" primary={true} mono={true}>{size.value ? size.value.join(", ") : "null"}</Text>

        <Grid gap={2}>
          <GridItem xl={8}>
            <Column gap={2}>
              <Text type="h1" primary={true} mono={false}>Type tokens and sets</Text>
              <Text type="h2" primary={true} mono={false}>Type tokens and sets</Text>
              <Text type="h3" primary={true} mono={false}>Type tokens and sets</Text>
              <Text type="p" primary={true} mono={false}>Type tokens and sets</Text>
              <Text type="s" primary={true} mono={false}>Type tokens and sets</Text>
            </Column>
          </GridItem>
          <GridItem xl={4}>
            <Picture id="sadfdasf" alt="image" side="both" rounded={true}/>
          </GridItem>
          <GridItem xl={4}>
            <Image src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="image"
                   side="both" rounded={true}/>
          </GridItem>
        </Grid>


        <Grid gap={4}>
          <GridItem xl={5}>
            <Image src="https://cdn.prod.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg" alt="image" side="both" rounded={true}/>
          </GridItem>
          <GridItem xl={3}>
            <Column height={true} justify="space-between" gap={2}>
              <InputOptions {...size} label="Grösse" options={["XL", "L", "M", "S", "XS", "XXS"]}/>
              <Column align="right" gap={2}>
                <InputNumber {...quantity} label="Menge" placeholder="18+" min={1} step={1}/>
                <Button onClick={() => {}} highlight={true}>Grösse bestellen</Button>
              </Column>
            </Column>
          </GridItem>
        </Grid>
      </Column>
  )
}

export default OliumbiAdminTest
