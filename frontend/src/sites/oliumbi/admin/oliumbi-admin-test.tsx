import useInput from "../../../hooks/use-input";
import InputNumber from "../../../components/input/number/input-number";
import InputOptions from "../../../components/input/options/input-options";
import Image from "../../../components/image/image";
import Grid from "../../../components/grid/grid";
import GridItem from "../../../components/grid/item/grid-item";
import Button from "../../../components/button/button";
import Section from "../../../components/section/section";
import Flex from "../../../components/flex/flex";
import Carousel from "../../../components/carousel/carousel";
import Text from "../../../components/text/text";
import Pagination from "../../../components/pagination/pagination";
import usePagination from "../../../hooks/use-pagination";
import Intersect from "../../../components/intersect/intersect";

const OliumbiAdminTest = () => {

  const quantity = useInput<number>(true, 1, value => {
    if (value == 69) {
      return "Noice"
    }
    return null
  })
  const size = useInput<string[]>(true, ["M"]);
  const pagination = usePagination(99, 10)

  return (
      <>
        <Section width="xl">
          <Flex xl={{direction: "column", gap: 4}}>
            <Grid xl={{columns: 3, gap: 4}} m={{columns: 1, gap: 2}}>
              <GridItem xl={{span: 2}} m={{span: 1}}>
                <Carousel>
                  <Image
                      src="https://cdn.prod.website-files.com/6256995755a7ea0a3d8fbd11/645924d369c84c1e3dbda2ad_Frame%201.jpg"
                      alt="image" side="both" rounded={true}/>
                  <Image src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="image"
                         side="both" rounded={true}/>
                  <Image
                      src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                      alt="image" side="both" rounded={true}/>
                  <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="image" side="both"
                         rounded={true}/>
                  <Image
                      src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=sph"
                      alt="image" side="both" rounded={true}/>
                  <Flex xl={{width: true, height: true, direction: "column", align: "center", justify: "center", gap: 0.5}}>
                    <Text type="h1" primary={true} mono={false}>Questions?</Text>
                    <Text type="s" primary={true} mono={false}>Contact us!</Text>
                  </Flex>
                </Carousel>
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
            <Pagination {...pagination}/>
          </Flex>
          <Intersect onIntersect={() => console.log("visible")}/>
        </Section>
      </>
  )
}

export default OliumbiAdminTest
