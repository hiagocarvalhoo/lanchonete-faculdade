import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Cargo.createMany([
      {nome: 'Auxiliar de Limpeza'},
      {nome: 'Auxiliar de Cozinha'},
      {nome: 'Barman'},
      {nome: 'Supervisor de Restaurante'},
      {nome: 'Motorista de Entrega'},
      {nome: 'Atendente de Hotel'},
      {nome: 'Segurança'},
      {nome: 'Assistente Administrativo'}
    ])
  }
}
