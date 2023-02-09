import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/Info.module.css';
import img from '../images/Obi-Wan Kenobi.jpg';

const PersonId = () => {
    const {id}= useParams();
    const [arr, setArr] = useState([]);
    const [error, setError] = useState("");  
    useEffect(() => {
        handleId();
    } , [])

    const handleId= () =>{
        axios.get(`https://swapi.dev/api/people/${id}/`).then(response => {
            let aux= [];
            for(const [name, data] of Object.entries(response.data)){
                aux.push({name, data})
            }
            setArr(aux);
            console.log()
        })
        .catch(() => setError("Estos no son los droides que está buscando"));
    };

    return (
        <>
            {error ? <p className={styles.error}>{error}<img src={img} alt='Obi-Wan Kenobi' /></p>:
            <>
            <h1>{arr[0]?.data}</h1>
            <ul className={styles.list}>
                <li>{arr[1]?.name.replace(/_/g," ")}: {arr[1]?.data}</li>
                <li>{arr[2]?.name.replace(/_/g," ")}: {arr[2]?.data}</li>
                <li>{arr[4]?.name.replace(/_/g," ")}: {arr[4]?.data}</li>
                <li>{arr[5]?.name.replace(/_/g," ")}: {arr[5]?.data}</li>
            </ul>
            </>
            }
            <Link to='/'>Volver</Link>
        </>
    )
};

export default PersonId