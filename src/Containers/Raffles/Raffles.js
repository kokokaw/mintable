import './Raffles.scss';

import { Collection } from '../../Components/Collection';
import { Tickets } from '../../Components/Tickets';

export function Raffles() {
	return (
		<div className='raffles__wrapper'>
			<div className='raffles__content raffles__tickets'>
				<Tickets />
			</div>

			<div className='raffles__content raffles__collection'>
				<Collection />
			</div>
		</div>
	);
}
