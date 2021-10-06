/**
 * @author krish
 */

const express = require('express');
const router = express.Router();
const {
  addEvent,
  updateEvent,
  getEvents,
  getAllEvents,
  deleteEventById,
  deleteUserEvents,
  deleteAllEvents,
} = require('../controller/calenderEvent');
const { isSignedIn, isValidToken, isAdmin } = require('../controller/auth');

router.post(
  '/calender-event/create',
  isSignedIn,
  isValidToken,
  isAdmin,
  addEvent
);
router.put(
  '/calender-event/update/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  updateEvent
);
router.get('/calender-event/get/:userId', isSignedIn, isValidToken, getEvents);
router.get(
  '/calender-event/get-all',
  isSignedIn,
  isValidToken,
  isAdmin,
  getAllEvents
);

router.delete(
  '/calender-event/delete/:id',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteEventById
);
router.delete(
  '/calender-event/delete-user/:userId',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteUserEvents
);
router.delete(
  '/calender-event/delete-all',
  isSignedIn,
  isValidToken,
  isAdmin,
  deleteAllEvents
);

module.exports = router;
