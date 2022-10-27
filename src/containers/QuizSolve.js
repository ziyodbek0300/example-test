import React, {useRef, useState} from 'react';
import ModeEdit from '../statics/icons/mode_edit.svg';
import ArrowLeft from '../statics/icons/arrow_left.svg';
import ArrowRight from '../statics/icons/arrow_right.svg';
import Shuffle from '../statics/icons/swap_vertical_circle.svg';
import Tick from '../statics/icons/check_circle_outline.svg';
import Decline from '../statics/icons/edit/plus_circle_outline.svg';

function QuizSolve() {
    const jsCard = useRef();
    const side = useRef();
    const [switching, setSwitching] = useState(false);
    const [index, setIndex] = useState(0);

    const data = [
        {
            title1: 'Newton’s Second Law',
            title2: 'Newton’s Third Law',
            number: 1,
        }, {
            title1: 'Example front',
            title2: 'Example back',
            number: 2,
        }, {
            title1: 'Lorem front',
            title2: 'Lorem back',
            number: 3,
        }, {
            title1: 'English front',
            title2: 'English back',
            number: 4,
        }, {
            title1: 'Uzbek front',
            title2: 'Uzbek back',
            number: 5,
        }, {
            title1: 'Russian front',
            title2: 'Russian back',
            number: 6,
        },
    ]

    const inc = () => setIndex(index + 1);
    const dec = () => setIndex(index - 1);

    const changeSide = () => {
        if (switching) {
            return false
        }
        setSwitching(true);
        jsCard.current.classList.toggle('is-switched')
        window.setTimeout(function () {
            side.current.classList.toggle('is-active')
            setSwitching(false);
        }, 500 / 2)
    }

    return (
        <div className={"h-screen flex justify-center pt-10 roboto-slab"}>
            <div className={"w-full relative"}>
                <div ref={jsCard} className={"card js-card"}>
                    <div className={"w-[100%] mx-auto card__wrapper"}>
                        <div ref={side} className={"card__side relative bg-red-450/50 rounded w-full"}>
                            <div className={"flex justify-between p-4 w-full"}>
                                <p>{data[index].number}/32</p>
                                <p><img className={"active:opacity-80 hover:90"} src={ModeEdit} alt="mode edit"/></p>
                            </div>
                            <div onClick={changeSide} className={"active:opacity-80 hover:90 py-28 text-center"}>
                                <p className={"text-2xl"}>{data[index].title2}</p>
                            </div>
                            <div className={"flex justify-center py-7"}>
                                <div className={"flex gap-10"}>
                                    <img className={"active:opacity-80 hover:90"} onClick={dec} src={ArrowLeft} alt="arrowLeft"/>
                                    <img className={"active:opacity-80 hover:90"} onClick={changeSide} src={Shuffle} alt="shuffle"/>
                                    <img className={"active:opacity-80 hover:90"} onClick={inc} src={ArrowRight} alt="arrowRight"/>
                                </div>
                            </div>
                        </div>
                        <div ref={side} className={"card__side card__side--back bg-red-450/50 rounded w-full"}>
                            <div className={"flex justify-between p-4 w-full"}>
                                <p>{data[index].number}/32</p>
                                <p><img className={"active:opacity-80 hover:90"} src={ModeEdit} alt="mode edit"/></p>
                            </div>
                            <div onClick={changeSide} className={"active:opacity-80 hover:90 py-28 text-center"}>
                                <p className={"text-2xl"}>{data[index].title1}</p>
                            </div>
                            <div className={"flex justify-center py-7"}>
                                <div className={"flex gap-10"}>
                                    <img className={"active:opacity-80 hover:90"} onClick={dec} src={ArrowLeft} alt="arrowLeft"/>
                                    <img className={"active:opacity-80 hover:90"} onClick={changeSide} src={Shuffle} alt="shuffle"/>
                                    <img className={"active:opacity-80 hover:90"} onClick={inc} src={ArrowRight} alt="arrowRight"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"justify-center absolute top-[450px] left-[42%] gap-4 flex pt-3"}>
                        <img onClick={inc} src={Tick} className={"active:opacity-80 hover:90"} alt="tick"/>
                        <img onClick={inc} src={Decline} className={"active:opacity-80 hover:90"} alt="decline"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizSolve;