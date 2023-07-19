// 2.2.5.2 Ternary Conditional Operator
function TernaryConditional(){
    let loggedIn = true;
    return(
        <div>
        <h2>Logged In</h2>
        { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
        </div>
    );
};
export default TernaryConditional