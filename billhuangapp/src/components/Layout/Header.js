import React from 'react';
import logo from '../../images/images.png'


var styleCenter = {
	textAlign: "center",
	width: "100%"
};

const Header = () => {
	return (
		<div className={'header-area'}>
			<div className={'header-content'}>
				<div classname={'row'}>
					<div className={'col-xs-9 col-md-9'}>
						<div className={'logo-container'}>
							<img src={logo} />
						</div>
						<div>
							<h3>Best ERP software at afforable price</h3>
						</div>
					</div>
					<div className={'col-xs-3 col-md-3'}>
						<div className={'banner-container'}>
							<h2>Since 1996</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header