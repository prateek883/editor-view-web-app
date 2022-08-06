import React from "react";
import "../../src/menu.css";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

function Menu({ setChildData }) {
  const [submenuitems, setSubmenuitems] = useState({
    key: "",
    value: "",
    type: "",
    content: "",
  });
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState("");
  const [container, setContainer] = useState([]);
  const [containeritems, setContainerItems] = useState({
    id: "",
    idd: "",
    title: "",
    type: "",
    content: "",
  });
  const [active, setActive] = useState("");

  let handleChangetitle = (e) => {
    setContainerItems({ ...containeritems, title: e.target.value });
  };

  let handleChangetype = () => {
    let contenttype = document.getElementById("type").value;
    setContainerItems({ ...containeritems, type: contenttype });
    setSelect(contenttype);
  };

  useEffect(() => {
    var pid = "first";
    setContainerItems({ ...containeritems, id: pid });
  }, [containeritems]);

  let handleSubmit = () => {
    var newid = uuid();
    setContainerItems({ ...containeritems, idd: newid });
    setContainer([...container, containeritems]);
    setVisible(false);
  };

  let handleTextcontent = (e) => {
    setContainerItems({ ...containeritems, content: e.target.value });
  };

  let handleFilecontent = () => {
    var filecontent = document.getElementById("myFile").value;
    var splits = filecontent.split("fakepath\\");
    setContainerItems({ ...containeritems, content: splits[1] });
  };

  let addMore = (containeridd) => {
    setContainerItems({ ...containeritems, id: containeridd });
    setVisible(true);
  };

  let addMore2 = (containeridd) => {
    setContainerItems({ ...containeritems, id: containeridd });
    setVisible(true);
  };

  let showModal = () => {
    setVisible(true);
    var newid = uuid();
    setContainerItems({ ...containeritems, idd: newid });
  };

  let handleText = (e) => {
    setSubmenuitems({ ...submenuitems, content: e.target.value });
  };

  return (
    <div className="menu active">
      <nav>
        <ul className="hmenu">
          <li>
            <a href="#all" id="all">
              All
            </a>
          </li>
          <li>
            <a href="#board" id="board">
              Board
            </a>
          </li>
          <li>
            <a href="#graph" id="graph">
              Graph
            </a>
          </li>
          <li>
            <a href="#recent" id="recent">
              Recent
            </a>
          </li>
        </ul>
      </nav>
      <div className="menucontainer">
        <div className="addmenu">
          <input type="text" placeholder="DFIN" className="menuinput"></input>
          <FontAwesomeIcon
            icon={faPlus}
            className="faplus"
            onClick={showModal}
          />
          <FontAwesomeIcon icon={faExpand} className="faexpand" />
          <FontAwesomeIcon icon={faArrowLeft} className="faarrowleft" />
        </div>
        <ul>
          {container.map((obj) => (
            <div className="container">
              {obj.id === "first" ? (
                <div className="subcontainer">
                  <div
                    onClick={() => setChildData(obj)}
                    className="eachcontainer"
                  >
                    <li className="eachrow" onClick={() => setActive(obj.idd)}>
                      <a
                        href="#title"
                        className="title"
                        style={
                          active === obj.idd
                            ? { color: "red" }
                            : { color: "#777" }
                        }
                      >
                        {obj.title}
                      </a>
                    </li>
                    {obj.type === "container" ? (
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="faplus2"
                        onClick={addMore.bind(this, obj.idd)}
                      />
                    ) : null}
                  </div>
                </div>
              ) : null}
              <ul>
                {container.map((obj2) =>
                  obj.idd === obj2.id ? (
                    obj2.type === "container" ? (
                      <div className="subcontainer">
                        <div
                          onClick={() => setChildData(obj2)}
                          className="eachcontainer"
                        >
                          <li
                            className="eachrow"
                            onClick={() => setActive(obj2.idd)}
                          >
                            <a
                              href="#title"
                              className="title"
                              style={
                                active === obj2.idd
                                  ? { color: "red" }
                                  : { color: "#777" }
                              }
                            >
                              {obj2.title}
                            </a>
                          </li>
                          {obj2.type === "container" ? (
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="faplus2"
                              onClick={addMore2.bind(this, obj2.idd)}
                            />
                          ) : null}
                        </div>
                      </div>
                    ) : (
                      <ul>
                        <div onClick={() => setChildData(obj2)} className="row">
                          <li
                            className="eachrow"
                            onClick={() => setActive(obj2.idd)}
                          >
                            <a
                              href="#title"
                              className="title"
                              style={
                                active === obj2.idd
                                  ? { color: "red" }
                                  : { color: "#777" }
                              }
                            >
                              {obj2.title}
                            </a>
                          </li>
                        </div>
                      </ul>
                    )
                  ) : null
                )}
              </ul>
            </div>
          ))}
        </ul>
      </div>
      <Modal show={visible}>
        <Modal.Header>Create User</Modal.Header>
        <Modal.Body>
          Title<br></br>
          <input
            type="text"
            onChange={handleChangetitle}
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            id="editfname"
          ></input>
          <br></br>
          <br></br>
          Type<br></br>
          <select onChange={handleChangetype} id="type" className="select">
            <option value="container">Container</option>
            <option value="text">Text</option>
            <option value="img">Image</option>
            <option value="video">Video</option>
          </select>
          <br></br>
          <br></br>
          {select === "text" ? (
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              onChange={(handleText, handleTextcontent)}
            ></textarea>
          ) : select === "img" || select === "video" ? (
            <input type="file" id="myFile" onChange={handleFilecontent}></input>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={() => setVisible(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Menu;
