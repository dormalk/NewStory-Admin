import React,{useState} from 'react';
import '../../css/multiSelectPicker.css';

interface GradePickerProps{
    options: string[],
    pickedValues?: string[], 
    onPick: Function,
    onDrop: Function
}

export default (props:GradePickerProps) =>{

    const buildPickedOptions = () => {
        return props.pickedValues?.map((option,index) => 
            <div key={index} className="pickedOption">
                <span onClick={() => props.onDrop(option)}>x</span>
                {option}
            </div>
        );
    }
    const buildSelectOptions = () => {
        return <select className="form-control" onChange={(event) => event.target.value != '' && props.onPick(event.target.value)} defaultValue="">
        <option></option>
        {
            props.options?.map((option,index) => <option key={index} value={option}>{option}</option>)
        }
        </select> 
    }
    return(
        <div className="col">
            {props.options?.length > 0 && buildSelectOptions()}
        <div className="row">
            {buildPickedOptions()}
        </div>
        </div>
    )
}