import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes(prev => {
      return [...prev, note];
    });
  }

  function deleteNote(id){
    setNotes(prev=>{
      return prev.filter((noteItem,index)=>{
        return index!==id;
      });
    })
  }

  return (
    <div>
      <Header /> 
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index) => {
        return (<Note 
                 title={noteItem.title} 
                 content={noteItem.content} 
                 onDelete={deleteNote}
                 id={index}
                 key={index} 
                 />);
      })}
      <Footer />
    </div>
  );
}

export default App;
