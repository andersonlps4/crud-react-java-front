import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  //objeto aluno
  const alunos = {
    //ciAluno : 0,
    nmAluno : '',
    nrCpf : '',
    dtNascimento: '',
    sexo : '',
    nmMae : '',
    nrCpfMae : '',
    flAtivo : '',
    nrRm : ''
  }


  //useState

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [aluno, setAluno] = useState([]); // nome da tabela do back
  const [objAlunos, setObjAlunos] = useState(alunos); // referência ao produto

  //useEffect
  useEffect(() =>{
    fetch("http://localhost:8080/aluno")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAluno(retorno_convertido))
  }, []);

  // obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjAlunos({...objAlunos, [e.target.name]:e.target.value})
  }

  // cadastrar aluno
  const cadastrar = () => {
    fetch ("http://localhost:8080/aluno", {
      method:"post",
      body:JSON.stringify(objAlunos),
      headers:{
        "Content-type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setAluno([...aluno, retorno_convertido]);
        alert("Aluno cadastrado!");

        // limpar formulário
        limparFormulario();
      }
    })
  }

  // alterar aluno
  const alterar = () => {
    fetch ("http://localhost:8080/aluno/"+ objAlunos.ciAluno, {
      method:"put",
      body:JSON.stringify(objAlunos),
      headers:{
        "Content-type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{

        // mensagem
        alert("Aluno alterado!");
        
        // Cópia do vetor de aluno
      let vetorTemp = [...aluno];

      // Índice
      let indice = vetorTemp.findIndex((a) =>{
        return a.ciAluno === objAlunos.ciAluno;
      });

      // alterar aluno do vetorTemp
      vetorTemp[indice]=objAlunos;

      // Atualizar o vetor de produtos
      setAluno(vetorTemp);

      // limpar formulário
      limparFormulario();
    }
    })
  }
  // remover aluno
  const remover = () => {
    fetch ("http://localhost:8080/aluno/" + objAlunos.ciAluno, {
      method:"delete",
      headers:{
        "Content-type":"application/json",
        "Accept":"application/json"
      } 
    })
    /* .then(retorno => retorno.json()) */
    .then(retorno_convertido => {
     console.log(retorno_convertido);

      // mensagem
      alert("DELETADOOOO!!!!");
      
      // Cópia do vetor de aluno
      let vetorTemp = [...aluno];

      // Índice
      let indice = vetorTemp.findIndex((a) =>{
        return a.ciAluno === objAlunos.ciAluno;
      });

      // Remover aluno do vetorTemp
      vetorTemp.splice(indice, 1);

      // Atualizar o vetor de produtos
      setAluno(vetorTemp);

      // Limpar formulário
      limparFormulario();


    })
  }

  // Limpar formulário
  const limparFormulario = () => {
    setObjAlunos(alunos);
    setBtnCadastrar(true)
  }


  // Selecionar Aluno
  const selecionarAluno = (indice) => {
    setObjAlunos(aluno[indice]);
    setBtnCadastrar(false);
  }

  //Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado = {aoDigitar} cadastrar={cadastrar} obj = {objAlunos} cancelar={limparFormulario} remover={remover} alterar={alterar}/>
      <Tabela vetor={aluno} selecionar ={selecionarAluno}/>
    </div>
  );
}

export default App;
