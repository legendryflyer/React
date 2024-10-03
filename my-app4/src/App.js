import React , {useRef} from 'react'

function App(){

  const inputref = useRef(null);

  const focusInput = ()=>{
      //document.querySelector('input').current.focus()
      inputref.current.focus();
  };
  return (
      <div>
         <input ref = {inputref} type="text"/>
         <button onClick={focusInput}>Click</button>
      </div>
  )
}

export default App

