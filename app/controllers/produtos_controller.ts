import type { HttpContext } from '@adonisjs/core/http'
import Produto from "#models/produto";

export default class ProdutosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 3)
        const perPage = request.input('perPage', 10)
        return await Produto.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Produto.query()
            .where('id', params.id)
            .preload('tipo')
            .preload('ingredientes')
            .preload('comandas')
            .first()
    }

    async store({ request }: HttpContext) {

        const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])
        return await Produto.create(dados)

    }

    async update({ params, request}: HttpContext) {
        const produto = await Produto.findOrFail(params.id)
        const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])

        produto.merge(dados)
        await produto.save()

        return produto
    }

    async destroy({ params }: HttpContext) {
        const produto = await Produto.findOrFail(params.id)
        await produto.delete()

        return { msg: 'Some daqui!' }
    }

}