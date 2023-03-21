var ProdctDb = require("../models").Product.models;

this.CardService = function () {
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
    let cards = await ProdctDb.Cards.findAll();
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // READ (BY ID)
  this.getCardsById = async function (request) {
    let cards = await ProdctDb.Cards.findAll({
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
    let cards = await ProdctDb.Cards.findAll({
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
  this.getCardsByAssigneeId = async function (request) {
    let cards = await ProdctDb.Cards.findAll({
      where: {
        assigneeId: request.body.assigneeId,
      },
    });
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // READ (BY REPORTER ID)
  this.getCardsByReporterId = async function (request) {
    let cards = await ProdctDb.Cards.findAll({
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
    let cards = await ProdctDb.Cards.findAll({
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
  this.getCardsBySprintId = async function (request) {
    let cards = await ProdctDb.Cards.findAll({
      where: {
        sprintId: request.body.sprintId,
      },
    });
    if (cards != undefined) {
      return cards;
    }
    return null;
  };

  // UPDATE (BY ID)
  this.updateCardsById = async function (request) {
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
        where: { id: request.body.id },
      }
    )
      .success((result) => (status = true))
      .error((err) => (status = false));
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
  this.deleteCard = async function (request) {
    let status = true;
    await ProdctDb.Card.destroy({
      where: { id: request.body.id },
    })
      .success((result) => (status = true))
      .error((err) => (status = false));
    return status;
  };
};

exports.CardService = this.CardService;