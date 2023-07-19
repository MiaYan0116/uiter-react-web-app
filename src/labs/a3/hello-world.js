import Nav from "../../nav";
// 2.1.4 Breaking out Hello World into a separate component
function HelloWorld(){
    return(
        <div>
            {/* <Link to="/labs/a3">A3</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link> */}
            <Nav/>
            <h1>Hello World!</h1>
        </div>  
    );
};

export default HelloWorld;