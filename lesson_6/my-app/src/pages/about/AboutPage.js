import React, { useState } from "react";
import {calculatorPlusic, calculatorMinus, calculatorUmnojenie, calculatorDelenie} from "../../store/titleSlice";
import {useSelector , useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch()
    const {title , inputValue} = useSelector( state => state.titleReducer)

    const [input, setInput] = useState("");
    const calcBtns = [];
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ].forEach((item) => {
        calcBtns.push(
            <button
                onClick={() => dispatch(titleAdd())}
                value={item}
                key={item}
            >
                {" "}
                {item}
            </button>
        );
    });

    return (
        <div className="wrapper">
            {" "}
            <div className="show-input">{input}</div>
            <div className="digits flex">{calcBtns}</div>
            <div className="modifiers subgrid">



                <button onClick={() => dispatch(clearCalculator())}>
                    Clear
                </button>


                <button onClick={() => setInput("")} value="">
                    AC
                </button>
            </div>
            <div className="operations subgrid">

                <button onClick={() => dispatch(calculatorPlusic())} value="+">
                    +
                </button>


                <button onClick={() => dispatch(calculatorMinus())} value="-">
                    {" "}
                    -{" "}
                </button>

                <button onClick={() => dispatch((calculatorUmnojenie()))} value="*">
                    {" "}
                    *
                </button>

                <button onClick={() =>dispatch(calculatorDelenie())} value="/">
                    {" "}
                    /
                </button>

                <button
                    onClick={() => dispatch(calculatorRavno())}
                    value="="
                >
                    =
                </button>
            </div>
        </div>
    );
}
export default App

