// SurveyField contains logic to render a single
// label and text input
import React from 'react';

const inputStyle ={
marginBottom: '5px',
width: '30%',
height: '56px',
borderRadius: '4px',
position: 'relative',
backgroundColor: 'rgba(255, 255, 255, 0.3)',
transition: '0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out'
}
const labelText ={
  font: '50px "Oswald", sans-serif',
  color: 'blue',
  	letterSpacing: '0',
  	padding: '.25em 0 .325em',
	  display: 'block',
	  margin: '0 auto',
  	textShadow: '0 0 30px rgba(255,255,255,.5)'
}

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label style={labelText}>{label}</label>
      <input {...input} 
      style={inputStyle} />
      <div className="field" style={{ marginBottom: '20px', color:'blue' }}>
        {touched && error}
      </div>
    </div>
  );
};
