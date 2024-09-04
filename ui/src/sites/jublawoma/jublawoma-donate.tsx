import Section from "../../components/section/section";
import useApi from "../../hooks/use-api";
import {DonationResponse} from "../../interfaces/jublawoma/donation";
import {useEffect} from "react";

const JublawomaDonate = () => {

  let donation = useApi<DonationResponse>("GET", "/jublawoma/donation")

  useEffect(() => {
    donation.execute()
  }, []);

  return (
      <>
        <Section width="xl">
          {
            donation.data ? donation.data.id : ""
          }
          {
            donation.loading ? "loading" : null
          }
        </Section>
      </>
  )
}

export default JublawomaDonate
