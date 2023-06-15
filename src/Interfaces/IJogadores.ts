import { funcoesCampo } from '../Other/funcoesCampo'
import { posicoesCampo } from '../Other/posicoesCampo'
import IJogador from './IJogador'

export default interface IJogadores extends IJogador {
	_usarMaos: boolean
	_posicaoCampo: posicoesCampo
	_funcaoCampo: funcoesCampo
	_marcacao: boolean
	_visaoDeJogo: boolean
	_bomDeDrible: boolean
	_finalizacao: boolean
}
