import { useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";
import useQueryObj from "../../hooks/useQueryObj";

const ListPage = () => {

    // const [search, setSearch] = useSearchParams()
    // console.log(search)

    // const page = search.get("page") || 1
    // const size = search.get("size") || 10
    // const type = search.get("type")
    // const keyword = search.get("keyword")

    // const queryObj = {page, size, type, keyword}
    // console.log("queryObj.........................")
    // console.log(queryObj)

    const {queryObj, setSearch} = useQueryObj()


    const movePage = (num) => {
        console.log("num.................. " + num)

        queryObj.page = num
        setSearch({...queryObj})
    }


    return ( 
            <div>
                <ListComponent queryObj={queryObj} movePage={movePage} />
            </div>
    );
}
 
export default ListPage;