/**
 * @author krish
 */

 const express = require("express");
 const router = express.Router();
 const {
   saveData,
   getAllData,
   getDataById,
   updateDataById,
   deleteDataById,
   getPhoto,
 } = require("../controller/client");
 const { isSignedIn, isValidToken, isAdmin } = require("../controller/auth");
 
 router.post("/client/create", isSignedIn, isValidToken, isAdmin , saveData);
 router.get("/client/get/:id", getDataById);
 router.get("/client/get-all", isSignedIn, isValidToken, isAdmin , getAllData);
 router.put(
   "/client/update/:id",
   isSignedIn,
   isValidToken,
   isAdmin,
   updateDataById
 );
 router.get('/client/get-photo/:id', getPhoto);
 router.delete(
   "/client/delete/:id",
   isSignedIn,
   isValidToken,
   isAdmin,
   deleteDataById
 );
 
 module.exports = router;
 