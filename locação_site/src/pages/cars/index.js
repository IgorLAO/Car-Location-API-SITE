import './index.scss';
import LateralMenu from '../components/menuComponent/menu';
import AccountBar from '../components/accountBar/accountBar';
import axios from 'axios'
import { useEffect, useRef, useState } from 'react';

export default function CarsControl() {
    const [listTypes, setListTypes] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const FetchListTypes = async () => {
        try {
            let resp = await axios.get('http://localhost:5000/veiculos/tipos')
            setListTypes(resp.data)
            console.log(resp)

        } catch (err) {
            console.log(err)
        }

    }

    const FetchListVehicles = () =>{
        
    } 

    useEffect(() =>{
        FetchListTypes
    });

    return (
        <div className='CarsMain'>
            <LateralMenu />
            <div className='CarContent'>
                <AccountBar />
                <main>
                    <div className='Title'>
                        <h4>ÁREA ADMINISTRATIVA</h4>
                        <h1>Controle de Clientes</h1>
                    </div>

                    <section className='newCar'>
                        <h1> Novo Veículo </h1>
                        <span >
                            <label>Nome</label>
                            <select id="veiculo" name="veiculo">
                                <option> Selecione </option>
                                {listTypes.map(item =>
                                    <option> {item.Tipo} </option>
                                )}
                            </select>
                        </span>

                        <span >
                            <label>Modelo</label>
                            <input type='text' />
                        </span>

                        <span >
                            <label>Marca</label>
                            <input type='text' />
                        </span>

                        <span >
                            <label>Ano</label>
                            <input type='text' />
                        </span>

                        <span >
                            <label>Placa</label>
                            <input type='text' />
                        </span>

                        <span className='btnSpan'>
                            <button> Salvar </button>
                        </span>

                    </section>

                    <section className='CarsList'>
                        <h1>Lista de Veículos</h1>
                        <span >
                            <label>Modelo, Marca, Placa</label>
                            <div className=''  >
                                <input type='text' />
                                <i class="fa-light fa-magnifying-glass"></i>
                            </div>
                        </span>
                        <table>
                            <colgroup>
                                <col style={{ width: 30 + '%' }} />
                                <col style={{ width: 15 + '%' }} />
                                <col style={{ width: 12 + '%' }} />
                                <col style={{ width: 12 + '%' }} />
                                <col style={{ width: 20 + '%' }} />
                            </colgroup>
                            <thead>
                                <tr>

                                    <th>Modelo</th>
                                    <th>Marca</th>
                                    <th>Ano</th>
                                    <th>Tipo</th>
                                    <th>placa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HB20</td>
                                    <td>Hyunday</td>
                                    <td>2016</td>
                                    <td>Carro</td>
                                    <td>abc-123</td>
                                    <td className='btns' style={{ display: 'flex', height: 20 }}><i class="fa-regular fa-pen-to-square"></i> <i class="fa-solid fa-delete-left"></i></td>
                                </tr>
                                <tr>
                                    <td>Prius</td>
                                    <td>Toyota</td>
                                    <td>2020</td>
                                    <td>carro</td>
                                    <td>abc-545</td>
                                    <td className='btns' style={{ display: 'flex', height: 20 }}><i class="fa-regular fa-pen-to-square"></i> <i class="fa-solid fa-delete-left"></i></td>
                                </tr>
                            </tbody>
                        </table>

                    </section>

                </main>

            </div>
        </div>
    );
}