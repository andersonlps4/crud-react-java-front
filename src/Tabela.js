function Tabela({vetor, selecionar}){
    return(
       <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome do aluno</th>
                    <th>Cpf do aluno</th>
                    <th>Data de nascimento</th>
                    <th>Sexo</th>
                    <th>Nome da mãe</th>
                    <th>Cpf da mãe</th>
                    <th>Fl ativo</th>
                    <th>Registro da matricula</th>
                </tr>
            </thead>
            <tbody>
                {
                   vetor.map((obj, indice) => (
                     <tr key={indice}>
                        <td>{indice+1}</td>
                        <td>{obj.nmAluno}</td>
                        <td>{obj.nrCpf}</td>
                        <td>{obj.dtNascimento}</td>
                        <td>{obj.sexo}</td>
                        <td>{obj.nmMae}</td>
                        <td>{obj.nrCpfMae}</td>
                        <td>{obj.flAtivo}</td>
                        <td>{obj.nrRm}</td>
                        <td><button onClick={() =>{selecionar(indice)}} className ="btn btn-success">Selecionar</button></td>
                     </tr>
                   )) 
                }
            </tbody>
       </table> 
    )
}

export default Tabela;