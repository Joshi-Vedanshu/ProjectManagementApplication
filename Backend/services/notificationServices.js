var ProdctDb = require("../models").Product.models;

this.NotificationService = function () {
  // CREATE
  this.AddNotification = async function (request) {
    let status = true;
    await ProdctDb.Notification.create({
      adminId: request.adminId,
      requesterId: request.userId
    }).then(async function (notification) {
      console.log("Notification is created");

      if (notification == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.GetNotificationsOfOrganization = async function (adminId) {
    let notifications = await ProdctDb.Notification.findAll({
      where: {
        adminId: adminId,
        status: 0,
      },
    });
    if (notifications != undefined) {
      return notifications;
    }
    return null;
  };

  this.GetAllNotifications = async function () {
    let notifications = await ProdctDb.Notification.findAll();
    if (notifications != undefined) {
      return notifications;
    }
    return null;
  };

  // UPDATE
  this.updateNotification = async function (request) {
    let status = true;
    await ProdctDb.Notification.update(
      {
        name: request.body.name,
        code: request.body.code,
        contact: request.body.contact,
      },
      {
        where: { id: request.body.id },
      }
    )
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };

  // DELETE
  this.deleteNotification = async function (request) {
    let status = true;
    await ProdctDb.Notification.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.NotificationService = this.NotificationService;
