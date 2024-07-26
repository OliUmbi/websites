import InputDate from "../../../components/input/date/input-date";
import useInput from "../../../hooks/use-input";
import Button from "../../../components/button/button";

const OliumbiAdminTest = () => {

  const birthday = useInput<Date>(true, new Date(), value => {
    if (value.includes("20.04.2024")) {
      return "Date cannot be 420"
    }
    return null
  });

  const test = () => {
    console.log(birthday.valid)
  }

  return (
      <>
        <InputDate {...birthday} label="Birthday" placeholder="20.04.2024" time={true}/>
        <Button onClick={test} highlight={true}>Test</Button>
      </>
  )
}

export default OliumbiAdminTest
