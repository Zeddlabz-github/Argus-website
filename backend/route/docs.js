/**
 * @author krish
 */

const express = require('express')
const router = express.Router()
const {
    uploadDocs,
    getUserDocs,
    getDocFile,
    updateDocs,
    deleteDocById,
    deleteDocs,
    approveDocs
} = require('../controller/docs')
const {
    isSignedIn,
    isValidToken,
    isAdmin
} = require('../controller/middleware')

router.post('/docs/upload', isSignedIn, isValidToken, uploadDocs)
router.post(
    '/docs/approve/:userId',
    isSignedIn,
    isValidToken,
    isAdmin,
    approveDocs
)
router.get('/docs/get', isSignedIn, isValidToken, getUserDocs)
router.get('/docs/get-doc/:id', isSignedIn, isValidToken, getDocFile)
router.put('/docs/update', isSignedIn, isValidToken, updateDocs)
router.delete(
    '/docs/delete/:id',
    isSignedIn,
    isValidToken,
    isAdmin,
    deleteDocById
)
router.delete(
    '/docs/delete-docs',
    isSignedIn,
    isValidToken,
    isAdmin,
    deleteDocs
)

module.exports = router
