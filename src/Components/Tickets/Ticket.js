import './Ticket.scss';

import ticketSilver from '../../Resources/ticket_silver.gif';
import ticketGold from '../../Resources/ticket_gold.gif';
import ticketDiamond from '../../Resources/ticket_diamond.gif';

export function Ticket({ data }) {
	const ticketTypeImage = {
		silver: ticketSilver,
		gold: ticketGold,
		diamond: ticketDiamond
	}
	return (
		<div
			className='ticket__wrapper'
		>
			<span className='ticket__count'>{data.count}</span>
			<img src={ticketTypeImage[data.type]} className="ticket-bg" alt="ticket_image" />
		</div>
	);
}
