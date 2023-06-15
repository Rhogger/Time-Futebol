import { nivelHabilidade } from '../Other/nivelHabilidade'
import IProfissional from './IProfissional'

export default interface IMedico extends IProfissional {
	_habilidadesComunicacao: nivelHabilidade
	_conhecimentoLesoes: boolean
	_equipamentosMedicos: Array<string>
}
