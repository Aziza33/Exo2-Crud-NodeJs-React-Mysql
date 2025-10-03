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

     const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/employee/`+id)
            window.location.reload()
        } catch(err) {
            console.log(err);
        }
    };

  return (
  <div
    className="min-vh-100 d-flex align-items-start justify-content-center py-5"
    style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e3eeff 100%)' }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            {/* Header */}
            <div
              className="p-4 p-md-5 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between"
              style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)', color: '#fff' }}
            >
              <div>
                <h1 className="h3 fw-bold mb-1">Annuaire des employés</h1>
                <p className="mb-0 opacity-75">Dashboard</p>
              </div>
              <Link to="/create" className="btn btn-light fw-semibold mt-3 mt-md-0 shadow-sm">
                + Ajouter un employé
              </Link>
            </div>

            {/* Body */}
            <div className="p-4 p-md-5">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="small text-muted">
                  Total : <span className="badge bg-secondary">
                  </span>
                </div>
                {/* Champ de recherche (non fonctionnel) */}
                <div className="input-group" style={{ maxWidth: '280px' }}>
                  {/* <span className="input-group-text bg-transparent border-end-0">🔎</span> */}
                  {/* <input className="form-control border-start-0" placeholder="Rechercher…" /> */}
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Nom</th>
                      <th>Prénom</th>
                      <th>Email</th>
                      <th>Fonction</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee && employee.length > 0 ? (
                      employee.map((data) => (
                        <tr key={data.id}>
                          <td className="fw-semibold">{data.name}</td>
                          <td>{data.firstname}</td>
                          <td className="text-muted">{data.email}</td>
                          <td>
                            <span className="badge rounded-pill bg-primary-subtle text-primary-emphasis border border-primary-subtle">
                              {data.position || '—'}
                            </span>
                          </td>
                          <td className="text-end">
                            <div className="btn-group">
                              <Link to={`/update/${data.id}`} className="btn btn-sm btn-outline-primary">
                                Modifier
                              </Link>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDelete(data.id)}
                              >
                                Supprimer
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-5">
                          <div className="text-muted">
                            Aucun employé pour le moment.
                            <div className="mt-3">
                              <Link to="/create" className="btn btn-primary shadow-sm">
                                Ajouter le premier employé
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="text-center text-muted small mt-3">
            © {new Date().getFullYear()} Agence digitale
          </p>
        </div>
      </div>
    </div>
  </div>
);

}

export default Employee;
