// Generated by CoffeeScript 1.7.1
var application, contact, contactLog;

contact = require('./contact');

contactLog = require('./contact_log');

application = require('./application');

module.exports = {
  '': {
    get: application.index
  },
  'widget': {
    get: application.widget
  },
  'config': {
    post: application.setConfig
  },
  'contactid': {
    param: contact.fetch
  },
  'logid': {
    param: contactLog.fetch
  },
  'contacts.vcf': {
    get: contact.vCard
  },
  'contacts/:contactid/:fn.vcf': {
    get: contact.vCardContact
  },
  'contacts': {
    get: contact.list,
    post: contact.create
  },
  'contacts/:contactid': {
    get: contact.read,
    put: contact.update,
    del: contact["delete"]
  },
  'contacts/:contactid/picture.png': {
    get: contact.picture
  },
  'contacts/:contactid/logs': {
    get: contactLog.byContact,
    post: contactLog.create
  },
  'contacts/:contactid/new-call-task': {
    post: contact.createTask
  },
  'contacts/:contactnotfetched/logs/:logid': {
    put: contactLog.update,
    del: contactLog["delete"]
  },
  'logs': {
    post: contactLog.merge
  }
};
