import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { DotProps } from './types';
import { dotStyles } from '../../styles';

function Dot({ isActive, onPress }: DotProps) {
  const modeStyles = dotStyles[isActive ? 'active' : 'inactive'];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[dotStyles.container, modeStyles]}
      onPress={onPress}
    />
  );
}

export default memo(Dot);
