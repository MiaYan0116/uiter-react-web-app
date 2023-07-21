import JavaScript from "./java-script";
import DynamicStyling from "./dynamic-styling";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
// 2.1.3 Breaking out assignments into separate components
function Assignment3(){
    return(
        <div>
            <h1>Assignment 3</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <DynamicStyling/>
            <JavaScript/>
        </div>
    );
}
export default Assignment3;