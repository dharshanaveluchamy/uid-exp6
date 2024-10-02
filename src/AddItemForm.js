import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            name: itemName,
            description: itemDescription,
            quantity: itemQuantity,
        };
        addItem(newItem);
        resetForm();
    };

    const resetForm = () => {
        setItemName('');
        setItemDescription('');
        setItemQuantity(1);
    };

    return (
        <div className="container">
            <h1>Add New Item</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="itemName">Item Name:</label>
                    <input
                        type="text"
                        id="itemName"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="itemDescription">Description:</label>
                    <textarea
                        id="itemDescription"
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="itemQuantity">Quantity:</label>
                    <input
                        type="number"
                        id="itemQuantity"
                        value={itemQuantity}
                        min="1"
                        onChange={(e) => setItemQuantity(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItemForm;
