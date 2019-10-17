import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
		<p className='f3 black'>
			{'This simple app will detect all the faces in any picture. Just put any URL to give it a try!'}
		</p>
		<div className='center'>
			<div className='form center pa4 br3 shadow-5'>
				<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} /> 
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-dark-red' onClick={onButtonSubmit}>Try!</button>
			</div>
		</div>
		</div>
		);
}

export default ImageLinkForm; 