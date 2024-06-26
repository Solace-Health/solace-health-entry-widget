import { styled, Form } from "@solace-health/ui";

export const Container = styled.div`
  margin: 10px;
  max-width: 600px;
  background: #ffffff;
  border: 1px solid #bed3cc;
  box-shadow: 2px 2px 20px #d4e2dd;
  border-radius: 20px;
  padding: 38px 40px;
  overflow: hidden;

  header {
    color: rgb(16, 16, 16);
  }
`;

export const SubmitButton = styled(Form.Submit)`
  margin: 10px 0 0 0;
`;
