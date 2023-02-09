import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import Info from './Info';
import img from '../images/Obi-Wan Kenobi.jpg';

const Home = () => {
    const [resources, setResources]= useState("people");
    const [id, setId]= useState(null);
    const [resInfo, setResInfo]= useState(null);
    const [error, setError] = useState("");

    const handleSubmit= e =>{
        e.preventDefault();
        id && axios.get(`https://swapi.dev/api/${resources}/${id}/`).then(response => {
            setError("");
            let aux= [];
            for(const [name, data] of Object.entries(response.data)){
                aux.push({name, data})
            }
            setResInfo(aux);
        })
        .catch(() => setError("Estos no son los droides que está buscando"));
        }

    return (
        <>
            <form className={styles.navbar} onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Search for: </label>
                    <select onChange={e => setResources(e.target.value)}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div>
                    <label>Id: </label>
                    <input type="number" onChange={e => setId(e.target.value)} />
                    {id ? '' : <label style={{color: 'red'}}>*Ingrese un id</label>}
                    <button>Search</button>
                </div>
            </form>
            <main>
                {error ? <p className={styles.errorr}>{error}<img src={img} alt='Obi-Wan Kenobi' /></p>:
                <>
                <h1>{resInfo?.name}</h1>
                {resInfo && <Info arr={resInfo} />}
                </>
                }
            </main>
        </>
    )
};

export default Home;