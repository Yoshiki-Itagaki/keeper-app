import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(item, event){
        event.preventDefault();       
        setNotes(prevNotes=>[...prevNotes, item]);       
    }

    function deleteNote(id){
        setNotes(prevNotes => prevNotes.filter(
            (note, index)=> index !== id
        ))
    }

    return (
    <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((note, index)=>
            <Note key={index} id={index} 
            title={note["title"]} content={note["content"]}
            onClicked={deleteNote} />
        )}
        <Footer />
    </div>
    );
}

export default App;
