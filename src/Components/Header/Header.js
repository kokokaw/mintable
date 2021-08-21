import './Header.scss';

import logo from '../../Resources/logo.png';

export function Header() {
	return (
		<div className='header__wrapper'>
            <div className='header_body'>
				<img width={40} src={logo} className="app-logo" alt="app_logo" />
			</div>
        </div>
	);
}
