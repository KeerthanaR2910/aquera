import {useNavigate} from "react-router-dom";
import { CiWarning } from "react-icons/ci";

const ErrorComponent = ({message,redirectUri}) => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center items-center gap-8 flex-col">
            <CiWarning size={100} />
            <p>{message}</p>
            <button onClick={() => navigate(redirectUri)} className={"appearance-none bg-purple-400 p-2 rounded-lg text-white"}>Go back</button>
        </div>
    )
}

export default ErrorComponent