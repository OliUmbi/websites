import useApi from "../../hooks/use-api";
import {DonationAllResponse} from "../../interfaces/jublawoma/donation";
import {Fragment, useEffect} from "react";
import Loading from "../../components/loading/loading";
import Error from "../../components/error/error";
import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import {date} from "../../services/date";
import Button from "../../components/button/button";
import {DonationProductUnit} from "../../enums/jublawoma/donation";
import {useNavigate} from "react-router-dom";
import {Enviroment} from "../../enums/shared/enviroment";
import Grid from "../../components/grid/grid";
import GridItem from "../../components/grid/item/grid-item";
import Icon from "../../components/icon/icon";
import Divider from "../../components/divider/divider";

const JublawomaDonations = () => {

  let navigate = useNavigate()
  let donation = useApi<DonationAllResponse>(Enviroment.JUBLAWOMA, "GET", "/donation")

  useEffect(() => {
    donation.execute()

    const interval = setInterval(() => donation.execute(), 300_000)

    return () => clearInterval(interval);
  }, []);

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "m", width: true, direction: "column", gap: 8}}>
          {
            donation.data ? (
                <>
                  <Flex xl={{direction: "column", gap: 2}}>
                    <Text type="s"
                          primary={false}>{date.locale(donation.data.start, "date")} - {date.locale(donation.data.finish, "date")}</Text>
                    <Text type="h1">{donation.data.title}</Text>
                    <Text type="p">{donation.data.description}</Text>
                    <Text type="p">{donation.data.contact}</Text>
                  </Flex>
                  <Flex xl={{direction: "column", gap: 4}}>
                    <Flex xl={{direction: "column", gap: 2}}>
                      <Text type="s" primary={false}>Offene spenden
                        [{donation.data.products.filter(value => value.quantity != value.donated).length}]</Text>
                      {
                        donation.data.products.filter(value => value.quantity != value.donated).map((value, index) => (
                            <Fragment key={index}>
                              <Grid xl={{columns: 4, gap: 1}} m={{columns: 2}}>
                                <GridItem xl={{columns: 2}}>
                                  <Flex xl={{height: true, direction: "column", justify: "center"}}>
                                    <Text type="h3">{value.name}</Text>
                                    {
                                      value.note ? <Text type="s" primary={false}>{value.note}</Text> : null
                                    }
                                  </Flex>
                                </GridItem>
                                <GridItem xl={{columns: 1}}>
                                  <Flex xl={{height: true, direction: "column", justify: "center"}}>
                                    <Text type="p">{value.donated} / {value.quantity} {DonationProductUnit.translate(value.unit, value.quantity)}</Text>
                                  </Flex>
                                </GridItem>
                                <GridItem xl={{columns: 1}}>
                                  <Flex xl={{justify: "end"}}>
                                    <Button onClick={() => navigate("/spenden/" + value.id)} highlight={false}>
                                      <Icon size={1}>hand-heart</Icon>
                                      Spenden
                                    </Button>
                                  </Flex>
                                </GridItem>
                              </Grid>
                              <Divider/>
                            </Fragment>
                        ))
                      }
                    </Flex>
                    <Flex xl={{direction: "column", gap: 2}}>
                      <Text type="s" primary={false}>Bereits gespendet [{donation.data.products.filter(value => value.quantity == value.donated).length}]</Text>
                      {
                        donation.data.products.filter(value => value.quantity == value.donated).map((value, index) => (
                            <Fragment key={index}>
                              <Grid xl={{columns: 2, gap: 1}}>
                                <GridItem xl={{columns: 1}}>
                                  <Flex xl={{height: true, direction: "column", justify: "center"}}>
                                    <Text type="h3">{value.name}</Text>
                                    {
                                      value.note ? <Text type="s" primary={false}>{value.note}</Text> : null
                                    }
                                  </Flex>
                                </GridItem>
                                <GridItem xl={{columns: 1}}>
                                  <Flex xl={{height: true, direction: "column", justify: "center"}}>
                                    <Text type="p">{value.donated} / {value.quantity} {DonationProductUnit.translate(value.unit, value.quantity)}</Text>
                                  </Flex>
                                </GridItem>
                              </Grid>
                              <Divider/>
                            </Fragment>
                        ))
                      }
                    </Flex>
                  </Flex>
                </>
            ) : null
          }
          {
            donation.error ? <Error message={donation.error}/> : null
          }
          {
            donation.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default JublawomaDonations
