import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import {FiArrowLeft} from 'react-icons/fi';



export default function NewIncidente(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }
        try {
             await api.post('incidents', data, {
                headers:{
                    authorization: ongId,
                }
            })
            history.push('/profile');

        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente');
        }
    }

    return(
            <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso</p>
                    <Link className="black-link"to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para a home
                    </Link>
                </section>
                <form> 
                    <input 
                        placeholder="Titulo do caso "
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    <input onClick={handleNewIncident}className="button"type="submit" value="Cadastrar"/>
                </form>
            </div>
        </div>
    );
}