import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';


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
  <div
    className="min-vh-100 d-flex align-items-start justify-content-center py-5"
    style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e3eeff 100%)' }}
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xl-7">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            {/* Header */}
            <div
              className="p-4 p-md-5 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between"
              style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)', color: '#fff' }}
            >
              <div>
                <h1 className="h3 fw-bold mb-1">Ajouter un employé</h1>
                <p className="mb-0 opacity-75">Renseignez les informations ci-dessous.</p>
              </div>
              <Link to="/" className="btn btn-light fw-semibold mt-3 mt-md-0 shadow-sm">
                ← Retour à la liste
              </Link>
            </div>

            {/* Body */}
            <div className="p-4 p-md-5">
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label htmlFor="lastname" className="form-label">Nom</label>
                    <div className="input-group">
                      <span className="input-group-text">👤</span>
                      <input
                        id="lastname"
                        type="text"
                        className="form-control"
                        placeholder="Dupont"
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="family-name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="firstname" className="form-label">Prénom</label>
                    <div className="input-group">
                      <span className="input-group-text">👤</span>
                      <input
                        id="firstname"
                        type="text"
                        className="form-control"
                        placeholder="Marie"
                        onChange={(e) => setFirstname(e.target.value)}
                        autoComplete="given-name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group">
                      <span className="input-group-text">@</span>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="marie.dupont@exemple.com"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="position" className="form-label">Fonction</label>
                    <div className="input-group">
                      <span className="input-group-text">💼</span>
                      <input
                        id="position"
                        type="text"
                        className="form-control"
                        placeholder="Chef de projet"
                        onChange={(e) => setPosition(e.target.value)}
                        autoComplete="organization-title"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-2 justify-content-end mt-4">
                  <Link to="/" className="btn btn-outline-secondary">Annuler</Link>
                  <button type="submit" className="btn btn-primary shadow-sm">Enregistrer</button>
                </div>
              </form>
            </div>
          </div>

          <p className="text-center text-muted small mt-3">
            © {new Date().getFullYear()} Agence Digitale
          </p>
        </div>
      </div>
    </div>
  </div>
);


}

export default CreateEmployee
