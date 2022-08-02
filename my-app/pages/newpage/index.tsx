import {NextPage} from 'next'
import Link from 'next/link'

import React, { useState } from 'react'

import Greeting from './Greeting';
import MoveComponent from './MoveComponent';

interface HumanObject {
    firstName: string;
    lastName: string;
    age: number;
}


const Main : NextPage = () => {

    let isDisplay : boolean = false;

    function alertDispButtonClick(){
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


    const [humanObject, setHumanObject] = useState<HumanObject>({
        firstName: "初期苗字山田",
        lastName: "初期名太郎",
        age: 3,
    });


    //固定で変える
    function changeHuman (){
        setHumanObject({ ...humanObject, firstName: "変更後苗字鈴木", lastName: "変更後苗字たろう", age: 10  });
        console.log(humanObject.firstName + "," + humanObject.lastName + "," + humanObject.age);

    }

    //環境変数読めるか
    console.log(process.env.NEXT_PUBLIC_ENV_HOGE, process.env.ENV_FOO);
    console.log(process.env.COGNITO_ISSUER);

    return (
        <div>
            <h1 className="title">
                newpage index
            </h1>

            <Link href="/">
                <a>retrun sign in page</a>
            </Link>

            <div>
                <button onClick={alertDispButtonClick}>alertDispButtonClick(onClickで関数呼ぶテスト)</button>
            </div>


            <div>
                <h2>渡すプロパティ値を更新してもuseStateを使わなければ描画後は意味がないことを確認</h2>
                <button onClick={changeIsDisplay}>changeIsDisplay_useState未使用</button>
                <Sub 
                    isDisplay = {isDisplay}
                />
            </div>

            <div>
                <h2>useSateはHockで、Hockしなくても内部数値は変わることを確認</h2>
                <p>count: {count}</p>
                <button onClick={countUp}>countup_useState未使用</button>
                <button onClick={() => setCount(count + 1)}>Count_useState使用</button>
            </div>

            <div>
                <h2>配列でVOクラス的に扱えるかを確認</h2>
                <div>
                    firstName : <input type="text" ></input>
                </div>
                
                <p> {humanObject.firstName}</p>
                <p> {humanObject.lastName}</p>
                <p> {humanObject.age}</p>
                
                <button onClick={changeHuman}>changeHuman</button>
            </div>

            <div>
                <h2>自作外部コンポーネント</h2>
                <Greeting></Greeting>
            </div>

            <div>
                <h2>スクリプトからのページ遷移</h2>
                <MoveComponent></MoveComponent>
            </div>

            <div>
                <h2>環境変数「NEXT_PUBLIC_ENV_HOGE」「ENV_FOO」が取得できているか ※「NEXT_PUBLIC_」とついている環境変数のみクライアント側でも読めるはず</h2>
                <p>{ process.env.NEXT_PUBLIC_ENV_HOGE }</p>
                <p>{ process.env.ENV_FOO }</p>
            </div>

        </div>
    )
}

export default Main

function Sub(props : any) {
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

