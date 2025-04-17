import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  background-color: #2563eb;
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default Button;
