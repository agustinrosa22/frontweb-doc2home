import React from 'react';
import styles from './home.module.css';

const Home = () => {
  const doctorsData = [
    { id: 1, firstName: 'John', lastName: 'Smith', specialty: 'Cardiologo', price: '$100.00' },
    { id: 2, firstName: 'Alice', lastName: 'Johnson', specialty: 'Dermatologo', price: '$90.00' },
    { id: 3, firstName: 'David', lastName: 'Brown', specialty: 'Neurologo', price: '$120.00' },
    { id: 4, firstName: 'Emily', lastName: 'Davis', specialty: 'Pediatra', price: '$80.00' },
    { id: 5, firstName: 'James', lastName: 'Wilson', specialty: 'Orthopedia', price: '$110.00' },
    { id: 6, firstName: 'Emma', lastName: 'Martinez', specialty: 'Psquiatra', price: '$95.00' },
    { id: 7, firstName: 'Michael', lastName: 'Taylor', specialty: 'Ophthalmology', price: '$105.00' },
    { id: 8, firstName: 'Olivia', lastName: 'Clark', specialty: 'Ginecologa', price: '$85.00' },
  ];

  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to the Doc2Home</h1>
      <p>This is the content of your home page.</p>

      <div className={styles.doctorsContainer}>
        {doctorsData.map(doctor => (
          <div key={doctor.id} className={styles.card}>
            <h2>{doctor.firstName} {doctor.lastName}</h2>
            <p>Especialidad: {doctor.specialty}</p>
            <p>Presio por Consulta: {doctor.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;