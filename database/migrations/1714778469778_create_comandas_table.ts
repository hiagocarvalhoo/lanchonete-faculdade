import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('mesa', 45).nullable()
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios')
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')

      table.date('data_pagamento').nullable()
      table.date('data').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}