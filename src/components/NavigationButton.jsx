import {useNavigate} from "react-router-dom";
import Button from "./Button";

const NavigationButton = ({redirectUri, label}) => {
    const navigate = useNavigate()
    return <Button onClick={() => navigate(redirectUri)} label={label}/>
}

export default NavigationButton