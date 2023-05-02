import * as sc from './styles';

import { AppContext } from '../../provider/AppProvider';

import { useContext } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

function ThemeSwitcher() {
	const { theme, changeTheme } = useContext(AppContext);

	return (
		<sc.Container>
			<sc.SettingsLabel htmlFor="switch-expand" title="Configurações">
				<input id="switch-expand" type="checkbox" />
				<FiSettings className="icon" />
			</sc.SettingsLabel>

			<sc.ThemesContainer>
				<label htmlFor="theme" title="Alternar tema">
					<input
						id="theme"
						type="checkbox"
						checked={ theme === 'light' }
						onChange={ changeTheme }
					/>

					<BiMoon className="icon" />

					<span className="slider">
						<span className="slider-thumb" />
					</span>

					<BiSun className="icon" />
				</label>
			</sc.ThemesContainer>
		</sc.Container>
	);
}

export default ThemeSwitcher;
