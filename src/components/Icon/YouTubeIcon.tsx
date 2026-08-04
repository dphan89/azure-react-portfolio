import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const YouTubeIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <defs>
      <mask id="yt-mask">
        <path
          d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
          fill="white"
        />
        <path d="M46.2 43.2 L46.2 84.8 L95.6 64 Z" fill="black" />
      </mask>
    </defs>
    <path
      d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
      fill="white"
      mask="url(#yt-mask)"
    />
  </Icon>
));

export default YouTubeIcon;
