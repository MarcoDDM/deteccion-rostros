import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
	return (
		<div>
		<p className='f3 black'>
			{'This is simple app will detect all the faces in any picture. Just give it a try!'}
		</p>
		<div className='center'>
			<div className='form center pa4 br3 shadow-5'>
				<input className='f4 pa2 w-70 center' type='text' /> 
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-dark-red'>Try!</button>
			</div>
		</div>
		</div>
		);
}

export default ImageLinkForm; 