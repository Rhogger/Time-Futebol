import { nivelHabilidade } from '../Other/nivelHabilidade'
import IProfissional from './IProfissional'

export default interface IFisioterapeuta extends IProfissional {
	_habilidadesComunicacao: nivelHabilidade
	_conhecimentoLesoes: boolean
	_equipamentosFisioterapia: Array<string>
}
