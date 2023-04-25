var ProdctDb = require("../models").Product.models;

this.CardService = function () {
  // SEARCH
  this.Search = async function (request) {
    let data = await ProdctDb.Card.findAll({
      where: {
        name: {
          [Op.like]: request.query + "%",
        },
      },
    });
    return data;
  };
  // CREATE
  this.AddCard = async function (request) {
    let status = true;
    await ProdctDb.Card.create({
      type: request.body.type,
      name: request.body.name,
      description: request.body.description,
      startDate: request.body.startDate,
      endDate: request.body.endDate,
      parentId: request.body.parentId,
      assigneId: request.body.assigneId,
      reporterId: request.body.reporterId,
      status: request.body.status,
      storyPoint: request.body.storyPoint,
      duration: request.body.duration,
      comment: request.body.comment,
      attachmentId: request.body.attachmentId,
      sprintId: request.body.sprintId,
    }).then(async function (card) {
      console.log("Card is created");

      if (card == undefined) {
        status = false;
      }
    });
    return status;
  };

  // READ
  this.getCards = async function (request) {
    let cards = await ProdctDb.Card.findAll();
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // READ (BY ID)
  this.getCardsById = async function (request) {
    let cards = await ProdctDb.Card.findAll({
      where: {
        id: request.body.id,
      },
    });
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // READ (BY PARENT ID)
  this.getCardsByParentId = async function (request) {
    let cards = await ProdctDb.Card.findAll({
      where: {
        parentId: request.body.parentId,
      },
    });
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // READ (BY ASSIGNEE ID)
  this.GetCardsByAssigneeId = async function (userId) {
    let cards = await ProdctDb.Card.findAll({
      where: {
        assigneeId: userId,
      },
    });
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // READ (BY REPORTER ID)
  this.getCardsByReporterId = async function (request) {
    let cards = await ProdctDb.Card.findAll({
      where: {
        reporterId: request.body.reporterId,
      },
    });
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // READ (BY ATTACHMENT ID)
  this.getCardsByAttachmentId = async function (request) {
    let cards = await ProdctDb.Card.findAll({
      where: {
        attachmentId: request.body.attachmentId,
      },
    });
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // READ (BY SPRINT ID)
  this.GetCardsBySprintId = async function (sprintId) {
    let cards = await ProdctDb.Card.findAll({
      where: {
        sprintId: sprintId,
      },
    });
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  this.GetAllCardBasedOnSprints = async function (sprintId) {
    let cards = await ProdctDb.Card.findAll({
      where: {
        sprintId: sprintId,
      },
    });
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // UPDATE (BY ID)
  this.UpdateCard = async function (request) {
    let status = false;
    await ProdctDb.Card.update(
      {
        type: request.body.type,
        name: request.body.name,
        description: request.body.description,
        startDate: request.body.startDate,
        endDate: request.body.endDate,
        parentId: request.body.parentId,
        assigneId: request.body.assigneId,
        reporterId: request.body.reporterId,
        status: request.body.status,
        storyPoint: request.body.storyPoint,
        duration: request.body.duration,
        comment: request.body.comment,
        attachmentId: request.body.attachmentId,
        sprintId: request.body.sprintId,
      },
      {
        where: { id: request.body.id },
      }
    ).then(async function (card) {
      if (card != undefined) {
        status = true;
      }
    });
    return status;
  };

  // UPDATE (BY PARENT ID)
  this.updateCardsByParentId = async function (request) {
    let status = true;
    await ProdctDb.Card.update(
      {
        type: request.body.type,
        name: request.body.name,
        description: request.body.description,
        startDate: request.body.startDate,
        endDate: request.body.endDate,
        parentId: request.body.parentId,
        assigneId: request.body.assigneId,
        reporterId: request.body.reporterId,
        status: request.body.status,
        storyPoint: request.body.storyPoint,
        duration: request.body.duration,
        comment: request.body.comment,
        attachmentId: request.body.attachmentId,
        sprintId: request.body.sprintId,
      },
      {
        where: { parentId: request.body.parentId },
      }
    )
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };

  // UPDATE (BY ASSIGNEE ID)
  this.updateCardsByAssigneeId = async function (request) {
    let status = true;
    await ProdctDb.Card.update(
      {
        type: request.body.type,
        name: request.body.name,
        description: request.body.description,
        startDate: request.body.startDate,
        endDate: request.body.endDate,
        parentId: request.body.parentId,
        assigneId: request.body.assigneId,
        reporterId: request.body.reporterId,
        status: request.body.status,
        storyPoint: request.body.storyPoint,
        duration: request.body.duration,
        comment: request.body.comment,
        attachmentId: request.body.attachmentId,
        sprintId: request.body.sprintId,
      },
      {
        where: { assigneeId: request.body.assigneeId },
      }
    )
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };

  // UPDATE (BY REPORTER ID)
  this.updateCardsByReporterId = async function (request) {
    let status = true;
    await ProdctDb.Card.update(
      {
        type: request.body.type,
        name: request.body.name,
        description: request.body.description,
        startDate: request.body.startDate,
        endDate: request.body.endDate,
        parentId: request.body.parentId,
        assigneId: request.body.assigneId,
        reporterId: request.body.reporterId,
        status: request.body.status,
        storyPoint: request.body.storyPoint,
        duration: request.body.duration,
        comment: request.body.comment,
        attachmentId: request.body.attachmentId,
        sprintId: request.body.sprintId,
      },
      {
        where: { reporterId: request.body.reporterId },
      }
    )
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };

  // UPDATE (BY ATTACHMENT ID)
  this.updateCardsByAttachmentId = async function (request) {
    let status = true;
    await ProdctDb.Card.update(
      {
        type: request.body.type,
        name: request.body.name,
        description: request.body.description,
        startDate: request.body.startDate,
        endDate: request.body.endDate,
        parentId: request.body.parentId,
        assigneId: request.body.assigneId,
        reporterId: request.body.reporterId,
        status: request.body.status,
        storyPoint: request.body.storyPoint,
        duration: request.body.duration,
        comment: request.body.comment,
        attachmentId: request.body.attachmentId,
        sprintId: request.body.sprintId,
      },
      {
        where: { attachmentId: request.body.attachmentId },
      }
    )
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };

  // UPDATE (BY SPRINT ID)
  this.updateCardsBySprintId = async function (request) {
    let status = true;
    await ProdctDb.Card.update(
      {
        type: request.body.type,
        name: request.body.name,
        description: request.body.description,
        startDate: request.body.startDate,
        endDate: request.body.endDate,
        parentId: request.body.parentId,
        assigneId: request.body.assigneId,
        reporterId: request.body.reporterId,
        status: request.body.status,
        storyPoint: request.body.storyPoint,
        duration: request.body.duration,
        comment: request.body.comment,
        attachmentId: request.body.attachmentId,
        sprintId: request.body.sprintId,
      },
      {
        where: { sprintId: request.body.sprintId },
      }
    )
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };

  // DELETE
  this.DeleteCard = async function (request) {
    let status = false;
    await ProdctDb.Card.destroy({
      where: { id: request.body.id },
    }).then(async function (card) {
      if (card != undefined) {
        status = true;
      }
    });
    return status;
  };
};

exports.CardService = this.CardService;
