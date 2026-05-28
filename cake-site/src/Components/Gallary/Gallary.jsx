import "./Gallary.css";

const imageFiles = import.meta.glob("../assets/gallery/*.{jpg,png,webp}", { eager: true });
//                                                            ^^^^ was "webg"

const pictures = Object.entries(imageFiles).map(([path, module], i) => ({
    id: i + 1,
    src: module.default,
    title: path.split("/").pop().replace(/\.[^.]+$/, ""),
    //                                       ^^^^ was [^/] — wrong, should be [^.]
}));

const Gallery = () => {
    return (
        <section id="gallery" className="gallery">
            <div className="gallery-container">
                <div className="gallery-header">
                    <span className="section-tag">Our Gallery</span>
                    <h2 className="section-title">A Visual Journey</h2>
                </div>

                {pictures.length === 0 ? (
                    <p className="gallery-empty">No images found. Add photos to src/assets/gallery/</p>
                ) : (
                    <div className="gallery-grid">
                        {pictures.map((picture) => (
                            <div key={picture.id} className="gallery-card">
                                <img
                                    src={picture.src}
                                    alt={picture.title}
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <span className="gallery-title">{picture.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;