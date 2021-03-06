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
    deleteClassById,
    markAttendance
} = require('../controller/class')
const {
    isSignedIn,
    isValidToken,
    isAdminOrInstructor
} = require('../controller/middleware')

router.post(
    '/class/create/:instructorId',
    isSignedIn,
    isValidToken,
    isAdminOrInstructor,
    createClass
)

router.put(
    '/class/enroll/:classId',
    isSignedIn,
    isValidToken,
    isAdminOrInstructor,
    enrollStudents
)

router.put(
    '/class/remove-student/:classId',
    isSignedIn,
    isValidToken,
    isAdminOrInstructor,
    removeStudents
)

router.put(
    '/class/update/:classId',
    isSignedIn,
    isValidToken,
    isAdminOrInstructor,
    updateClass
)

router.get('/class/get/:classId', isSignedIn, isValidToken, getClassById)

router.get(
    '/class/get-all',
    isSignedIn,
    isValidToken,
    isAdminOrInstructor,
    getAllClasses
)

router.get('/class/get-student', isSignedIn, isValidToken, getStudentClasses)

router.delete(
    '/class/delete/:classId',
    isSignedIn,
    isValidToken,
    isAdminOrInstructor,
    deleteClassById
)

router.put(
    '/class/attendence/:id/:studentId',
    isSignedIn,
    isValidToken,
    isAdminOrInstructor,
    markAttendance
)

module.exports = router
