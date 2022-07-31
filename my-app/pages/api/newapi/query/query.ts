import type { NextApiRequest, NextApiResponse } from "next/types";

/*
 * 公式doc以外の参考ページ
 * https://maku.blog/p/qcp2coz/
 * 
 * queryとrestでパラメータの取得方法は実装上は同じ
 */

export type Mountain = {
    id   : string
    name : string,
    elevation : number
}

//レスポンスする時の型
export type MountainResponse = {
    message?: string
    mountain? : Mountain
}

//API エントリポイント
export default (req: NextApiRequest,res: NextApiResponse<MountainResponse>) => {
    const id = req.query.id as string
    const mountain = fetchMountainData(id);

    if(typeof mountain != "undefined"){
        res.status(200)
        res.json({mountain: mountain})
    } else {
        res.status(400)
        res.json({message: `Mountain [id=${id}] is not found`})
    }

} 

// 擬似的なデータフェッチ関数
// 実際は外部APIとか叩く?
function fetchMountainData(id: string): Mountain | undefined {
    const mountains: Mountain[] = [
        {id: '1', name: '高尾山', elevation: 599},
        {id: '2', name: '富士山', elevation: 3776},
        {id: '3', name: 'エベレスト', elevation: 8849},
    ]
    return mountains.find((mountain) => mountain.id === id)
}