import IJogadores from '../../Interfaces/IJogadores'
import { funcoesCampo } from '../../Other/funcoesCampo'
import { posicoesCampo } from '../../Other/posicoesCampo'
import Jogador from './Jogador'

export default class Lateral extends Jogador implements IJogadores {
	public static numIntancias: number = 0
	public static numTentativas: number = 0
	public static readonly MINIMO: number = 3
	public static readonly LIMITE: number = 6

	// Pode usar as mãos?
	public _usarMaos: boolean
	// Qual área do campo pertence?
	// Gol, Proximo ao gol, Laterais do campo, Meio-campo, Linha de frente
	public _posicaoCampo: posicoesCampo
	// Qual o objetivo dele em campo?
	// Atacar, Defender, Atacar e Defender
	public _funcaoCampo: funcoesCampo
	// Precisa ser bom em marcação?
	public _marcacao: boolean
	// Precisa ter uma boa visão do que ta acontecendo no campo a longa distância?
	public _visaoDeJogo: boolean
	//Precisa ser bom de drible?
	public _bomDeDrible: boolean
	// Precisa realizar finalizações?
	public _finalizacao: boolean

	constructor(jogador: IJogadores) {
		super(
			jogador._nome,
			jogador._idade,
			jogador._peso,
			jogador._altura,
			jogador._salario,
			jogador._apelido,
			jogador._numeroCamisa
		)
		this._usarMaos = jogador._usarMaos
		this._posicaoCampo = jogador._posicaoCampo
		this._funcaoCampo = jogador._funcaoCampo
		this._marcacao = jogador._marcacao
		this._visaoDeJogo = jogador._visaoDeJogo
		this._bomDeDrible = jogador._bomDeDrible
		this._finalizacao = jogador._finalizacao

		try {
			if (Lateral.numIntancias < Lateral.LIMITE) {
				Lateral.numIntancias++
			} else {
				throw new Error('!!!FALHA NO CADASTRO!!!\n\nLimite de Laterais excedido.')
			}
		} catch (erro) {
			console.log(erro.message)
		} finally {
			Lateral.numTentativas++
		}
	}

	public static override insertJogador() {
		let jogador = Jogador.insertJogador()

		let lateral: IJogadores = {
			...jogador,
			_usarMaos: false,
			_posicaoCampo: posicoesCampo.P3,
			_funcaoCampo: funcoesCampo.F3,
			_marcacao: true,
			_visaoDeJogo: true,
			_bomDeDrible: false,
			_finalizacao: true,
		}

		return lateral
	}
}
