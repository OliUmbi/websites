import useInput from "../../../hooks/use-input";
import InputNumber from "../../../components/input/number/input-number";
import InputOptions from "../../../components/input/options/input-options";
import Image from "../../../components/image/image";
import Grid from "../../../components/grid/grid";
import GridItem from "../../../components/grid/item/grid-item";
import Button from "../../../components/button/button";
import Flex from "../../../components/flex/flex";
import Section from "../../../components/section/section";

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
      <Section width="xl">
        <Grid xl={{columns: 3, gap: 4}} m={{columns: 1, gap: 2}}>
          <GridItem xl={{span: 2}} m={{span: 1}}>
            <Image src="https://cdn.prod.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg"
                   alt="image" side="both" rounded={true}/>
          </GridItem>
          <GridItem xl={{span: 1}}>
            <Flex xl={{height: true, direction: "column", justify: "between", gap: 2}} m={{direction: "row"}}
                  s={{direction: "column"}}>
              <InputOptions {...size} label="Grösse" options={["XL", "L", "M", "S", "XS", "XXS"]}/>
              <Flex xl={{direction: "column", align: "end", gap: 2}} m={{height: true, justify: "between"}}
                    s={{height: false, justify: undefined}}>
                <InputNumber {...quantity} label="Menge" placeholder="18+" min={1} step={1}/>
                <Button onClick={() => {
                }} highlight={true}>Grösse bestellen</Button>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Section>
  )
}

export default OliumbiAdminTest
