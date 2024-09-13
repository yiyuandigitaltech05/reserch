import Search from '@/UI/Search';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from '@/UI/Picture';
import { Container, Row, Col } from 'reactstrap';


const Homepage = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page,setPage]=useState(1);

  const auth = 'eTl9C0RirnHQqdosH0ryCP5PaOw9GAnLkldLzv2rqmjv3LqlHdQ9hYQ9';
  const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    console.log(result.data.photos);
    setData(result.data.photos);
  };


  const morePic = async ()=>{
    let newURL;
    setPage(page + 1);
    if(input===''){
      newURL =`https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`
    }else{
      newURL =`https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`
    };
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  }

  useEffect(()=>{
    search(initialURL)
  },[])

  return (
    <div className='min-h-screen flex flex-col items-center'>
      <Search search={()=>{
        search(searchURL);
      }} setInput={setInput}/>
      <Container>
        {/* Make sure data exists before rendering */}
        {data && (
          <Row>
            {data.map((item, index) => (
              <Col lg='4' md='6' key={index} >
                <Picture data={item} />
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <Button onClick={morePic}>More picture</Button>
    </div>
  );
};

export default Homepage;
