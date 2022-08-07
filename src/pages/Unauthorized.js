import React from 'react';
//import { useHistory } from 'react-router-dom';

const Unauthorized = () => {

//	const history = useHistory();



	return (
		<div className="pages-body error-page p-d-flex p-flex-column">
			<div className="topbar p-p-3 p-d-flex p-jc-between p-flex-row p-ai-center">
				<div className="topbar-left p-ml-3 p-d-flex">
					<div className="logo">
						<img src="assets/layout/images/logo2x.png" alt="" />
					</div>
				</div>
			</div>

			<div className="p-as-center p-mt-auto p-mb-auto">
				<div className="pages-panel card p-d-flex p-flex-column">
					<div className="pages-header p-px-3 p-py-1">
						<h2>ERROR</h2>
					</div>
					<div className="card p-mt-3 p-px-6">
						<img src="assets/layout/images/pages/error.png" alt="" />
					</div>
					<div className="pages-detail p-pb-6">You have no authorization.</div>
				</div>
			</div>
		</div>
	)

}

export default Unauthorized;
