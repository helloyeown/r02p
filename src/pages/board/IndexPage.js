import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return (  
        <BasicLayout>
            <div>
                <div>Board Index Page</div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </BasicLayout>
    );
}
 
export default IndexPage;