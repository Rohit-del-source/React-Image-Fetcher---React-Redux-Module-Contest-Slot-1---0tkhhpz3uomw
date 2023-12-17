import React, {useState, useEffect} from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const [img, setImg] = useState('')
  const [loading, setLoading] = useState('')
  const [caption, setcaption] = useState(false);
  const [id, setId] = useState('');

  useEffect(()=>{
    if(id!=='') {
      setLoading(true);
      fetch('https://jsonplaceholder.typicode.com/photos/${id}')
      .then(r=>r.json())
      .then((r)=>{
        setcaption(r.title);
        setImg(r.url);
        setLoading(false);
      })
    }
  },[id])

  return (
    <div>
     <label for="idNumber">Id number</label> 
    <input id="idNumber" value={id} onChange={e=>setId(e.target.value)} />
      {
        loading && <Loader/>
      }
      {
        img !== '' &&
          <PhotoFrame src={img} caption={caption}/>
      }
    </div>
  )
}


export default App;