import React,{useEffect, useState} from 'react';
import Papa from 'papaparse';
import {csv} from '../shared/PostFileOutput';
import {Varient} from '../shared/varients';
import {ColoredCard,GradePicker} from './commons';
import '../css/commectForm.css';

interface ParsedComment {
    username : string,
    varient: Varient,
    text: string,
    grade?: number,
}

export default function CommentForm(){
    
    var isLoad = false;
    const [postToShow,setPostToShow] = useState<ParsedComment>();
    const [isHide, setisHide] = useState<boolean>(false);

    useEffect(() => {
        if(!isLoad) setRandomPost();
    },[setPostToShow])


    const setRandomPost = () => {
        Papa.parse(csv, {
            complete: function(results:any) {
                const randNum = Math.floor(Math.random() * Math.floor(results.data.length))
                
                const comment : ParsedComment = {
                    username: results.data[randNum][0],
                    text: results.data[randNum][1],
                    varient: randNum%8
                } 
                setPostToShow(comment)
            }
        });
    }
    const buildFooter = () =>{
        return  <div className="row"  style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button className="btn btn-primary" onClick={() => {
                        setisHide(true);
                        setTimeout(() => {
                            setRandomPost()
                            setisHide(false)
                        },1000)
                    }}>שלח</button>                
                </div>

    }
    return(
        <div className={`form ${isHide? 'hide':''}`}>
            {
                postToShow&&
                <ColoredCard
                    varient={postToShow?.varient}
                    type='Comment'
                    textHeader={postToShow.username}
                    footer={buildFooter()}
                >
                    <React.Fragment>
                        {postToShow.text}
                        <br/>
                        <GradePicker onPick={(val:any) => {
                                const updatedPost = {
                                    ...postToShow,
                                    grade: val
                                }
                                setPostToShow(updatedPost)
                            }}
                            pickedValue={postToShow.grade}/>
                            <br/>
                            <label htmlFor="review">
                                סקירת אנליסט
                            </label>
                            <textarea id="review" name="review" className="form-control" style={{fontSize: '12px'}} />

                    </React.Fragment>
                </ColoredCard>
            }
        </div>
    )
}