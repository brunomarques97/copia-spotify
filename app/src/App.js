import './App.css';
import { useEffect } from "react";

function App() {
useEffect(()=>{
  let authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }}
  fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data =>console.log(data))      
}, []);


  return (
    <div className="App">
  
    </div>
  );
}

export default App;
