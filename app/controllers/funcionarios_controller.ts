import Funcionario from "#models/funcionario";
import { HttpContext } from "@adonisjs/core/http";

export default class FuncionariosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Funcionario.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Funcionario.query()
            .where('id', params.id)
            .preload('cargo')
            .preload('comandas')
            .first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'cpf', 'endereco', 'sexo', 'telefone', 'cargoId'])
        return await Funcionario.create(dados)
    }

    async update({params, request}: HttpContext){
        const funcionarios = await Funcionario.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'endereco', 'sexo', 'telefone', 'cargoId'])
        
        funcionarios.merge(dados)
        return await funcionarios.save()
    }

    async destroy({ params }: HttpContext) {
        const funcionarios = await Funcionario.findOrFail(params.id)

        await funcionarios.delete()
        return { msg: 'Registro deletado com sucesso', funcionarios }

    }
}