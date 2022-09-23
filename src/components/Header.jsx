import React from 'react';
import './style.css';
import { Api } from '../services/api';
import { useState, useEffect } from 'react';


export default function Header() {

  const [setData] = useState([]);
  useEffect(() => {
    getApi();
  },);

  async function getApi() {
    const NewArray = await Api();
    setData(NewArray);
  }

  return (
    <div>
      <header>
        <div className="titulo">
            ZumbiDead - Chore ou sorria pelo seu Rank!
        </div>
        <div className="graf3">
          <button onClick={() => getApi()} className="btn-att"><span>Atualizar</span></button>
          <button
            href="https://zumbidead.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-play">
            <span>Jogar</span>
          </button>
        </div>
      </header>
    </div>
  );
}