import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function ProductList() {
    const rows = [
        {
          id: 1,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
        {
          id: 2,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
        {
          id: 3,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
        {
          id: 4,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
        {
          id: 5,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
        {
          id: 6,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
        {
          id: 7,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
        {
          id: 8,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
        {
          id: 9,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
        {
          id: 10,
          name: "Apple airpods",
    
          images:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH",
          stocks: 123,
          status: "active",
          prices: "$120",
        },
      ];
      const columns = [
        { field: "id", headerName: "ID", width: 90 },
    
        {
          field: "products",
          headerName: "Products",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.images} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "stocks",
          headerName: "Stocks",
          type: "stocks",
          width: 200,
        },
        {
          field: "status",
          headerName: "Status",
    
          width: 90,
        },
        {
          field: "prices",
          headerName: "Prices",
    
          width: 200,
        },
        {
          field: "action",
          headerName: "Action",
    
          width: 200,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row.id}>
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
    
      <div className="productList">
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
