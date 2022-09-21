import React, { useState, useEffect } from 'react';
import './style.css';
import Table from '../components/Table';
import MiniTable from '../components/MiniTable';
import { Api } from '../services/api';

export default function Dash() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getApi();
    }, []);

    async function getApi() {
        const NewArray = await Api();
        setData(NewArray);
    }

    return (
        <>
            <div className="main">
                <div className="graf1">
                    <div className="graf2">
                        <h2>Tops Players</h2>
                        <MiniTable items={data} />
                    </div>
                    <div className="graf3">
                        <button onClick={() => getApi()} className="btn"><span>Atualizar</span></button>
                        <a
                            href="https://zumbidead.azurewebsites.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn1">
                            <span>Jogar</span>
                        </a>
                    </div>
                </div>
                <div className="Classif">
                    <h2>Classificação</h2>
                    <Table items={data} />
                </div>
            </div>
        </>
    )
}
