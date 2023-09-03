import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReplyWrapper from "../../components/reply/ReplyWrapper";
import ReadComponent from "../../components/board/ReadComponent";

const ReadPage = () => {

    const {queryObj, moveList} = useQueryObj()
    const {bno} = useParams()      // url 매개변수 값 추출

    return (  
        <div>
            <ReadComponent bno={bno}></ReadComponent>
            <ReplyWrapper bno={bno}></ReplyWrapper>

            <button className="bg-blue-100 border-2 border-black rounded-sm" onClick={e => moveList()}>List</button>
        </div>
    );
}
 
export default ReadPage;