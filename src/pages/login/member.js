import styled from "styled-components";
import * as S from "./style";
import { useForm } from "react-hook-form";
const MemberForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <S.Form onSubmit={handleSubmit((data) => console.log(data))}>
      <S.InputContainer>
        <S.LabelIcon src="./images/mypage.png" />
        <S.Input
          placeholder="아이디"
          {...register("id", {
            required: "아이디를 입력해주세요.",
          })}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.LabelIcon src="./images/mypage.png" />
        <S.Input
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
        />
      </S.InputContainer>
      {errors.id && <S.ErrorMsg>{errors.id.message}</S.ErrorMsg>}
      {errors.password && <S.ErrorMsg>{errors.password.message}</S.ErrorMsg>}
      <S.Button>로그인</S.Button>
      {/* {errors? .email && <div>{errors? .email? .message}</div>} */}
    </S.Form>
  );
};

export default MemberForm;
