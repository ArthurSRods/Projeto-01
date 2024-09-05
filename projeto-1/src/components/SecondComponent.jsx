import React from 'react'

const SecondComponent = () => {
    const alunos = [
        {
            nome: 'Arthur',
            sobrenome: 'Rodrigues',
            matricula: 2324290068
        },
        {
            nome: 'Carlos',
            sobrenome: 'Santos',
            matricula: 2324290069
        },
        {
            nome: 'Roberta',
            sobrenome: 'Soares',
            matricula: 2324290062
        },
        {
            nome: 'Carla',
            sobrenome: 'Teles',
            matricula: 2324290078
        },
        {
            nome: 'Andre',
            sobrenome: 'Souza',
            matricula: 2324290077
        },
        {
            nome: 'Vania',
            sobrenome: 'Chagas',
            matricula: 2324290067
        },
    ]
    
    const alunosOrdenados = alunos.sort((a,b) => a.nome.localeCompare(b.nome));

  return (
    <section className='lista_alunos'>
    <div>
        <h1>Lista de Alunos</h1>
        <p>{alunosOrdenados.map((aluno)=>(
            <p key={aluno.matricula}>
            Nome: {aluno.nome} {aluno.sobrenome}, Matricula: {aluno.matricula}
            </p>
        )
        )}</p>
        
    </div>
    </section>
  )
}

export default SecondComponent