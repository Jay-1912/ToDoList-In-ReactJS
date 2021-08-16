import React, {useState} from 'react';
import ToDoList from './ToDoList';

const App = () =>{
  const deleteItem = (id) =>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrEle, index)=>{
        return index !== id;
      })
    })
  }

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvents = (event) =>{
    setInputList(event.target.value);
  }

  const listOfItems = () =>{
      setItems((oldItems)=>{
        return [...oldItems, inputList];
      });
      setInputList("");

  }

  return(
      <>
        <div className="main_div">
          <div className="center_div">
            <br />
            <h1>To Do List</h1>
            <br />
            <input type="text" placeholder="Add a Item..." onChange={itemEvents} value={inputList} />
            <button onClick={listOfItems}>+</button>
            <ul>
              {/* <li>{inputList}</li> */}
              {Items.map((itemVal, index) => {
                return <ToDoList 
                  key = {index}
                  id= {index}
                  text = {itemVal}
                  onSelect = {deleteItem}
                />
              })}
            </ul>
          </div>
        </div>
      </>
  );
}

export default App;