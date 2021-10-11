/**
 * @author krish
 */

const userActivityModel = require('../model/userActivity')
const userModel = require('../model/user')
const mongoose = require('mongoose')

const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'debug'

const createActivity = async (req, res) => {
    let result = {
        userId: '',
        userName: '',
        activityDetails: ''
    }
    const userId = req.params.userId
    const activityDetails = req.body.activityDetails

    try {
        await userModel.findOne({ _id: userId }).exec((err, data) => {
            if (err) {
                logger.error(err)
            }
            if (data) {
                result.userId = userId
                result.userName = data.name
                result.activityDetails = activityDetails

                const activityModel = new userActivityModel(result)
                activityModel.save((err, data) => {
                    if (err) {
                        logger.error(err)
                        res.status(400).json({
                            error: 'Creating Activity in DB is failed!'
                        })
                    }
                    res.status(200).json({
                        message: 'User Activity created successfully!',
                        data: data
                    })
                })
            } else {
                res.status(404).json({
                    error: 'No User found!'
                })
            }
        })
    } catch (err) {
        logger.error(err)
    } finally {
        logger.info('Create Acitivity Function is Executed!')
    }
}

//label for pagination
const label = {
    totalDocs: 'totalActivities',
    docs: 'activities',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'nextPageNo',
    prevPage: 'prevPageNo',
    totalPages: 'pageCount'
}

const getUserAvtivity = async (req, res) => {
    let options = {
        page: 1,
        limit: 10,
        customLabels: label
    }

    req.query.page !== undefined ? (options.page = req.query.page) : null
    req.query.limit !== undefined ? (options.limit = req.query.limit) : null
    const userId = req.auth._id

    try {
        await userActivityModel.paginate({ userId }, options, (err, result) => {
            if (err) {
                logger.error(err)
                res.status(400).json({
                    error: 'Getting User Activity from DB is failed!'
                })
            }
            res.status(200).send({
                message: 'User Activity is Fetched Successfully',
                data: result
            })
        })
    } catch (err) {
        logger.error(err)
    } finally {
        logger.info('Get User Acitivity Function is Executed!')
    }
}

const getOtherUserActivity = async (req, res) => {
    let options = {
        page: 2,
        limit: 10,
        customLabels: label
    }
    let userId
    if (req.query.userId === undefined) {
        res.status(400).json({
            error: 'Please Pass userId as a Query parameter'
        })
    } else {
        userId = req.query.userId
    }
    req.query.page !== undefined ? (options.page = req.query.page) : null
    req.query.limit !== undefined ? (options.limit = req.query.limit) : null

    try {
        userActivityModel.paginate({ userId }, options, (err, result) => {
            if (err) {
                logger.error(err)
                res.status(400).json({
                    error: 'Getting User Activity from DB is failed!'
                })
            }
            res.status(200).send({
                message: 'User Activity is Fetched Successfully',
                data: result
            })
        })
    } catch (err) {
        logger.error(err)
    } finally {
        logger.info('Get Other User Activity Function is Executed!')
    }
}

const getAllUserActivities = async (req, res) => {
    let result
    try {
        if (req.query.userId === undefined) {
            result = await userActivityModel
                .aggregate([
                    {
                        $group: {
                            _id: {
                                userId: '$userId',
                                userName: '$userName'
                            },
                            activities: {
                                $push: {
                                    activityId: '$_id',
                                    activityDetails: '$activityDetails',
                                    createdAt: {
                                        $dateToString: {
                                            date: '$createdAt',
                                            timezone: 'Asia/Kolkata'
                                        }
                                    },
                                    updatedAt: {
                                        $dateToString: {
                                            date: '$updatedAt',
                                            timezone: 'Asia/Kolkata'
                                        }
                                    }
                                }
                            }
                        }
                    }
                ])
                .sort({ _id: -1 })
        } else {
            const userId = mongoose.Types.ObjectId(req.query.userId)
            result = await userActivityModel
                .aggregate([
                    {
                        $match: {
                            userId: userId
                        }
                    },
                    {
                        $group: {
                            _id: {
                                userId: '$userId',
                                userName: '$userName'
                            },
                            activities: {
                                $push: {
                                    activityDetails: '$activityDetails',
                                    createdAt: {
                                        $dateToString: {
                                            date: '$createdAt',
                                            timezone: 'Asia/Kolkata'
                                        }
                                    },
                                    updatedAt: {
                                        $dateToString: {
                                            date: '$updatedAt',
                                            timezone: 'Asia/Kolkata'
                                        }
                                    }
                                }
                            }
                        }
                    }
                ])
                .sort({ _id: -1 })
        }

        if (result.length) {
            res.status(200).send({
                message: 'All User Activities Fetched Successfully',
                data: result
            })
        } else {
            res.status(404).json({
                error: 'No Activites found!'
            })
        }
    } catch (err) {
        logger.error(err)
    } finally {
        logger.info('Get All User Activities Function is Executed!')
    }
}

const deleteActivityById = async (req, res) => {
    try {
        await userActivityModel
            .findByIdAndDelete({ _id: req.params.id })
            .exec((err, data) => {
                if (err) {
                    logger.error(err)
                    res.status(400).json({
                        error: 'Deleting User Activity from DB is failed!'
                    })
                }
                if (data) {
                    res.status(200).json({
                        message: 'Activity deleted successfully!'
                    })
                } else {
                    res.status(404).json({
                        error: 'No Activities found!'
                    })
                }
            })
    } catch (err) {
        logger.error(err)
    } finally {
        logger.info('Delete User Activity Function is Executed!')
    }
}

const deleteAllActivitiesByUserId = async (req, res) => {
    try {
        await userActivityModel
            .deleteMany({ userId: req.params.userId })
            .exec((err, data) => {
                if (err) {
                    logger.error(err)
                    res.status(400).json({
                        error: 'Getting All User Activities from DB is failed!'
                    })
                }
                if (data) {
                    res.status(200).json({
                        message: 'User activites deleted successfully!'
                    })
                } else {
                    res.status(404).json({
                        error: 'No Activities found!'
                    })
                }
            })
    } catch (err) {
        logger.error(err)
    } finally {
        logger.info('Delete All User Activities Function is Executed!')
    }
}

module.exports = {
    createActivity,
    getUserAvtivity,
    getOtherUserActivity,
    getAllUserActivities,
    deleteActivityById,
    deleteAllActivitiesByUserId
}
