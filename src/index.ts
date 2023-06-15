import * as readlineSync from 'readline-sync'
import Goleiro from './Classes/Jogadores/Goleiro'
import Elenco from './Classes/Elenco'
import Atacante from './Classes/Jogadores/Atacante'
import Lateral from './Classes/Jogadores/Lateral'
import Meia from './Classes/Jogadores/Meia'
import Volante from './Classes/Jogadores/Volante'
import Zagueiro from './Classes/Jogadores/Zagueiro'
import AnalistaDesempenho from './Classes/Profissionais/AnalistaDesempenho'
import AssistenteTecnico from './Classes/Profissionais/AssistenteTecnico'
import Fisioterapeuta from './Classes/Profissionais/Fisioterapeuta'
import Medico from './Classes/Profissionais/Medico'
import Nutricionista from './Classes/Profissionais/Nutricionista'
import Tecnico from './Classes/Profissionais/Técnico'

console.log('Vamos cadastrar uma comitiva de time de futebol!\n\n')

let elenco = new Elenco()

console.log('A seguir, as opções de cadastro de jogadores e profissionais do elenco: \n\n')

let paradaPrincipal = false

while (paradaPrincipal === false) {
	let escolhaPrincipal = parseInt(
		readlineSync.question(
			'0 - Finalizar\n1 - Jogadores\n2 - Profissionais\n3 - Mostrar Elenco\n\nEscolha: '
		)
	)

	if (escolhaPrincipal === 0) {
		secaoFinalizar()
	} else if (escolhaPrincipal === 1) {
		secaoJogador()
	} else if (escolhaPrincipal === 2) {
		secaoProfissional()
	} else if (escolhaPrincipal === 3) {
		mostrarElenco()
	}
}

function minimoSolicitado() {
	// Jogadores
	let goleirosValido = Goleiro.MINIMO <= Goleiro.numIntancias
	let atacantesValido = Atacante.MINIMO <= Atacante.numIntancias
	let lateraisValido = Lateral.MINIMO <= Lateral.numIntancias
	let meiasValido = Meia.MINIMO <= Meia.numIntancias
	let volantesValido = Volante.MINIMO <= Volante.numIntancias
	let zagueirosValido = Zagueiro.MINIMO <= Zagueiro.numIntancias

	//Profissionais
	let analistaValido = AnalistaDesempenho.MINIMO <= AnalistaDesempenho.numIntancias
	let assistenteValido = AssistenteTecnico.MINIMO <= Goleiro.numIntancias
	let fisioterapeutaValido = Fisioterapeuta.MINIMO <= Fisioterapeuta.numIntancias
	let medicoValido = Medico.MINIMO <= Medico.numIntancias
	let nutricionistaValido = Nutricionista.MINIMO <= Nutricionista.numIntancias
	let tecnicoValido = Tecnico.MINIMO <= Tecnico.numIntancias

	let elencoValido =
		goleirosValido &&
		atacantesValido &&
		lateraisValido &&
		meiasValido &&
		volantesValido &&
		zagueirosValido &&
		analistaValido &&
		assistenteValido &&
		fisioterapeutaValido &&
		medicoValido &&
		nutricionistaValido &&
		tecnicoValido

	return elencoValido
}

function mostraFalta() {
	let goleiros = Goleiro.MINIMO - Goleiro.numIntancias
	let atacantes = Atacante.MINIMO - Atacante.numIntancias
	let laterais = Lateral.MINIMO - Lateral.numIntancias
	let meias = Meia.MINIMO - Meia.numIntancias
	let volantes = Volante.MINIMO - Volante.numIntancias
	let zagueiros = Zagueiro.MINIMO - Zagueiro.numIntancias

	if (goleiros > 0) {
		console.log(`Falta pelo menos ${goleiros} Goleiro(s)`)
	}

	if (atacantes > 0) {
		console.log(`Falta pelo menos ${atacantes} Atacante(s)`)
	}

	if (laterais > 0) {
		console.log(`Falta pelo menos ${laterais} Lateral(is)`)
	}

	if (meias > 0) {
		console.log(`Falta pelo menos ${meias} Meia(s)`)
	}

	if (volantes > 0) {
		console.log(`Falta pelo menos ${volantes} Volante(s)`)
	}

	if (zagueiros > 0) {
		console.log(`Falta pelo menos ${zagueiros} Zagueiro(s)`)
	}

	let analistas = AnalistaDesempenho.MINIMO - AnalistaDesempenho.numIntancias
	let assistentes = AssistenteTecnico.MINIMO - AssistenteTecnico.numIntancias
	let fisioterapeutas = Fisioterapeuta.MINIMO - Fisioterapeuta.numIntancias
	let medicos = Medico.MINIMO - Medico.numIntancias
	let nutricionistas = Nutricionista.MINIMO - Nutricionista.numIntancias
	let tecnicos = Tecnico.MINIMO - Tecnico.numIntancias

	if (analistas > 0) {
		console.log(`Falta pelo menos ${analistas} Analista de Desempenho`)
	}

	if (assistentes > 0) {
		console.log(`Falta pelo menos ${assistentes} Assistente Técnico(`)
	}

	if (fisioterapeutas > 0) {
		console.log(`Falta pelo menos ${fisioterapeutas} Fisioterapeuta(s)`)
	}

	if (medicos > 0) {
		console.log(`Falta pelo menos ${medicos} Médico(s)`)
	}

	if (nutricionistas > 0) {
		console.log(`Falta pelo menos ${nutricionistas} Nutricionista`)
	}

	if (tecnicos > 0) {
		console.log(`Falta pelo menos ${tecnicos} Técnico`)
	}

	console.log('\n')
}

function cadastrarJogador() {
	let escolhaTipoJogador = parseInt(
		readlineSync.question('Insira o numero do menu referente ao jogador para cadastrar ele: ')
	)

	console.log('')

	switch (escolhaTipoJogador) {
		case 1:
			console.log('Cadastrando Goleiro...\n')

			let goleiro: Goleiro = new Goleiro(Goleiro.insertJogador())

			if (Goleiro.numTentativas <= Goleiro.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = goleiro
			}
			break
		case 2:
			console.log('Cadastrando Atacante...\n')

			let atacante: Atacante = new Atacante(Atacante.insertJogador())

			if (Atacante.numTentativas <= Atacante.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = atacante
			}
			break

		case 3:
			console.log('Cadastrando Lateral...\n')

			let lateral: Lateral = new Lateral(Lateral.insertJogador())

			if (Lateral.numTentativas <= Lateral.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = lateral
			}
			break

		case 4:
			console.log('Cadastrando Meia...\n')

			let meia: Meia = new Meia(Meia.insertJogador())

			if (Meia.numTentativas <= Meia.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = meia
			}
			break

		case 5:
			console.log('Cadastrando Volante...\n')

			let volante: Volante = new Volante(Volante.insertJogador())

			if (Volante.numTentativas <= Volante.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = volante
			}
			break

		case 6:
			console.log('Cadastrando Zagueiro...\n')

			let zagueiro: Zagueiro = new Zagueiro(Zagueiro.insertJogador())

			if (Zagueiro.numTentativas <= Zagueiro.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = zagueiro
			}
			break

		default:
			console.log('\nOpção inserida não é válida.\n')

			break
	}
}

function cadastrarProfissional() {
	let escolhaTipoProfissional = parseInt(
		readlineSync.question('Insira o numero do menu referente ao profissional para cadastrar ele: ')
	)

	console.log('')

	switch (escolhaTipoProfissional) {
		case 1:
			console.log('Cadastrando Analista de Desempenho...\n')

			let analista: AnalistaDesempenho = new AnalistaDesempenho(
				AnalistaDesempenho.insertProfissional()
			)

			if (AnalistaDesempenho.numTentativas <= AnalistaDesempenho.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = analista
			}
			break
		case 2:
			console.log('Cadastrando Assistente Técnico...\n')

			let assistente: AssistenteTecnico = new AssistenteTecnico(
				AssistenteTecnico.insertProfissional()
			)

			if (AssistenteTecnico.numTentativas <= AssistenteTecnico.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = assistente
			}
			break

		case 3:
			console.log('Cadastrando Fisioterapeuta...\n')

			let fisioterapeuta: Fisioterapeuta = new Fisioterapeuta(Fisioterapeuta.insertProfissional())

			if (Fisioterapeuta.numTentativas <= Fisioterapeuta.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = fisioterapeuta
			}
			break

		case 4:
			console.log('Cadastrando Médico...\n')

			let medico: Medico = new Medico(Medico.insertProfissional())

			if (Medico.numTentativas <= Medico.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = medico
			}
			break

		case 5:
			console.log('Cadastrando Nutricionista...\n')

			let nutricionista: Nutricionista = new Nutricionista(Nutricionista.insertProfissional())

			if (Nutricionista.numTentativas <= Nutricionista.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = nutricionista
			}
			break

		case 6:
			console.log('Cadastrando Técnico...\n')

			let tecnico: Tecnico = new Tecnico(Tecnico.insertProfissional())

			if (Tecnico.numTentativas <= Tecnico.LIMITE) {
				console.log('\nCadastro criado e adiciondo ao elenco.\n')

				elenco.lista = tecnico
			}
			break

		default:
			console.log('\nOpção inserida não é válida.\n')

			break
	}
}

function secaoFinalizar() {
	if (minimoSolicitado() === true) {
		console.log('Elenco cadastrado com sucesso.')
		paradaPrincipal = true
	} else {
		console.log('\nOs seguintes Jogadores/Profissionais não atingiram o mínimo solicitado: \n')
		mostraFalta()
	}
}

function secaoJogador() {
	menuJogador()

	let paradaJogador = false

	while (paradaJogador === false) {
		let escolhaJogador = parseInt(
			readlineSync.question(
				'\nEscolha: \n\n0 - Voltar\n1 - Mostrar Menu Jogadores\n2 - Cadastrar Jogador\n\nEscolha: '
			)
		)

		console.log('\n')

		if (escolhaJogador === 0) {
			paradaJogador = true
		} else if (escolhaJogador === 1) {
			menuJogador()
		} else if (escolhaJogador === 2) {
			cadastrarJogador()
		}
	}
}

function secaoProfissional() {
	menuProfissional()

	let paradaProfissional = false

	while (paradaProfissional === false) {
		let escolhaProfissional = parseInt(
			readlineSync.question(
				'\nEscolha: \n\n0 - Voltar\n1 - Mostrar Menu Profissionais\n2 - Cadastrar Profissional\n\nEscolha: '
			)
		)

		console.log('\n')

		if (escolhaProfissional === 0) {
			paradaProfissional = true
		} else if (escolhaProfissional === 1) {
			menuProfissional()
		} else if (escolhaProfissional === 2) {
			cadastrarProfissional()
		}
	}
}

function menuJogador() {
	console.log('Jogadores')
	console.log('1 - Goleiro')
	console.log('|-- Mínimo: 1')
	console.log('|__ Máximo: 2\n')

	console.log('2 - Atacante')
	console.log('|-- Mínimo: 3')
	console.log('|__ Máximo: 5\n')

	console.log('3 - Lateral')
	console.log('|-- Mínimo: 3')
	console.log('|__ Máximo: 6\n')

	console.log('4 - Meia')
	console.log('|-- Mínimo: 4')
	console.log('|__ Máximo: 6\n')

	console.log('5 - Volante')
	console.log('|-- Mínimo: 2')
	console.log('|__ Máximo: 4\n')

	console.log('6 - Zagueiro')
	console.log('|-- Mínimo: 3')
	console.log('|__ Máximo: 5\n')
}

function menuProfissional() {
	console.log('Profissinais')
	console.log('1 - Analista de Desempenho')
	console.log('|-- Mínimo: 1')
	console.log('|__ Máximo: 1\n')

	console.log('2 - Assistente Técnico')
	console.log('|-- Mínimo: 0')
	console.log('|__ Máximo: 1\n')

	console.log('3 - Fisioterapeuta')
	console.log('|-- Mínimo: 1')
	console.log('|__ Máximo: 2\n')

	console.log('4 - Médico')
	console.log('|-- Mínimo: 1')
	console.log('|__ Máximo: 3\n')

	console.log('5 - Nutricionista')
	console.log('|-- Mínimo: 0')
	console.log('|__ Máximo: 1\n')

	console.log('6 - Técnico')
	console.log('|-- Mínimo: 1')
	console.log('|__ Máximo: 1\n')
}

function mostrarElenco() {
	if (minimoSolicitado() === true) {
		console.log('Elenco está tudo OK!\n\n')

		console.log(elenco)
	} else {
		console.log('\nOs seguintes Jogadores/Profissionais não atingiram o mínimo solicitado: \n')
		mostraFalta()
	}
}
