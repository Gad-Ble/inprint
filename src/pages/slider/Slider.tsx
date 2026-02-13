import styles from './Slider.module.css';
import Tshirt from '../../assets/t-shirt.png';
import React, { useState } from 'react';

export function Slider() {

    const SLIDES = [
        {
            id: 1,
            title: 'Создай свой стиль вместе с IN PRINT',
            description: 'Принты с эксклюзивным дизайном на футболках, лонгсливах и толстовках',
            image: Tshirt,
            button: 'Смотреть каталог',
        },
    ];

    const svgPlay = {
        play: <svg width="84" height="84" viewBox="0 0 84 84" >
            <path d="M42 82C64.092 82 82 64.092 82 42C82 19.908 64.092 2 42 2C19.908 2 2 19.908 2 42C2 64.092 19.908 82 42 82Z" stroke="white" stroke-width="4" stroke-linejoin="round" />
            <path d="M34 42V27.8462L46.3077 34.9231L58.6154 42L46.3077 49.077L34 56.1539V42Z" stroke="white" stroke-width="4" stroke-linejoin="round" />
        </svg>,
        pause: <svg width="84" height="84" viewBox="0 0 84 84" >
            <path d="M42 82C64.092 82 82 64.092 82 42C82 19.908 64.092 2 42 2C19.908 2 2 19.908 2 42C2 64.092 19.908 82 42 82Z" stroke="white" stroke-width="4" stroke-linejoin="round" fill="none" />
            <rect x="30" y="27" width="8" height="30" rx="2" fill="white" />
            <rect x="46" y="27" width="8" height="30" rx="2" fill="white" />
        </svg>
    }

    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive); // меняем на противоположное значение
    };

    function randomColor() {
        const h = Math.floor(Math.random() * 360);
        const s = Math.floor(Math.random() * 30) + 70; // 70-100%
        const l = Math.floor(Math.random() * 20) + 40; // 40-60%
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.slider}>
                    {SLIDES.map(slide => (
                        <div key={slide.id} className={styles.slide}>
                            <div className={styles.slideInfo}>
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                                <div className={styles.slideButtons}>
                                    <a href="#" className={styles.buttonLink}>{slide.button}</a>
                                    <div onClick={handleClick} className={styles.playButton}>
                                        {isActive ? svgPlay.pause : svgPlay.play}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.slideContent}>
                                <img src={slide.image} alt={`Slide ${slide.id}`} />
                            </div>
                        </div>
                    ))}
                    <div className={styles.dotted}>
                        {SLIDES.map(slide => (
                            <div key={slide.id} className={styles.dot} style={{ backgroundColor: randomColor() }}></div>
                        ))}
                    </div>
                    <div className={styles.arrow}>
                        <svg width="65" height="25" viewBox="0 0 65 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M63.1304 0.413305C64.7821 1.45921 64.7821 3.86871 63.1304 4.91461L33.2546 23.8332C32.6012 24.247 31.7679 24.247 31.1146 23.8332L1.23875 4.91461C-0.412917 3.86871 -0.412918 1.45921 1.23874 0.413305C2.10898 -0.137764 3.21893 -0.137764 4.08916 0.413305L31.1146 17.5269C31.7679 17.9407 32.6012 17.9407 33.2546 17.5269L60.28 0.413305C61.1502 -0.137764 62.2602 -0.137764 63.1304 0.413305Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}