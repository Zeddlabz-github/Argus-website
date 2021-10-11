/**
 * @author krish
 */

const model = require('../model/subscription')
const { validationResult } = require('express-validator')

let log4js = require('log4js')
let logger = log4js.getLogger()
logger.level = 'debug'

const saveData = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    let email = req.body.email

    if (!email) {
        res.json({
            error: 'Please Include E-Mail'
        })
    } else {
        let result = {
            email
        }
        let subscriptionModel = new model(result)
        model.findOne({ email }).exec((err, data) => {
            if (err) {
                logger.error(err)
            }

            if (!data) {
                subscriptionModel.save((err, data) => {
                    if (err) {
                        res.status(400).json({
                            error: 'Saving data in DB failed'
                        })
                    }
                    res.json(data)
                })
            } else {
                res.json({
                    message: 'Email is Already stored in DB!'
                })
            }
        })
    }
}

const getDataById = (req, res) => {
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

const updateDataById = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    model.findOne({ _id: req.params.id }).exec((err, data) => {
        if (err) {
            logger.error(err)
        }
        if (!data) {
            res.status(404).json({
                error: 'No record found!'
            })
        } else {
            let { email, isApproved } = req.body
            if (data.email === email) {
                return res.json({
                    error: 'Please enter different E-Mail address to update'
                })
            }
            !email ? (email = data.email) : email
            isApproved === undefined
                ? (isApproved = data.isApproved)
                : isApproved

            model
                .updateOne(
                    { _id: req.params.id },
                    {
                        $set: {
                            email: email,
                            isApproved: isApproved
                        }
                    }
                )
                .then(() => {
                    res.json({
                        message: 'User Updated Successfully!'
                    })
                })
                .catch((err) => {
                    logger.error(err)
                    res.json({
                        error: 'User Updation Failed!'
                    })
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
    getDataById,
    getAllData,
    updateDataById,
    deleteDataById
}
