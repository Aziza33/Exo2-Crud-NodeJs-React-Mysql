import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Employee() {

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081')
        .then(res => setEmployee(res.data))
        .catch(err => console.log(err));
    }, [])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-light rounded'>
        <Link to="/create" className='btn btn-success'>Ajouter un employé</Link>
        <table className='table'>
          <thead>
            <tr>
              <td>Nom</td>
              <td>Prénom</td>
              <td>Email</td>
              <td>Fonction</td>
            </tr>
          </thead>
          <tbody>
            {
              employee.map((data, i) => (
                <tr key={i}>
                  <td>{data.lastname}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.position}</td>
                  <td>
                    <button className='btn btn-light'>Modifier</button>
                    <button className='btn btn-light'>Supprimer</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee;
