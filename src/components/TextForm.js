import React, { useState } from 'react';

const TextForm = (props) =>{
    const [text, setText] = useState("");
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
    return(
        <>  
        <div className='conatiner'>
            <h1 className={props.textStyle}>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className={`form-label ${props.textStyle}`}>Example textarea</label>
                <textarea className={`${props.textStyle + " " + props.bgStyle } form-control`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}> Convert to UPPERCASE</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}> Convert to lowercase</button>
            <button className='btn btn-success mx-1' onClick={handleTitleClick}> Convert to Title Case</button>
            <button className='btn btn-success mx-1' onClick={handleInverseClick}> Convert to inverse CASE</button>
            <button className='btn btn-danger mx-1' onClick={handleClearClick}> Clear Text</button>
        </div>
        <div className='conatiner my-3'>
            <h2 className={props.textStyle}>Words Summary</h2>
            <p className={props.textStyle}>{text.length>0?text.split(" ").length:text.length} words and {text.length} characters</p>
            <p className={props.textStyle}>{text.length>0?0.008 * text.split(" ").length:"0.00"} minutes need to read</p>
            <h2 className={props.textStyle}>Preview</h2>
            <p className={props.textStyle}>{text.length>0?text:"Enter something above to preview it here"}</p>
        </div>
        </>
    );
}
export default TextForm;