import "../../../assets/vendor/datatables/dataTables.bootstrap4.min.css"
export default function OrganizationListView() {
    return (<>
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
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
                                    <table className="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0"
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

                                            <tr className="odd">
                                                <td className="sorting_1">Airi Satou</td>
                                                <td>Accountant</td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">Angelica Ramos</td>
                                                <td>Chief Executive Officer (CEO)</td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">Bradley Greer</td>
                                                <td>Software Engineer</td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">Brenden Wagner</td>
                                                <td>Software Engineer</td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">Brielle Williamson</td>
                                                <td>Integration Specialist</td>
                                            </tr>
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