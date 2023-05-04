import * as sc from './styles';

import { AppContext } from '../../provider/AppProvider';

import { useContext, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

function ThemeSwitcher() {
	const { theme, changeTheme } = useContext(AppContext);
	const [expand, setExpand] = useState(false);

	return (
		<sc.Container data-expand={ expand }>
			<sc.Settings
				onClick={ () => setExpand((prev) => !prev) }
				title="Configurações"
				type="button"
			>
				<FiSettings className="icon" />
			</sc.Settings>

			<sc.Switcher
				data-lights-on={ theme === 'light' }
				onClick={ changeTheme }
				title="Alternar tema"
				type="button"
			>
				<BiMoon className="icon" />

				<sc.Slider>
					<sc.SliderThumb />
				</sc.Slider>

				<BiSun className="icon" />
			</sc.Switcher>
		</sc.Container>
	);
}

export default ThemeSwitcher;
