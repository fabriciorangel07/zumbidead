import React from 'react';
import './style.css';

const Tabelas = props => {
    let arrayItem = [];
    function getLlinhas() {
        arrayItem = props.items;

        arrayItem.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
        return arrayItem.map((item, i) => {
            return (
                <tr className={i % 2 === 0 ? "par" : "impar"} key={i}>
                    <td className="tbCenter"> {i + 1} </td>
                    <td>{item.name} </td>
                    <td className="tbright"> {item.point} pontos </td>
                </tr>
            )
        })
    }

    return (
        <div className="tabela">
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Nome</th>
                        <th>Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    {getLlinhas()}
                </tbody>
            </table>
        </div>
    )
}

export default Tabelas;