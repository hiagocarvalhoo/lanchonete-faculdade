import FormaPagamento from "#models/forma_pagamento";
import { HttpContext } from "@adonisjs/core/http";

export default class FormaPagamentosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await FormaPagamento.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await FormaPagamento.query()
        .where('id', params.id)
        .preload('comandas')
        .first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome'])
        return await FormaPagamento.create(dados)
    }

    async update({params, request}: HttpContext){
        const formaPagamento = await FormaPagamento.findOrFail(params.id)
        const dados = request.only(['nome'])
        
        formaPagamento.merge(dados)
        return await formaPagamento.save()
    }

    async destroy({ params }: HttpContext) {
        const formaPagamento = await FormaPagamento.findOrFail(params.id)

        await formaPagamento.delete()
        return { msg: 'Registro deletado com sucesso', formaPagamento }

    }
}
