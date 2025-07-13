import React, { useState, useEffect } from "react";


function Body() {
  const [profiles, setprofile] = useState([]);
  const [numberofprofile, setnumberofprofile] = useState("");
  const [username,setUsername]=useState("");
  
 
 
  async function Getprofile(count) {
    let ran = Math.floor(Math.random() * 100000);
    const response = await fetch(
      `https://api.github.com/users?since=${ran}&per_page=${count}`
    );
    const data = await response.json();
    setprofile(data); 
  }

  

  async function Getprofile_by_name(name) {
    const response = await fetch(`https://api.github.com/users/${name}` );
    const data2 = await response.json();
    setprofile([data2]);
  }

  useEffect(() => {
    Getprofile(10);
  }, []); 



  return (
    <>
      <div id="but"> 
        <input 
          className="input"
          type="number"
          placeholder="Enter any number  "
          value={numberofprofile}
          onChange={(e) => setnumberofprofile(e.target.value)}
        ></input>


        <button onClick={() => Getprofile(Number(numberofprofile))}>
          search Acc{" "}
        </button>
        
        <input
          className="input" 
          type="text"
          placeholder="Enter your github User name"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        ></input> 

        <button  onClick={(e)=>Getprofile_by_name(username)}>Search</button>
      </div>

      <div id="profiles_container">
        {profiles.map((value,index) => {
          return (
            <div className="card" key={value.id || index }>
              <img src={value.avatar_url}></img>
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank">
                github-profile 
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Body;  


