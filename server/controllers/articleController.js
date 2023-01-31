const {Article, ArticleInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require("uuid");
const path = require("path");
//готовый
class ArticleController {
    async create(req, res, next){
        try {
            let {title, date, description, authorId, journalId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const news = await Article.create({
                title,
                date,
                description,
                authorId,
                journalId,
                typeId,
                img: fileName
            })

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    ArticleInfo.create({
                        title: i.title,
                        description: i.description,
                        newsId: i.newsId
                    })
                )
            }
            return res.json(news)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        try {
            let {typeId, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let article;
            if (typeId) {
                article = await Article.findAndCountAll({where: {typeId}, limit, offset})
            }
            if (!typeId) {
                article = await Article.findAndCountAll({limit, offset})
            }
            return res.json(article)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ArticleController()