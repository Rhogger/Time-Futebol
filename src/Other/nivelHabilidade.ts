import * as readlineSync from 'readline-sync'

export enum nivelHabilidade {
	N0,
	N1,
	N2,
	N3,
	N4,
	N5,
	N6,
	N7,
	N8,
	N9,
	N10,
}

export function setNivelHabilidade(habilidade: string) {
	let nivel = -1

	while (nivel < 0 || nivel > 10) {
		nivel = parseInt(
			readlineSync.question(`Selecione o nivel da habilidade "${habilidade}", de 0 a 10: `)
		)

		switch (nivel) {
			case 0:
				return nivelHabilidade.N0
				break

			case 1:
				return nivelHabilidade.N1
				break

			case 2:
				return nivelHabilidade.N2
				break

			case 3:
				return nivelHabilidade.N3
				break

			case 4:
				return nivelHabilidade.N4
				break

			case 5:
				return nivelHabilidade.N5
				break

			case 6:
				return nivelHabilidade.N6
				break

			case 7:
				return nivelHabilidade.N7
				break

			case 8:
				return nivelHabilidade.N8
				break

			case 9:
				return nivelHabilidade.N9
				break

			case 10:
				return nivelHabilidade.N10
				break

			default:
				console.log('\n\nValor escolhido deve ser entre 0 e 10! Selecione novamente.\n\n')
		}
	}
}
