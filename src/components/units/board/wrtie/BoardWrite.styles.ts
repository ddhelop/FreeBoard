import styled from "@emotion/styled";
import { IBoardWriteStylesProps } from "./BoardWriteTypes";

export const Wrapper = styled.div`
  margin: 40px;
  background-color: white;
  width: 1200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 100px;
  box-shadow: 0px 4px 20px 0px #00000033;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 36px;
`;

export const ContentInput = styled.input`
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 15px;
  font-size: 16px;

  ::placeholder {
    font-weight: 500;
    color: #c4c4c4;
  }
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const WriterInput = styled.input`
  width: 486px;
  height: 52px;
  margin-right: 24px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  font-size: 16px;
  ::placeholder {
    font-weight: 600;
    color: #c4c4c4;
  }
`;

export const LongInput = styled.input`
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 15px;
  font-size: 16px;
  ::placeholder {
    font-weight: 500;
    color: #c4c4c4;
  }
`;

export const PostNumWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const PostNumBox = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 15px;
  padding: 15px;
  font-size: 16px;
  ::placeholder {
    font-weight: 500;
    color: #c4c4c4;
  }
`;

export const PostNumSearchBtn = styled.button`
  width: 124px;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const PostInput = styled.input`
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
  padding: 15px;
  font-size: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImgUploadBox = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 28px;
`;

export const RadioInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RadioInput = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30px;
`;

export const SubmitBtn = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(prop: IBoardWriteStylesProps) =>
    prop.isEdit ? "#ffc600" : prop.isActive === true ? "#ffc600" : "gray"};
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: black;
  cursor: pointer;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  color: blue;
  margin-left: 6px;
  margin-top: 8px;
`;
