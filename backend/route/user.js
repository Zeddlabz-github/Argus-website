const express = require('express')
const router = express.Router()

const {
    getUserById,
    getUser,
    getAllUsers,
    getUserByQuery,
    getAllStudents,
    getAllEmployees,
    getAllInsturctors
} = require('../controller/user')
const {
    isSignedIn,
    isAuthenticated,
    isAdmin,
    isValidToken
} = require('../controller/middleware')

router.param('userId', getUserById)
router.get('/user/get/:userId', isSignedIn, isAuthenticated, getUser)
router.post('/user/get-user', getUserByQuery)
router.get('/user/get-all', isSignedIn, isValidToken, isAdmin, getAllUsers)
router.get(
    '/student/get-all',
    isSignedIn,
    isValidToken,
    isAdmin,
    getAllStudents
)
router.get(
    '/employee/get-all',
    isSignedIn,
    isValidToken,
    isAdmin,
    getAllEmployees
)
router.get(
    '/instructor/get-all',
    isSignedIn,
    isValidToken,
    isAdmin,
    getAllInsturctors
)

module.exports = router
