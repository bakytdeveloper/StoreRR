// // client/src/components/Header.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faWhatsapp, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';
// import './Header.css';
//
// const Header = () => {
//     return (
//         <header className="header">
//             <div className="left">
//                 <div className="logo">StoreRR</div>
//                 <div className="social-icons">
//                     <FontAwesomeIcon icon={faInstagram} onClick={() => window.open('https://www.instagram.com/', '_blank')} />
//                     <FontAwesomeIcon icon={faWhatsapp} onClick={() => window.open('https://web.whatsapp.com/', '_blank')} />
//                     <FontAwesomeIcon icon={faTiktok} onClick={() => window.open('https://www.tiktok.com/', '_blank')} />
//                     <FontAwesomeIcon icon={faTelegram} onClick={() => window.open('https://web.telegram.org/', '_blank')} />
//                 </div>
//             </div>
//             <div className="right">
//                 <div className="phone" onClick={() => window.open('tel:+996312517582')}>XXX-XX-XX-XX</div>
//                 <div className="search-box">
//                     <input type="text" placeholder="Поиск" />
//                 </div>
//             </div>
//         </header>
//     );
// };
//
// export default Header;





import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (handleSearch) {
            handleSearch(value);
        }
    };

    return (
        <header className="header">
            <div className="left">
                <div className="logo">StoreRR</div>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faInstagram} onClick={() => window.open('https://www.instagram.com/', '_blank')} />
                    <FontAwesomeIcon icon={faWhatsapp} onClick={() => window.open('https://web.whatsapp.com/', '_blank')} />
                    <FontAwesomeIcon icon={faTiktok} onClick={() => window.open('https://www.tiktok.com/', '_blank')} />
                    <FontAwesomeIcon icon={faTelegram} onClick={() => window.open('https://web.telegram.org/', '_blank')} />
                </div>
            </div>
            <div className="right">
                <div className="phone" onClick={() => window.open('tel:+996312517582')}>XXX-XX-XX-XX</div>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Поиск"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
