import "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css";
import Select from "react-select";
import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

export default function UserTeam() {
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "pear", label: "Pear" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handleClick = () => {
    for (let i = 0; i < selectedOptions.length; i++) {
      console.log(selectedOptions[i].label);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h4 className="m-0 font-weight-bold text-primary">USER TEAM</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="p-6">
                  <label htmlFor="type" className="form-label">
                    Select Team
                  </label>
                  <Typeahead
                    id="TypeId"
                    onChange={(selected) => {
                      // Handle selections...
                    }}
                    options={[
                      "Bug",
                      "Sub-Bug",
                      "Story",
                      "Task",
                      "Sub-Task",
                      "Defect",
                    ]}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-6">
                  <label htmlFor="type" className="form-label">
                    Select Users
                  </label>
                  <Select
                    options={options}
                    isMulti
                    value={selectedOptions}
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
            </div>
            <br />
            <button
              type="button"
              className="btn btn-primary float-right px-4"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
