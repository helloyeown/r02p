import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";
import useQueryObj from "../../hooks/useQueryObj";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import ListPageComponent from "../../components/common/ListPageComponent";

const ListPage = () => {

    const navigate = useNavigate()

    const {queryObj, setSearch, moveRead} = useQueryObj()


    const movePage = (num) => {
        console.log("num.................. " + num)

        queryObj.page = num
        setSearch({...queryObj})
    }

    const moveSearch = (type, keyword) => {
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword

        setSearch({...queryObj})
    }


    return ( 
            <div>
                <ListSearchComponent queryObj={queryObj} moveSearch={moveSearch}></ListSearchComponent>
                <ListComponent queryObj={queryObj} movePage={movePage} moveRead={moveRead} />
            </div>
    );
}
 
export default ListPage;