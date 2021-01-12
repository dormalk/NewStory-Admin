import React from 'react';
import '../../css/gradePicker.css';

interface GradePickerProps{
    pickedValue?: number,
    onPick: Function
}

export default function GradePicker(props:GradePickerProps){
    const values = [10,9,8,7,6,5,4,3,2,1];
    const colors = ['#009933','#00cc00','#33cc33','#66ff33','#ccff33','#ffff00','#ffcc00','#ff9933','#ff3300','#990000']
    return(
        <React.Fragment>
            <span className="row" style={{justifyContent: 'center'}}>
            {
                values.map((val,index) => 
                <span   className={`circle ${props.pickedValue == val ? 'active':''}`} 
                        key={index}
                        style={{backgroundColor: colors[index]}}
                        onClick={() => props.onPick(val)}
                        >{val}</span>
                    )
            }
            </span>
        </React.Fragment>
    )
}