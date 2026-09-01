import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Flex from "../../components/flex/flex";
import {leiterImages} from "./jublawoma-leiter";
import JublawomaLeiterCard from "./components/jublawoma-leiter-card";

const JublawomaLeiterList = () => {

    return (
        <Flex xl={{direction: "column", align: "center", gap: 8}}>
            <Flex xl={{widthMax: "l", width: true}}>
                <Grid xl={{columns: 3, gap: 4}} m={{columns: 1}}>
                    {
                        leiterImages.map((value, index) => (
                            <GridItem xl={{columns: 1}} key={index}>
                                <JublawomaLeiterCard image={value}/>
                            </GridItem>
                        ))
                    }
                </Grid>
            </Flex>
        </Flex>
    )
}

export default JublawomaLeiterList
