import "./styles.scss"

const Save = (props) => {
    // Desestructuración de las propiedades recibidas
    const { className, attributes } = props;
    const { title1, title2, title3, precio1, precio2, precio3, link1, link2, link3 } = attributes;
    const { image1, image2, image3 } = attributes;

    // Renderizado de la estructura de los productos
    return (
        <div className={className}>
            <div className="container-AMZ">
                {/* Si existe una URL de la imagen, se muestra */}
                {image1.url && (
                    <img src={image1.url} alt="" className="product-AMZ" />
                )}

                <h3 className="title-AMZ" >{title1}</h3>
                <h3 className="text-AMZ">{precio1}</h3>
                <a href={link1} target="_blank">
                    <button className="button-AMZ" target="_blank" rel="nofollow">
                        Compra en Amazon
                    </button>
                </a>
            </div>

            <div className="container-AMZ">
                {/* Si existe una URL de la imagen, se muestra */}
                {image2.url && (
                    <img src={image2.url} alt="" className="product-AMZ" />
                )}
                <h3 className="title-AMZ" >{title2}</h3>
                <h3 className="text-AMZ">{precio2}</h3>
                <a href={link2} target="_blank">
                    <button className="button-AMZ" target="_blank" rel="nofollow">
                        Compra en Amazon
                    </button>
                </a>
            </div>
            <div className="container-AMZ">
                {/* Si existe una URL de la imagen, se muestra */}
                {image3.url && (
                    <img src={image3.url} alt="" className="product-AMZ" />
                )}
                <h3 className="title-AMZ" >{title3}</h3>
                <h3 className="text-AMZ">{precio3}</h3>
                <a href={link3} target="_blank">
                    <button className="button-AMZ" target="_blank" rel="nofollow">
                        Compra en Amazon
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Save;
