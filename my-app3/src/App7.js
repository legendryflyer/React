import React, { useReducer } from "react";

const intialState = {
    username:"",
    email:"",
    password:""
};

function reducer(state,action){
    switch(action.type){
        case "setUserName":
            return {...state , username:action.payload};
        case "setEmail":
            return {...state, email:action.payload};
        case "setPassword":
            return {...state,password:action.payload}
        case 'reset':
            return intialState
        default:
            throw new Error('unknow error... type')
    }

}



const App7 = () => {
    const [state , dispatch] = useReducer(intialState);
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Form submitted:",state)
    }
  return (
<form onSubmit={handleSubmit}>
            <div>
                <label>
                    username:
                    <input
                        type='text'
                        name='username'
                        value={state.username}
                        onChange={(e)=>dispatch({type:setUserName,payload:e.target.value})}
                    />
                </label>
            </div>
        </form>
  )
}

export default App7
