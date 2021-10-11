/**
 * @author krish
 */

const express = require('express')
const router = express.Router()
const {
    uploadData,
    updateData,
    getData,
    getDoc,
    deleteDataById,
    deleteDocs
} = require('../controller/docs')
const { isSignedIn, isValidToken, isAdmin } = require('../controller/auth')

router.post('/docs/upload', isSignedIn, isValidToken, uploadData)
router.put('/docs/update', isSignedIn, isValidToken, updateData)
router.get('/docs/get', isSignedIn, isValidToken, getData)
router.get('/docs/get-doc/:id', isSignedIn, isValidToken, getDoc)
router.delete(
    '/docs/delete/:id',
    isSignedIn,
    isValidToken,
    isAdmin,
    deleteDataById
)

router.delete(
    '/docs/delete-docs',
    isSignedIn,
    isValidToken,
    isAdmin,
    deleteDocs
)

module.exports = router
