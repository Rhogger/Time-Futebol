import * as readlineSync from 'readline-sync'

import Profissional from './Profissional'

import { nivelHabilidade, setNivelHabilidade } from '../../Other/nivelHabilidade'
import IMedico from '../../Interfaces/IMedico'

export default class Medico extends Profissional {
	public static numIntancias: number = 0
	public static numTentativas: number = 0
	public static readonly MINIMO: number = 1
	public static readonly LIMITE: number = 3

	public _habilidadesComunicacao: nivelHabilidade
	public _conhecimentoLesoes: boolean
	public _equipamentosMedicos: Array<string>

	constructor(profissional: IMedico) {
		super(
			profissional._nome,
			profissional._idade,
			profissional._peso,
			profissional._altura,
			profissional._salario,
			profissional._cargo,
			profissional._formacao
		)
		this._habilidadesComunicacao = profissional._habilidadesComunicacao
		this._conhecimentoLesoes = profissional._conhecimentoLesoes
		this._equipamentosMedicos = profissional._equipamentosMedicos

		try {
			if (Medico.numIntancias < Medico.LIMITE) {
				Medico.numIntancias++
			} else {
				throw new Error('!!!FALHA NO CADASTRO!!!\n\nLimite de Médico excedido.')
			}
		} catch (erro) {
			console.log(erro.message)
		} finally {
			Medico.numTentativas++
		}
	}

	public static override insertProfissional() {
		let profissional = Profissional.insertProfissional()

		let habilidadesComunicacao = setNivelHabilidade('Comunicacao')

		let perguntaLesoes = parseInt(
			readlineSync.question(
				'O Medico possui conhecimento em lesoes?\n\n  1- Sim\n\n  2- Nao\n\nDiga:  '
			)
		)

		let conhecimentoLesoes = false

		if (perguntaLesoes === 1) {
			conhecimentoLesoes = true
		}

		let equipamentosMedicos: Array<string> = []
		let parada = 1

		while (parada === 1) {
			let equipamento = readlineSync.question('Digite o nome do equipamento: ')
			equipamentosMedicos.push(equipamento)

			parada = parseInt(
				readlineSync.question('\nDeseja inserir mais?\n  1- Sim\n  2- Nao\n\nEscolha: ')
			)

			console.log('')
		}

		let medico: IMedico = {
			...profissional,
			_habilidadesComunicacao: habilidadesComunicacao,
			_conhecimentoLesoes: conhecimentoLesoes,
			_equipamentosMedicos: equipamentosMedicos,
		}

		return medico
	}
}
