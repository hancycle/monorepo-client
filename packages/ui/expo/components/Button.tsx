import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  background-color: #2563eb;
  padding: 12px 24px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;

const StyledButton = ({ title, onPress }) => (
  <Button onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </Button>
);

export default StyledButton;
