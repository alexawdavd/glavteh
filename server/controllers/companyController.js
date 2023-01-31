const {Company} = require('../models/models')
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");
//const ApiError = require('../error/ApiError')

class CompanyController {
    async create(req, res, next){
        try {
            let {name, website, authorId, articleId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const company = await Company.create({
                name,
                website,
                authorId,
                articleId,
                img: fileName
            })

            return res.json(company)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        try {
            let {authorId, articleId, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let company;
            if (authorId && articleId) {
                company = await Company.findAndCountAll({where: {authorId, articleId}, limit, offset})
            }
            if (!authorId && articleId) {
                company = await Company.findAndCountAll({where: {articleId}, limit, offset})
            }
            if (authorId && !articleId) {
                company = await Company.findAndCountAll({where: {authorId}, limit, offset})
            }
            if (!authorId && !articleId) {
                company = await Company.findAndCountAll()
            }
            return res.json(company)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new CompanyController()