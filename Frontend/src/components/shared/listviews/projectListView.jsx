import { useState, useEffect } from "react";
import "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css";
export default function ProjectListView({ addView }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/project", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProjects(data));
    console.log(projects);
  }, []);

  const handleDelete = async (event) => {
    console.log("Pressed Delete");
    await fetch("http://localhost:3005/project", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      },
      body: JSON.stringify({
        id: event, // ID of the data to delete
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
    await fetch("http://localhost:3005/project", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
          .getItem("accesstoken")
          .replace(/^"(.*)"$/, "$1")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProjects(data));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <div className="row">
              <div className="col-md-6">
                <h4 className="m-0 font-weight-bold text-primary">PROJECTS</h4>
              </div>
              <div className="col-md-6">
                <button
                  onClick={() => {
                    addView("Project-CU", true, null);
                  }}
                  className="btn btn-primary float-right px-4 py-2"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <div
                id="dataTable_wrapper"
                className="dataTables_wrapper dt-bootstrap4"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="dataTable_length">
                      <label>
                        Show
                        <select
                          name="dataTable_length"
                          aria-controls="dataTable"
                          className="custom-select custom-select-sm form-control form-control-sm"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>{" "}
                        entries
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="dataTable_filter" className="dataTables_filter">
                      <label>
                        Search:
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder=""
                          aria-controls="dataTable"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      className="table table-bordered dataTable"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                      role="grid"
                      aria-describedby="dataTable_info"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting sorting_asc"
                            tabIndex="0"
                            aria-controls="dataTable"
                            rowSpan="1"
                            colSpan="1"
                            aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                            style={{ width: "20%" }}
                          >
                            Project Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTable"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Position: activate to sort column ascending"
                            style={{ width: "20%" }}
                          >
                            Description
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTable"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Position: activate to sort column ascending"
                            style={{ width: "20%" }}
                          >
                            Start Date
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTable"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Position: activate to sort column ascending"
                            style={{ width: "20%" }}
                          >
                            End Date
                          </th>
                          <th
                            className="sorting"
                            tabIndex="0"
                            aria-controls="dataTable"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Position: activate to sort column ascending"
                            style={{ width: "20%" }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th rowSpan="1" colSpan="1">
                            Project Name
                          </th>
                          <th rowSpan="1" colSpan="1">
                            Description
                          </th>
                          <th rowSpan="1" colSpan="1">
                            Start Date
                          </th>
                          <th rowSpan="1" colSpan="1">
                            End Date
                          </th>
                          <th rowSpan="1" colSpan="1">
                            Action
                          </th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {projects.map((item) => (
                          <tr className="even" key={item.id}>
                            <td
                              key={item.id + "name"}
                              onClick={() => {
                                addView("Project-CU", false, item);
                              }}
                              className="sorting_1"
                            >
                              {item.name}
                            </td>
                            <td
                              key={item.id + "des"}
                              onClick={() => {
                                addView("Project-CU", false, item);
                              }}
                              className="sorting_1"
                            >
                              {item.description}
                            </td>
                            <td
                              key={item.id + "sd"}
                              onClick={() => {
                                addView("Project-CU", false, item);
                              }}
                              className="sorting_1"
                            >
                              {item.startDate}
                            </td>
                            <td
                              key={item.id + "ed"}
                              onClick={() => {
                                addView("Project-CU", false, item);
                              }}
                              className="sorting_1"
                            >
                              {item.endDate}
                            </td>
                            <td>
                              <button
                                onClick={() => handleDelete(item.id)}
                                type="button"
                                className="btn btn-danger mx-1 px-2"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="vendor/datatables/jquery.dataTables.min.js"></script>
      <script src="vendor/datatables/dataTables.bootstrap4.min.js"></script>
      <script src="js/demo/datatables-demo.js"></script>
    </>
  );
}
