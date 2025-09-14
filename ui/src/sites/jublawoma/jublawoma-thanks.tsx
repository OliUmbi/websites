import Flex from "../../components/flex/flex";
import Text from "../../components/text/text";
import Button from "../../components/button/button";
import {useNavigate} from "react-router-dom";
import Icon from "../../components/icon/icon";

const JublawomaThanks = () => {

    const navigate = useNavigate()

    return (
        <Flex xl={{width: true, height: true, direction: "column", justify: "center", align: "center", gap: 2}}>
            <Flex xl={{direction: "row", gap: 1}}>
                <Icon size={4}>heart</Icon>
                <Flex xl={{direction: "column"}}>
                    <Text type="h1">Danke!</Text>
                    <Text type="h3" primary={false}>Vielen Dank für Ihre Spende.</Text>
                </Flex>
            </Flex>
            <Button onClick={() => navigate("/spenden")} highlight={true}>Zurück zur Spendeliste</Button>
        </Flex>
    )
}

export default JublawomaThanks
