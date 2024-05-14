import Comanda from '#models/comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Comanda.createMany([
      {
        mesa: '10',
        funcionarioId: 2,
        clienteId: 5,
        dataPagamento: '2024-05-13T06:30:45.000+00:00',
        data: '2024-05-13T06:30:45.000+00:00'
      },
      {
        mesa: '15',
        funcionarioId: 8,
        clienteId: 6,
        dataPagamento: '2024-05-13T08:45:15.000+00:00',
        data: '2024-05-13T08:45:15.000+00:00'
      },
      {
        mesa: '20',
        funcionarioId: 2,
        clienteId: 7,
        dataPagamento: '2024-05-14T07:15:30.000+00:00',
        data: '2024-05-13T10:20:00.000+00:00'
      },
      {
        mesa: '25',
        funcionarioId: 2,
        clienteId: 8,
        dataPagamento: '2024-05-17T05:00:00.000+00:00',
        data: '2024-05-13T12:40:20.000+00:00'
      },
      {
        mesa: '30',
        funcionarioId: 8,
        clienteId: 9,
        dataPagamento: '2024-05-13T10:00:00.000+00:00',
        data: '2024-05-14T15:00:00.000+00:00'
      },
      {
        mesa: '35',
        funcionarioId: 8,
        clienteId: 10,
        dataPagamento: '2024-05-19T13:20:30.000+00:00',
        data: '2024-05-14T16:30:00.000+00:00'
      },
      {
        mesa: '40',
        funcionarioId: 2,
        clienteId: 11,
        dataPagamento: '2024-05-13T11:10:50.000+00:00',
        data: '2024-05-15T08:45:00.000+00:00'
      },
      {
        mesa: '45',
        funcionarioId: 8,
        clienteId: 12,
        dataPagamento: '2024-05-20T12:30:00.000+00:00',
        data: '2024-05-15T09:30:00.000+00:00'
      }
    ])
  }
}
