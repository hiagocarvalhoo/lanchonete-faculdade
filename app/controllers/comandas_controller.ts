import Comanda from "#models/comanda";
import { HttpContext } from "@adonisjs/core/http";

export default class ComandasController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Comanda.query().paginate(page, perPage)
    }


    async show({ params }: HttpContext) {
        return await Comanda.query()
        .where('id', params.id)
        .preload('funcionario')
        .preload('cliente')
        .preload('produtos')
        .preload('formaPagamento')
        .first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'dataPagamento', 'data'])
        return await Comanda.create(dados)
    }

    async update({params, request}: HttpContext){
        const comandas = await Comanda.findOrFail(params.id)
        const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'dataPagamento', 'data'])
        
        comandas.merge(dados)
        return await comandas.save()
    }

    async destroy({ params }: HttpContext) {
        const comandas = await Comanda.findOrFail(params.id)

        await comandas.delete()
        return { msg: 'Registro deletado com sucesso', comandas }

    }
}