import React from 'react';



export default function Table() {

    const headers = [
        '#',
        'נוצר בתאריך + שעה',
        'סה"כ לייקים',
        'תוכן פוסט',
        'ציון סיכון',
        'סיבה לציון',
        'הערות לאנאליסט/ית'
    ]

    const lines = [
        {
            param1: '1',
            param2: '22/10/2020 10:00',
            param3: 13,
            param4: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.',
            param5: 1,
            param6: 'reas2',
            param7: 'ללא'

        },
        {
            param1: '2',
            param2: '22/10/2020 10:00',
            param3: 10,
            param4: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט,',
            param5: 4,
            param6: 'reas1',
            param7: 'ללא'


        },
        {
            param1: '3',
            param2: '22/10/2020 10:00',
            param3: 22,
            param4: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט,',
            param5: 2,
            param6: 'reas4',
            param7: 'ללא'


        },
        {
            param1: '4',
            param2: '22/10/2020 10:00',
            param3: 33,
            param4: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט,',
            param5: 4,
            param6: 'reas2',
            param7: 'ללא'


        }
    ]

    const optionsGrade = [1,2,3,4,5,6,7,8,9,10,11,12]; 
    const optionsReasons = [
        {
            value: 'סיבה 1',
            key: 'reas1'
        },
        {
            value: 'סיבה 2',
            key: 'reas2'
        },
        {
            value: 'סיבה 3',
            key: 'reas3'
        },
        {
            value: 'סיבה 4',
            key: 'reas4'
        },
        {
            value: 'סיבה 5',
            key: 'reas5'
        },

    ]; 

    return(
        <table className="table table-hover" dir="rtl">
            <thead>
                <tr>
                {headers.map((val,index) => <th style={{textAlign: 'right'}} scope="col" key={index}>{val}</th>)}
                </tr>
            </thead>
            <tbody>

            {
                lines.map((line,index) => 
                <tr key={index}>
                    <td scope="row">{line.param1}</td>
                    <td style={{textAlign: 'right'}}>{line.param2}</td>
                    <td style={{textAlign: 'right'}}>{line.param3}</td>
                    <td style={{textAlign: 'right'}}>{line.param4}</td>
                    <td style={{textAlign: 'right'}}>
                        <select>
                            {optionsGrade.map(gra => <option key={gra} selected={line.param5 == gra}>{gra}</option>)}
                        </select>
                    </td>
                    <td style={{textAlign: 'right'}}>
                        <select>
                            {optionsReasons.map(res => <option key={res.key} selected={line.param6 == res.key}>{res.value}</option>)}
                        </select>
                    </td>
            <td style={{textAlign: 'center'}}>{line.param7}</td>
                </tr>)
            }
            </tbody>
        </table>
    )
}