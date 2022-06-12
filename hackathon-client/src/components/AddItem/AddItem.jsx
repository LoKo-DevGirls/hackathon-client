import React, {useState} from 'react'
import styles from './AddItem.module.scss'


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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addFetch(formData);//TODO: Not yet implemented
    };

    return (
        <div className={styles.addItem}>
            <header>
                <h3>Add Item</h3>
            </header>
            <form onSubmit={handleSubmit}>
                <section>
                <input type='text' name='itemName' pattern="^[A-Za-z0-9]{3,10}$" onChange={(e)=> handleChange(e)}/>
                </section>
                <section>
                <span>Is it recyclable?</span>
                <input type="radio" id='recyclable' value={true} name="isRecyclable" onClick={toggleRecycle} onChange={(e)=> handleChange(e)}/> 
                <label htmlFor='recyclable'>Yes</label>          
                <input type="radio" id='notRecyclable' value={false} name="isRecyclable" onClick={toggleRecycle} onChange={(e)=> handleChange(e)}/> 
                <label htmlFor='noRecyclable'>No</label>  
                </section>        
                {recycle && (
                    <section>
                    <select name="category" onChange={(e)=> handleChange(e)}>
                        <option disabled selected value></option>
                        <option value="paper">Paper</option>
                        <option value="plastic">Plastic</option>
                        <option value="metal">Metal</option>
                        <option value="glass">Glass</option>
                        <option value="electronic">Electronic Device</option>
                    </select>
                    <label htmlFor='steps'>How to recycle</label>   
                    <input type='text' id='steps' onChange={(e)=> handleChange(e)}/>
                    </section>
                    )
                }
                <section>
                <label htmlFor='council'>Select your council</label>  
                <select name="council" onChange={(e)=> handleChange(e)}>
                        <option disabled selected value></option>
                        <option value="hackney">Hackney</option>
                        <option value="islington">Islington</option>
                        <option value="camden">Camden</option>
                        <option value="southwark">Southwark</option>
                </select>
                </section>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    );
};