// 2.2.6.2 New ES6 arrow functions
const subtract = (a, b) => {
    return a - b;
}


function ArrowFunction(){
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);
    return (
        <>
         <h3>New ES6 arrow functions</h3>
         threeMinusOne = {threeMinusOne}<br />
         subtract(3, 1) = {subtract(3, 1)}<br />
        </>
    );
};
export default ArrowFunction