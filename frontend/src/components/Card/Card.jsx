import React from 'react';
import styles from './CardStyles.module.css';
import html2canvas from 'html2canvas';


function Card({ id, name, state, country }) {

    const download = async () => {
        const element = document.getElementById(id);
        const canvas = await html2canvas(element);
        const img = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = img;
        link.download = name + '.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <section className={styles.container} id={id}>
                <h1>{name}</h1>
                <h1>{state}</h1>
                <h1>{country}</h1>
                <button onClick={download}>Download</button>
            </section>
        </>
    )
}

export default Card
