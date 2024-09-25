import useApi from "../../hooks/use-api";
import {DonationAllProductResponse, DonationProductByIdResponse} from "../../interfaces/jublawoma/donation";
import {useEffect, useState} from "react";
import Loading from "../../components/loading/loading";
import Error from "../../components/error/error";
import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import {useParams} from "react-router-dom";
import {DonationProductUnit} from "../../enums/jublawoma/donation";
import useInput from "../../hooks/use-input";
import InputNumber from "../../components/input/number/input-number";
import InputText from "../../components/input/text/input-text";
import Button from "../../components/button/button";
import {MessageResponse} from "../../interfaces/shared/message";
import {Enviroment} from "../../enums/shared/enviroment";

const JublawomaDonate = () => {

  const {id} = useParams()
  const donationProduct = useApi<DonationProductByIdResponse>(Enviroment.JUBLAWOMA, "GET", "/donation/product/" + id)
  const donationProductDonor = useApi<MessageResponse>(Enviroment.JUBLAWOMA, "POST", "/donation/product/donor")

  const firstname = useInput(true, "", value => {
    if (value.length > 32) return "Dieses Feld lässt nur Eingaben bis zu 32 Zeichen zu."
  })
  const lastname = useInput(true, "", value => {
    if (value.length > 32) return "Dieses Feld lässt nur Eingaben bis zu 32 Zeichen zu."
  })
  const phone = useInput(true, "", value => {
    if (value.length > 32) return "Dieses Feld lässt nur Eingaben bis zu 32 Zeichen zu."
  })
  const quantity = useInput(true, donationProduct.data?.step, value => {
    if (donationProduct.data) {
      if (value % donationProduct.data.step !== 0) {
        return "Die Menge ist nicht durch " + donationProduct.data.step + " teilbar."
      }
    }
  })
  const note = useInput(false, "")
  const [submit, setSubmit] = useState("")

  useEffect(() => {
    donationProduct.execute()

    const interval = setInterval(() => donationProduct.execute(), 300_000)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    donationProduct.execute()
  }, [donationProductDonor.data]);

  const create = () => {
    setSubmit("")

    if (!firstname.valid ||
        !lastname.valid ||
        !lastname.valid ||
        !phone.valid ||
        !quantity.valid ||
        !note.valid) {
      setSubmit("Nicht alle Felder sind korrekt ausgefüllt.")
      return
    }

    let payload = {
      body: {
        donationProductId: id,
        firstname: firstname.value,
        lastname: lastname.value,
        phone: phone.value,
        quantity: quantity.value,
        note: note.value
      }
    }

    donationProductDonor.execute(payload)
  }

  const reset = () => {
    setSubmit("")
    firstname.setInternal("")
    lastname.setInternal("")
    phone.setInternal("")
    quantity.setInternal(donationProduct.data?.step || null)
    note.setInternal("")
  }

  return (
      <Flex xl={{direction: "column", align: "center"}}>
        <Flex xl={{widthMax: "m", width: true, direction: "column", gap: 4}}>
          {
            donationProduct.data ? (
                <>
                  <Flex xl={{direction: "column", gap: 2}}>
                    <Text type="h1">{donationProduct.data.name}</Text>
                    <Flex xl={{direction: "column"}}>
                      <Text type="s" primary={false}>Bereits gespendet</Text>
                      <Text
                          type="p">{donationProduct.data.donated} von {donationProduct.data.quantity} {DonationProductUnit.translate(donationProduct.data.unit)} [{donationProduct.data.quantity - donationProduct.data.donated} verbleibend]</Text>
                    </Flex>
                    {
                      donationProduct.data.note ? (
                          <Flex xl={{direction: "column"}}>
                            <Text type="s" primary={false}>Bemerkung</Text>
                            <Text type="p">{donationProduct.data.note}</Text>
                          </Flex>
                      ) : null
                    }
                  </Flex>
                  <Flex xl={{direction: "column", gap: 2}}>
                    <Text type="h2">Spenden</Text>
                    <Flex xl={{direction: "column", gap: 1}}>
                      <InputText {...firstname} label="Vorname" placeholder="Vorname"/>
                      <InputText {...lastname} label="Nachname" placeholder="Nachname" characters={10}/>
                      <InputText {...phone} label="Telefon" placeholder="123 456 78 90"/>
                      <InputNumber {...quantity}
                                   label={"Menge in " + DonationProductUnit.translate(donationProduct.data.unit)}
                                   required={true} min={0} max={donationProduct.data.quantity - donationProduct.data.donated}
                                   step={donationProduct.data.step}/>
                      <InputText {...note} label="Bemerkung" rows={3}/>
                    </Flex>
                    <Flex xl={{width: true, direction: "row", justify: "end", gap: 1}}>
                      <Button onClick={reset} highlight={false}>Verwerfen</Button>
                      <Button onClick={create} highlight={true}>Senden</Button>
                    </Flex>
                    <Text type="p">{submit}</Text>
                    {
                      donationProductDonor.data ? <Text type="h3">{donationProductDonor.data.message}</Text> : null
                    }
                    {
                      donationProductDonor.error ? <Error message={donationProductDonor.error}/> : null
                    }
                    {
                      donationProductDonor.loading ? <Loading/> : null
                    }
                  </Flex>
                </>
            ) : null
          }
          {
            donationProduct.error ? <Error message={donationProduct.error}/> : null
          }
          {
            donationProduct.loading ? <Loading/> : null
          }
        </Flex>
      </Flex>
  )
}

export default JublawomaDonate
