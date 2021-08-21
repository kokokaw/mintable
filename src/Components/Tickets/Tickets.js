import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Tickets.scss';

import { Ticket } from './Ticket';
import { GET_TICKETS_ACTION } from '../../Modules/raffle';

export function Tickets() {
    const { tickets } = useSelector((state) => state.raffle);
    const dispatch = useDispatch();

	useEffect(() => {
        dispatch(GET_TICKETS_ACTION());
    }, [dispatch])

	return (
		<div className='tickets__wrapper'>
            <h1>
				<span>Get more tickets</span>
				<button>Buy</button>
			</h1>
			<div className='tickets__list'>
				{tickets.map(ticket => 
					<Ticket data={ticket} />
				)}
			</div>
        </div>
	);
}
