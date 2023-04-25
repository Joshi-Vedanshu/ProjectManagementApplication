import React from "react";
import NavBar from "../../NavBar";
import NavSide from "../../NavSide";
import "./Style.css";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { HeaderStories } from "../../headerstories";

export function Backlog() {
  return (
    <div>
      <NavBar />
      <NavSide />
      <HeaderStories />
      <div className="content">
        <ListGroup as="ul">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Story 1</div>
              Description 1
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Story 2</div>
              Description 2
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Story 3</div>
              Description 3
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
