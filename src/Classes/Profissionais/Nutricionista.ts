import * as readlineSync from 'readline-sync'

import Profissional from './Profissional'

import { nivelHabilidade, setNivelHabilidade } from '../../Other/nivelHabilidade'
import IMedico from '../../Interfaces/IMedico'
import INutricionista from '../../Interfaces/INutricionista'

export default class Nutricionista extends Profissional {
	public static numIntancias: number = 0
	public static numTentativas: number = 0
	public static readonly MINIMO: number = 0
	public static readonly LIMITE: number = 1

	public _habilidadesComunicacao: nivelHabilidade
	public _conhecimentoSuplementacao: boolean
	public _especializacao: string
	public _experienciaEsportiva: string

	constructor(profissional: INutricionista) {
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
		this._conhecimentoSuplementacao = profissional._conhecimentoSuplementacao
		this._especializacao = profissional._especializacao
		this._experienciaEsportiva = profissional._experienciaEsportiva

		try {
			if (Nutricionista.numIntancias < Nutricionista.LIMITE) {
				Nutricionista.numIntancias++
			} else {
				throw new Error('!!!FALHA NO CADASTRO!!!\n\nLimite de Nutricionista excedido.')
			}
		} catch (erro) {
			console.log(erro.message)
		} finally {
			Nutricionista.numTentativas++
		}
	}

	public static override insertProfissional() {
		let profissional = Profissional.insertProfissional()

		// public _habilidadesComunicacao: nivelHabilidade
		// public _conhecimentoSuplementacao: boolean
		// public _especializacao: string
		// public _experienciaEsportiva: string

		let habilidadesComunicacao = setNivelHabilidade('Comunicacao')

		let perguntaSuplementacao = parseInt(
			readlineSync.question(
				'O Nutricionista possui conhecimento em suplementacao?\n\n  1- Sim\n\n  2- Nao\n\nDiga:  '
			)
		)

		let conhecimentoSuplementacao = false

		if (perguntaSuplementacao === 1) {
			conhecimentoSuplementacao = true
		}

		let especializacao = readlineSync.question('Fale sobre a especializacao dele: ')

		let experienciaEsportiva = readlineSync.question('Fale sobre a experi~encia esportiva dele: ')

		let medico: INutricionista = {
			...profissional,
			_habilidadesComunicacao: habilidadesComunicacao,
			_conhecimentoSuplementacao: conhecimentoSuplementacao,
			_especializacao: especializacao,
			_experienciaEsportiva: experienciaEsportiva,
		}

		return medico
	}
}
