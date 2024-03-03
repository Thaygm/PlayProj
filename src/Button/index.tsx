import { ButtonContainer, ButtonLink } from "./style";

type Props = {
  type: "button" | "link";
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
};

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === "button") {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        nome do botão
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  );
};

export default Button;
