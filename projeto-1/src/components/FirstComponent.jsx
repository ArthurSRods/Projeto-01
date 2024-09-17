import React from 'react'

const FirstComponent = () => {
  const nome = 'Arthur';
  const sobrenome = 'Rodrigues';
  return (
    <div className='container'>Seu nome completo é {nome} {sobrenome}</div>
  );
}

export default FirstComponent