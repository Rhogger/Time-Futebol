import IProfissional from './IProfissional'

export default interface IAnalistaDesempenho extends IProfissional {
	_softwareAnalise: string
	_habilidadesAnaliticas: Array<string>
}
