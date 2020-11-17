import React,{useEffect, useState} from 'react';
import Papa from 'papaparse';
import {csv} from '../shared/PostFileOutput';
import {Varient} from '../shared/varients';
import {ColoredCard,GradePicker} from './commons';
import '../css/commectForm.css';
import { randomDate } from 'src/helpers/random';

interface ParsedComment {
    username : string,
    varient: Varient,
    text: string,
    grade?: number,
    review?:string,
    createdAt: Date
}

export default function CommentForm(){
    
    var isLoad = false;
    const [postToShow,setPostToShow] = useState<ParsedComment>();
    const [isHide, setisHide] = useState<boolean>(false);

    useEffect(() => {
        if(!isLoad) {
            setRandomPost();
            isLoad = true;
        }
    },[setPostToShow])


    const setRandomPost = () => {
        Papa.parse(csv, {
            complete: function(results:any) {
                const randNum = Math.floor(Math.random() * Math.floor(results.data.length))
                
                const comment : ParsedComment = {
                    username: results.data[randNum][0],
                    text: results.data[randNum][1],
                    varient: randNum%6+1,
                    review: '',
                    createdAt: randomDate(new Date(2012, 0, 1), new Date())
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

    const onReviewTextareaChange = (event:React.FormEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        const updatedPost :any = {
            ...postToShow,
            review: text
        }
        setPostToShow(updatedPost)
    }

    const buildHeader = () => {
        const year = postToShow?.createdAt.getFullYear();
        const month = postToShow?.createdAt.getMonth();
        const day = postToShow?.createdAt.getDate();

        const hrs = Math.floor(Math.random() * Math.floor(24))
        const mins = Math.floor(Math.random() * Math.floor(60))
        return <div className="d-flex justify-content-between">
            <span>תגובה</span>
            <span>{`${day}/${month}/${year}  ${hrs}:${mins < 10 ? '0'+mins: mins}`}</span>
        </div>
    }
    return(
        <div className={`form ${isHide? 'hide':''} d-flex justify-content-center`}>
            {
                postToShow&&
                <ColoredCard
                    varient={postToShow?.varient}
                    type='Comment'
                    header={buildHeader()}
                    textHeader={postToShow.username}
                    footer={buildFooter()}
                >
                    <React.Fragment>
                        {postToShow.text}
                        <hr/>
                        <label>
                        דירוג אנליסט
                        </label>
                        <GradePicker
                         onPick={(val:any) => {
                                const updatedPost = {
                                    ...postToShow,
                                    grade: val
                                }
                                setPostToShow(updatedPost)
                            }}
                            pickedValue={postToShow.grade}/>
                            <hr/>
                            <label htmlFor="review">
                                סקירת אנליסט
                            </label>
                            <textarea   id="review" 
                                        name="review" 
                                        className="form-control" 
                                        value={postToShow.review}
                                        onChange={onReviewTextareaChange}
                                        style={{fontSize: '12px'}} />

                    </React.Fragment>
                </ColoredCard>
            }
        </div>
    )
}