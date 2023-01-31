const uuid = require("uuid");
const path = require("path");
const {News, NewsInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

//фулл готовый контроллер
class NewsController {
    async create(req, res, next){
        try {
            let {title, date, description, companyId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const news = await News.create({
                title,
                date,
                description,
                companyId,
                img: fileName
            })

            if(info){
                info = JSON.parse(info)
                info.forEach(i =>
                    NewsInfo.create({
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

    async getAll(req, res){
        let {companyId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let news;
        if (companyId){
            news = await News.findAndCountAll({where: {companyId}, limit, offset})
        }
        if (!companyId){
            news = await News.findAndCountAll({limit, offset})
        }
        return res.json(news)
    }

    async getOne(req,res){
        const {id} = req.params
        const news = await News.findOne(
            {
                where:{id},
                include:[{model: NewsInfo, as: 'info'}]
            },
        )
        return res.json(news)
    }

}

module.exports = new NewsController()