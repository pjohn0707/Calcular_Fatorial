import React, { useState, useMemo } from 'react';

function CalculadoraFatorial() {
    // Estado para armazenar o número cujo fatorial será calculado
    const [numero, setNumero] = useState(1);

    // Função para calcular o fatorial de um número
    const calcularFatorial = (n) => {
        if (n <= 1) return 1;
        return n * calcularFatorial(n - 1);
    };

    // Memorização do resultado do fatorial utilizando useMemo
    const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

    return (
        <div className="CalculadoraFatorial">
            <header className="CalculadoraFatorial-header">
                <h1>Calculadora de Fatorial</h1>
                <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
                <p>Fatorial de {numero} é {fatorial}</p>
            </header>
        </div>
    );
}

export default CalculadoraFatorial;
