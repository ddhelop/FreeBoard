import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWriteTypes";

export default function BoardWriteUI(prop: IBoardWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.TitleDiv>
          <S.Title>{prop.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
        </S.TitleDiv>

        <S.WriterWrapper>
          <S.BoxWrapper>
            <S.SubTitle>작성자</S.SubTitle>
            <S.WriterInput
              onChange={prop.onChangeWriter}
              placeholder="이름을 적어주세요"
              defaultValue={prop.data?.fetchBoard.writer ?? ""}
            />
            <S.ErrorMessage>{prop.writerError}</S.ErrorMessage>
          </S.BoxWrapper>

          <S.BoxWrapper>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.WriterInput
              onChange={prop.onChangePassword}
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <S.ErrorMessage>{prop.passwordError}</S.ErrorMessage>
          </S.BoxWrapper>
        </S.WriterWrapper>

        <S.BoxWrapper>
          <S.SubTitle>제목</S.SubTitle>
          <S.LongInput
            onChange={prop.onChangeTitle}
            placeholder="제목을 작성해주세요"
            defaultValue={prop.data?.fetchBoard.title}
          />
          <S.ErrorMessage>{prop.titleError}</S.ErrorMessage>
        </S.BoxWrapper>

        <S.BoxWrapper>
          <S.SubTitle>내용</S.SubTitle>
          <S.ContentInput
            onChange={prop.onChangeContent}
            placeholder="내용을 작성해주세요"
            defaultValue={prop.data?.fetchBoard.contents}
          />
          <S.ErrorMessage>{prop.contentError}</S.ErrorMessage>
        </S.BoxWrapper>

        <S.BoxWrapper>
          <S.SubTitle>주소</S.SubTitle>
          <S.PostNumWrapper>
            <S.PostNumBox placeholder="07250" />
            <S.PostNumSearchBtn>우편변호 검색</S.PostNumSearchBtn>
          </S.PostNumWrapper>
          <S.PostInput />
          <S.PostInput />
        </S.BoxWrapper>

        <S.BoxWrapper>
          <S.SubTitle>유튜브</S.SubTitle>
          <S.LongInput placeholder="링크를 복사해주세요." />
        </S.BoxWrapper>

        <S.BoxWrapper>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.ImageWrapper>
            <S.ImgUploadBox></S.ImgUploadBox>
            <S.ImgUploadBox></S.ImgUploadBox>
            <S.ImgUploadBox></S.ImgUploadBox>
          </S.ImageWrapper>
        </S.BoxWrapper>

        <S.BoxWrapper>
          <S.SubTitle>메인 설정</S.SubTitle>
          <S.RadioInputWrapper>
            <S.RadioBox>
              <S.RadioInput type="radio" name="main_option" />{" "}
              <S.SubTitle>유튜브</S.SubTitle>
            </S.RadioBox>
            <S.RadioBox>
              <S.RadioInput type="radio" name="main_option" />{" "}
              <S.SubTitle>사진</S.SubTitle>
            </S.RadioBox>
          </S.RadioInputWrapper>
        </S.BoxWrapper>

        <S.ButtonDiv>
          <S.SubmitBtn
            onClick={prop.isEdit ? prop.onClickUpdate : prop.onClickSubmit}
            isActive={prop.isActive}
            isEdit={prop.isEdit}
            writerError={prop.writerError}
            passwordError={prop.passwordError}
            titleError={prop.titleError}
            contentError={prop.contentError}
            onChangeWriter={prop.onChangeWriter}
            onChangePassword={prop.onChangePassword}
            onChangeTitle={prop.onChangeTitle}
            onChangeContent={prop.onChangeContent}
            onClickSubmit={prop.onClickSubmit}
            onClickUpdate={prop.onClickUpdate}
          >
            {prop.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitBtn>
        </S.ButtonDiv>
      </S.Wrapper>
    </>
  );
}
