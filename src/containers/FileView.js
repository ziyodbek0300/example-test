import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../components/Loading";
import {getCFile, getNestedFS, getRootFS, setLoading} from "../redux/roots/actions";
import {setBRS} from "../redux/breadcrumb/actions";
import FolderIcon from "../statics/icons/folder-icon.svg";
import FileIcon from "../statics/icons/file.svg";
import moment from "moment/moment";
import {useNavigate} from "react-router-dom";

function FileView() {
    const fileUrl = useSelector((state) => state.roots.file_url);
    const loading = useSelector((state) => state.roots.loading);
    const brIndex = useSelector((state) => state.breadcrumb.breadcrumbItems);

    const currentFolders = useSelector((state) =>
        state.roots.root_folders?.map((a) => {
            return {folder_id: a.folder_id, name: a.name, data_type: a.data_type};
        })
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getRootFS());
    }, []);

    const getNested = (f_id, data_type, f_name) => {
        if (data_type === "folder") {
            dispatch(getNestedFS(f_id));
            navigate(`/${f_id}`);
        } else {
            dispatch(getCFile(f_id));
            navigate(`/fs/doc_view/${f_id}`);
        }
    };

    return (
        <div className={"flex"}>
            <div className={"w-[35%]"}>
                <div className={"lg:w-[90%] mx-auto overflow-auto"}>
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
                                    <Loading/>
                                </td>
                            </tr>
                            </tbody>
                        ) : (
                            <tbody>
                            {currentFolders?.map((data) => {
                                return (
                                    <tr
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
                                            {moment(data.last_used).format("DD/MM/YYYY")}
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
            <div className={"w-full bg-red-400"}>
                <iframe
                    style={{width: "100%", height: "90vh", position: "sticky", top: "0"}}
                    src={fileUrl}
                    title={fileUrl}
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
}

export default FileView;
