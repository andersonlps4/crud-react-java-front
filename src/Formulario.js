function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover,alterar}){
    return(
        <form>
            <label>Nome do aluno</label>
            <input type="text" value={obj.nmAluno} onChange={eventoTeclado} name="nmAluno"  className="form-control" />
            <label>Número do cpf do aluno</label>
            <input type="text" value={obj.nrCpf} onChange={eventoTeclado} name="nrCpf"  className="form-control" />
            <label>Data de nascimento do aluno</label>
            <input type="text" value={obj.dtNascimento} onChange={eventoTeclado} name="dtNascimento"  className="form-control" />
            <label>Sexo (F/M)</label>
            <input type="text" value={obj.sexo} onChange={eventoTeclado} name="sexo"  className="form-control" />
            <label>Nome da mãe</label>
            <input type="text" value={obj.nmMae} onChange={eventoTeclado} name="nmMae"  className="form-control" />
            <label>Cpf da mãe</label>
            <input type="text" value={obj.nrCpfMae} onChange={eventoTeclado} name="nrCpfMae"  className="form-control" />
            <label>Fl ativo (S/N)</label>
            <input type="text" value={obj.flAtivo} onChange={eventoTeclado} name="flAtivo"  className="form-control" />
            <label>Número do Registro</label>
            <input type="text" value={obj.nrRm} onChange={eventoTeclado} name="nrRm"  className="form-control" />
            

        {
            botao
            ?
            <input type='button' value="Cadastrar" onClick={cadastrar} className="btn btn-primary" />
            :
            <div>
                <input type='button' value="Alterar" onClick={alterar} className="btn btn-warning" />
                <input type='button' value="Remover" onClick = {remover} className="btn btn-danger" />
                <input type='button' value="Cancelar" onClick={cancelar} className="btn btn-secondary" /> 
            </div>
        }
            
            
        </form>
    )
}

export default Formulario;