import { nivelHabilidade } from '../Other/nivelHabilidade'
import IProfissional from './IProfissional'

export default interface ITecnico extends IProfissional {
	_licencaCBF: boolean
	_idiomas: Array<string>
	_conhecimentoTatico: nivelHabilidade
	_habilidadesMotivacionais: nivelHabilidade
}
