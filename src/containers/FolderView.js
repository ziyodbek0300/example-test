import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNestedFS, setLoading } from "../redux/roots/actions";
import FolderIcon from "../statics/icons/folder-icon.svg";
import FileIcon from "../statics/icons/file.svg";
import moment from "moment";
import { setBRS } from "../redux/breadcrumb/actions";
import Loading from "../components/Loading";

function FolderView({getNested}) {
  const { folder_id } = useParams();
  const rootFS = useSelector((state) => state.roots.root_folders);
  const brIndex = useSelector((state) => state.breadcrumb.breadcrumbItems);
  const loading = useSelector((state) => state.roots.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNestedFS(folder_id));
  }, [folder_id]);

  return (
    <div>
      <div>
        <table className={"min-w-7xl w-[90%] text-xl mx-auto"}>
          <thead className={"bg-white border-b border-gray-200 text-gray-450"}>
            <tr className={"roboto-slab"}>
              <th className={"font-normal p-4 px-0 text-left pl-40"}>Name</th>
              <th className={"font-normal p-4 text-left"}>Last Used</th>
              <th className={"font-normal p-4 text-left"}>Size</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td className={"flex justify-end py-10"} colSpan={6}>
                  <Loading />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {rootFS.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className={
                      "hover:bg-gray-100 transition-all hover:text-red-450 active:text-red-250 active:bg-gray-200 cursor-pointer"
                    }
                    onClick={() => {
                      dispatch(setLoading(true));
                      dispatch(
                        setBRS({
                          title: data.name,
                          folder_id: data.folder_id,
                          index: brIndex.length,
                          path: `/${data.folder_id}`,
                        })
                      );
                      if (data?.data_type === "folder") {
                        getNested(data.folder_id, data.data_type, data.name);
                      } else {
                        getNested(data.file_id, data.data_type, data.name);
                      }
                    }}
                  >
                    <td className={"py-5 px-2 w-[55%]"}>
                      <div
                        className={
                          "flex justify-start pl-36 relative name-folder items-center"
                        }
                      >
                        <img
                          className={"absolute left-10 w-12"}
                          src={
                            data["data_type"] === "folder"
                              ? FolderIcon
                              : FileIcon
                          }
                          alt="folder icon"
                        />
                        <span className={"inline-block pl-2"}>{data.name}</span>
                      </div>
                    </td>
                    <td className={"py-5 px-4 w-[30%]"}>
                      {moment(data.last_used).format("MM/DD/YYYY")}
                    </td>
                    <td className={"p-5 pl-6 w-[15%]"}>
                      {data.size ? data.size : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default FolderView;
