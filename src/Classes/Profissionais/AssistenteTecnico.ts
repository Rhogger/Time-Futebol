import { nivelHabilidade, setNivelHabilidade } from '../../Other/nivelHabilidade'

import IAssistenteTecnico from '../../Interfaces/IAssistenteTecnico'

import Profissional from './Profissional'

export default class AssistenteTecnico extends Profissional {
	public static numIntancias: number = 0
	public static numTentativas: number = 0
	public static readonly MINIMO: number = 0
	public static readonly LIMITE: number = 1

	public _habilidadeComunicacao: nivelHabilidade
	public _conhecimentoTatico: nivelHabilidade
	public _conhecimentoTecnico: nivelHabilidade

	constructor(profissional: IAssistenteTecnico) {
		super(
			profissional._nome,
			profissional._idade,
			profissional._peso,
			profissional._altura,
			profissional._salario,
			profissional._cargo,
			profissional._formacao
		)
		this._habilidadeComunicacao = profissional._habilidadeComunicacao
		this._conhecimentoTatico = profissional._conhecimentoTatico
		this._conhecimentoTecnico = profissional._conhecimentoTecnico

		try {
			if (AssistenteTecnico.numIntancias < AssistenteTecnico.LIMITE) {
				AssistenteTecnico.numIntancias++
			} else {
				throw new Error('!!!FALHA NO CADASTRO!!!\n\nLimite de Assistente Técnico excedido.')
			}
		} catch (erro) {
			console.log(erro.message)
		} finally {
			AssistenteTecnico.numTentativas++
		}
	}

	public static override insertProfissional() {
		let profissional = Profissional.insertProfissional()

		let habilidadeComunicacao = setNivelHabilidade('Comunicacao')
		let conhecimentoTatico = setNivelHabilidade('Conhecimento Tatico')
		let conhecimentoTecnico = setNivelHabilidade('Conhecimento Tecnico')

		let assistente: IAssistenteTecnico = {
			...profissional,
			_habilidadeComunicacao: habilidadeComunicacao,
			_conhecimentoTatico: conhecimentoTatico,
			_conhecimentoTecnico: conhecimentoTecnico,
		}

		return assistente
	}
}
