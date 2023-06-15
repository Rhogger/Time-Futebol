import { nivelHabilidade } from '../Other/nivelHabilidade'
import IProfissional from './IProfissional'

export default interface INutricionista extends IProfissional {
	_habilidadesComunicacao: nivelHabilidade
	_conhecimentoSuplementacao: boolean
	_especializacao: string
	_experienciaEsportiva: string
}
