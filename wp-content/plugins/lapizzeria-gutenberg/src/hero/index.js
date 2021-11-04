const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, URLInputButton } = wp.editor;
const { IconButton } = wp.components;

//Logo para el bloque
import { ReactComponent as Logo } from "../pizzeria-icon.svg";

registerBlockType("lapizzeria/hero", {
  title: "La pizzeria Hero",
  icon: { src: Logo },
  category: "lapizzeria",
  attributes: {
    imagenHero: {
      type: "string",
      selector: ".hero-block",
    },
    tituloHero: {
      type: "string",
      source: "html",
      selector: ".hero-block h1",
    },
    textoHero: {
      type: "string",
      source: "html",
      selector: ".hero-block p",
    },
    urlHero: {
      type: "string",
      source: "attribute",
      attribute: "href",
    },
  },

  edit: (props) => {
    //extraer los valores
    const {
      attributes: { imagenHero, tituloHero, textoHero, urlHero },
      setAttributes,
    } = props;

    const onSeleccionarImagen = (nuevaImagen) => {
      setAttributes({ imagenHero: nuevaImagen.sizes.full.url });
    };

    const onChangeTitulo = (nuevoTitulo) => {
      setAttributes({ tituloHero: nuevoTitulo });
    };

    const onChangeTexto = (nuevoTexto) => {
      setAttributes({ textoHero: nuevoTexto });
    };

    const onChangeUrl = (nuevaUrl) => {
        setAttributes({ urlHero: nuevaUrl })
    };

    return (
      <div
        className="hero-block"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)),
                url( ${imagenHero} )`,
        }}
      >
        <MediaUpload
          onSelect={onSeleccionarImagen}
          type="image"
          render={({ open }) => (
            <IconButton
              className="lapizzeria-agregar-imagen"
              onClick={open}
              icon="format-image"
              showTooltip="true"
              label="Cambiar Imagen"
            />
          )}
        />

        <h1 className="titulo">
          <RichText
            placeholder={"Agrega el título del hero"}
            onChange={onChangeTitulo}
            value={tituloHero}
          />
        </h1>
        <p>
          <RichText
            placeholder={"Agrega el texto del hero"}
            onChange={onChangeTexto}
            value={textoHero}
          />
        </p>

        <div>
          <a href={urlHero}>Leer más</a>
        </div>
        <UTLInputButton 
            onChange={onChangeUrl} 
        />
      </div>
    );
  },
  save: (props) => {
    return <h1>frontend</h1>;
  },
});
