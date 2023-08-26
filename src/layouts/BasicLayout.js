import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {

    console.log(children)

    return (  
        <div className="container mx-auto min-w-[1280px] bg-[#fdd000]">
            <div>
                <SampleNav></SampleNav>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
 
export default BasicLayout;