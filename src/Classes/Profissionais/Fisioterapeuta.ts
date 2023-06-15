import * as readlineSync from 'readline-sync'

import Profissional from './Profissional'

import IFisioterapeuta from '../../Interfaces/IFisioterapeuta'

import { nivelHabilidade, setNivelHabilidade } from '../../Other/nivelHabilidade'

export default class Fisioterapeuta extends Profissional {
	public static numIntancias: number = 0
	public static numTentativas: number = 0
	public static readonly MINIMO: number = 1
	public static readonly LIMITE: number = 2

	public _habilidadesComunicacao: nivelHabilidade
	public _conhecimentoLesoes: boolean
	public _equipamentosFisioterapia: Array<string>

	constructor(profissional: IFisioterapeuta) {
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
		this._equipamentosFisioterapia = profissional._equipamentosFisioterapia

		try {
			if (Fisioterapeuta.numIntancias < Fisioterapeuta.LIMITE) {
				Fisioterapeuta.numIntancias++
			} else {
				throw new Error('!!!FALHA NO CADASTRO!!!\n\nLimite de Fisioterapeuta excedido.')
			}
		} catch (erro) {
			console.log(erro.message)
		} finally {
			Fisioterapeuta.numTentativas++
		}
	}

	public static override insertProfissional() {
		let profissional = Profissional.insertProfissional()

		let habilidadesComunicacao = setNivelHabilidade('Comunicacao')
		let perguntaLesoes = parseInt(
			readlineSync.question(
				'O profissional tem conhecimento em lesoes?\n\n  1- Sim\n\n  2- Nao\n\nDiga: '
			)
		)

		let conhecimentoLesoes = false

		if (perguntaLesoes === 1) {
			conhecimentoLesoes = true
		}

		let equipamentosFisioterapia: Array<string> = []
		let parada = 1

		while (parada === 1) {
			let equipamento = readlineSync.question('Insira o nome de algum Equipamento: ')
			equipamentosFisioterapia.push(equipamento)

			parada = parseInt(
				readlineSync.question('\nDeseja inserir mais?\n  1- Sim\n  2- Nao\n\nEscolha: ')
			)

			console.log('')
		}

		let fisio: IFisioterapeuta = {
			...profissional,
			_habilidadesComunicacao: habilidadesComunicacao,
			_conhecimentoLesoes: conhecimentoLesoes,
			_equipamentosFisioterapia: equipamentosFisioterapia,
		}

		return fisio
	}
}
