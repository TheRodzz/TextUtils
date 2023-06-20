import React from 'react'

export default function Alert(props) {
    const capitalizeFirstLetter = (word) =>{
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalizeFirstLetter(props.alert.type)}</strong> {props.alert.message}
        </div>
    )
}
