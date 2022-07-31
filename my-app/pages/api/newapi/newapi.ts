import type { NextApiRequest, NextApiResponse } from "next/types";

//レスポンスする時の型
type Mountain = {
    name : string,
    elevation : number
}

//API エントリポイント
export default (req: NextApiRequest,res : NextApiResponse<Mountain> ) => {
    res.status(200);
    res.json({ name: '高尾山', elevation: 599})
}


