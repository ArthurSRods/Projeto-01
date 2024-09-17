import React from 'react'

const ListaProfessores = () => {
    const professores = [
        {nome:'Luiz',
         sobrenome:'Farias',
         matricula:'12125'},
        {nome:'Lucas',
         sobrenome:'Freitas',
         matricula:'12126'},
        {nome:'Andressa',
         sobrenome:'Gomes',
         matricula:'12127'},
        {nome:'Carlos',
         sobrenome:'Rodrigues',
         matricula:'12128'},
        {nome:'Mauricio',
         sobrenome:'Klink',
         matricula:'12129'},
    ]
    
    const professoresOrdenados = professores.sort((a,b) => a.nome.localeCompare(b.nome));
  return (
    <section className='container'>
    <div>
        <h1>Lista de Professores</h1>
        <p>{professoresOrdenados.map((professor)=>(
            <p key={professor.matricula}>
            Nome: {professor.nome} {professor.sobrenome}, Matricula: {professor.matricula}
            </p>
        )
        )}</p>
        
    </div>
    </section>
  )
};

export default ListaProfessores;