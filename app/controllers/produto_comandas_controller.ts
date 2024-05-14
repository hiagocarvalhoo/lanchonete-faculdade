import ProdutoComanda from "#models/produto_comanda";
import { HttpContext } from "@adonisjs/core/http";

export default class ProdutoComandaController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await ProdutoComanda.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await ProdutoComanda.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['produtoId', 'comandaId', 'quantidade'])
        return await ProdutoComanda.create(dados)
    }

    async update({params, request}: HttpContext){
        const produtosComanda = await ProdutoComanda.findOrFail(params.id)
        const dados = request.only(['produtoId', 'comandaId', 'quantidade'])
        
        produtosComanda.merge(dados)
        return await produtosComanda.save()
    }

    async destroy({ params }: HttpContext) {
        const produtosComanda = await ProdutoComanda.findOrFail(params.id)

        await produtosComanda.delete()
        return { msg: 'Registro deletado com sucesso', produtosComanda }

    }
}