import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function CreateEmployee() {
    const [firstname, setFirstname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {firstname, name, email, position})
        .then(res => {
            console.log("Created employee", res);
            navigate(-1);
        })
    };
    
  return (
  <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
    <div className='w-50 bg-light rounded p-3'>
      <form onSubmit={handleSubmit}>
        <h1>Ajouter un employé</h1>
        
        <div className='mb-2'>
          <label htmlFor="firstname">Prénom</label>
          <input
            id="firstname"
            type="text"
            placeholder='First Name'
            className='form-control'
            onChange={e => setFirstname(e.target.value)}
          />
        </div>
        <div className='mb-2'>
          <label htmlFor="lastname">Nom</label>
          <input
            id="lastname"
            type="text"
            placeholder='Last Name'
            className='form-control'
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='mb-2'>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder='Email'
            className='form-control'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-2'>
          <label htmlFor="position">Fonction</label>
          <input
            id="position"
            type="text"
            placeholder='Position'
            className='form-control'
            onChange={e => setPosition(e.target.value)}
          />
        </div>
        <button className='btn btn-dark'>Submit</button>
      </form>
    </div>
  </div>
)

}

export default CreateEmployee
