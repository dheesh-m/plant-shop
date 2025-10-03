import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const plants = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 25, img: 'https://images.unsplash.com/photo-1601758123927-49d9b3b15f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400', category: 'Indoor' },
    { id: 2, name: 'Snake Plant', price: 20, img: 'https://images.unsplash.com/photo-1618232375625-7858e7d84a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400', category: 'Indoor' },
    { id: 3, name: 'Cactus', price: 15, img: 'https://images.unsplash.com/photo-1599058917210-91bb4d2924f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400', category: 'Outdoor' },
    { id: 4, name: 'Aloe Vera', price: 18, img: 'https://images.unsplash.com/photo-1618887571203-64cdbf6e0b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400', category: 'Indoor' },
    { id: 5, name: 'Monstera', price: 30, img: 'https://images.unsplash.com/photo-1618220732566-1c7288893dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400', category: 'Outdoor' },
    { id: 6, name: 'Palm', price: 28, img: 'https://images.unsplash.com/photo-1618233035238-4b4d9c1c2f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400', category: 'Outdoor' },
];

function ProductListing() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleAdd = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div className="product-listing">
            {plants.map(plant => {
                const inCart = cart.find(item => item.id === plant.id);
                return (
                    <div key={plant.id} className="product-card">
                        <img src={plant.img} alt={plant.name} width="150" />
                        <h3>{plant.name}</h3>
                        <p>${plant.price}</p>
                        <button className="add-cart" onClick={() => handleAdd(plant)} disabled={!!inCart}>
                            {inCart ? 'Added' : 'Add to Cart'}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductListing;
