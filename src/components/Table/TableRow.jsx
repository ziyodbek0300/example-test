import React from "react";
import moment from "moment";
import FolderIcon from "../../statics/icons/folder-icon.svg";
import FileIcon from "../../statics/icons/file.svg";

function TableRow({ values, object, getNested }) {
  return (
    <tr className={"active:text-red-250 hover:text-red-450 transition-all"}>
      {values.map((value, index) => {
        if (value === "last_used") {
          return (
            <td className={"p-4"} key={index}>
              <div
                onClick={() =>
                  getNested(
                    object.data_type === "folder"
                      ? object.folder_id
                      : object.file_id,
                    object.data_type
                  )
                }
                className={"flex justify-center cursor-pointer"}
              >
                <span>{moment(object[value]).format("MM/DD/YYYY")}</span>
              </div>
            </td>
          );
        } else if (index === 0) {
          console.log(object["data_type"]);
          return (
            <td className={"p-4"} key={index}>
              <div
                className={"flex items-center"}
                onClick={() =>
                  getNested(
                    object.data_type === "folder"
                      ? object.folder_id
                      : object.file_id,
                    object.data_type
                  )
                }
              >
                <img
                  src={object["data_type"] === "folder" ? FolderIcon : FileIcon}
                  className={"cursor-pointer"}
                  alt="folder icon"
                />
                <div className={"w-full"}>
                  <span className={"cursor-pointer ml-7"}>{object[value]}</span>
                </div>
              </div>
            </td>
          );
        } else {
          return (
            <td className={"p-4"} key={index}>
              <div
                onClick={() =>
                  getNested(
                    object.data_type === "folder"
                      ? object.folder_id
                      : object.file_id,
                    object.data_type
                  )
                }
                className={"flex justify-center cursor-pointer"}
              >
                <span>{object[value]}</span>
              </div>
            </td>
          );
        }
      })}
    </tr>
  );
}

export default TableRow;
