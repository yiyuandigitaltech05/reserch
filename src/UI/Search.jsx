import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React,{ useState } from 'react';
import axios from "axios";

const Search = ({ search ,setInput }) => {

    // let [data, setData] = useState(null);

    // const auth = "eTl9C0RirnHQqdosH0ryCP5PaOw9GAnLkldLzv2rqmjv3LqlHdQ9hYQ9"
    // const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

    // const search = async () =>{
    //     let result = await axios.get(initialURL,{
    //         headers: {Authorization:auth},
    //     })
    //     console.log(result.data.photos)
    //     setData(result.data.photos)
    // }
    const searchHandle = (e) =>{
        setInput(e.target.value)
    }
  return (
    <div className='flex w-1/3 gap-2 p-16'>
        <Input onChange={searchHandle}></Input>
        <Button onClick={search} >Search</Button>
    </div>
  )
}

export default Search