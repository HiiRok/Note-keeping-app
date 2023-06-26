import React,{ useState } from 'react';
import { IoIosAdd } from "react-icons/io";


export default function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note,setNote]=useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const { name,value } = event.target;
        
        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]:value
            };
        })
    }  
    
    function handleExpanded() {
        setExpanded(true);
      }
    
    function submitNote(event){

        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }    

  return (
    <div>
    <form>
      {isExpanded && (
        <input
          value={note.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
      )}
      <p>
        <textarea
          value={note.content}
          onClick={handleExpanded}
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
        ></textarea>
      </p>
      <button onClick={submitNote}>
        <IoIosAdd size={35} />
      </button>
    </form>
  </div>
  )
}
