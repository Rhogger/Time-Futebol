import * as readlineSync from 'readline-sync'

import IPessoa from '../Interfaces/IPessoa'

export default abstract class Pessoa implements IPessoa {
	public _nome: string
	public _idade: number
	public _peso: number
	public _altura: number
	public _salario: number

	constructor(nome: string, idade: number, peso: number, altura: number, salario: number) {
		this._nome = nome
		this._idade = idade
		this._peso = peso
		this._altura = altura
		this._salario = salario
	}

	public static insertPessoa() {
		let nome = readlineSync.question('Insira nome: ')
		let idade = parseInt(readlineSync.question('Insira idade: '))
		let peso = parseFloat(readlineSync.question('Insira peso: '))
		let altura = parseFloat(readlineSync.question('Insira altura: '))
		let salario = parseFloat(readlineSync.question('Insira salario: '))

		let pessoa: IPessoa = {
			_nome: nome,
			_idade: idade,
			_peso: peso,
			_altura: altura,
			_salario: salario,
		}

		return pessoa
	}
}
