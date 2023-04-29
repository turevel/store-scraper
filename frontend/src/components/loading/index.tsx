import * as sc from './styles';

import loading from '../../assets/images/loading.gif';

function Loading() {
	return (
		<sc.Container>
			<sc.Image src={ loading } alt="Carregando.." />
		</sc.Container>
	);
}

export default Loading;
