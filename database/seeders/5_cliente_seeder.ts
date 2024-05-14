import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Cliente.createMany([
      {nome: 'Carolina Oliveira', cpf: '111.222.333-44', telefone: '(11) 1234-5678', email: 'carolina@email.com'},
      {nome: 'Mateus Santos', cpf: '222.333.444-55', telefone: '(22) 2345-6789', email: 'mateus@email.com'},
      {nome: 'Isabela Pereira', cpf: '333.444.555-66', telefone: '(33) 3456-7891', email: 'isabela@email.com'},
      {nome: 'Luiz Fernandes', cpf: '444.555.666-77', telefone: '(44) 4567-8912', email: 'luiz@email.com'},
      {nome: 'Juliano Silva', cpf: '555.666.777-88', telefone: '(55) 5678-9123', email: 'juliano@email.com'},
      {nome: 'Gabriela Almeida', cpf: '666.777.888-99', telefone: '(66) 6789-1234', email: 'gabriela@email.com'},
      {nome: 'Renata Lima', cpf: '777.888.999-00', telefone: '(77) 7891-2345', email: 'renata@email.com'},
      {nome: 'Marcos Oliveira', cpf: '888.999.000-11', telefone: '(88) 8912-3456', email: 'marcos@email.com'},
      {nome: 'Patrícia Souza', cpf: '999.000.111-22', telefone: '(99) 9012-3456', email: 'patricia@email.com'},
      {nome: 'Cristiano Pereira', cpf: '000.111.222-33', telefone: '(00) 0123-4567', email: 'cristiano@email.com'}
    ])
  }
}
