import React from "react";
import {useNavigate} from "react-router-dom";

function DeckView() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={"flex justify-end gap-2 pt-8 px-8"}>
                <button
                    className={
                        "border-red-450 transition-all border-2 px-3 rounded-lg bg-white hover:bg-red-450 hover:text-white active:opacity-90"
                    }
                >
                    Add New Deck
                </button>
                <button
                    onClick={() => navigate('/quizSolve')}
                    className={
                        "border-red-450 transition-all border-2 px-3 rounded-lg bg-white hover:bg-red-450 hover:text-white active:opacity-90"
                    }
                >
                    Start
                </button>
            </div>
            <div className={"flex flex-col roboto-slab gap-4 p-8"}>
                {new Array(10).fill(null).map((a, b) => {
                    return (
                        <div className={"shadow-mi border p-4 rounded"}>
                            <p className={"pl-9 text-sm"} style={{lineHeight: "30px"}}>
                                Terms 23
                            </p>
                            <div className={"flex gap-4 items-center"}>
                                <input
                                    type="checkbox"
                                    id={"for-quiz"}
                                    style={{lineHeight: "30px"}}
                                    className={"h-5 w-5 border-2 border-black"}
                                />
                                <label
                                    htmlFor="for-quiz"
                                    className={"text-2xl"}
                                    style={{lineHeight: "30px"}}
                                >
                                    Quiz 1
                                </label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DeckView;
