import Assignment3 from "./a3";
import Nav from "../nav";
// 2.1.2 Implementing the Labs component
// function Labs(){
//     return(
//         <div>
//             <Assignment3/>
//         </div>
//     )
// }
function Labs() {
    return(
     <div>
      {/* <Link to="/labs/a3">A3</Link> |
      <Link to="/hello">Hello</Link> |
      <Link to="/tuiter">Tuiter</Link> */}
      <Nav/>
      <Assignment3/>
     </div>
    )
}
   
export default Labs;