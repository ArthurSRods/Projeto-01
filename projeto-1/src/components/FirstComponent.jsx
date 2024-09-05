import React from 'react'

const FirstComponent = () => {
  const nome = 'Arthur';
  const sobrenome = 'Rodrigues';
  return (
    <div className='componente1'>Seu nome completo é {nome} {sobrenome}</div>
  );
}

export default FirstComponent