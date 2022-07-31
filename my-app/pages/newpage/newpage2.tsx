import {NextPage} from 'next'

import useSWR from 'swr'
import { type MountainResponse } from '../api/newapi/rest/[id]';

const NewPage2 : NextPage = () => {
    const { data, error } = useSWR<MountainResponse, Error>('/api/newapi/rest/1', fetcher)
    if (error) return <p>Error: {error.message}</p>
    if (!data) return <p>Loading...</p>

    return (

        <div>
            <h1>new Page2</h1>

            <div>
                {data.mountain?.name} : 標高 {data.mountain?.elevation}m
            </div>

            {data.message}
        </div>

    );
} 

export default NewPage2;
const fetcher = (url: string) => fetch(url).then((r) => r.json())