var express = require("express");
var router = express.Router();
const sessions = require("express-session");
const token = require("../middleware_functions/token");
const {
  validateSessionAndHeader,
} = require("../middleware_functions/manageSessionAndHeader");
var express = require("express");
var router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const notificationController = require("../controllers/notificationController");

router.get("/", async function (req, res, next) {
  console.log("here");
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.GetDashboardData(
      token.getUserFromTheToken(sessions.token).id,
      req
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.post("/join", async function (req, res, next) {
  console.log("here");
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    if (
      await dashboardController.JoinOrganization(
        token.getUserFromTheToken(sessions.token).id,
        req.body.orgId
      )
    ) {
      res.status(200).send();
    } else {
      res.status(502).send();
    }
  } else {
    res.status(auth.code).send();
  }
});

router.post("/add", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.AddOrganization(
      token.getUserFromTheToken(sessions.token).id,
      req
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.post("/project", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageProject(
      token.getUserFromTheToken(sessions.token).id,
      req,
      0
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.get("/project", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageProject(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.put("/project", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageProject(
      token.getUserFromTheToken(sessions.token).id,
      req,
      2
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.delete("/project", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageProject(
      token.getUserFromTheToken(sessions.token).id,
      req,
      3
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.post("/sprint", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageSprint(
      token.getUserFromTheToken(sessions.token).id,
      req,
      0
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.get("/sprint", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageSprint(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.put("/sprint", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageSprint(
      token.getUserFromTheToken(sessions.token).id,
      req,
      2
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.delete("/sprint", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageSprint(
      token.getUserFromTheToken(sessions.token).id,
      req,
      3
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.post("/team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageTeam(
      token.getUserFromTheToken(sessions.token).id,
      req,
      0
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.get("/team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageTeam(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.put("/team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageTeam(
      token.getUserFromTheToken(sessions.token).id,
      req,
      2
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.delete("/team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageTeam(
      token.getUserFromTheToken(sessions.token).id,
      req,
      3
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.post("/card", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageCard(
      token.getUserFromTheToken(sessions.token).id,
      req,
      0
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.get("/card", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageCard(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.put("/card", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageCard(
      token.getUserFromTheToken(sessions.token).id,
      req,
      2
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.delete("/card", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageCard(
      token.getUserFromTheToken(sessions.token).id,
      req,
      3
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.post("/user-team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageUserTeamMapping(
      token.getUserFromTheToken(sessions.token).id,
      req,
      0
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.get("/user-team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageUserTeamMapping(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.put("/user-team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageUserTeamMapping(
      token.getUserFromTheToken(sessions.token).id,
      req,
      2
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.delete("/user-team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageUserTeamMapping(
      token.getUserFromTheToken(sessions.token).id,
      req,
      3
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.post("/project-team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageProjectTeamMapping(
      token.getUserFromTheToken(sessions.token).id,
      req,
      0
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.get("/project-team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageProjectTeamMapping(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.put("/project-team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageProjectTeamMapping(
      token.getUserFromTheToken(sessions.token).id,
      req,
      2
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.delete("/project-team", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.ManageProjectTeamMapping(
      token.getUserFromTheToken(sessions.token).id,
      req,
      3
    );
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

router.get("/project/search", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.Search(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.get("/sprint/search", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.Search(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.get("/card/search", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.Search(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.get("/team/search", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.Search(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.get("/user/search", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await dashboardController.Search(
      token.getUserFromTheToken(sessions.token).id,
      req,
      1
    );
    res.status(200).send(data);
  } else {
    res.status(auth.code).send();
  }
});

router.get("/notifications", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    let data = await notificationController.GetNotifications(token.getUserFromTheToken(sessions.token).id);
    if (data) {
      res.status(200).send(data);
    }
    else {
      res.status(502).send(data);
    }
  }
  else {
    res.status(auth.code).send();
  }
});

router.put("/setuser", async function (req, res, next) {
  let auth = validateSessionAndHeader(sessions, req);
  if (auth.validation && auth.code === 202) {
    console.log(req.body);
    let data = await notificationController.SetRolePermissionOfUser(
      token.getUserFromTheToken(sessions.token).id, req);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(502).send(data);
    }
  } else {
    res.status(auth.code).send();
  }
});

module.exports = router;
