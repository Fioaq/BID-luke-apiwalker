import React from 'react';
import styles from '../styles/Info.module.css';

const Info = props => {
    const {arr}= props;
    return (
        <>
            <h1>{arr[0].data}</h1>
            <ul className={styles.list}>
                <li>{arr[1].name.replace(/_/g," ")}: {arr[1].data}</li>
                <li>{arr[2].name.replace(/_/g," ")}: {arr[2].data}</li>
                <li>{arr[4].name.replace(/_/g," ")}: {arr[4].data}</li>
                <li>{arr[5].name.replace(/_/g," ")}: {arr[5].data}</li>
            </ul>
        </>
    )
}

export default Info