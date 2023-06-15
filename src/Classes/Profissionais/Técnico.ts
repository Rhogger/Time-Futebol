import * as readlineSync from 'readline-sync'

import Profissional from './Profissional'

import ITecnico from '../../Interfaces/ITecnico'

import { nivelHabilidade, setNivelHabilidade } from '../../Other/nivelHabilidade'

export default class Tecnico extends Profissional {
	public static numIntancias: number = 0
	public static numTentativas: number = 0
	public static readonly MINIMO: number = 1
	public static readonly LIMITE: number = 1

	public _licencaCBF: boolean
	public _idiomas: Array<string>
	public _conhecimentoTatico: nivelHabilidade
	public _habilidadesMotivacionais: nivelHabilidade

	constructor(profissional: ITecnico) {
		super(
			profissional._nome,
			profissional._idade,
			profissional._peso,
			profissional._altura,
			profissional._salario,
			profissional._cargo,
			profissional._formacao
		)
		this._licencaCBF = profissional._licencaCBF
		this._idiomas = profissional._idiomas
		this._conhecimentoTatico = profissional._conhecimentoTatico
		this._habilidadesMotivacionais = profissional._habilidadesMotivacionais

		try {
			if (Tecnico.numIntancias < Tecnico.LIMITE) {
				Tecnico.numIntancias++
			} else {
				throw new Error('!!!FALHA NO CADASTRO!!!\n\nLimite de Técnico excedido.')
			}
		} catch (erro) {
			console.log(erro.message)
		} finally {
			Tecnico.numTentativas++
		}
	}

	public static override insertProfissional() {
		let profissional = Profissional.insertProfissional()

		let perguntaLicenca = parseInt(
			readlineSync.question('O Tecnico possui licenca CBF?\n\n  1- Sim\n\n  2- Nao\n\nDiga:  ')
		)

		let licencaCBF = false

		if (perguntaLicenca === 1) {
			licencaCBF = true
		}

		let idiomas: Array<string> = []
		let parada = 1

		while (parada === 1) {
			let idioma = readlineSync.question('Digite o idioma que o tecnico fala: ')
			idiomas.push(idioma)

			parada = parseInt(
				readlineSync.question('\nDeseja inserir mais?\n  1- Sim\n  2- Nao\n\nEscolha: ')
			)

			console.log('')
		}

		let conhecimentoTatico = setNivelHabilidade('Conhecimento Tatico')
		let habilidadesMotivacionais = setNivelHabilidade('Motivacionais')

		let tecnico: ITecnico = {
			...profissional,
			_licencaCBF: licencaCBF,
			_idiomas: idiomas,
			_conhecimentoTatico: conhecimentoTatico,
			_habilidadesMotivacionais: habilidadesMotivacionais,
		}

		return tecnico
	}
}
