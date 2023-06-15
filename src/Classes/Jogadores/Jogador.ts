import * as readlineSync from 'readline-sync'

import Pessoa from '../Pessoa'
import IJogador from '../../Interfaces/IJogador'

export default abstract class Jogador extends Pessoa {
	public _apelido: string
	public _numeroCamisa: number

	constructor(
		nome: string,
		idade: number,
		peso: number,
		altura: number,
		salario: number,
		apelido: string,
		numeroCamisa: number
	) {
		super(nome, idade, peso, altura, salario)
		this._apelido = apelido
		this._numeroCamisa = numeroCamisa
	}

	public static insertJogador() {
		let pessoa = Pessoa.insertPessoa()

		let apelido = readlineSync.question('Qual o apelido dele? ')
		let numeroCamisa = readlineSync.question('Digite o numero da camisa: ')

		let jogador: IJogador = {
			...pessoa,
			_apelido: apelido,
			_numeroCamisa: numeroCamisa,
		}

		return jogador
	}
}
