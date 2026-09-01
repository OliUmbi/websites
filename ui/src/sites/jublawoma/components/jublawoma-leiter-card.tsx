import "./jublawoma-leiter-card.scss";
import Flex from "../../../components/flex/flex";
import Image from "../../../components/image/image";
import Text from "../../../components/text/text";
import {LeiterImage} from "../jublawoma-leiter";

interface Props {
    image: LeiterImage
}

const JublawomaLeiterCard = (props: Props) => {

    return (
        <Flex xl={{direction: "column", align: "center", gap: 1}}>
            <div className="jublawoma-leiter-card__image">
                <Image src={props.image.src} alt={props.image.alt} side="width" rounded={true}/>
            </div>
            <Text type="p" bold={true}>{props.image.alt}</Text>
        </Flex>
    )
}

export default JublawomaLeiterCard
