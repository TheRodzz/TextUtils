import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleCtClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared textbox","success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success");
    };

    const countWords = (text) =>{
        const arr = text.split(" ");
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]) count++;
        }
        return count;
    } 
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#292828'}}>
                <div>
                    <h2>{props.heading}</h2>
                    <div className="mb-3 my-4">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'gray':'white', color: props.mode==='light'?'black':'white'}} id="Input textbox" rows="8"></textarea>
                    </div>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCtClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#292828'}}>
                <h2>
                    Text summary
                </h2>
                <p>

                    {countWords(text)} words and {text.length} characters <br />
                    This text can be read in {text.split(" ").length * 1 / 300} minutes.
                </p>
                <h2>Preview</h2>
                {text.length > 0?text:'Enter text to preview here'}
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Input Text"
};
