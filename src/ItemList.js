import React, { useState } from 'react';
import AddItemForm from './AddItemForm';

const ItemList = () => {
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div>
            <AddItemForm addItem={addItem} />
            <h2>Item List</h2>
            <ul>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>: {item.description} (Quantity: {item.quantity})
                        </li>
                    ))
                ) : (
                    <li>No items added yet.</li>
                )}
            </ul>
        </div>
    );
};

export default ItemList;
