import { useMutation } from "@apollo/client";
import { useRef } from "react";
import type { ChangeEvent } from "react";

import Uploads01UI from "./UploadFile.presenter";
import type { IUploads01Props } from "./UploadFileTypes";
import { UPLOAD_FILE } from "./UploadFile.query";
import { Modal } from "antd";
import { checkValidationImage } from "./UploadFIle.validation";


export default function Uploads01(props: IUploads01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = checkValidationImage(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}