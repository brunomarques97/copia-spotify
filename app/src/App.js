import './App.css';
import  {useState,useEffect }  from  'react' ;


function App() {

const album= "sertanejo"

const [Items, setItems] = useState([]);
const [accessToken, setAccessToken]=useState("");
const client_id="659e836e43834da0a0926084bbc78d69"
const client_secret="08de3c67f0f04ffaa34db051b44bdd9b"

useEffect(()=>{
  let parametro1 = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
  };
  fetch('https://accounts.spotify.com/api/token', parametro1)
  .then(result => result.json())
  .then(data =>setAccessToken(data.access_token))
} , []);

    let parametro2 ={ 
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
    }};
    fetch('https://api.spotify.com/v1/search?q='+album+'&type=artist',parametro2)
    .then(busca => busca.json())
    .then(parse=>setItems(parse.artists.items))
    
  return (
    <div className="App">
    <div>
    <ul className="card-grid">
        {Items.map((item) => (
          <li>
              <div className="card-image">
                  <img src="" alt={item.name} />
              </div>
              <div className="card-content">
                  <h2 className="card-name">{item.name}</h2>
                  <p></p>
              </div>
      </li>
  
        ))}   
    </ul>
    </div>    
    </div>
  );
}

export default App;
