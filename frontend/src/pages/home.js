// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { handleError, handleSuccess } from '../utils';
// import { ToastContainer } from 'react-toastify';

// function Home() {
//     const [loggedInUser, setLoggedInUser] = useState('');
//     const [products, setProducts] = useState('');
//     const navigate = useNavigate();
//     useEffect(() => {
//         setLoggedInUser(localStorage.getItem('loggedInUser'))
//     }, [])

    // const handleLogout = (e) => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('loggedInUser');
    //     handleSuccess('User Loggedout');
    //     setTimeout(() => {
    //         navigate('/login');
    //     }, 1000)
    // }

//     const fetchProducts = async () => {
//         try {
//             const url = "http://localhost:8090/products";
//             const headers = {
//                 headers: {
//                     'Authorization': localStorage.getItem('token')
//                 }
//             }
//             const response = await fetch(url, headers);
//             const result = await response.json();
//             console.log(result);
//             setProducts(result);
//         } catch (err) {
//             handleError(err);
//         }
//     }
//     useEffect(() => {
//         fetchProducts()
//     }, [])

//     return (
//         <div>
//             <h1>Welcome {loggedInUser}</h1>
//             <button onClick={handleLogout}>Logout</button>
//             <div>
//                 {
//                     products && products?.map((item, index) => (
//                         <ul key={index}>
//                             <span>{item.name} : {item.price}</span>
//                         </ul>
//                     ))
//                 }
//             </div>
//             <ToastContainer />
//         </div>
//     )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import { Button, Card } from 'react-bootstrap';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8090/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                },
            };
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            console.log(err);
            handleError(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Card
                style={{
                    width: '18rem',
                    marginBottom: '1rem',
                    border: '2px solid #000', // Add border
                    backgroundColor: 'yellow' // Add background color (light gray)
                }}
            >
                <center><Card.Img variant="top" src="https://via.placeholder.com/150" /></center>
                
                <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <center><Button variant="primary">Go somewhere</Button></center>
                    
                </Card.Body>
            </Card>
            <ToastContainer />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
