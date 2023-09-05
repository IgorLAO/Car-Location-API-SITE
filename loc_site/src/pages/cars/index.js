import './index.scss';
import LateralMenu from '../components/menuComponent/menu';
import AccountBar from '../components/accountBar/accountBar';
import axios from 'axios'
import { useEffect, useRef, useState } from 'react';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function CarsControl() {
    const [listTypes, setListTypes] = useState([]);
    const [listVehicles, setListVehicles] = useState([]);

    const [searchItem, setSearchItem] = useState('');

    const [Modelo, setModel] = useState('');
    const [Ano, setYear] = useState(0);
    const [Marca, setBrand] = useState('');
    const [Placa, setPlate] = useState('');
    const [idTipo, setIdType] = useState(0);


    const [errMessage, setErrMessage] = useState('');

    // ----------------------------------------------------------

    const getVehiclesData = async () => {
        try {
            let url = `http://localhost:5000/veiculo?search=${searchItem}`
            let resp = await axios.get(url);
            setListVehicles(resp.data);

            console.log(url)

        } catch (err) {
            setErrMessage({ Error: err.mesage });
        }
    };


    const PostVehiclesData = async () => {
        const Vdata = {
            idTipo: idTipo,
            Modelo: Modelo,
            Marca: Marca,
            Ano: Ano,
            Placa: Placa
        };

        let res = await axios.post('http://localhost:5000/veiculos', Vdata);
        getVehiclesData();

    };

    const getTypesData = async () => {
        try {
            let resp = await axios.get('http://localhost:5000/veiculos/tipos');
            setListTypes(resp.data);
            console.log(resp);

        } catch (err) {
            setErrMessage({ Error: err.mesage });
        }
    };
    
    const Delete = (id) => {
        const res = axios.delete(`http://localhost:5000/veiculos/${id}`);
    }



    useEffect(() => {
        getTypesData();
        getVehiclesData();
    }, [searchItem]);

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
                            <select id="veiculo" name="veiculo" onChange={e => setIdType(e.target.value)}>
                                <option> Selecione </option>
                                {listTypes.map(item =>
                                    <option value={item.ID_TIPO}> {item.Tipo} </option>
                                )}
                            </select>
                        </span>

                        <span >
                            <label>Modelo</label>
                            <input type='text' onChange={e => setModel(e.target.value)} />
                        </span>

                        <span >
                            <label>Marca</label>
                            <input type='text' onChange={e => setBrand(e.target.value)} />
                        </span>

                        <span >
                            <label>Ano</label>
                            <input type='text' onChange={e => setYear(e.target.value)} />
                        </span>

                        <span >
                            <label>Placa</label>
                            <input type='text' onChange={e => setPlate(e.target.value)} />
                        </span>

                        <span className='btnSpan'>
                            <button onClick={PostVehiclesData}> Salvar </button>
                        </span>

                    </section>

                    <section className='CarsList'>
                        <h1>Lista de Veículos</h1>
                        <span >
                            <label>Modelo, Marca, Placa</label>
                            <div>
                                <input type='text' value={searchItem} onChange={e => setSearchItem(e.target.value)} />
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
                                    <th>placa</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listVehicles.map((item, index) =>
                                    <tr key={index}>
                                        <td> {item.Modelo} </td>
                                        <td> {item.Marca} </td>
                                        <td> {item.Ano} </td>
                                        <td> {item.Tipo} </td>
                                        <td> {item.Placa} </td>
                                        <td className='btns' style={{ display: 'flex', height: 20 }}><i class="fa-regular fa-pen-to-square"></i>
                                        <i class="fa-solid fa-delete-left" onClick={Delete(item.id)}></i></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </section>

                </main>

            </div>
        </div>
    );
}