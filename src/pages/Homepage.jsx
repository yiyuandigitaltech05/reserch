import Search from '@/UI/Search';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from '@/UI/Picture';
import { Container, Row, Col } from 'reactstrap';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';


const Homepage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page,setPage]=useState(1);
  let [lastSearch,setLastSearch]=useState("");
  let [loading, setLoading]= useState(true);

  const auth = 'eTl9C0RirnHQqdosH0ryCP5PaOw9GAnLkldLzv2rqmjv3LqlHdQ9hYQ9';
  const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`

  const search = async (url) => {
    setLoading(true)
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    console.log(result.data.photos);
    setData(result.data.photos);
    setLoading(false)
  };


  const morePic = async ()=>{
    let newURL;
    setLoading(true)
    setPage((page) =>page + 1);
    if(lastSearch ===''){
      newURL =`https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`
    }else{
      newURL =`https://api.pexels.com/v1/search?query=${lastSearch}&per_page=15&page=${page}`
    };
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
    setLoading(false)
  }

  useEffect(()=>{
    search(initialURL)
  },[])

  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Search search={()=>{
        search(searchURL);
        setLastSearch(input)
      }} setInput={setInput}/>
      <Container>
        {loading ?
          <Row>
          {[...Array(15)].map((_,index)=>(
            <Col lg='4' md='6' key={index} >
              <Skeleton className="h-[300px] mb-4" />
            </Col>
        )) }
        </Row>: (
          <Row>
            {data.map((item, index) => (
              <Col lg='4' md='6' key={index} >
                <Picture data={item} />
              </Col>
            ))}
          </Row>
        )
        
        }
      </Container>

      <motion.button onClick={morePic} className='bg-[var(--Yellow)] p-2 rounded font-bold' whileHover={{scale:1.1}}>More picture</motion.button>
    </div>
  );
};

export default Homepage;
