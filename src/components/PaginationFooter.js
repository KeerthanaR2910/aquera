import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import NavigationButton from "./NavigationButton";

const PaginationFooter = ({currentPage, baseUri}) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between py-5">
            <button onClick={() => {
                navigate(`${baseUri}/repositories?page=${currentPage - 1}`)
            }} disabled={currentPage === 1}>
                <GrFormPrevious size={40}/>
            </button>
            <button onClick={() => {
                navigate(`${baseUri}/repositories?page=${currentPage + 1}`)
            }}>
                <GrFormNext size={40}/>
            </button>
            <NavigationButton redirectUri={baseUri} label={`Back to User profile page`} />
        </div>
    )
}

export default PaginationFooter