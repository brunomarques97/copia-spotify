import './App.css';
import  {useState,useEffect }  from  'react' ;


function App() {

const [accessToken, setAccessToken] = useState();
const client_id="659e836e43834da0a0926084bbc78d69"
const client_secret="08de3c67f0f04ffaa34db051b44bdd9b"
useEffect(()=>{
  let authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
  };
  fetch('https://accounts.spotify.com/api/token', authParameters)
  .then(result => result.json())
  .then(data => setAccessToken(data.access_token))

  let busca = fetch(`https://api.spotify.com/v1/search?q=sertanejo&type=artist`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + accessToken
    }
    
} , []);
console.log(busca)
});
  
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
