const userModel = require('../model/user')
const { statusCode: SC } = require('../utils/statusCode')
const { loggerUtil: logger } = require('../utils/logger')

const getUserById = async (req, res, next, id) => {
    try {
        await userModel.findById(id).exec((err, user) => {
            if (err || !user) {
                return res.status(SC.NOT_FOUND).json({
                    error: 'No user was found in DB!'
                })
            }
            req.profile = user
            next()
        })
    } catch (err) {
        logger(err, 'ERROR')
    } finally {
        logger('Get User By Id Function is Executed!')
    }
}

const getUser = (req, res) => {
    try {
        req.profile.salt = undefined
        req.profile.encry_password = undefined
        req.profile.__v = undefined
        return res.status(SC.OK).json({
            message: 'User Fetched Successfully!',
            data: req.profile
        })
    } catch (err) {
        logger(err, 'ERROR')
    } finally {
        logger( 'Get User Function is Executed!')
    }
}

const getAllUsers = async (req, res) => {
    try {
        await userModel.find({}).exec((err, user) => {
            if (err || !user) {
                return res.status(SC.NOT_FOUND).json({
                    error: 'No users were found in a DB!'
                })
            }
            res.status(SC.OK).json({
                message: 'User Fetched Successfully!',
                data: user
            })
        })
    } catch (err) {
        logger(err, 'ERROR')
    } finally {
        logger('Get All Users Function is Executed')
    }
}

module.exports = {
    getUserById,
    getUser,
    getAllUsers
}
