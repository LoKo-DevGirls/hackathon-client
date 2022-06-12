import React, {useState} from 'react'
import styles from './AddItem.module.scss'
import Select from 'react-select'
import { Navigate } from 'react-router-dom';

export const AddItem = () => {
    const [formData, setFormData] = useState({
        itemName: "",
        isRecyclable: true,
        steps:null,
        category: null,
        council: null
    });

    const [recycle, setRecycle] = useState(true);
    const toggleRecycle = () => setRecycle(!recycle);
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        e.target? setFormData({ ...formData, [e.target.name]: e.target.value }) : setFormData({ ...formData, [e.name]: e.value });
    };

    const addItemFetch = async (data) => {
        try {
            const response = await fetch("https://on-the-ground-api.herokuapp.com/item", {
                body: JSON.stringify({
                    itemName: data.itemName,
                    itemImage: 'foo',
                    isRecyclable: data.isRecyclable,
                    howToRecycle: data.steps,
                    upcycleVideo: 'foo',
                    councilId: data.council,
                    categoryId: data.category,
                }),
                headers: { "Content-Type": "application/json" },
                method: "POST"
            });
            const finalData = await response.json()
            console.log(finalData)
            alert('Thanks for the submission. Your data is now waiting for the approval')
            setRedirect(true);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItemFetch(formData);
    };

    const categoryOptions = [
        { value: '1', name: 'category', label: 'Paper' },
        { value: '2', name: 'category', label: 'Plastic' },
        { value: '3', name: 'category', label: 'Metal' },
        { value: '4', name: 'category', label: 'Glass' },
        { value: '5', name: 'category', label: 'Electronic Devices' }
    ]

    const councilOptions = [
        {value: "555", name: 'council', label: 'Hackney'},
        {value: "666", name: 'council', label: 'Southwark'},
    ]

    return (
        <div className={styles.addItem}>
            <header>
                <h1>Add Item</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor='itemName'>Type Item name</label> 
                <input type='text' name='itemName' pattern="^[A-Za-z0-9]{3,10}$" onChange={(e)=> handleChange(e)}/>
                <label htmlFor='isRecyclable'>Is it recyclable?</label> 
                <input type="radio" checked={recycle} id='recyclable' value={true} name="isRecyclable" onClick={toggleRecycle} onChange={(e)=> handleChange(e)}/> 
                <label htmlFor='isRecyclable'>Yes</label>          
                <input type="radio" checked={!recycle} id='notRecyclable' value={false} name="isRecyclable" onClick={toggleRecycle} onChange={(e)=> handleChange(e)}/> 
                <label htmlFor='isRecyclable'>No</label>  
                {recycle && (
                    <>
                    <label htmlFor='category'>Choose the category</label> 
                        <Select name='category' options={categoryOptions} onChange={(e)=> handleChange(e)} />
                        <label htmlFor='steps'>How to recycle</label>   
                        <input type='text' name='steps' id='steps' onChange={(e)=> handleChange(e)}/>
                        </>
                )}        
                <label htmlFor='council'>Choose your council</label>  
                <Select name='council' options={councilOptions} onChange={(e)=> handleChange(e)}/>
                <input className={styles.submitInput} type='submit' value='Submit'/>
            </form>
            {redirect && <Navigate replace to="/" />}
        </div>
    );
};