import Tipo from "#models/tipo";
import { HttpContext } from "@adonisjs/core/http";

export default class TiposController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Tipo.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Tipo.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome'])
        return await Tipo.create(dados)
    }

    async update({params, request}: HttpContext){
        const tipos = await Tipo.findOrFail(params.id)
        const dados = request.only(['nome'])
        
        tipos.merge(dados)
        return await tipos.save()
    }

    async destroy({ params }: HttpContext) {
        const tipos = await Tipo.findOrFail(params.id)

        await tipos.delete()
        return { msg: 'Registro deletado com sucesso', tipos }

    }
}