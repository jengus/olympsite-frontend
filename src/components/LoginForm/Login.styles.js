import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 14px;
  padding: 10px;
  background: #ffe6e6;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: opacity 0.3s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;