import React from 'react';
import { Varient,parseNumToVarient } from '../../shared/varients';

interface ColoredCardPropd {
    type: string,
    varient: Varient,
    textHeader: string,
    img?: string,
    tags?: string[],
    children: any,
    footer: any
}



export default function ColoredCard(props: ColoredCardPropd){
    console.log(parseNumToVarient(props.varient))
    return(
        <div className={`card border-${parseNumToVarient(props.varient)} col`}>
            <div className={`card-header bg-transparent border-${parseNumToVarient(props.varient)}`}>דירוג תגובה</div>
            <div className={`card-body text-${parseNumToVarient(props.varient)}`}>
                <h5 className="card-title">{props.textHeader}</h5>
                <p className="card-text">{props.children}</p>
            </div>
            <div className={`card-footer bg-transparent border-${parseNumToVarient(props.varient)}`}>
                {props.footer}
            </div>
        </div>
    )
}