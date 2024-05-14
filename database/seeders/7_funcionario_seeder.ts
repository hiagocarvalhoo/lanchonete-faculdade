import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Funcionario.createMany([
      {
        nome: 'Antônio Silva',
        cpf: '987.654.321-01',
        endereco: 'Rua da Esperança, 123',
        sexo: 'M',
        telefone: '(11) 99999-8888',
        cargoId: 1
      },
      {
        nome: 'Júlia Oliveira',
        cpf: '123.456.789-10',
        endereco: 'Av. Principal, 456',
        sexo: 'F',
        telefone: '(11) 88888-7777',
        cargoId: 2
      },
      {
        nome: 'Marcos Pereira',
        cpf: '456.789.123-20',
        endereco: 'Rua das Violetas, 789',
        sexo: 'M',
        telefone: '(11) 77777-6666',
        cargoId: 3
      },
      {
        nome: 'Luana Santos',
        cpf: '321.654.987-30',
        endereco: 'Av. dos Girassóis, 321',
        sexo: 'F',
        telefone: '(11) 66666-5555',
        cargoId: 4
      },
      {
        nome: 'Roberto Silva',
        cpf: '111.222.333-40',
        endereco: 'Rua da Liberdade, 654',
        sexo: 'M',
        telefone: '(11) 55555-4444',
        cargoId: 5
      },
      {
        nome: 'Camila Souza',
        cpf: '555.666.777-50',
        endereco: 'Av. das Rosas, 987',
        sexo: 'F',
        telefone: '(11) 44444-3333',
        cargoId: 6
      },
      {
        nome: 'Ricardo Oliveira',
        cpf: '999.888.777-60',
        endereco: 'Rua das Águas, 147',
        sexo: 'M',
        telefone: '(11) 33333-2222',
        cargoId: 5
      },
      {
        nome: 'Marina Costa',
        cpf: '222.333.444-70',
        endereco: 'Av. dos Coqueiros, 963',
        sexo: 'F',
        telefone: '(11) 22222-1111',
        cargoId: 3
      },
      {
        nome: 'Pedro Mendes',
        cpf: '777.888.999-80',
        endereco: 'Rua da Paz, 741',
        sexo: 'M',
        telefone: '(11) 11111-9999',
        cargoId: 7
      },
      {
        nome: 'Tatiane Silva',
        cpf: '444.555.666-90',
        endereco: 'Av. da Esperança, 753',
        sexo: 'F',
        telefone: '(11) 99999-1111',
        cargoId: 8
      }
    ])
  }
}
