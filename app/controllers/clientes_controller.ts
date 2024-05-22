import Cliente from "#models/cliente";
import { HttpContext } from "@adonisjs/core/http";

export default class ClientesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Cliente.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Cliente.query()
        .where('id', params.id)
        .preload('comandas')
        .first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'cpf', 'telefone', 'email'])
        return await Cliente.create(dados)
    }

    async update({params, request}: HttpContext){
        const clientes = await Cliente.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'telefone', 'email'])
        
        clientes.merge(dados)
        return await clientes.save()
    }

    async destroy({ params }: HttpContext) {
        const clientes = await Cliente.findOrFail(params.id)

        await clientes.delete()
        return { msg: 'Registro deletado com sucesso', clientes }

    }
}