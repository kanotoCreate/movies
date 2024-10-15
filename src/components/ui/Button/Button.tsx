import { ReactNode } from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/system';

// Props型
export interface Props extends ButtonProps {
  children?: ReactNode | string;
}

// スタイルの上書き
const CustomMuiButton = styled(MuiButton)({
  textTransform: 'none'
});


export default function Button({ children, color='primary', disabled, onClick, ...props }: Props) {
  /**
   * クリックハンドル
   */
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!disabled && onClick) {
      onClick(event)
    }
  }

  return (
    <CustomMuiButton color={color} {...props} onClick={(e) => handleClick(e)}>{children}</CustomMuiButton>
  )
}