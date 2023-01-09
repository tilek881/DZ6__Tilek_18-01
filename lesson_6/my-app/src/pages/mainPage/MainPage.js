import React from 'react';
import {useSelector , useDispatch} from "react-redux";
import {changeTitle, deleteTitle,clearInput, changeTitleParams , changeInput} from "../../store/titleSlice";



function MainPage(props) {

    const dispatch = useDispatch()
    const {title , inputValue} = useSelector( state => state.titleReducer)


    return (
        <div>
            <h1>{title}</h1>
            <input value={inputValue} type="text" onChange={(e) =>dispatch(changeInput (e.target.value))}/>
                <button onClick={()=> dispatch(clearInput())}>clear</button>
            <button onClick={() => dispatch(changeTitleParams(inputValue))}>add title</button>
            <button onClick={() => dispatch(deleteTitle())}>delete all</button>
            {/*<button onClick={() => dispatch(changeTitle())}>change title</button>*/}
            {/*<button onClick={()=> dispatch(changeTitleParams("hello geektech"))}>with params</button>*/}
        </div>
    );
}

export default MainPage;



