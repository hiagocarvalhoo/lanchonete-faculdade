import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa: string

  @column()
  declare funcionarioId: number

  @column()
  declare clienteId: number

  @column()
  declare formaPagamentoId: number

  @column()
  declare dataPagamento: string

  @column()
  declare data: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}