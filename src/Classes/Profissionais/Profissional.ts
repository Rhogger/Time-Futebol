import * as readlineSync from 'readline-sync'

import IProfissional from '../../Interfaces/IProfissional'

import Pessoa from '../Pessoa'

export default abstract class Profissional extends Pessoa implements IProfissional {
	public _cargo: string
	public _formacao: string | null

	constructor(
		nome: string,
		idade: number,
		peso: number,
		altura: number,
		salario: number,
		cargo: string,
		formacao: string | null
	) {
		super(nome, idade, peso, altura, salario)
		this._cargo = cargo
		this._formacao = formacao
	}

	public static insertProfissional() {
		let pessoa = Pessoa.insertPessoa()

		let cargo = readlineSync.question('Insira cargo: ')
		let formacao = readlineSync.question('Insira formacao: ')

		let profissional: IProfissional = {
			...pessoa,
			_cargo: cargo,
			_formacao: formacao,
		}

		return profissional
	}
}
