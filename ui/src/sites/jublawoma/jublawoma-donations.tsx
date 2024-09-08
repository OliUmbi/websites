import Section from "../../components/section/section";
import useApi from "../../hooks/use-api";
import {DonationResponse} from "../../interfaces/jublawoma/donation";
import {useEffect} from "react";
import Loading from "../../components/loading/loading";
import Error from "../../components/error/error";
import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import {date} from "../../services/date";
import Button from "../../components/button/button";
import {DonationProductUnit} from "../../enums/jublawoma/donation";
import {useNavigate} from "react-router-dom";

const JublawomaDonations = () => {

  let navigate = useNavigate()
  let donation = useApi<DonationResponse>("GET", "/jublawoma/donation")

  useEffect(() => {
    donation.execute()

    const interval = setInterval(() => donation.execute(), 300_000)

    return () => clearInterval(interval);
  }, []);

  return (
      <Section width="m">
        {
          donation.data ? (
              <Flex xl={{direction: "column", gap: 8}}>
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
                          <Flex xl={{direction: "row", align: "center", justify: "between", gap: 2}} key={index}>
                            <Flex xl={{direction: "row", align: "center", gap: 1}}
                                  s={{direction: "column", align: "start", gap: 0}}>
                              <Text type="h3">{value.name}</Text>
                              <Text
                                  type="p">{value.donated} / {value.quantity} {DonationProductUnit.translate(value.unit)}</Text>
                            </Flex>
                            <Button onClick={() => navigate("/spenden/" + value.id)} highlight={false}>Spenden</Button>
                          </Flex>
                      ))
                    }
                  </Flex>
                  <Flex xl={{direction: "column", gap: 2}}>
                    <Text type="s" primary={false}>Bereits gespendet
                      [{donation.data.products.filter(value => value.quantity == value.donated).length}]</Text>
                    {
                      donation.data.products.filter(value => value.quantity == value.donated).map((value, index) => (
                          <Flex xl={{direction: "row", align: "center", gap: 1}}
                                s={{direction: "column", align: "start", gap: 0}}>
                            <Text type="h3">{value.name}</Text>
                            <Text
                                type="p">{value.donated} / {value.quantity} {DonationProductUnit.translate(value.unit)}</Text>
                          </Flex>
                      ))
                    }
                  </Flex>
                </Flex>
              </Flex>
          ) : null
        }
        {
          donation.error ? <Error message={donation.error}/> : null
        }
        {
          donation.loading ? <Loading/> : null
        }
      </Section>
  )
}

export default JublawomaDonations
