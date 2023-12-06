'use client'
import React from 'react';

const ItemAvaliacao = ({ avaliacao, cliente, profissional }) => {
    cliente = cliente || {};
    profissional = profissional || {};
    return (
        <div className="item-avaliacao">
            <h2>Avaliação ID: {avaliacao.id}</h2>
            <p>Cliente: {cliente.nome}</p>
            <p>Profissional: {profissional.nome}</p>
			<p>Comentario: {avaliacao.comentario}</p>
            {/* Outras informações da avaliação */}
        </div>
    );
}

export default ItemAvaliacao;
