import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { ApiServices } from "../Config/api";

function AddForm(props) {
  const [taskName, setTaskName] = useState("");

  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [taskNameError, setTaskNameError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [dateError, setDateError] = useState("");

  const validateStep = (event) => {
    if (taskName.length === 0) {
      setTaskNameError("*Please enter TaskName");
    } else if (comment.length == 0) {
      setCommentError("*Please enter comment");
    } else if (date.length === 0) {
      setDateError("*Please enter date");
    } else {
      let params = {
        taskName: taskName,
        comment: comment,
        date: date,
      };
      ApiServices.addTodo(params)
        .then((response) => {
          alert("Task Successfully Added")

          window.location.href = "/";
        })
        .catch((error) => {
          alert("Something went wrong");
        });
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add TODO Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form>
              <div>
                <div
                  className="form-element"
                  style={{ display: "flex", justifyContent: "row" }}
                >
                  <div>
                    <label className="content">TaksName</label>
                  </div>
                  <input
                    placeholder="Enter Task"
                    className="form-input"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                  {taskNameError.length > 0 && (
                    <span style={{ color: "red" }}>{taskNameError}</span>
                  )}
                </div>
                <div
                  className="form-element"
                  style={{ display: "flex", justifyContent: "row" }}
                >
                  <div>
                    <label className="content">Comment</label>
                  </div>
                  <input
                    placeholder="Enter Comment"
                    className="form-input"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  {commentError.length > 0 && (
                    <span style={{ color: "red" }}>{commentError}</span>
                  )}
                </div>
                <div
                  className="form-element"
                  style={{ display: "flex", justifyContent: "row" }}
                >
                  <div>
                    <label className="content">Date</label>
                  </div>
                  <input
                    type="date"
                    className="form-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  {dateError.length > 0 && (
                    <span style={{ color: "red" }}>{dateError}</span>
                  )}
                </div>

                <div className="form-element form-button">
                  <button
                    className="button1 "
                    onClick={() => validateStep()}
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddForm;
