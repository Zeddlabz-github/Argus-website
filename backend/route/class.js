/**
 * @author krish
 */

const express = require('express')
const router = express.Router()
const {
    createClass,
    enrollStudents,
    removeStudents,
    updateClass,
    getClassById,
    getAllClasses,
    getStudentClasses,
    deleteClassById
} = require('../controller/class')
const {
    isSignedIn,
    isValidToken,
    isAdmin,
    isInstructor
} = require('../controller/middleware')

router.post(
    '/class/create',
    isSignedIn,
    isValidToken,
    isInstructor || isAdmin,
    createClass
)

router.put(
    '/class/enroll/:classId',
    isSignedIn,
    isValidToken,
    isInstructor || isAdmin,
    enrollStudents
)

router.put(
    '/class/remove-student/:classId',
    isSignedIn,
    isValidToken,
    isInstructor || isAdmin,
    removeStudents
)

router.put(
    '/class/update/:classId',
    isSignedIn,
    isValidToken,
    isInstructor || isAdmin,
    updateClass
)

router.get('/class/get/:classId', isSignedIn, isValidToken, getClassById)

router.get(
    '/class/get-all/',
    isSignedIn,
    isValidToken,
    isInstructor || isAdmin,
    getAllClasses
)

router.get(
    '/class/get-student/:studentId',
    isSignedIn,
    isValidToken,
    isInstructor || isAdmin,
    getStudentClasses
)

router.delete(
    '/class/delete/:classId',
    isSignedIn,
    isValidToken,
    isInstructor || isAdmin,
    deleteClassById
)

module.exports = router
