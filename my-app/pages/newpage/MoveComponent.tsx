import React from "react"
import Router from 'next/router'

const MoveComponent = () => {
    
    return (
        <div>
            <p>画面遷移conponent</p>
            <button onClick={() => Router.push('/newpage/newpage2')}>画面遷移します！</button>
        </div>
    )
}
export default MoveComponent