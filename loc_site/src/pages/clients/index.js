import { useEffect, useRef, useState } from 'react';
import AccountBar from '../components/accountBar/accountBar';
import LateralMenu from '../components/menuComponent/menu';
import './index.scss';
import axios from 'axios';

export default function ClientsControl() {
  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [CPF, setCPF] = useState('');
  const [CNH, setCNH] = useState('');

  const [clientsList, setClientsList] = useState([]);

  const Insert = async () => {
    let infos = {
      Nome: Nome,
      Email: Email,
      Telefone: Telefone,
      CPF: CPF,
      CNH: CNH
    }
    
    let response = await axios.post('http://localhost:5000/cliente', infos);
  }

  const FetchData = async () => {
    let resp = await axios.get('http://localhost:5000/cliente');
      let data = resp.data
      
      setClientsList(data);
      console.log(data)
    }
    
    useEffect(() => {
    FetchData();

  });

  return (
    <div className="MainApp">
      <LateralMenu />
      <div className='inputs_Tables'>
        < AccountBar />
        <div className='content'>
          <div className='Title'>
            <h4>ÁREA ADMINISTRATIVA</h4>
            <h1>Controle de Clientes</h1>
          </div>

          <section className='newClient'>
            <h1> Novo Cliente </h1>
            <span >
              <label>Nome</label>
              <input type='text' onChange={(e) => setNome(e.target.value)} />
            </span>

            <span >
              <label>Email</label>
              <input type='text' onChange={(e) => setEmail(e.target.value)}/>
            </span>

            <span>
              <label>Telefone</label>
              <input type='text' onChange={(e) => setTelefone(e.target.value)}/>
            </span>

            <span>
              <label>CPF</label>
              <input type='text' onChange={(e) => setCPF(e.target.value)} />
            </span>

            <span>
              <label>CNH</label>
              <input type='text' onChange={(e) => setCNH(e.target.value)}/>
            </span>

            <span className='btnSpan'>
              <button onClick={Insert}> Salvar </button>
            </span>

          </section>

          <section className='ClientsList'>
            <h1>Lista de Clientes</h1>
            <span>
              <label>Nome</label>
              <input type='text' />
            </span>
            <table>
              <colgroup>
                <col style={{ width: 30 + '%' }} />
                <col style={{ width: 30 + '%' }} />
                <col style={{ width: 10 + '%' }} />
                <col style={{ width: 10 + '%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Telefone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {clientsList.map((item) => <>
                <tr>
                  <td>{item.Nome}</td>
                  <td> {item.Email} </td>
                  <td> {item.CPF} </td>
                  <td> {item.CNH} </td>
                  <td className='btns' style={{ display: 'flex', height: 20 }}><i class="fa-regular fa-pen-to-square"></i> <i class="fa-solid fa-delete-left"></i></td>
                </tr>
                </>
                  )}

              </tbody>
            </table>

          </section>

        </div>
      </div>
    </div >
  );
}
