import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./UserList.css";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../DummyData";

import { Link } from "react-router-dom";
import { useState } from "react";



export default function UserList() {
  const [data, setData] = useState(userRows);
  // Filters rows(from data)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // Edit function
  const handleEdit = (id) => {
    
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "avatar",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="rowUser">
            <img src={params.row.avatar} alt="" className="tableAvatar" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "transaction", headerName: "Transaction", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button
                className="userListEdit"
                onClick={() => handleEdit(params.row.id)}
              >
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <div className="tableContainer">
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            disableSelectionOnClick
            rows={data}
            columns={columns}
            pageSize={7}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
