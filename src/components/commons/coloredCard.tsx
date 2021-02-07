import React from 'react';
import { Varient,parseNumToVarient } from '../../shared/varients';

interface ColoredCardPropd {
    type: string,
    varient: Varient,
    textHeader: string,
    img?: string,
    tags?: string[],
    children: any,
    footer: any,
    header: any
}



export default function ColoredCard(props: ColoredCardPropd){
    console.log(parseNumToVarient(props.varient))
    return(
        <div className={`card border-${parseNumToVarient(props.varient)} col`} style={{maxWidth: '50rem'}}>
            <div className={`card-header bg-transparent border-${parseNumToVarient(props.varient)}`}>
            {props.header}
            </div>
            <div className={`card-body text-${parseNumToVarient(props.varient)}`}>
                <h5 className="card-title">{props.textHeader}</h5>
                <div className="card-text">{props.children}</div>
            </div>
            <div className={`card-footer bg-transparent border-${parseNumToVarient(props.varient)}`}>
                {props.footer}
            </div>
        </div>
    )
}