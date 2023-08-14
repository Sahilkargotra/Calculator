import React from 'react'
import './Button.css'
 
const Button = ({fn}) => {

  return (
    <div className='container' >
    <div className='row'>
        <div className='col'>
            <button onClick = {(e)=>{fn(e.target.value)}} type = "button" className = 'btn btn-light m-1 darkbtn' value = '('>(</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type = "button" className = 'btn btn-light m-1 darkbtn' value = ')'>)</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type = "button" className = 'btn btn-light m-1 darkbtn' value = '%'>%</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type = "button" className = 'btn btn-light m-1 darkbtn' value = 'x'>x</button>
        </div>
    </div>
    <div className='row'>
        <div className='col'>
            <button onClick = {(e)=>{fn(e.target.value)}} type ="button" className = 'btn btn-light m-1 ' value = '9'>9</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type ="button" className = 'btn btn-light m-1 ' value = '8'>8</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type ="button" className = 'btn btn-light m-1 ' value = '7'>7</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type ="button" className = 'btn btn-light m-1 darkbtn' value = '÷'>÷</button>
        </div >
    </div>
    <div className='row'>
        <div className='col'>
            <button onClick = {(e)=>{fn(e.target.value)}} type="button" className = 'btn btn-light m-1 ' value = '4'>4</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type="button" className = 'btn btn-light m-1 ' value = '5'>5</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type="button" className = 'btn btn-light m-1 ' value = '6'>6</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type="button" className = 'btn btn-light m-1 darkbtn' value = '*'>*</button>
        </div>
    </div>
    <div className='row'>
        <div className='col'>
            <button onClick = {(e)=>{fn(e.target.value)}} type ="button" className = 'btn btn-light m-1' value = '1'>1</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type ="button" className = 'btn btn-light m-1' value = '2'>2</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type ="button" className = 'btn btn-light m-1 ' value = '3'>3</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type ="button" className = 'btn btn-light m-1 darkbtn' value = '-'>-</button>
        </div>
    </div>
    <div className='row'>
        <div className='col'>
            <button onClick = {(e)=>{fn(e.target.value)}} type = "button" className = 'btn btn-light m-1 'value = '0'>0</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type = "button" className = 'btn btn-light m-1 'value = '.'>.</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type = "button" className = 'btn btn-light m-1 primary 'value = '='>=</button>
            <button onClick = {(e)=>{fn(e.target.value)}} type = "button" className = 'btn btn-light m-1 darkbtn' value = '+'>+</button>
        </div>
    </div>
</div>
  )
}

export default Button;