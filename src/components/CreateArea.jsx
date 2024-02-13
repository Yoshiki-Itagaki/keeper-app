import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title : "",
    content : ""
  })

  function handleChange(event){
    const {value, name} = event.target;
    setNote({...note, [name]: value})
  }


  return (
    <div>
      <form>
        <input name="title" placeholder="Title" 
        onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3"
        onChange={handleChange} />
        <button onClick = {(event) =>{
          props.onAdd(note, event);
          setNote({
            title : "",
            content : ""
          })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
