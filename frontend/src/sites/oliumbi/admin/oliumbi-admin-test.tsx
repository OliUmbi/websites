import InputDate from "../../../components/input/date/input-date";
import useInput from "../../../hooks/use-input";
import Column from "../../../components/column/column";
import Text from "../../../components/text/text";
import InputText from "../../../components/input/text/input-text";
import InputNumber from "../../../components/input/number/input-number";
import InputFile from "../../../components/input/file/input-file";
import InputOptions from "../../../components/input/options/input-options";

const OliumbiAdminTest = () => {

  const name = useInput<string>(true, undefined, value => {
    if (value.toLowerCase().includes("oliver")) {
      return "This is already mine"
    }
    return null
  })

  const age = useInput<number>(true, undefined, value => {
    if (value < 18) {
      return "No underage"
    }
    return null
  })

  const birthday = useInput<Date>(true, new Date(), value => {
    if (value.getDate() === 20) {
      return "This is already mine"
    }
    return null
  });

  const image = useInput<File>(true, undefined, value => {
    if (value.name === "yeet") {
      return "This is already mine"
    }
    return null
  });

  const type = useInput<string[]>(false, undefined, value => {
    if (value.includes("admin")) {
      return "This is already mine"
    }
    return null
  });

  return (
      <Column gap={1}>
        <InputText {...name} label="Name" placeholder="Oliver" characters={10}/>
        <InputNumber {...age} label="Age" placeholder="18+" max={25} step={2}/>
        <InputDate {...birthday} label="Birthday" placeholder="20.04.2024" time={true} past={true}/>
        <InputFile {...image} label="Image" placeholder="yeet" image={true} />
        <InputOptions {...type} label="Type" options={["Admin", "Author", "Student", "Default"]} multiple={false}/>

        <Text type="p" primary={true} mono={true}>{type.valid ? "valid" : "invalid"}</Text>
        <Text type="p" primary={true} mono={true}>{type.value ? type.value.join(", ") : "null"}</Text>
      </Column>
  )
}

export default OliumbiAdminTest
