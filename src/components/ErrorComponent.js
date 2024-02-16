import {useNavigate} from "react-router-dom";
import { CiWarning } from "react-icons/ci";
import Button from "./Button";

const ErrorComponent = ({message,redirectUri}) => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center items-center gap-8 flex-col">
            <CiWarning size={100} />
            <p>{message}</p>
            <Button onClick={() => navigate(redirectUri)} label={"Go back"}></Button>
        </div>
    )
}

export default ErrorComponent