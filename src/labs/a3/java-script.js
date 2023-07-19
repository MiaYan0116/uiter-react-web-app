import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./type";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else"
import TernaryConditional from "./ternary-operator";
import WokingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./working-with-arrays";
import TemplateLiterals from "./templateLiterals";
import House from "./House";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";

// 2.2 Learning about JavaScript
// 2.2.1 Writing to the Console from JavaScript
function JavaScript(){
    console.log("Hello world!");
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryConditional/>
            <WokingWithFunctions/>
            <WorkingWithArrays/>
            <TemplateLiterals/>
            <House/>
            <Spread/>
            <Destructing/>
            <FunctionDestructing/>
        </div>
    );
};
export default JavaScript;