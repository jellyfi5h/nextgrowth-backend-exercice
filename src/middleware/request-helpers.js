const createError = require('http-errors');

const STATUSES = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
};


const sendResponse = (res, data, status = STATUSES.SUCCESS) => res.status(status).json(data).end();

const sendOne = (res, entity) => {
  const key = Object.keys(entity)[0];
  if (!entity || !entity[key]) {
    throw new createError(404, 'Entity not found');
  }
  return sendResponse(res, entity);
};

const sendList = (res, entityList) => sendResponse(res, entityList);
const sendCreated = (res, entity) => sendResponse(res, entity);
const sendUpdated = (res, updatedEntity) => sendResponse(res, updatedEntity);
const sendDeleted = res => sendResponse(res, null);
const sendAccepted = (res) => () => sendResponse(res, null);

module.exports = {
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted,
};