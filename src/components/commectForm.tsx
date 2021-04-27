import React, { useEffect, useState } from 'react';
import { Varient } from '../shared/varients';
import { ColoredCard, GradePicker, MultiSelectPicker } from './commons';
import '../css/commectForm.css';
import { integrate } from 'src/shared/bagelDb';
import { useKeycloak } from '@react-keycloak/web';
import { getRandomPost, postReport } from 'src/shared/requests_api';
interface ParsedComment {
    username: string,
    varient: Varient,
    text: string,
    sexual_hurt?: number,
    score?: number,
    review?: string,
    notes?: string,
    createdAt: String,
    id: number[],
    author:String,
    authorId:String
}


export default function CommentForm() {
    const { keycloak, initialized } = useKeycloak();



    var isLoad = false;
    const [postToShow, setPostToShow] = useState<ParsedComment>();
    const [isHide, setisHide] = useState<boolean>(false);
    const [pickedOptions, setPickedOptions] = useState<string[]>([]);
    const [options, setOptions] = useState<string[]>([])

    useEffect(() => {
        if (!isLoad) {
            setRandomPost();
            loadOptions();
            isLoad = true;
        }
    }, [setPostToShow])

    const loadOptions = async () => {
        const res = await integrate('reasons')
        setOptions(res);
    }
    const setRandomPost = async () => {
        try{
            const data = await getRandomPost(keycloak.token);
            const reandomDate = new Date(data.created_date[0]);
            const year = reandomDate.getFullYear();
            const month = reandomDate.getMonth();
            const day = reandomDate.getDate();
            const hrs = Math.floor(Math.random() * Math.floor(24))
            const mins = Math.floor(Math.random() * Math.floor(60))
            const randNum = Math.floor(Math.random() * 7)
            const data2 : any = await keycloak.loadUserInfo();
            const comment: ParsedComment = {
                username: data.username,
                text: data.caption, //need to change,
                varient: randNum,
                createdAt: `${day}/${month}/${year}  ${hrs}:${mins < 10 ? '0' + mins : mins}`,
                id: data.id,
                score: undefined,
                review: '',
                author: data2.preferred_username,
                authorId: data2.sub
            }
            setPickedOptions([])
            setPostToShow(comment)
        }catch(e){
            console.error(e)
        }
    }
    const buildFooter = () => {
        return <div className="row" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn btn-primary" onClick={async () => {

                const result = await postReport(keycloak.token, postToShow)
                console.info('confirm token - ' + result)
                setisHide(true);
                await setRandomPost()
                setisHide(false)
            }}>שלח</button>
        </div>

    }
    
    const onReviewTextareaChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        const updatedPost: any = {
            ...postToShow,
            review: text
        }
        setPostToShow(updatedPost)
    }
    const onFreeTextChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        const updatedPost: any = {
            ...postToShow,
            notes: text
        }
        setPostToShow(updatedPost)
    }
    const buildHeader = () => {

        return <div className="d-flex justify-content-between">
            <span>תגובה</span>
            <span>{postToShow?.createdAt}</span>
        </div>
    }
    return (
        <div className={`form ${isHide ? 'hide' : ''} d-flex justify-content-center`}>
            {
                postToShow &&
                
                <ColoredCard
                    varient={postToShow?.varient}
                    type='Comment'
                    header={buildHeader()}
                    textHeader={postToShow.username}
                    footer={buildFooter()}
                >
                    <React.Fragment>
                        {postToShow.text}
                        <hr />
                        <label htmlFor="freetext">
                            ציטוטים וצירופי מילים
                        </label>
                        <textarea id="freetext"
                            name="freetext"
                            className="form-control"
                            value={postToShow.notes}
                            onChange={onFreeTextChange}
                            style={{ fontSize: '12px' }} />
           <hr />
                        <label>
                            סיבת דירוג אנליסט
                            </label>

                        <MultiSelectPicker options={options.filter((op: any) => !pickedOptions.includes(op))}
                            pickedValues={pickedOptions}
                            onDrop={(value: string) => setPickedOptions(pickedOptions.filter(op => op != value))}
                            onPick={(value: string) => setPickedOptions([...pickedOptions, value])} />
                        <hr />
                        <label htmlFor="review">
                            הערות אנליסט
                            </label>
                        <textarea id="review"
                            name="review"
                            className="form-control"
                            value={postToShow.review}
                            onChange={onReviewTextareaChange}
                            style={{ fontSize: '12px' }} />


                            <hr/>
                        <label>
                            סיכון לפגיעה כללית
                        </label>
                        <GradePicker
                            onPick={(val: any) => {
                                const updatedPost = {
                                    ...postToShow,
                                    score: val
                                }
                                setPostToShow(updatedPost)
                            }}
                            pickedValue={postToShow.score} />
                        <hr />
                        <label>
                            סיכון לפגיעה מינית
                        </label>
                        <GradePicker
                            plate='dark'
                            onPick={(val: any) => {
                                const updatedPost = {
                                    ...postToShow,
                                    sexual_hurt: val
                                }
                                setPostToShow(updatedPost)
                            }}
                            pickedValue={postToShow.sexual_hurt} />        

                    </React.Fragment>
                </ColoredCard>
            }
        </div>
    )
}