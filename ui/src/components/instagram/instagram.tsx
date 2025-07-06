import "./instagram.scss";
import Text from "../text/text";
import Flex from "../flex/flex";
import Icon from "../icon/icon";
import {Link} from "react-router-dom";
import Button from "../button/button";

interface Props {
    name: string
}

const Instagram = (props: Props) => {

    return (
        <Link className="instagram" to={"https://www.instagram.com/" + props.name} target="_blank">
            <iframe className="instagram__iframe" src={"https://www.instagram.com/" + props.name + "/embed"} allowTransparency="true" allowFullScreen="true" frameBorder="0" scrolling="no"/>
            <div className="instagram__fade">
                <Flex xl={{direction: "row", width: true, height: true, gap: 1, align: "end", justify: "center"}}>
                    <Button onClick={null} highlight={true}>
                        Mehr auf Instagram
                        <Icon size={1}>chevron-right</Icon>
                    </Button>
                </Flex>
            </div>
        </Link>
    )
}

export default Instagram;
