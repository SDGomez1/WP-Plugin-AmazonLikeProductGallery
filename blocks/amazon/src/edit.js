import { InspectorControls, RichText, MediaUpload } from "@wordpress/block-editor";
import { Panel, PanelBody, TextControl } from "@wordpress/components"
import "./styles.scss"

// Importamos los componentes necesarios de la biblioteca de WordPress

const Edit = (props) => {
    // Desestructuramos las propiedades que recibimos
    const { className, attributes, setAttributes } = props;
    const { title1, title2, title3, precio1, precio2, precio3, link1, link2, link3 } = attributes;
    const { image1, image2, image3 } = attributes;

    // Funciones para seleccionar las imágenes
    const onSelectImage1 = (newImage) => {
        setAttributes({
            image1: newImage
        });
    }
    const onSelectImage2 = (newImage) => {
        setAttributes({
            image2: newImage
        });
    }
    const onSelectImage3 = (newImage) => {
        setAttributes({
            image3: newImage
        });
    }
    return (
        <>
            {/* Bloque de control del inspector */}
            <InspectorControls>
                <Panel>
                    {/* Panel de nombres de producto */}
                    <PanelBody title="Nombre de producto" initialOpen={true}>
                        {/* Input para producto 1 */}
                        <TextControl
                            label="Producto 1"
                            value={title1}
                            onChange={(newtitle => setAttributes({ title1: newtitle }))}
                        />
                        {/* Input para producto 2 */}
                        <TextControl
                            label="Producto 2"
                            value={title2}
                            onChange={(newtitle => setAttributes({ title2: newtitle }))}
                        />
                        {/* Input para producto 3 */}
                        <TextControl
                            label="Producto 3"
                            value={title3}
                            onChange={(newtitle => setAttributes({ title3: newtitle }))}
                        />
                    </PanelBody>
                    {/* Panel de precios */}
                    <PanelBody title="Precios" initialOpen={true}>
                        {/* Input para precio 1 */}
                        <TextControl
                            label="Precio 1"
                            value={precio1}
                            onChange={(newprice => setAttributes({ precio1: newprice }))}
                        />
                        {/* Input para precio 2 */}
                        <TextControl
                            label="Precio 2"
                            value={precio2}
                            onChange={(newprice => setAttributes({ precio2: newprice }))}
                        />
                        {/* Input para precio 3 */}
                        <TextControl
                            label="Precio 3"
                            value={precio3}
                            onChange={(newprice => setAttributes({ precio3: newprice }))}
                        />
                    </PanelBody>
                    {/* Panel de links de botones */}
                    <PanelBody title="Links de los botones" initialOpen={true}>
                        {/* Input para el link de boton 1  */}
                        <TextControl
                            label="Boton 1"
                            value={link1}
                            onChange={(newLink => setAttributes({ link1: newLink }))}
                        />
                        {/* Input para el link de boton 2  */}
                        <TextControl
                            label="Boton 2"
                            value={link2}
                            onChange={(newLink => setAttributes({ link2: newLink }))}
                        />
                        {/* Input para el link de boton 3  */}
                        <TextControl
                            label="Boton 3"
                            value={link3}
                            onChange={(newLink => setAttributes({ link3: newLink }))}
                        />
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <div className={className}>

                <div className="container-AMZ">
                    <MediaUpload
                        onSelect={onSelectImage1}
                        type="image"
                        value={image1.id}
                        render={({ open }) => (
                            <button className="ima-button" onClick={open}>
                                Subir imagen
                            </button>
                        )}

                    />
                    {image1.url && (
                        <img src={image1.url} alt="" className="product-AMZ" />
                    )}


                    <h3 className="title-AMZ" >{title1}</h3>

                    <h3 className="text-AMZ">{precio1}</h3>
                    <a href={link1} target="_blank" className="AMZ-buttonlink">
                        <button className="button-AMZ" target="_blank" rel="nofollow">
                            Compra en Amazon
                        </button>
                    </a>
                </div>

                <div className="container-AMZ">
                    <MediaUpload
                        onSelect={onSelectImage2}
                        type="image"
                        value={image2.id}
                        render={({ open }) => (
                            <button className="ima-button" onClick={open}>
                                Subir imagen
                            </button>
                        )}

                    />
                    {image2.url && (
                        <img src={image2.url} alt="" className="product-AMZ" />
                    )}
                    <h3 className="title-AMZ" >{title2}</h3>
                    <h3 className="text-AMZ">{precio2}</h3>
                    <a href={link2} target="_blank" className="AMZ-buttonlink">
                        <button className="button-AMZ" target="_blank" rel="nofollow">
                            Compra en Amazon
                        </button>
                    </a>
                </div>
                <div className="container-AMZ">
                    <MediaUpload
                        onSelect={onSelectImage3}
                        type="image"
                        value={image3.id}
                        render={({ open }) => (
                            <button className="ima-button" onClick={open}>
                                Subir imagen
                            </button>
                        )}

                    />
                    {image3.url && (
                        <img src={image3.url} alt="" className="product-AMZ" />
                    )}
                    <h3 className="title-AMZ" >{title3}</h3>
                    <h3 className="text-AMZ">{precio3}</h3>
                    <a href={link3} target="_blank" className="AMZ-buttonlink">
                        <button className="button-AMZ" target="_blank" rel="nofollow">
                            Compra en Amazon
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Edit;