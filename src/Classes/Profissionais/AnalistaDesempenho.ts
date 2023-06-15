import * as readlineSync from 'readline-sync'

import IAnalistaDesempenho from '../../Interfaces/IAnalistaDesempenho'

import Profissional from './Profissional'

export default class AnalistaDesempenho extends Profissional {
	public static numIntancias: number = 0
	public static numTentativas: number = 0
	public static readonly MINIMO: number = 1
	public static readonly LIMITE: number = 1

	public _softwareAnalise: string
	public _habilidadesAnaliticas: Array<string>

	constructor(profissional: IAnalistaDesempenho) {
		super(
			profissional._nome,
			profissional._idade,
			profissional._peso,
			profissional._altura,
			profissional._salario,
			profissional._cargo,
			profissional._formacao
		)
		this._softwareAnalise = profissional._softwareAnalise
		this._habilidadesAnaliticas = profissional._habilidadesAnaliticas

		try {
			if (AnalistaDesempenho.numIntancias < AnalistaDesempenho.LIMITE) {
				AnalistaDesempenho.numIntancias++
			} else {
				throw new Error('!!!FALHA NO CADASTRO!!!\n\nLimite de Analista de Desempenho excedido.')
			}
		} catch (erro) {
			console.log(erro.message)
		} finally {
			AnalistaDesempenho.numTentativas++
		}
	}

	public static override insertProfissional() {
		let profissional = Profissional.insertProfissional()

		let softwareAnalise = readlineSync.question('Digite o nome do Software de Analise: ')
		let habilidadesAnaliticas: Array<string> = []
		let parada = 1

		while (parada === 1) {
			let habilidade = readlineSync.question('Insira alguma Habilidade Analitica: ')
			habilidadesAnaliticas.push(habilidade)

			parada = parseInt(
				readlineSync.question('\nDeseja inserir mais?\n  1- Sim\n  2- Nao\n\nEscolha: ')
			)

			console.log('')
		}

		let analista: IAnalistaDesempenho = {
			...profissional,
			_softwareAnalise: softwareAnalise,
			_habilidadesAnaliticas: habilidadesAnaliticas,
		}

		return analista
	}
}
