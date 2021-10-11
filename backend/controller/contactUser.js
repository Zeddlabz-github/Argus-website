/**
 * @author krish
 */

const model = require('../model/contactUser')

let log4js = require('log4js')
let logger = log4js.getLogger()
logger.level = 'debug'

const saveData = (req, res) => {
    let { name, phoneNumber, message } = req.body
    let result = { name, phoneNumber, message }
    let contactModel = new model(result)
    contactModel.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: 'Saving data in DB failed'
            })
        }
        res.json(data)
    })
}

const getData = (req, res) => {
    model.findOne({ _id: req.params.id }).exec((err, data) => {
        if (err) {
            logger.error(err)
        }
        if (data) {
            res.send(data)
        } else {
            res.json({
                message: 'No Record found!'
            })
        }
    })
}
const getAllData = (req, res) => {
    model.find({}).exec((err, data) => {
        if (err) {
            logger.error(err)
        }
        if (data) {
            res.send(data)
        } else {
            res.json({
                message: 'No Record found!'
            })
        }
    })
}

const deleteDataById = (req, res) => {
    model.findByIdAndDelete({ _id: req.params.id }).exec((err, data) => {
        if (err) {
            logger.error(err)
        }
        if (data) {
            res.json({
                message: 'Document deleted successfully!'
            })
        } else {
            res.json({
                message: 'No Record found!'
            })
        }
    })
}

module.exports = {
    saveData,
    getData,
    getAllData,
    deleteDataById
}
