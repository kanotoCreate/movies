import Button, { Props } from './Button';
import { action } from '@storybook/addon-actions';

// メタデータ
export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'text' },
  },
  args: {
    children: 'ボタン',
    color: 'primary',
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    href: '',
    size: 'medium',
    variant: 'text',
    onClick: action('click button')
  }
};

const template = (args: Props) => {
  return <Button {...args}></Button>
}

export const button = template.bind({})