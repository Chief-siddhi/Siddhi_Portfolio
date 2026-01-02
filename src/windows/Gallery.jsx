import WindowWrapper from "#hoc/WindowWrapper";
import { gallery as galleryImages } from "#constants/index.js";
import { WindowControls } from "#components";

const Gallery = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {galleryImages.map(({ id, img }) => (
          <div
            key={id}
            className="aspect-square overflow-hidden rounded-2xl border"
          >
            <img
              src={img}
              alt="gallery"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow;
