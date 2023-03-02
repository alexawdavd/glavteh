const {Journal, JournalInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class JournalController {
    async create(req, res, next){
        try {
            let {price, description, numOfPages, numOfJournal, year, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))


            const journal = await Journal.create({
                price,
                description,
                numOfPages,
                numOfJournal,
                year,
                typeId,
                img: fileName
            })

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    JournalInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: journal.id
                    })
                )
            }

            return res.json(journal)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        //TODO articleId, basketJournalId
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let journal;
        if (typeId){
            journal = await Journal.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (!typeId){
            journal = await Journal.findAndCountAll({limit, offset})
        }
        return res.json(journal)
    }

    async getOne(req, res){
        const {id} = req.params
        const journal = await Journal.findOne(
            {
                where: {id},
                include: [{model: JournalInfo, as: 'info'}]
            },
        )
        return res.json(journal)
    }

}

module.exports = new JournalController()