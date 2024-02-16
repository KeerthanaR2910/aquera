import { CiWarning } from "react-icons/ci";
import NavigationButton from "./NavigationButton";

const ErrorComponent = ({message,redirectUri}) => {
    return (
        <div className="flex justify-center items-center gap-8 flex-col">
            <CiWarning size={100} />
            <p>{message}</p>
            <NavigationButton redirectUri={redirectUri} label={"Go back"} />
        </div>
    )
}

export default ErrorComponent