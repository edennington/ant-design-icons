// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionCircleOutlinedSvg}></AntdIcon>;
};

QuestionCircleOutlined.displayName = 'QuestionCircleOutlined';
QuestionCircleOutlined.inheritAttrs = false;
export default QuestionCircleOutlined;