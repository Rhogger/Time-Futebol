import { nivelHabilidade } from '../Other/nivelHabilidade'
import IProfissional from './IProfissional'

export default interface IAssistenteTecnico extends IProfissional {
	_habilidadeComunicacao: nivelHabilidade
	_conhecimentoTatico: nivelHabilidade
	_conhecimentoTecnico: nivelHabilidade
}
