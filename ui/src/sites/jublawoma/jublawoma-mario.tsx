import Mario from "../../components/mario/mario";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import MarioLog from "../../components/mario/log/mario-log";
import MarioGraph from "../../components/mario/graph/mario-graph";

const JublawomaAbout = () => {

  return (
      <Mario>
        <Grid xl={{columns: 4, gap: 2}} m={{columns: 1}}>
          <GridItem xl={{columns: 1}}>
            <MarioLog/>
          </GridItem>
          <GridItem xl={{columns: 3}} m={{columns: 1}}>
            <MarioGraph/>
          </GridItem>
        </Grid>
      </Mario>
  )
}

export default JublawomaAbout
