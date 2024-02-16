import {useNavigate} from "react-router-dom";

const ErrorComponent = ({message,redirectUri}) => {
    const navigate = useNavigate()
    return (
        <div>
            <p>{message}</p>
            <div onClick={() => navigate(redirectUri)}>Go back</div>
        </div>
    )
}

export default ErrorComponent