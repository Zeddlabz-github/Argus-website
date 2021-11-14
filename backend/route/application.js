/**
 * @author krish
 */

const express = require('express')
const router = express.Router()
const {
    createApplication,
    updateApplication,
    getApplicationById,
    getAllApplications,
    deleteApplicationById
} = require('../controller/application')

const {
    isSignedIn,
    isValidToken,
    isAdmin
} = require('../controller/middleware')

router.post('/application/create', isSignedIn, isValidToken, createApplication)

router.put(
    '/application/update/:applicationId',
    isSignedIn,
    isValidToken,
    isAdmin,
    updateApplication
)

router.get(
    '/application/get/:applicationId',
    isSignedIn,
    isValidToken,
    isAdmin,
    getApplicationById
)

router.get(
    '/application/get-all',
    isSignedIn,
    isValidToken,
    isAdmin,
    getAllApplications
)

router.delete(
    '/application/delete/:applicationId',
    isSignedIn,
    isValidToken,
    isAdmin,
    deleteApplicationById
)

module.exports = router
