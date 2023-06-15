export default class Elenco {
	private _lista = []

	public get lista() {
		return this._lista
	}

	public set lista(pessoa: any) {
		this._lista.push(pessoa)
	}
}
