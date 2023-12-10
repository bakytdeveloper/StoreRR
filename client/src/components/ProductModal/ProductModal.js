//
//
//
// // client/src/components/ProductModal/ProductModal.js
// import React, { useState } from 'react';
// import './ProductModal.css';
//
// const ProductModal = ({ product, closeModal }) => {
//     const { name, image, secondaryImages, description, specifications } = product;
//     const [currentImage, setCurrentImage] = useState(image);
//
//     const handleImageClick = (clickedImage) => {
//         setCurrentImage(clickedImage);
//     };
//
//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <button className="close-btn" onClick={closeModal}>
//                     &#10006;
//                 </button>
//                 <h2>{name}</h2>
//                 <div className="images-container">
//                     <div className="secondary-images">
//                         {secondaryImages.map((secondaryImage, index) => (
//                             <img
//                                 key={index}
//                                 src={secondaryImage}
//                                 alt={`Secondary ${index}`}
//                                 onClick={() => handleImageClick(secondaryImage)}
//                             />
//                         ))}
//                     </div>
//                     <div className="main-image">
//                         <img src={currentImage} alt={name} />
//                     </div>
//                 </div>
//                 <p>{description}</p>
//                 <div className="specifications">
//                     <h3>Характеристики</h3>
//                     <table>
//                         <tbody>
//                         {specifications.map(({ key, value }, index) => (
//                             <tr key={index}>
//                                 <td>{key}</td>
//                                 <td>{value}</td>
//                             </tr>
//                         ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ProductModal;



// client/src/components/ProductModal/ProductModal.js
import React, { useState } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, closeModal }) => {
    const { name, image, secondaryImages, description, specifications } = product;
    const [currentImage, setCurrentImage] = useState(image);

    const handleImageClick = (clickedImage) => {
        setCurrentImage(clickedImage);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={closeModal}>
                    &#10006;
                </button>
                <h2>{name}</h2>
                <div className="images-container">
                    <div className="secondary-images">
                        {[image, ...secondaryImages].map((secondaryImage, index) => (
                            <img
                                key={index}
                                src={secondaryImage}
                                alt={`Image ${index}`}
                                onClick={() => handleImageClick(secondaryImage)}
                            />
                        ))}
                    </div>
                    <div className="main-image">
                        <img src={currentImage} alt={name} />
                    </div>
                </div>
                <p>{description}</p>
                <div className="specifications">
                    <h3>Характеристики</h3>
                    <table>
                        <tbody>
                        {specifications.map(({ key, value }, index) => (
                            <tr key={index}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
