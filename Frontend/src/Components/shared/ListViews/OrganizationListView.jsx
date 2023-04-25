import { useEffect, useState } from "react";
import "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css"
export default function OrganizationListView() {

    const [organizations, setOrganizations] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);

    const joinOrganization = async (id) => {
        let obj = { orgId: id };
        setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, id]);
        fetch("http://localhost:3005/join", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("accesstoken").replace(/^"(.*)"$/, "$1")}`
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(data => setDisabledButtons(disabledButtons.filter((disabledId) => disabledId !== id)));
    };
    useEffect(() => {
        fetch("http://localhost:3005/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("accesstoken").replace(/^"(.*)"$/, "$1")}`
            },
        })
            .then(response => response.json())
            .then(data => setOrganizations(data));
    }, [])

    return (<>
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Organization</h1>

            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="dataTables_length" id="dataTable_length"><label>Show <select
                                        name="dataTable_length" aria-controls="dataTable"
                                        className="custom-select custom-select-sm form-control form-control-sm">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select> entries</label></div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div id="dataTable_filter" className="dataTables_filter"><label>Search:<input type="search"
                                        className="form-control form-control-sm" placeholder=""
                                        aria-controls="dataTable" /></label></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0"
                                        role="grid" aria-describedby="dataTable_info" style={{ "width": "100%" }}>
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting sorting_asc" tabIndex="0" aria-controls="dataTable"
                                                    rowSpan="1" colSpan="1" aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending"
                                                    style={{ "width": "190.775px" }}>Name</th>
                                                <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1"
                                                    colSpan="1" aria-label="Position: activate to sort column ascending"
                                                    style={{ "width": "309.712px" }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th rowSpan="1" colSpan="1">Name</th>
                                                <th rowSpan="1" colSpan="1">Action</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {organizations.map((item) => (
                                                <tr className="even" key={item.id}>
                                                    <td className="sorting_1">{item.name}</td>
                                                    <td>
                                                        <button className="btn btn-primary" disabled={disabledButtons.includes(item.id)} onClick={() => joinOrganization(item.id)}>{disabledButtons.includes(item.id) ? "Adding..." : "Join"}</button>
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
    </>);
}
