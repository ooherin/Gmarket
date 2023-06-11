import * as S from "./style";
import { useForm } from "react-hook-form";

const NonMemberForm = () => {
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
          {...register("name", {
            required: "이름을 입력해주세요",
          })}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.LabelIcon src="./images/mypage.png" />
        <S.Input
          placeholder="비밀번호"
          type="number"
          {...register("phoneNumber", {
            required: "비밀번호를 입력해주세요",
          })}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.LabelIcon src="./images/mypage.png" />
        <S.Input
          placeholder="비밀번호 확인"
          {...register("orderPassword", {
            required: "비밀번호 확인을 입력해주세요",
          })}
        />
      </S.InputContainer>
      {errors.name && <S.ErrorMsg>{errors.name.message}</S.ErrorMsg>}
      {errors.phoneNumber && (
        <S.ErrorMsg>{errors.phoneNumber.message}</S.ErrorMsg>
      )}
      {errors.orderPassword && (
        <S.ErrorMsg>{errors.orderPassword.message}</S.ErrorMsg>
      )}
      <S.Button>회원가입</S.Button>
    </S.Form>
  );
};

export default NonMemberForm;
