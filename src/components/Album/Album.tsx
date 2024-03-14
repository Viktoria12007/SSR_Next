import { FC } from "react";
import { Photos } from "../../models";
import Api from "../../api/api";
import "./index.css";
import Image from "next/image";

type Props = {
	albumId: number;
};

const getData = async (albumId: number): Promise<Photos> => {
	const data = await Api.getPhotos(albumId);
	return data;
};

const Album: FC<Props> = async ({ albumId }: Props) => {
	const data = await getData(albumId);

	return (
		<div className="album-container">
			{data.map((photo) => (
				<div className="photo-container" key={photo.id}>
					<Image src={photo.url} className="photo-img" alt={photo.title} />
				</div>
			))}
		</div>
	);
};

export default Album;
