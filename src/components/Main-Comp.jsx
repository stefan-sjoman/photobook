import { useState } from "react";

const MainComp = () => {
	const [photoNumber, setPhotoNumber] = useState(1);
	const totalPhotos = 40;

	function changePage(change) {
		if (photoNumber === 1 && change === -1) {
			setPhotoNumber(totalPhotos);
			return;
		}
		if (photoNumber === totalPhotos && change === 1) {
			setPhotoNumber(1);
			return;
		}
		setPhotoNumber(photoNumber + change);
	}

	return(
		<main>
			<img src={ "./photos/" + photoNumber + ".png" } alt="" />
			<nav>
				<button className="nav-left" onClick={ () => changePage(-1)}></button>
				<div className="nav-display">{ photoNumber + " / " + totalPhotos }</div>
				<button className="nav-right" onClick={ () => changePage(1)}></button>
			</nav>
		</main>
	);
}

export default MainComp;