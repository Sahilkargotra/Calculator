import Button from "../components/Button";
import Output from "../components/Output";
import React,{useState} from 'react'
import './CalculatorPage.css';

const CalculatorPage = () => {
    const[value,setValue] = useState(' ')
    const clicked = (out)=>{
        console.log(out);
        if(out === '='){
           // try{
            // eslint-disable-next-line no-eval
            setValue(eval(value).toString());
            //.toString()
            // setTimeout(()=>{
            //     setValue('')
            // },2000)
        // }
        // catch
        // {
        //     setValue('ERROR')
        // }
        }
        else if (out ==='x'){
        setValue(value.substring(0,value.length-1))
        }
  
        else 
        setValue(value+out);
    }
  return (< >
    <div className="container full">
        <Output text = {value} />
        <Button fn ={clicked}/>
    </div>
    </>
  )
}
export default CalculatorPage;