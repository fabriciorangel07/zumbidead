import React, { useEffect } from 'react';
import './style.css';

const Tabelas = props => {
    const arrayItem = props.items;

    useEffect(() => {
        getLlinhas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getLlinhas() {
        const sorted = arrayItem
        sorted.sort((a, b) => {
            return b.point - a.point;
        })
        // eslint-disable-next-line array-callback-return
        return sorted.map((item, i) => {
            if (i < 5) {
                return (
                    <>
                        <tr className={i % 2 === 0 ? "par" : "impar"} key={i}>
                            <td> {item.name.toUpperCase()} </td>
                            <td className="tbright"> {item.point} pts </td>
                        </tr>
                    </>
                )
            }
        })

    }


    return (
        <div className="tabela">
            <table>
                <thead>
                    <tr>
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