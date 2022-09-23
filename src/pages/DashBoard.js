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
                </div>
                <div className="Classif">
                    <h2>Classificação</h2>
                    <Table items={data} />
                </div>
            </div>
        </>
    )
}
