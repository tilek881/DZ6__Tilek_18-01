import {createSlice} from "@reduxjs/toolkit";
import {useState} from "react";


const [input, setInput] = useState("");
const titleSlice = createSlice({
    name:"titleSlice",
    initialState:{
        title: "Old",
        inputValue: ""

    },
    reducers:{
        changeTitle: (state , action) => {
            state.title = "New"
            state.inputValue = ""

        },
        changeTitleParams: (state , action)=>{
            state.title = action.payload
        },
        changeInput: (state , action) =>{
            state.inputValue = action.payload
        },
        clearInput: (state)=> {
            state.inputValue =""
        },
        deleteTitle: (state)=> {
            state.title =""
            state.inputValue =""
        },
        calculatorPlusic: (state, action ) => {
           state.input = (e) => setInput(input + e.target.value)
        },
        calculatorMinus: (state ,action) =>{
            state.input =(e) => setInput(input + e.target.value)
        },
        calculatorUmnojenie: (state ,action) => {
            state.input = (e) => setInput(input + e.target.value)
        },
        calculatorDelenie: (state ,action) => {
            state.input = (e) => setInput(input + e.target.value)
        },
        calculatorRavno: (state ,action) => {
            state.input = (e) => (e) => {
                try {
                    setInput(
                        String(eval(input)).length > 3 &&
                        String(eval(input)).includes(".")
                            ? String(eval(input).toFixed(4))
                            : String(eval(input))
                    );
                } catch (e) {

                }
            }
        },
        clearCalculator: (state ,action )=> {
            state.input = () => setInput(input.substr(0, input.length - 1))
        },
        titleAdd: (state ,action) => {
            state.input = (e) => {
                setInput(input + e.target.value);
            }
        }

    }
})


export const {changeTitle,titleAdd,clearCalculator, calculatorDelenie, calculatorRavno ,calculatorUmnojenie, changeTitleParams ,deleteTitle, changeInput , clearInput , calculatorPlusic , calculatorMinus} = titleSlice.actions

export default titleSlice.reducer;
