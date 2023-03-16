const valor = document.querySelectorAll('[data-valor]');
let output = document.querySelector('[data-display2');
let operacao = 0;
let aux = 0; //auxiliar para escolher entre o valor1 e valor2
let aux2 = 0; //auxiliar para não repetir e não trocar de operação
let valor1 = 0;
let valor2 = 0;
let opcao = 0; //salva a operacao escolhida pelo usuário
let resultado = 0;

//mapeamento de funcoes das 17 teclas da calculadora

valor.forEach((element) => {
	element.addEventListener('click', (evento) => {
		operacao = evento.target.innerText;
		if (
			operacao === 'C' ||
			operacao === '1' ||
			operacao === '2' ||
			operacao === '3' ||
			operacao === '4' ||
			operacao === '5' ||
			operacao === '6' ||
			operacao === '7' ||
			operacao === '8' ||
			operacao === '9' ||
			operacao === '0' ||
			operacao === '.'
		) {
			atualizaDisplay(operacao);
		} else if (
			operacao === '+' ||
			operacao === '-' ||
			operacao === '/' ||
			operacao === '*'
		) {
			selecionaOperacao();
		} else if (operacao === '=') {
			mostraResultado();
		}
	});
});

//funcão de atualizar o display, tanto reset como mostrar numeros

function atualizaDisplay(operacao) {
	if (aux === 0) {
		valor1 = valor1 + operacao;
	} else {
		valor2 = valor2 + operacao;
	}

	if (operacao === 'C') {
		output.textContent = '0';
		valor1 = 0;
		valor2 = 0;
		aux = 0;
		aux2 = 0;
		opcao = 0;
	} else {
		if (output.textContent === '0') {
			output.textContent = operacao;
		} else {
			output.textContent = output.textContent + operacao;
		}
	}
}

//funcao que salva a operacao escolhida e mostra no display

function selecionaOperacao() {
	aux++;
	if (aux2 === 0) {
		output.textContent = output.textContent + ` ${operacao} `;
		if (operacao === '+') {
			opcao = operacao;
		}
		if (operacao === '-') {
			opcao = operacao;
		}
		if (operacao === '*') {
			opcao = operacao;
		}
		if (operacao === '/') {
			opcao = operacao;
		}
	}
	aux2++;
}

//funcao que realiza as contas e mostra o resultado no display

function mostraResultado() {
	if (opcao === '+') {
		resultado = parseFloat(valor1) + parseFloat(valor2);
	}
	if (opcao === '-') {
		resultado = parseFloat(valor1) - parseFloat(valor2);
	}
	if (opcao === '/') {
		if (valor2 == 0) {
			resultado = 'Erro';
		} else {
			resultado = parseFloat(valor1) / parseFloat(valor2);
		}
	}
	if (opcao === '*') {
		resultado = parseFloat(valor1) * parseFloat(valor2);
	}

	output.textContent = output.textContent + ` = ${resultado}`;
}
