import useApi from "../../hooks/use-api";
import {DonationProductByIdResponse} from "../../interfaces/jublawoma/donation";
import {useEffect, useState} from "react";
import Loading from "../../components/loading/loading";
import Error from "../../components/error/error";
import Text from "../../components/text/text";
import Flex from "../../components/flex/flex";
import {useNavigate, useParams} from "react-router-dom";
import {DonationProductUnit} from "../../enums/jublawoma/donation";
import useInput from "../../hooks/use-input";
import InputNumber from "../../components/input/number/input-number";
import InputText from "../../components/input/text/input-text";
import Button from "../../components/button/button";
import {MessageResponse} from "../../interfaces/shared/message";
import {Enviroment} from "../../enums/shared/enviroment";
import IconButton from "../../components/icon/button/icon-button";

const JublawomaDonate = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const donationProduct = useApi<DonationProductByIdResponse>(Enviroment.JUBLAWOMA, "GET", "/donation/product/" + id)
  const donationProductDonor = useApi<MessageResponse>(Enviroment.JUBLAWOMA, "POST", "/donation/product/donor")

  const firstname = useInput(true)
  const lastname = useInput(true)
  const phone = useInput(true)
  const quantity = useInput(true, donationProduct.data?.step || 0, value => {
    return donationProduct.data && value % donationProduct.data.step !== 0 ? "Die Menge ist nicht durch " + donationProduct.data.step + " teilbar." : null
  })
  const note = useInput(false)
  const [submit, setSubmit] = useState("")

  useEffect(() => {
    donationProduct.execute()

    const interval = setInterval(() => donationProduct.execute(), 300_000)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (donationProductDonor.data) {
      navigate("/spenden/danke")
    }
  }, [donationProductDonor.data]);

  const create = () => {
    setSubmit("")

    if (!firstname.valid ||
        !lastname.valid ||
        !lastname.valid ||
        !phone.valid ||
        !quantity.valid ||
        !note.valid ||
        quantity.value === 0) {
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
                    <Flex xl={{direction: "row", align: "center", gap: 1}}>
                      <IconButton size={1.5} onClick={() => navigate("/spenden")} highlight={false}>chevron-left</IconButton>
                      <Text type="p">Zurück</Text>
                    </Flex>
                    <Flex xl={{direction: "column"}}>
                      <Text type="h1">{donationProduct.data.name}</Text>
                      <Text type="h3" primary={false}>{donationProduct.data.note}</Text>
                    </Flex>
                    <Flex xl={{direction: "column"}}>
                      <Text type="s" primary={false}>Bereits gespendet</Text>
                      <Text
                          type="p">{donationProduct.data.donated} von {donationProduct.data.quantity} {DonationProductUnit.translate(donationProduct.data.unit, donationProduct.data.quantity)} [{donationProduct.data.quantity - donationProduct.data.donated} verbleibend]</Text>
                    </Flex>
                  </Flex>
                  <Flex xl={{direction: "column", gap: 2}}>
                    <Text type="h2">Spenden</Text>
                    <Flex xl={{direction: "column", gap: 1}}>
                      <InputText {...firstname} label="Vorname" placeholder="Vorname" characters={32}/>
                      <InputText {...lastname} label="Nachname" placeholder="Nachname" characters={32}/>
                      <InputText {...phone} label="Telefon" placeholder="123 456 78 90"/>
                      <InputNumber {...quantity}
                                   label={"Menge in " + DonationProductUnit.translate(donationProduct.data.unit, donationProduct.data.quantity)}
                                   required={true} min={0} max={donationProduct.data.quantity - donationProduct.data.donated}
                                   step={donationProduct.data.step}/>
                      <InputText {...note} label="Bemerkung" rows={3} placeholder="Bemerkungen oder Hinweise"/>
                    </Flex>
                    <Flex xl={{direction: "row", align: "center", justify: "between", gap: 1}} m={{direction: "column"}}>
                      {
                        donationProductDonor.loading ? <Loading/> : null
                      }
                      <Text type="p">
                        {
                          submit ? submit : null
                        }
                        {
                          donationProductDonor.error ? donationProductDonor.error : null
                        }
                      </Text>
                      <Flex xl={{direction: "row", gap: 1}}>
                        <Button onClick={reset} highlight={false}>Zurücksetzten</Button>
                        <Button onClick={create} highlight={true}>Senden</Button>
                      </Flex>
                    </Flex>
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
