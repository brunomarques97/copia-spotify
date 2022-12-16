import './App.css';
import { useEffect } from "react";
import {id,segredo} from "./componentes/chave";

function App() {
const [accessToken, setAccessToken] = useState("");

useEffect(()=>{
  let authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + id + '&client_secret=' + segredo
  }
  fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data =>setAccessToken(data.access_token))      
}, [])


  return (
    <div className="App">
  
    </div>
  );
}

export default App;
