import React from "react";
import type { NextPage } from 'next'
import axios from "axios"
import { useSession, signIn, signOut } from "next-auth/react"


async function callAPIGateway_GET (id_token : any) : Promise<string>{

  const options = {
    headers: {
        'Authorization': id_token,
        
    }
  };

    const { data: repos } = await axios.get(
        "https://vh7sd6kxlg.execute-api.ap-northeast-1.amazonaws.com/test/?queryParamHoge=hoge",
        options
      );
    
    console.log(repos);

    alert("GET");


    return "";
}

async function callAPIGateway_POST (id_token : any) : Promise<string>{

    const body = {
        name: "山田",
        age: 24
    }


    const options = {
        headers: {
            'content-type': 'application/json',
            'Authorization': id_token,
        }
      };


    const { data: repos } = await axios.post(
        "https://vh7sd6kxlg.execute-api.ap-northeast-1.amazonaws.com/test",
        body,
        options
      );
    
    console.log(repos);

    alert("POST");
  
    return "";
}


const CallAPIButton: NextPage = (props : any) => {
  const { data: session, status } = useSession()

  console.log(props);
  console.log(session?.id_token);

  return (
    <>

        <button onClick={ () => callAPIGateway_GET(session?.id_token)}>API GateWay Call GET</button>
        <button onClick={ () => callAPIGateway_POST(session?.id_token)}>API GateWay Call POST</button>
    </>
  )
}

export default CallAPIButton;