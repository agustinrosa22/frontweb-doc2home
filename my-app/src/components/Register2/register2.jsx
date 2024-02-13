import React, { useState } from 'react';
import styleRegister from './register2.module.css';
import googleIcon from '../../assets/googleplus.png'; // Importa la imagen de Google
import facebookIcon from '../../assets/facebook.png'; // Importa la imagen de Facebook

const Register2 = () => {
  const [activeTab, setActiveTab] = useState('login');


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styleRegister.authtabs}>

      <div className={styleRegister.tab_buttons}>
        <a
          href="#login"
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => handleTabChange('login')}
        >
          Ingresar
        </a>


        <a
          href="#register"
          className={activeTab === 'register' ? 'active' : ''}
          onClick={() => handleTabChange('register')}
        >
          Registrar
        </a>
      </div>

      <div className={styleRegister.tab_content}>
        {activeTab === 'login' && (
          <form className={styleRegister.login_form}>

            <label htmlFor="login-username">Usuario:</label>
            <input type="text" id="login-username" placeholder="Username" />
            <label htmlFor="login-password">Contraseña:</label>
            <input type="password" id="login-password" placeholder="Password" />
            <button type="submit">Ingresar</button>

            <div className={styleRegister.oauth_buttons}>
              <img src={googleIcon} alt="Google" onClick={() => console.log('Google login')} />
              <img src={facebookIcon} alt="Facebook" onClick={() => console.log('Facebook login')} />
            </div>
          </form>
        )}
        {activeTab === 'register' && (
          <form className={styleRegister.register_form}>

            <label htmlFor="register-firstname">Nombre:</label>
            <input type="text" id="register-firstname" placeholder="First Name" />
            <label htmlFor="register-lastname">Apellido:</label>
            <input type="text" id="register-lastname" placeholder="Last Name" />
            <label htmlFor="register-phone">Télefono:</label>
            <input type="text" id="register-phone" placeholder="Phone Number" />
            <label htmlFor="register-referral">Código de referencia:</label>
            <input type="text" id="register-referral" placeholder="Referral Code" />
            <button type="submit">Registrar</button>

            <div className={styleRegister.oauth_buttons}>
              <img src={googleIcon} alt="Google" onClick={() => console.log('Google login')} />
              <img src={facebookIcon} alt="Facebook" onClick={() => console.log('Facebook login')} />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register2;
