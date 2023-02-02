const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    login: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING}
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketJournal = sequelize.define('basket_journal',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Journal = sequelize.define('journal',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    numOfPages: {type: DataTypes.INTEGER},
    numOfJournal: {type: DataTypes.INTEGER},
    year: {type: DataTypes.INTEGER},
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Article = sequelize.define('article',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false}
})

const ArticleInfo = sequelize.define('article_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING}
})

const Author = sequelize.define('author',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    surname: {type: DataTypes.STRING, unique: true, allowNull: false}, //фамилия
    middleName: {type: DataTypes.STRING}, //отчество
    description: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING, unique: true},
    img: {type: DataTypes.STRING, unique: true}
})

const Company = sequelize.define('company',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    website: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})

const News = sequelize.define('news',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE}
})

const NewsInfo = sequelize.define('news_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})

//////



const Hotel = sequelize.define('hotel', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    adress: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    website: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
    yandexMap: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING}
})

const Conference = sequelize.define('conference', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nadzagolovok: {type: DataTypes.STRING},
    datesProved: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false}
})

const ConferenceInfo = sequelize.define('conference_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING}
})





// User
User.hasOne(Basket)
Basket.belongsTo(User)
// Basket
Basket.hasMany(BasketJournal)
BasketJournal.belongsTo(Basket)
// BasketJournal
BasketJournal.hasOne(Journal)
Journal.belongsTo(BasketJournal)
// JournalPage
Journal.hasOne(Type)
Type.belongsTo(Journal)
Journal.hasMany(Article)
Article.belongsTo(Journal)
// Type
Type.hasMany(Journal)
Journal.belongsTo(Type)
Type.hasMany(Article)
Article.belongsTo(Type)
// Article
Article.hasMany(Author)
Author.belongsTo(Article)
Article.hasMany(ArticleInfo)
ArticleInfo.belongsTo(Article)
Article.hasOne(Journal)
Journal.belongsTo(Article)
Article.hasOne(Type)
Type.belongsTo(Article)
// Author
Author.hasMany(Article)
Article.belongsTo(Author)
Author.hasOne(Company)
Company.belongsTo(Author)
// Company
Company.hasMany(Author)
Author.belongsTo(Company)
// News
Company.hasMany(News)
News.belongsTo(Company)
News.hasMany(NewsInfo, {as: 'info'});
NewsInfo.belongsTo(News)


////

// Conference
Conference.hasOne(Hotel)
Hotel.belongsTo(Conference)
Conference.hasMany(ConferenceInfo)
ConferenceInfo.belongsTo(Conference)

module.exports = {
    User,
    Basket,
    BasketJournal,
    Journal,
    Type,
    Author,
    Article,
    Company,
    News,
    Conference,
    ArticleInfo,
    NewsInfo,
    ConferenceInfo
}





