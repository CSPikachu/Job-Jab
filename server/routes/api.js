const db = require('../queries/queries.js');
const express = require('express');
const jobAppsController = require('../controllers/jobAppsController.js')
const jobAppsRouter = express.Router()

jobAppsRouter.get('/', db.getApps);
jobAppsRouter.get('/:id', db.getAppById);
jobAppsRouter.post('/', db.createApp);
jobAppsRouter.put('/:id', db.updateApp);
jobAppsRouter.delete('/:id', db.deleteApp);

// jobAppsRouter.get('/', jobAppsController.getApps, (req, res) => {
//   res.status(200).send(res.locals.apps)
// })

// jobAppsRouter.post('/', jobAppsController.postApp, (req, res) => {
//   res.status(200).send(res.locals.app)
// })

// jobAppsRouter.put('/:id', jobAppsController.updateApp, (req, res) => {
//   res.status(200).send(res.locals.updatedApp)
// })

// jobAppsRouter.get('/:id', jobAppsController.getOneApp, (req, res) => {
//   res.status(200).json(res.locals.oneApp)
// })

// jobAppsRouter.delete('/:id', jobAppsController.deleteApp, (req, res) => {
//   res.sendStatus(200)
// })


module.exports = jobAppsRouter;
