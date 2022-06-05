import AppButton from '@/components/atoms/AppButton'

export default {
  title: 'Components/Button',
  component: AppButton,
  argTypes: {
    red: false,
    blue: false,
  },
}

const AppButtonProps = (_args, { argTypes }) => ({
  components: { AppButton },
  template: `
    <AppButton
      v-bind="$props"
    />
  `,
  props: Object.keys(argTypes),
})

// デフォルト表記
export const Default = AppButtonProps.bind({})

// ボタンを赤くする
export const Red = AppButtonProps.bind({})
Red.args = {
  ...Default.args,
  red: true,
}

// ボタンを赤くする
export const Blue = AppButtonProps.bind({})
Blue.args = {
  ...Default.args,
  blue: true,
}
