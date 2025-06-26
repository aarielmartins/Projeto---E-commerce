import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void //RECEBE UMA FUNÇÃO SEMARGUMENTO COM RETORNO VAZIO
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type == 'button') {
    ;<ButtonContainer type="button" title={title} onClick={onClick}>
      {children}
    </ButtonContainer>
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
