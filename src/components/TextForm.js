import React, { useState } from 'react';

const TextForm = (props) =>{
    const [text, setText] = useState("");
    const [color, setColor] = useState("");
    const handleUpClick = () =>{
        const newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        const newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        const newText = "";
        setText(newText);
    }

    const handleInverseClick = () =>{
        var s = '';
    var i = 0;
    while (i < text.length) {
        var n = text.charAt(i);
        if (n === n.toUpperCase()) {
            // *Call* toLowerCase
            n = n.toLowerCase();
        } else {
            // *Call* toUpperCase
            n = n.toUpperCase();
        }

        i += 1;
        s += n; 
    }
            setText(s);
    }

    const handleTitleClick = () =>{
        var sentence = text.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
      const newText = sentence.join(" ");
    //document.write(sentence.join(" "));
     setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const showVal = () =>{
        const tt = document.getElementById('col').value();
        console.log(tt);
    }
    const handleColor = (e) =>{
        props.setColor(e.target.value);
        console.log(color);
    }


    return(
        <>  
        <div className='conatiner'>
            <h1 className={props.textStyle}>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className={`form-label ${props.textStyle}`}>Example textarea</label>
                <textarea className={`${props.textStyle + " " + props.bgStyle } form-control`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className='btn mx-1' style={{backgroundColor:`${props.incolor}`}} onClick={handleUpClick}> Convert to UPPERCASE</button>
            <button className='btn mx-1' style={{backgroundColor:`${props.incolor}`}} onClick={handleLoClick}> Convert to lowercase</button>
            <button className='btn mx-1' style={{backgroundColor:`${props.incolor}`}} onClick={handleTitleClick}> Convert to Title Case</button>
            <button className='btn mx-1' style={{backgroundColor:`${props.incolor}`}} onClick={handleInverseClick}> Convert to inverse CASE</button>
            <button className='btn mx-1' style={{backgroundColor:`${props.incolor}`}} onClick={handleClearClick}> Clear Text</button>
        </div>
        <div className='conatiner my-3'>
            <h2 className={props.textStyle}>Words Summary</h2>
            <p className={props.textStyle}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p className={props.textStyle}>{text.length>0?0.008 * text.split(" ").length:"0.00"} minutes need to read</p>
            <h2 className={props.textStyle}>Preview</h2>
            <p className={props.textStyle}>{text.length>0?text:"Enter something above to preview it here"}</p>
        </div>
        <div className='container my-3'>
            <h2>onChange Color Changing Element</h2>
            <div style={{height:"200px", width:"200px", backgroundColor:`${props.incolor}`}}></div>
            {/* <input type="color" onChange={(e)=>{
                props.setColor(e.target.value)
            }} value={props.color} /> */}
                {/* <input onInput={showVal} type="color" id='col'/>
                <input type="color" value={props.color.hex} onChange={(e) => {props.showColor(e.target.value)}}/>
                <input
        type="color"
        value={props.color}
        onChange={(e) => {props.showColor(e.target.value)}}
      />
      <input type="text" onChange={(e) => {props.showColor(e.target.value)}} value={props.color}/> */}
      <input type="color" onChange={props.onColorHandle} value={props.incolor}/>
            </div>
        </>
    );
}
export default TextForm;