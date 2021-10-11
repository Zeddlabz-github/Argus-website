/**
 * @author krish
 */

const express = require('express')
const router = express.Router()
const {
    saveData,
    getData,
    getAllData,
    deleteDataById
} = require('../controller/contactUser')
const { isSignedIn, isValidToken, isAdmin } = require('../controller/auth')

router.post('/contact-user/save', saveData)
router.get('/contact-user/get/:id', isSignedIn, isValidToken, isAdmin, getData)
router.get(
    '/contact-user/get-all',
    isSignedIn,
    isValidToken,
    isAdmin,
    getAllData
)
router.delete(
    '/contact-user/delete/:id',
    isSignedIn,
    isValidToken,
    isAdmin,
    deleteDataById
)

module.exports = router
