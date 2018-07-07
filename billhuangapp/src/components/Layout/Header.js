import React from 'react';

const Header = () => {
	return (
		<div className={'header-area'}>
			<div className={'header-content'}>
				<div classname={'row'}>
					<div className={'col-xs-12 col-md-3'}>
						<div className={'logo-container'}>
							Logo here
                    </div>
					</div>
					<div className={'col-xs-12 col-md-9'}>
						<div className={'banner-container'}>
							<div className={'banner-content'}>
								Banner content here
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)

}

export default Header