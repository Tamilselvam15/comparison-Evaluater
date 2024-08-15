
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [input1, setInput1] = useState('')
  const [operater, setOperator] = useState('')
  const [input2, setInput2] = useState('')
  const[result,setResult]=useState('')

  useEffect(() => {
    if (input1!='' && operater!='' && input2!='') {
      let expression = input1 + operater + input2;
      const res = eval(expression);
      res === true ? setResult("True") : setResult("False")
     
    } else {
      setResult("Invalid")
    } 
  },[input1,input2,operater])


  

  const handleCompare1 = (e) => {
    const val = e.target.value;
    setInput1(val);
  }
  const handleCompare2 = (e) => {
    const val = e.target.value;
    setOperator(val);
  }
  const handleCompare3 = (e) => {
    const val = e.target.value;
    setInput2(val);
  }

  return (
    <div className='Evaluator'>
      <div className='head'><h1>Comparison-Evaluator</h1></div>
      <div className='compare'>
        <input className='inputs' value={input1} onChange={handleCompare1} type='text'></input>
        
        <select className='inputs' type='text' value={operater} onChange={handleCompare2}>
            <option value=''>select your operator</option>
            <option value="<">less than</option>
            <option value="<=">less than or Equal to</option>
            <option value="===">equal to</option>
            <option value=">=">grater than or Equal to</option>
            <option value=">">grater than</option>
        </select>

        <input className='inputs' type='text'value={input2} onChange={handleCompare3}></input>
        {result === 'True' ? <p className='response'>{result}</p> : result === 'False' ? <p className='response2'>{result}</p> : <p className='response3'>{result}</p>}

      </div>
     
    </div>
  )
}

export default App
