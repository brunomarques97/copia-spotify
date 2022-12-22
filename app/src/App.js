import './App.css';
import  {useState,useEffect }  from  'react' ;


function App() {
const [Albums, setAlbums] = useState([]);
const [Items, setItems] = useState([]);
const [accessToken, setAccessToken]=useState("");
const client_id="659e836e43834da0a0926084bbc78d69"
const client_secret="08de3c67f0f04ffaa34db051b44bdd9b"
const [q, setQ] = useState("");

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
    fetch('https://api.spotify.com/v1/search?q='+q+'&type=album,artist&include_external=audio' ,parametro2)
    .then(busca => busca.json())
    .then(res=>[setAlbums(res.albums.items),setItems(res.artists.items)])
    
    
    console.log(Albums)
  return (
    <div className="App">
      <div className="search-wrapper">
                      <label htmlFor="search-form">
                          <input
                              type="search"
                              name="search-form"
                              id="search-form"
                              className="search-input"
                              placeholder="Pesquise aqui..."
                              value={q}
                              onChange={(e) => setQ(e.target.value)} />
                      </label>
      </div>
      <h2>Albuns</h2>
    <div>
    <ul className="card-grid">  
        {Albums.map((item,i) => (
          <li key={i}>
              <div className="card-image" >
                  <img src={item.images[0].url} alt={item.name} />
              </div>
              <div className='bloco'>
                  <h3 className="card-name">{item.name}</h3>
                  <a href={item.external_urls.spotify}>click aqui</a>
              </div>
      </li>
  
        ))}   
    </ul>
    </div>
    <h2>Artistas</h2>
    <div>
    <ul className="card-grid">
        {Items.map((item,i) => (
          <li key={i}>
              <div className="card-image" >
                  <img src={item.images[0].url} alt={item.name} />
              </div>
              <div className='bloco'>
                  <h3 className="card-name">{item.name}</h3>
                  <a href={item.external_urls.spotify}>click aqui</a>
              </div>
      </li>
  
        ))}   
    </ul>
    </div>
    </div>
  );
}

export default App;
