import styled from "styled-components";
import * as S from "./style";
import { useForm } from "react-hook-form";
import idPassword from "./data/credentials";
import { useNavigate } from "react-router-dom";

//data폴더에 credentials.js에 아이디,비밀번호 정보가 있음
const MemberForm = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const targetItem = idPassword.filter((value) => value.id === data.id);
    console.log(targetItem);
    if (targetItem.length === 0) return alert("로그인 실패하였습니다.");
    if (targetItem[0].password === data.password) {
      alert("로그인에 성공하였습니다");
      navigate("/");
    } else {
      alert("로그인 실패하였습니다.");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
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
