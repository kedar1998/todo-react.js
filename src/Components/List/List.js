import {React, usestate} from 'react';

const List = (props) => {


  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-5">
      <h2>LIST</h2>
      <div>
      {props.textarr.map((ele) => { return <h2 className='text-center bg-blue-300 my-2 p-2' key={Math.random()}>{ele.text}</h2>})}
      </div>
    </div>
  );
};

export default List;
