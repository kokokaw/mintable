import './Collection.scss';

import ticketDrop from '../../Resources/ticket_drop.png';

export function Collection() {
	return (
		<div className='collection__wrapper'>
            <div className='collection__header'>
                <h1>Collectors Event</h1>
                <p>Participate and win high quality currated NFTs</p>
            </div>
            <div className='collection__drop'>
			    <img src={ticketDrop} width={178} className="ticket-drop-db" alt="ticket_drop_image" />
                <p>Drag a ticket or use the button below to draw your tickets</p>
            </div>
            <div className='collection__footer'>
                
            </div>
        </div>
	);
}
