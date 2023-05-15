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
          placeholder="주문자 이름"
          {...register("name", {
            required: "이름을 입력해주세요",
          })}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.LabelIcon src="./images/mypage.png" />
        <S.Input
          placeholder="휴대폰 번호"
          type="number"
          {...register("phoneNumber", {
            required: "휴대폰 번호를 입력해주세요",
          })}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.LabelIcon src="./images/mypage.png" />
        <S.Input
          placeholder="주문 비밀번호"
          {...register("orderPassword", {
            required: "주문 비밀번호를 입력해주세요",
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
      <S.Button>주문내역 조회</S.Button>
    </S.Form>
  );
};

export default NonMemberForm;
