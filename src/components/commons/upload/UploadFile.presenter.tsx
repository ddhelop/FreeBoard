import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./UploadFile.styles";
import type { IUploads01UIProps } from "./UploadFileTypes";

export default function Uploads01UI(props: IUploads01UIProps): JSX.Element {
  return (
    <>
      {props.fileUrl !== "" ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}