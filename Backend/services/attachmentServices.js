var ProdctDb = require("../models").Product.models;

this.AttachmentService = function () {
  // CREATE
  this.AddAttachment = async function (request) {
    let status = true;
    await ProdctDb.Attachment.create({
      dataPath: request.body.dataPath,
      name: request.body.name,
    }).then(async function (attachment) {
      console.log("Attachment is created");

      if (attachment == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getAttachments = async function (request) {
    let attachments = await ProdctDb.Attachment.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (attachments != undefined) {
      return attachments;
    }
    return null;
  };

  // UPDATE
  this.updateAttachment = async function (request) {
    let status = true;
    await ProdctDb.Attachment.update(
      {
        dataPath: request.body.dataPath,
        name: request.body.name,
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
  this.deleteAttachment = async function (request) {
    let status = true;
    await ProdctDb.Attachment.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.AttachmentService = this.AttachmentService;
