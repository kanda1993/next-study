import {NextPage} from 'next'
import Link from 'next/link'

import React, { useState } from 'react'

type Counter = {
    count : number
};

const Main : NextPage = () => {



    let isDisplay : boolean = false;

    function alertDispButtonClick(e){
        e.preventDefault();
        alert("alertDispButtonClick");
    }

    function changeIsDisplay(){
        isDisplay = !isDisplay;
        alert(isDisplay);
    }



    let [count,setCount] = useState<number>(0);
    function countUp(){
        count++;
        alert(count);
    }

    return (
        <div>
            <h1 className="title">
                newpage index
            </h1>

            <Link href="/">
                <a>retrun sign in page</a>
            </Link>

            <div>
                <button onClick={alertDispButtonClick}>alertDispButtonClick</button>
            </div>


            <div>
                {/* 渡すプロパティ値を更新しても実行後は意味がないことを確認 */}
                <button onClick={changeIsDisplay}>changeIsDisplay</button>
                <Sub 
                    isDisplay = {isDisplay}
                />
            </div>

            <div>
                <p>count: {count}</p>
                <button onClick={countUp}>countup</button>
                <button onClick={() => setCount(count + 1)}>Count+</button>
            </div>



        </div>
    )
}

export default Main

function Sub(props) {
    let isDisplay = props.isDisplay;

    if(isDisplay){
        return (
            <div>isDisplay:true</div>
        )
    } 

    return (
        <div>isDisplay:false</div>
    )
}

