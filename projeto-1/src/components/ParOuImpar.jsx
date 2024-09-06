import React, { useState } from 'react';

function ParOuImpar() {
  const [numeroJogador, setNumeroJogador] = useState('');
  const [escolha, setEscolha] = useState('');
  const [resultado, setResultado] = useState('');
  const [numeroComputador, setNumeroComputador] = useState(null);

  const handlePlay = () => {
    const playerNum = parseInt(numeroJogador, 10);
    if (isNaN(playerNum)) {
      setResultado('Por favor, insira um número válido.');
      return;
    }
    const compNum = Math.floor(Math.random() * 10) + 1; // Número aleatório de 1 a 10
    setNumeroComputador(compNum);
    const sum = playerNum + compNum;
    const isEven = sum % 2 === 0;
    const playerWins = (escolha === 'Par' && isEven) || (escolha === 'Ímpar' && !isEven);

    setResultado(playerWins ? 'Você ganhou!' : 'Você perdeu!');
  };

  return (
    <div className='par_ou_impar'>
      <h1>Jogo de Par ou Ímpar</h1>
      <input
        className='campo'
        type="number"
        value={numeroJogador}
        onChange={(e) => setNumeroJogador(e.target.value)}
        placeholder="Escolha um número"
      />
      <div>
        <button onClick={() => setEscolha('Par')}>Par</button>
        <button onClick={() => setEscolha('Ímpar')}>Ímpar</button>
      </div>
      <button onClick={handlePlay} disabled={!escolha || numeroJogador === ''}>
        Jogar
      </button>
      {resultado && (
        <div>
          <p>Você escolheu: {numeroJogador}</p>
          <p>O computador escolheu: {numeroComputador}</p>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default ParOuImpar;
