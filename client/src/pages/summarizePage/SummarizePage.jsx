import NavBar from "../../components/appBar/NavBar";
import SideBar from "../../components/appBar/SideBar";
import {UploadButton} from "../../components/pdfUploader/UploadButton";

export const SummarizePage = () => {
    return (
        <>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <UploadButton></UploadButton>
        </>
    )
}