import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { setLoading } from "../redux/roots/actions";
import { setBRS } from "../redux/breadcrumb/actions";
import FolderIcon from "../statics/icons/canvas-logo.svg";
import moment from "moment/moment";

function Search() {
  const { query } = useParams();
  const search = useSelector((state) => state.search);
  return (
    <div>
      <h1>{query}</h1>
      <table className={"min-w-7xl w-[96%] text-xl mx-auto"}>
        <thead className={"bg-white border-b border-gray-200 text-gray-450"}>
          <tr className={"roboto-slab"}>
            <th className={"font-normal p-4 px-0 text-left pl-40"}>Name</th>
            <th className={"font-normal p-4 text-left"}>Matches</th>
            <th className={"font-normal p-4 text-center"}>Location</th>
            <th className={"font-normal p-4 text-center"}>Date Modified</th>
            <th className={"font-normal p-4 text-left"}>Size</th>
          </tr>
        </thead>
        {search.loading ? (
          <tbody>
            <tr>
              <td className={"flex justify-end py-10"} colSpan={6}>
                <Loading />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {search.searchData.files.map((data, index) => {
              return (
                <tr
                  key={index}
                  className={
                    "hover:bg-gray-100 transition-all hover:text-red-450 active:text-red-250 active:bg-gray-200 cursor-pointer"
                  }
                  onClick={() => {
                    console.log("row clicked");
                  }}
                >
                  <td className={"py-5 px-2 w-35%]"}>
                    <div
                      className={
                        "flex justify-start pl-36 relative name-folder items-center"
                      }
                    >
                      <img
                        className={"absolute left-10 w-12"}
                        src={FolderIcon}
                        alt="folder icon"
                      />
                      <span className={"inline-block pl-2"}>
                        {data.file_name}
                      </span>
                    </div>
                  </td>
                  <td className={"py-5 px-2 text-center w-[10%]"}>
                    {data.matches.length}
                  </td>
                  <td className={"py-5 px-4 w-[20%] text-left"}>
                    {`${data.full_path}/${data.file_name}`}
                  </td>
                  <td className={"py-5 px-4 w-[20%] text-center"}>
                    {data.modified_at}
                  </td>
                  <td className={"p-5 pl-6 w-[15%]"}>
                    {data.file_size ? data.file_size : "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default Search;
