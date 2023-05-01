import * as sc from './styles';

import { v4 } from 'uuid';

interface IProps {
	disabled?: boolean;
	onChange: (_value: string) => void;
	options: { [key: string]: string };
	value: string;
}

function Select({ disabled, onChange, options, value }: IProps) {
	return (
		<sc.Select
			disabled={ disabled }
			onChange={ (e) => onChange(e.target.value) }
			value={ value }
		>
			{
				Object.entries(options).map(([key, value]) => (
					<sc.Option
						key={ v4() }
						value={key}>{value}
					</sc.Option>
				))
			}
		</sc.Select>
	);
}

export default Select;
