import {React,useState} from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List'

function App() {

  

  let textarr = [
    {
      text: "item-1"
    }
  ];

  const [items,setItems] = useState(textarr);

  const getUserText = (text) =>{
    setItems((previtem) =>{
      return [text, ...previtem];
    });
  }

  

  return (
    <div>
      <Form usertext={getUserText} />
      <List textarr={items}/>
    </div>
  );
}

export default App;
