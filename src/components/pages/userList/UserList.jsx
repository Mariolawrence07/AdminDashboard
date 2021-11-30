import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const rows = [
    {
      id: 1,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 2,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 3,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 4,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 5,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 6,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 7,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 8,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 9,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
    {
      id: 10,
      username: "Jon Snow",

      avatar:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
      email: "jon@vmail.com",
      status: "active",
      transaction: "$120",
    },
  ];
  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "user",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",

      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction",

      width: 200,
    },
    {
      field: "action",
      headerName: "Action",

      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
