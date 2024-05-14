import ProdutoIngrediente from "#models/produto_ingrediente";
import { HttpContext } from "@adonisjs/core/http";

export default class ProdutoIngredienteController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await ProdutoIngrediente.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await ProdutoIngrediente.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['produtoId', 'ingredienteId'])
        return await ProdutoIngrediente.create(dados)
    }

    async update({params, request}: HttpContext){
        const produtosIngrediente = await ProdutoIngrediente.findOrFail(params.id)
        const dados = request.only(['produtoId', 'ingredienteId'])
        
        produtosIngrediente.merge(dados)
        return await produtosIngrediente.save()
    }

    async destroy({ params }: HttpContext) {
        const produtosIngrediente = await ProdutoIngrediente.findOrFail(params.id)

        await produtosIngrediente.delete()
        return { msg: 'Registro deletado com sucesso', produtosIngrediente }

    }
}