import React from 'react';
import '../../css/gradePicker.css';

interface GradePickerProps{
    pickedValue?: number,
    onPick: Function,
    plate?: String
}

export default function GradePicker(props:GradePickerProps){
    const values = [10,9,8,7,6,5,4,3,2,1];
    const colors = ['#cc2900','#e62e00','#ff3300','#ff471a','#ff5c33','#ff704d','#ff8566','#ff9980','#ffad99','#ffc2b3']
    const colors2 = ['#000000','#1a1a1a','#333333','#4d4d4d','#666666','#808080','#999999','#a6a6a6','#b3b3b3','#bfbfbf']

    return(
        <React.Fragment>
            <span className="row" style={{justifyContent: 'center'}}>
            {
                values.map((val,index) => 
                <span   className={`circle ${props.pickedValue == val ? 'active':''}`} 
                        key={index}
                        style={{backgroundColor: props.plate == 'dark'? colors2[index]:colors[index]}}
                        onClick={() => props.onPick(val)}
                        >{val}</span>
                    )
            }
            </span>
        </React.Fragment>
    )
}