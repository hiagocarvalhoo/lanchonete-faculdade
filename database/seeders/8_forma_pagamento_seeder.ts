import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FormaPagamento from '../../app/models/forma_pagamento.js'

export default class extends BaseSeeder {
  async run() {
    await FormaPagamento.createMany([
      {
        nome: 'Pix'
      },
      {
        nome: 'Dinheiro'
      },
      {
        nome: 'Débito'
      },
      {
        nome: 'Crédito'
      }
    ])
  }
}