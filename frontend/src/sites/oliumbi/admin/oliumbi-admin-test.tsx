import InputDate from "../../../components/input/date/input-date";
import useInput from "../../../hooks/use-input";

const OliumbiAdminTest = () => {

  const brithday = useInput<Date>(true, new Date, value => {
    if (value.includes("20.04.2024")) {
      return "Date cannot be 420"
    }
    return null
  });

  return (
      <>
        <InputDate {...brithday} label="Brithday" placeholder="20.04.2024" time={true}/>
      </>
  )
}

export default OliumbiAdminTest
