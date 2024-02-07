import React, { useState } from 'react';
import styles from './register.module.css'; // Importar los estilos CSS
import RegisterImage from '../../assets/aadoc_1.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí se puede agregar la lógica para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <div className={styles.registrationContainer}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">Nombre:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Teléfono:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <button type="submit" className={styles.submitButton}>Registrarse</button>
      </form>
      <img src={RegisterImage} alt="Registro" className={styles.registrationImage}/>
    </div>
  );
}

export default Register;
