import React, {useRef, useState} from 'react'

function UseRef() {
    const [name, setName] = useState('');
    const inputRef = useRef();
    function focus(){
        inputRef.current.focus();
    }
  return (
    <div>
        <label for="css">CSbdjbdjbdjdbjdbjbS</label>
        <input type="text" id="css" name="fav_language" />
        <br></br>
        <label for="name">Name</label>
        <input ref={inputRef} value={name} onChange={e=> setName(e.target.value)} />
       
        <div>My Name is {name}</div>
        <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRef