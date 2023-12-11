// //
// // // client/src/components/AdminPanel/AdminPanel.js
// // import React, { useState } from 'react';
// // import axios from 'axios';
// //
// // import './AdminPanel.css';
// //
// // const AdminPanel = () => {
// //     const [productName, setProductName] = useState('');
// //     const [productDescription, setProductDescription] = useState('');
// //     const [productType, setProductType] = useState('');
// //     const [productPrice, setProductPrice] = useState('');
// //     const [mainImage, setMainImage] = useState(null);
// //     const [mainImagePreview, setMainImagePreview] = useState('');
// //     const [secondaryImages, setSecondaryImages] = useState([]);
// //     const [specifications, setSpecifications] = useState([{ key: '', value: '' }]);
// //
// //     const handleImageChange = (e) => {
// //         const file = e.target.files[0];
// //
// //         if (file) {
// //             const reader = new FileReader();
// //             reader.onloadend = () => {
// //                 setMainImagePreview(reader.result);
// //             };
// //             reader.readAsDataURL(file);
// //         } else {
// //             // Если файл не выбран, сбросьте изображение
// //             setMainImagePreview(null);
// //         }
// //     };
// //
// //
// //     const handleSecondaryImageChange = (event) => {
// //         const file = event.target.files[0];
// //         if (file) {
// //             setSecondaryImages([...secondaryImages, URL.createObjectURL(file)]);
// //         }
// //     };
// //
// //     const handleRemoveSecondaryImage = (index) => {
// //         const updatedSecondaryImages = [...secondaryImages];
// //         updatedSecondaryImages.splice(index, 1);
// //         setSecondaryImages(updatedSecondaryImages);
// //     };
// //
// //     const handleSpecificationChange = (index, key, value) => {
// //         const updatedSpecifications = [...specifications];
// //         updatedSpecifications[index] = { key, value };
// //         setSpecifications(updatedSpecifications);
// //     };
// //
// //     const addSpecification = () => {
// //         setSpecifications([...specifications, { key: '', value: '' }]);
// //     };
// //
// //     const removeSpecification = (index) => {
// //         const updatedSpecifications = [...specifications];
// //         updatedSpecifications.splice(index, 1);
// //         setSpecifications(updatedSpecifications);
// //     };
// //
// //     const handleSubmit = async (event) => {
// //         event.preventDefault();
// //
// //         const formData = new FormData();
// //         formData.append('name', productName);
// //         formData.append('description', productDescription);
// //         formData.append('type', productType);
// //         formData.append('price', productPrice);
// //         formData.append('image', mainImage);
// //         secondaryImages.forEach((image, index) => {
// //             formData.append(`secondaryImages[${index}]`, image);
// //         });
// //         specifications.forEach((spec, index) => {
// //             formData.append(`specifications[${index}][key]`, spec.key);
// //             formData.append(`specifications[${index}][value]`, spec.value);
// //         });
// //
// //         try {
// //             await axios.post('/api/admin/addProduct', formData);
// //             setProductName('');
// //             setProductDescription('');
// //             setProductType('');
// //             setProductPrice('');
// //             setMainImage(null);
// //             setMainImagePreview('');
// //             setSecondaryImages([]);
// //             setSpecifications([{ key: '', value: '' }]);
// //         } catch (error) {
// //             console.error('Ошибка при добавлении товара:', error);
// //         }
// //     };
// //
// //     return (
// //         <div className="admin-panel">
// //             <h2>Админ Панель</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <label>
// //                     Название товара:
// //                     <input
// //                         type="text"
// //                         value={productName}
// //                         onChange={(e) => setProductName(e.target.value)}
// //                         required
// //                     />
// //                 </label>
// //                 <label>
// //                     Описание товара:
// //                     <textarea
// //                         value={productDescription}
// //                         onChange={(e) => setProductDescription(e.target.value)}
// //                         required
// //                     />
// //                 </label>
// //                 <label>
// //                     Тип товара:
// //                     <input type="text" value={productType} onChange={(e) => setProductType(e.target.value)} required />
// //                 </label>
// //                 <label>
// //                     Цена товара:
// //                     <input
// //                         type="number"
// //                         value={productPrice}
// //                         onChange={(e) => setProductPrice(e.target.value)}
// //                         required
// //                     />
// //                 </label>
// //                 <label className="image-input">
// //                     Основное изображение:
// //                     <input style={{background: "red"}} type="file" accept="image/*" onChange={handleImageChange} />
// //                     {mainImagePreview && (
// //                         <div className="image-preview-container">
// //                             <img className="image-preview" src={mainImagePreview} alt="Preview" />
// //                             <button type="button" onClick={() => setMainImagePreview(null)}>
// //                                 Удалить
// //                             </button>
// //                         </div>
// //                     )}
// //                 </label>
// //                 <label className="image-input">
// //                     Второстепенные изображения:
// //                     <input style={{border: "5px solid red"}} type="file" accept="image/*" onChange={handleSecondaryImageChange} />
// //                     {secondaryImages.map((image, index) => (
// //                         <div key={index} className="image-preview-container">
// //                             <img className="image-preview" src={image} alt="Preview" />
// //                             <button type="button" onClick={() => handleRemoveSecondaryImage(index)}>
// //                                 Удалить
// //                             </button>
// //                         </div>
// //                     ))}
// //                     {/*<button type="button" onClick={handleSecondaryImageChange}>*/}
// //                     {/*    Добавить ещё*/}
// //                     {/*</button>*/}
// //                 </label>
// //                 <div>
// //                     <h3>Характеристики товара:</h3>
// //                     {specifications.map((spec, index) => (
// //                         <div key={index} className="specification-input">
// //                             <input
// //                                 type="text"
// //                                 placeholder="Ключ"
// //                                 value={spec.key}
// //                                 onChange={(e) => handleSpecificationChange(index, e.target.value, spec.value)}
// //                             />
// //                             <input
// //                                 type="text"
// //                                 placeholder="Значение"
// //                                 value={spec.value}
// //                                 onChange={(e) => handleSpecificationChange(index, spec.key, e.target.value)}
// //                             />
// //                             <button type="button" onClick={() => removeSpecification(index)}>
// //                                 Удалить
// //                             </button>
// //                         </div>
// //                     ))}
// //                     <button type="button" onClick={addSpecification}>
// //                         Добавить характеристику
// //                     </button>
// //                 </div>
// //                 <button type="submit">Добавить товар</button>
// //             </form>
// //         </div>
// //     );
// // };
// //
// // export default AdminPanel;
// //
// //
// //
// //
//
//
//
//
//
//
// // // client/src/components/AdminPanel/AdminPanel.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// //
// // import './AdminPanel.css';
// //
// // const AdminPanel = () => {
// //     const [productName, setProductName] = useState('');
// //     const [productDescription, setProductDescription] = useState('');
// //     const [productType, setProductType] = useState('');
// //     const [productPrice, setProductPrice] = useState('');
// //     const [mainImage, setMainImage] = useState(null);
// //     const [mainImagePreview, setMainImagePreview] = useState('');
// //     const [secondaryImages, setSecondaryImages] = useState([]);
// //     const [specifications, setSpecifications] = useState([{ key: '', value: '' }]);
// //     const [products, setProducts] = useState([]);
// //     const [editingProduct, setEditingProduct] = useState(null);
// //
// //     useEffect(() => {
// //         axios.get('/products')
// //             .then(response => {
// //                 setProducts(response.data);
// //             })
// //             .catch(error => {
// //                 console.error('Ошибка при получении товаров:', error);
// //             });
// //     }, []);
// //
// //     const handleEdit = (product) => {
// //         setEditingProduct(product);
// //         setProductName(product.name);
// //         setProductDescription(product.description);
// //         setProductType(product.type);
// //         setProductPrice(product.price);
// //         setMainImagePreview(product.image);
// //         setSecondaryImages(product.secondaryImages || []);
// //         setSpecifications(product.specifications || [{ key: '', value: '' }]);
// //     };
// //
// //     const handleDelete = async (productId) => {
// //         try {
// //             await axios.delete(`/products/${productId}`);
// //             setProducts(products.filter(product => product._id !== productId));
// //             setEditingProduct(null);
// //         } catch (error) {
// //             console.error('Ошибка при удалении товара:', error);
// //         }
// //     };
// //
// //     const handleImageChange = (e) => {
// //         const file = e.target.files[0];
// //
// //         if (file) {
// //             const reader = new FileReader();
// //             reader.onloadend = () => {
// //                 setMainImagePreview(reader.result);
// //             };
// //             reader.readAsDataURL(file);
// //         } else {
// //             // Если файл не выбран, сбросьте изображение
// //             setMainImagePreview('');
// //         }
// //         setMainImage(file);
// //     };
// //
// //     const handleSecondaryImageChange = (event) => {
// //         const file = event.target.files[0];
// //         if (file) {
// //             setSecondaryImages([...secondaryImages, URL.createObjectURL(file)]);
// //         }
// //     };
// //
// //     const handleRemoveSecondaryImage = (index) => {
// //         const updatedSecondaryImages = [...secondaryImages];
// //         updatedSecondaryImages.splice(index, 1);
// //         setSecondaryImages(updatedSecondaryImages);
// //     };
// //
// //     const handleSpecificationChange = (index, key, value) => {
// //         const updatedSpecifications = [...specifications];
// //         updatedSpecifications[index] = { key, value };
// //         setSpecifications(updatedSpecifications);
// //     };
// //
// //     const addSpecification = () => {
// //         setSpecifications([...specifications, { key: '', value: '' }]);
// //     };
// //
// //     const removeSpecification = (index) => {
// //         const updatedSpecifications = [...specifications];
// //         updatedSpecifications.splice(index, 1);
// //         setSpecifications(updatedSpecifications);
// //     };
// //
// //     const handleSubmit = async (event) => {
// //         event.preventDefault();
// //
// //         const formData = new FormData();
// //         formData.append('name', productName);
// //         formData.append('description', productDescription);
// //         formData.append('type', productType);
// //         formData.append('price', productPrice);
// //         formData.append('image', mainImage);
// //         secondaryImages.forEach((image, index) => {
// //             formData.append(`secondaryImages[${index}]`, image);
// //         });
// //         specifications.forEach((spec, index) => {
// //             formData.append(`specifications[${index}][key]`, spec.key);
// //             formData.append(`specifications[${index}][value]`, spec.value);
// //         });
// //
// //         try {
// //             if (editingProduct) {
// //                 // Если товар редактируется, используйте PUT-запрос
// //                 await axios.put(`/products/${editingProduct._id}`, formData);
// //             } else {
// //                 // В противном случае добавьте новый товар с помощью POST-запроса
// //                 await axios.post('/products', formData);
// //             }
// //             setProductName('');
// //             setProductDescription('');
// //             setProductType('');
// //             setProductPrice('');
// //             setMainImage(null);
// //             setMainImagePreview('');
// //             setSecondaryImages([]);
// //             setSpecifications([{ key: '', value: '' }]);
// //             setEditingProduct(null);
// //             // Обновите список товаров после добавления/редактирования
// //             const updatedProducts = await axios.get('/products');
// //             setProducts(updatedProducts.data);
// //         } catch (error) {
// //             console.error('Ошибка при сохранении товара:', error);
// //         }
// //     };
// //
// //     return (
// //         <div className="admin-panel">
// //             <h2>Админ Панель</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <label>
// //                     Название товара:
// //                     <input
// //                         type="text"
// //                         value={productName}
// //                         onChange={(e) => setProductName(e.target.value)}
// //                         required
// //                     />
// //                 </label>
// //                 <label>
// //                     Описание товара:
// //                     <textarea
// //                         value={productDescription}
// //                         onChange={(e) => setProductDescription(e.target.value)}
// //                         required
// //                     />
// //                 </label>
// //                 <label>
// //                     Тип товара:
// //                     <input type="text" value={productType} onChange={(e) => setProductType(e.target.value)} required />
// //                 </label>
// //                 <label>
// //                     Цена товара:
// //                     <input
// //                         type="number"
// //                         value={productPrice}
// //                         onChange={(e) => setProductPrice(e.target.value)}
// //                         required
// //                     />
// //                 </label>
// //                 <label className="image-input">
// //                     Основное изображение:
// //                     <input style={{background: "red"}} type="file" accept="image/*" onChange={handleImageChange} />
// //                     {mainImagePreview && (
// //                         <div className="image-preview-container">
// //                             <img className="image-preview" src={mainImagePreview} alt="Preview" />
// //                             <button type="button" onClick={() => setMainImagePreview(null)}>
// //                                 Удалить
// //                             </button>
// //                         </div>
// //                     )}
// //                 </label>
// //                 <label className="image-input">
// //                     Второстепенные изображения:
// //                     <input style={{border: "5px solid red"}} type="file" accept="image/*" onChange={handleSecondaryImageChange} />
// //                     {secondaryImages.map((image, index) => (
// //                         <div key={index} className="image-preview-container">
// //                             <img className="image-preview" src={image} alt="Preview" />
// //                             <button type="button" onClick={() => handleRemoveSecondaryImage(index)}>
// //                                 Удалить
// //                             </button>
// //                         </div>
// //                     ))}
// //                     {/*<button type="button" onClick={handleSecondaryImageChange}>*/}
// //                     {/*    Добавить ещё*/}
// //                     {/*</button>*/}
// //                 </label>
// //                 <div>
// //                     <h3>Характеристики товара:</h3>
// //                     {specifications.map((spec, index) => (
// //                         <div key={index} className="specification-input">
// //                             <input
// //                                 type="text"
// //                                 placeholder="Ключ"
// //                                 value={spec.key}
// //                                 onChange={(e) => handleSpecificationChange(index, e.target.value, spec.value)}
// //                             />
// //                             <input
// //                                 type="text"
// //                                 placeholder="Значение"
// //                                 value={spec.value}
// //                                 onChange={(e) => handleSpecificationChange(index, spec.key, e.target.value)}
// //                             />
// //                             <button type="button" onClick={() => removeSpecification(index)}>
// //                                 Удалить
// //                             </button>
// //                         </div>
// //                     ))}
// //                     <button type="button" onClick={addSpecification}>
// //                         Добавить характеристику
// //                     </button>
// //                 </div>
// //                 <button type="submit">Добавить товар</button>
// //
// //                 {/* Дополнительные поля для управления редактированием */}
// //                 {editingProduct && (
// //                     <div className="edit-panel">
// //                         <h3>Редактировать товары</h3>
// //                         <ul>
// //                             {products.map(product => (
// //                                 <li key={product._id}>
// //                                     <button onClick={() => handleEdit(product)}>{product.name}</button>
// //                                     <button onClick={() => handleDelete(product._id)}>Удалить</button>
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //                 )}
// //             </form>
// //         </div>
// //     );
// // };
// //
// // export default AdminPanel;
//
//
//
//
//
//
//
//
//
//
// // client/src/components/AdminPanel/AdminPanel.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// import './AdminPanel.css';
//
// const AdminPanel = () => {
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [productType, setProductType] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [mainImage, setMainImage] = useState(null);
//     const [mainImagePreview, setMainImagePreview] = useState('');
//     const [secondaryImages, setSecondaryImages] = useState([]);
//     const [specifications, setSpecifications] = useState([{ key: '', value: '' }]);
//     const [products, setProducts] = useState([]);
//     const [editingProductId, setEditingProductId] = useState(null);
//
//     useEffect(() => {
//         axios.get('/api/products')
//             .then(response => {
//                 setProducts(response.data);
//             })
//             .catch(error => {
//                 console.error('Ошибка получения товаров:', error);
//             });
//     }, []);
//
//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setMainImagePreview(reader.result);
//             };
//             reader.readAsDataURL(file);
//         } else {
//             setMainImagePreview(null);
//         }
//     };
//
//     const handleSecondaryImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setSecondaryImages([...secondaryImages, URL.createObjectURL(file)]);
//         }
//     };
//
//     const handleRemoveSecondaryImage = (index) => {
//         const updatedSecondaryImages = [...secondaryImages];
//         updatedSecondaryImages.splice(index, 1);
//         setSecondaryImages(updatedSecondaryImages);
//     };
//
//     const handleSpecificationChange = (index, key, value) => {
//         const updatedSpecifications = [...specifications];
//         updatedSpecifications[index] = { key, value };
//         setSpecifications(updatedSpecifications);
//     };
//
//     const addSpecification = () => {
//         setSpecifications([...specifications, { key: '', value: '' }]);
//     };
//
//     const removeSpecification = (index) => {
//         const updatedSpecifications = [...specifications];
//         updatedSpecifications.splice(index, 1);
//         setSpecifications(updatedSpecifications);
//     };
//
//     const handleEditClick = (productId) => {
//         const productToEdit = products.find(product => product._id === productId);
//         if (productToEdit) {
//             setEditingProductId(productId);
//             setProductName(productToEdit.name);
//             setProductDescription(productToEdit.description);
//             setProductType(productToEdit.type);
//             setProductPrice(productToEdit.price);
//             setMainImagePreview(productToEdit.image);
//             setSecondaryImages(productToEdit.secondaryImages);
//             setSpecifications(productToEdit.specifications);
//         }
//     };
//
//     const handleDeleteClick = async (productId) => {
//         try {
//             await axios.delete(`/api/products/deleteProduct/${productId}`);
//             setProducts(products.filter(product => product._id !== productId));
//         } catch (error) {
//             console.error('Ошибка при удалении товара:', error);
//         }
//     };
//
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//
//         const formData = new FormData();
//         formData.append('name', productName);
//         formData.append('description', productDescription);
//         formData.append('type', productType);
//         formData.append('price', productPrice);
//         formData.append('image', mainImage);
//         secondaryImages.forEach((image, index) => {
//             formData.append(`secondaryImages[${index}]`, image);
//         });
//         specifications.forEach((spec, index) => {
//             formData.append(`specifications[${index}][key]`, spec.key);
//             formData.append(`specifications[${index}][value]`, spec.value);
//         });
//
//         try {
//             if (editingProductId) {
//                 await axios.put(`/api/products/editProduct/${editingProductId}`, formData);
//                 setEditingProductId(null);
//             } else {
//                 const response = await axios.post('/api/products/addProduct', formData);
//                 setProducts([...products, response.data]);
//             }
//
//             setProductName('');
//             setProductDescription('');
//             setProductType('');
//             setProductPrice('');
//             setMainImage(null);
//             setMainImagePreview('');
//             setSecondaryImages([]);
//             setSpecifications([{ key: '', value: '' }]);
//         } catch (error) {
//             console.error('Ошибка при добавлении/редактировании товара:', error);
//         }
//     };
//
//     return (
//         <div className="admin-panel">
//             <h2>Админ Панель</h2>
//             <div className="edit-list">
//                 {products.map(product => (
//                     <div key={product._id} className="edit-item">
//                         <button onClick={() => handleEditClick(product._id)}>Редактировать</button>
//                         <span>{product.name}</span>
//                         <button onClick={() => handleDeleteClick(product._id)}>Удалить</button>
//                     </div>
//                 ))}
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Название товара:
//                     <input
//                         type="text"
//                         value={productName}
//                         onChange={(e) => setProductName(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Описание товара:
//                     <textarea
//                         value={productDescription}
//                         onChange={(e) => setProductDescription(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <label>
//                     Тип товара:
//                     <input type="text" value={productType} onChange={(e) => setProductType(e.target.value)} required />
//                 </label>
//                 <label>
//                     Цена товара:
//                     <input
//                         type="number"
//                         value={productPrice}
//                         onChange={(e) => setProductPrice(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <label className="image-input">
//                     Основное изображение:
//                     <input type="file" accept="image/*" onChange={handleImageChange} />
//                     {mainImagePreview && (
//                         <div className="image-preview-container">
//                             <img className="image-preview" src={mainImagePreview} alt="Preview" />
//                             <button type="button" onClick={() => setMainImagePreview(null)}>
//                                 Удалить
//                             </button>
//                         </div>
//                     )}
//                 </label>
//                 <label className="image-input">
//                     Второстепенные изображения:
//                     <input type="file" accept="image/*" onChange={handleSecondaryImageChange} />
//                     {secondaryImages.map((image, index) => (
//                         <div key={index} className="image-preview-container">
//                             <img className="image-preview" src={image} alt="Preview" />
//                             <button type="button" onClick={() => handleRemoveSecondaryImage(index)}>
//                                 Удалить
//                             </button>
//                         </div>
//                     ))}
//                     <button type="button" onClick={handleSecondaryImageChange}>
//                         Добавить ещё
//                     </button>
//                 </label>
//                 <div>
//                     <h3>Характеристики товара:</h3>
//                     {specifications.map((spec, index) => (
//                         <div key={index} className="specification-input">
//                             <input
//                                 type="text"
//                                 placeholder="Ключ"
//                                 value={spec.key}
//                                 onChange={(e) => handleSpecificationChange(index, e.target.value, spec.value)}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Значение"
//                                 value={spec.value}
//                                 onChange={(e) => handleSpecificationChange(index, spec.key, e.target.value)}
//                             />
//                             <button type="button" onClick={() => removeSpecification(index)}>
//                                 Удалить
//                             </button>
//                         </div>
//                     ))}
//                     <button type="button" onClick={addSpecification}>
//                         Добавить характеристику
//                     </button>
//                 </div>
//                 <button type="submit">{editingProductId ? 'Редактировать товар' : 'Добавить товар'}</button>
//             </form>
//         </div>
//     );
// };
//
// export default AdminPanel;
//






// client/src/components/AdminPanel/AdminPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './AdminPanel.css';

const AdminPanel = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productType, setProductType] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const [mainImagePreview, setMainImagePreview] = useState('');
    const [secondaryImages, setSecondaryImages] = useState([]);
    const [specifications, setSpecifications] = useState([{ key: '', value: '' }]);
    const [products, setProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Ошибка получения товаров:', error);
            });
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setMainImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setMainImagePreview(null);
        }
    };

    const handleSecondaryImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSecondaryImages([...secondaryImages, URL.createObjectURL(file)]);
        }
    };

    const handleRemoveSecondaryImage = (index) => {
        const updatedSecondaryImages = [...secondaryImages];
        updatedSecondaryImages.splice(index, 1);
        setSecondaryImages(updatedSecondaryImages);
    };

    const handleSpecificationChange = (index, key, value) => {
        const updatedSpecifications = [...specifications];
        updatedSpecifications[index] = { key, value };
        setSpecifications(updatedSpecifications);
    };

    const addSpecification = () => {
        setSpecifications([...specifications, { key: '', value: '' }]);
    };

    const removeSpecification = (index) => {
        const updatedSpecifications = [...specifications];
        updatedSpecifications.splice(index, 1);
        setSpecifications(updatedSpecifications);
    };

    const handleEditClick = (productId) => {
        const productToEdit = products.find(product => product._id === productId);
        if (productToEdit) {
            setEditingProductId(productId);
            setProductName(productToEdit.name);
            setProductDescription(productToEdit.description);
            setProductType(productToEdit.type);
            setProductPrice(productToEdit.price);
            setMainImagePreview(productToEdit.image);
            setSecondaryImages(productToEdit.secondaryImages);
            setSpecifications(productToEdit.specifications);
        }
    };

    const handleDeleteClick = async (productId) => {
        try {
            await axios.delete(`/api/admin/deleteProduct/${productId}`);
            setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
            console.error('Ошибка при удалении товара:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('type', productType);
        formData.append('price', productPrice);
        formData.append('image', mainImage);
        secondaryImages.forEach((image, index) => {
            formData.append(`secondaryImages[${index}]`, image);
        });
        specifications.forEach((spec, index) => {
            formData.append(`specifications[${index}][key]`, spec.key);
            formData.append(`specifications[${index}][value]`, spec.value);
        });

        try {
            if (editingProductId) {
                await axios.put(`/api/admin/editProduct/${editingProductId}`, formData);
                setEditingProductId(null);
            } else {
                const response = await axios.post('/api/admin/addProduct', formData);
                setProducts([...products, response.data]);
            }

            setProductName('');
            setProductDescription('');
            setProductType('');
            setProductPrice('');
            setMainImage(null);
            setMainImagePreview('');
            setSecondaryImages([]);
            setSpecifications([{ key: '', value: '' }]);
        } catch (error) {
            console.error('Ошибка при добавлении/редактировании товара:', error);
        }
    };

    return (
        <div className="admin-panel">
            <h2>Админ Панель</h2>
            <div className="edit-list">
                {products.map(product => (
                    <div key={product._id} className="edit-item">
                        <button onClick={() => handleEditClick(product._id)}>Редактировать</button>
                        <span>{product.name}</span>
                        <button onClick={() => handleDeleteClick(product._id)}>Удалить</button>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Название товара:
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Описание товара:
                    <textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Тип товара:
                    <input type="text" value={productType} onChange={(e) => setProductType(e.target.value)} required />
                </label>
                <label>
                    Цена товара:
                    <input
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                </label>
                <label className="image-input">
                    Основное изображение:
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {mainImagePreview && (
                        <div className="image-preview-container">
                            <img className="image-preview" src={mainImagePreview} alt="Preview" />
                            <button type="button" onClick={() => setMainImagePreview(null)}>
                                Удалить
                            </button>
                        </div>
                    )}
                </label>
                <label className="image-input">
                    Второстепенные изображения:
                    <input type="file" accept="image/*" onChange={handleSecondaryImageChange} />
                    {secondaryImages.map((image, index) => (
                        <div key={index} className="image-preview-container">
                            <img className="image-preview" src={image} alt="Preview" />
                            <button type="button" onClick={() => handleRemoveSecondaryImage(index)}>
                                Удалить
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={handleSecondaryImageChange}>
                        Добавить ещё
                    </button>
                </label>
                <div>
                    <h3>Характеристики товара:</h3>
                    {specifications.map((spec, index) => (
                        <div key={index} className="specification-input">
                            <input
                                type="text"
                                placeholder="Ключ"
                                value={spec.key}
                                onChange={(e) => handleSpecificationChange(index, e.target.value, spec.value)}
                            />
                            <input
                                type="text"
                                placeholder="Значение"
                                value={spec.value}
                                onChange={(e) => handleSpecificationChange(index, spec.key, e.target.value)}
                            />
                            <button type="button" onClick={() => removeSpecification(index)}>
                                Удалить
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addSpecification}>
                        Добавить характеристику
                    </button>
                </div>
                <button type="submit">{editingProductId ? 'Редактировать товар' : 'Добавить товар'}</button>
            </form>
        </div>
    );
};

export default AdminPanel;
