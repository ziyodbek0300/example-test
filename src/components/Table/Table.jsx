import React from "react";
import TableRow from "./TableRow";
import { useDispatch } from "react-redux";
import { getCFile, getNestedFS } from "../../redux/roots/actions";
import { useNavigate } from "react-router-dom";

function Table({ tds }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getNested = (f_id, data_type) => {
    if (data_type === "folder") {
      dispatch(getNestedFS(f_id));
    } else {
      dispatch(getCFile(f_id));
      navigate(`/fs/doc_view/${f_id}`);
    }
  };

  return (
    <div className={"lg:w-[90%] mx-auto overflow-auto"}>
      <table className={"w-full py-4 my-4 min-w-[600px]"}>
        <thead className={"bg-white shadow"}>
          <tr className={"border-b"}>
            {tds[0] !== null && tds[0] !== undefined
              ? Object.keys(tds[0])?.map((name, index) => {
                  return (
                    <th className={"py-3"} key={`${name + index}`}>
                      {name}
                    </th>
                  );
                })
              : null}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tds) &&
            tds?.map((obj, index) => {
              let fields = Object.keys(obj);
              return (
                <TableRow
                  getNested={getNested}
                  key={index}
                  values={fields}
                  object={obj}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
