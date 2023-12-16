// CitySelector.jsx
import { useState, useEffect, useRef } from 'react';
import citiesData from './cities.json';

const CitySelector = ({ onChange }) => {
    const [selectedCity, setSelectedCity] = useState('Красноярск');
    const [filteredCities, setFilteredCities] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        const filteredCities = citiesData.filter(city => city.population > 50000);
        filteredCities.sort((a, b) => b.population - a.population);
        filteredCities.sort((a, b) => {
            if (a.population === filteredCities[0].population) {
                return -1;
            } else if (b.population === filteredCities[0].population) {
                return 1;
            } else {
                return a.city.localeCompare(b.city);
            }
        });
        setFilteredCities(filteredCities);
    }, []);

    const handleCityChange = (city) => {
        setSelectedCity(city);
        onChange({ city });
        setIsOpen(false);
    };

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            listRef.current.style.maxHeight = `${listRef.current.scrollHeight}px`;
            listRef.current.style.border = '1px solid #999';
        } else {
            listRef.current.style.maxHeight = '0px';
            listRef.current.style.border = 'none';
        }
    }, [isOpen]);

    return (
        <div className="about__row-inner inner">
            <div className={`about__row-selected selected-city ${isOpen ? "open" : ""}`} onClick={toggleList}>
                {selectedCity} <span className={`arrow ${isOpen ? "open" : ""}`}><svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.707107" y1="1.29289" x2="7.70711" y2="8.29289" stroke="#037BB8" strokeWidth="2" />
                    <line y1="-1" x2="9.8995" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 14 2)" stroke="#037BB8" strokeWidth="2" />
                </svg></span>
            </div>
            <ul ref={listRef} className="about__row-options options">
                {filteredCities.map(city => (
                    <li
                        key={city.city}
                        onClick={() => handleCityChange(city.city)}
                        className={`about__row-option option ${selectedCity === city.city ? "selected" : ""}`}
                    >
                        {city.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CitySelector;
