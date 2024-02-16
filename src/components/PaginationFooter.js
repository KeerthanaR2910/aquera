import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const PaginationFooter = ({currentPage,baseUri}) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-around py-5">
            <button onClick ={() => {
                navigate(`${baseUri}?page=${currentPage - 1}`)
            }} disabled={currentPage === 1 }>
            <GrFormPrevious size={40} />
            </button>
            <button onClick ={() => {
                navigate(`${baseUri}?page=${currentPage + 1}`)
            }}>
            <GrFormNext size={40}/>

            </button>
        </div>
    )
}

export default PaginationFooter