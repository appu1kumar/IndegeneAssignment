import React, { useState, memo} from 'react';
import Card from './UI/Card';
import './ListForm.css';

const ListForm = memo(props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const submitForm = event => {
        event.preventDefault();
        props.onAddUserList({ name: enteredName, age: enteredAge });
        setEnteredName('');
        setEnteredAge('');
      };

    return(
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitForm}>
                    <div className='form-group'>
                        <label className='label'>Name</label>
                        <input type='text' value={enteredName} placeholder='Enter Name' className='form-control' onChange={(e) => setEnteredName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label className='label'>Age</label>
                        <input type='number' value={enteredAge} placeholder='Enter Age' className='form-control' onChange={(e) => setEnteredAge(e.target.value)}/>
                    </div>
                    <button className='btn btn-primary'>Save</button>
                </form>
            </Card>
        </section>
    );
});


export default ListForm;