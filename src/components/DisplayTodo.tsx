import { title } from "process";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import DisplayCounter from "./DisplayCounter";
import { useSelector } from "react-redux";
import { ITodo } from "../interfaces";
import { RootState } from "../redux/store";
const DisplayTodo = () => {
  const storeTodo = useSelector((state: any) => state.todoReducers);
  console.log("storeTodo: ", storeTodo);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="mt-3 shadow-sm">
              <Card.Body>
                <h3>All todos are here</h3>
                <ListGroup>
                  {storeTodo.map(
                    (obj: { title: string; desc: string }, index: number) => (
                      <ListGroup.Item key={index}>
                        <h4>{obj?.title}</h4>
                        <p>{obj?.desc}</p>
                      </ListGroup.Item>
                    )
                  )}
                </ListGroup>
              </Card.Body>
            </Card>{" "}
          </Col>
        </Row>
      </Container>
      <DisplayCounter />{" "}
    </>
  );
};

export default DisplayTodo;
