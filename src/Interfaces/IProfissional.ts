import IPessoa from './IPessoa'

export default interface IProfissional extends IPessoa {
	_cargo: string
	_formacao: string | null
}
