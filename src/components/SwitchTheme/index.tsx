import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Contaienr } from './styled';

interface Props {
  toggleTheme(): void;
}

export const SwitchTheme: React.FC<Props> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Contaienr>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={colors.primary60}
      />
    </Contaienr>
  );
};
