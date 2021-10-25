const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, BlockControls, AlignmentToolbar } = wp.editor;
const { PanelBody } = wp.components;

//Logo para el bloque
import { ReactComponent as Logo } from "../pizzeria-icon.svg";

/* 
Pasos para crear un bloque en Gutenberg 

1. Importar el componente(s) que utilizarás
2. Coloca el componente donde deseas utilizarlo
3. Crea una función que lea los contenidos
4. Registra un atributo
5. Extraer el contenido desde props
6. Guardar el contenido con setAttributes
7. Lee los contenidos guardados en save()
*/

registerBlockType("lapizzeria/boxes", {
  title: "Pizzeria Cajas",
  icon: { src: Logo },
  category: "lapizzeria",
  attributes: {
    headingBox: {
      type: "string",
      source: "html",
      selector: ".box h2"
    },
    textoBox: {
      type: "string",
      source: "html",
      selector: ".box p"
    },
    colorFondo: {
      type: 'string'
    },
    colorTexto: {
      type: 'string'
    },
    alineacionContenido: {
      type: 'string',
      default: 'center'
    }
  },
  edit: (props) => {
    console.log(props);
    //Extraer el contenido desde props
    const {
      attributes: { headingBox, textoBox, colorFondo, colorTexto,alineacionContenido },
      setAttributes,
    } = props;

    console.log(headingBox);

    const onChangeHeadingBox = (nuevoHeading) => {
      setAttributes({ headingBox: nuevoHeading });
    };
    const onChangeTextoBox = nuevoTexto => {
      setAttributes({ textoBox: nuevoTexto });
    };
    const onchangeColorFondo = nuevoColor => {
      setAttributes({ colorFondo: nuevoColor });
    }
    const onchangeColorTexto = nuevoColor => {
      setAttributes({ colorTexto: nuevoColor });
    }
    const onchangeAlinearContenido = nuevaAlineacion => {
      setAttributes({ alineacionContenido: nuevaAlineacion });
    }

    return (
      <>
        <InspectorControls>
          <PanelBody
            title={'Color de fondo'}
            initialOpen={true}
          >
            <div className="components-base-control">
              <div className="components-base-control__field">
                <label className="components-base-control__label">
                    Color de fondo
                </label>
                <ColorPalette 
                  onChange={onchangeColorFondo}
                  value={colorFondo}
                />
              </div>
            </div>
          </PanelBody>

          <PanelBody
            title={'Color de texto'}
            initialOpen={false}
          >
            <div className="components-base-control">
              <div className="components-base-control__field">
                <label className="components-base-control__label">
                    Color de texto
                </label>
                <ColorPalette 
                  onChange={onchangeColorTexto}
                  value={colorTexto}
                />
              </div>
            </div>
          </PanelBody>
        </InspectorControls>

        <BlockControls>
          <AlignmentToolbar
            onChange={onChangeAlinearContenido}
          />
        </BlockControls>

        <div className="Box" style={{backgroundColor: colorFondo, textAlign: alineacionContenido}}>
              <h2 style={{ color: colorTexto }}>
                  <RichText
                      placeholder="Agrega el encabezado"
                      onChange={onChangeHeadingBox}
                      value={ headingBox }
                  />
              </h2>
              <p style={{ color: colorTexto }}>
                <RichText
                placeholder="Agrega el texto"
                onChange={onChangeTextoBox}
                value={ textoBox }
                />
              </p>
        </div>
      </>
    );
  },
  save: (props) => {
        console.log(props);
        //Extraer el contenido desde props
        const {
        attributes: { headingBox, textoBox, colorFondo, colorTexto, alineacionContenido },
        } = props;
        return (
        <div className="Box" style={{backgroundColor: colorFondo, textAlign: alineacionContenido}}>
            <h2 style={{ color: colorTexto }}>
                 <RichText.Content value={ headingBox }/>
            </h2>
            <p style={{ color: colorTexto }}>
                 <RichText.Content value={ textoBox }/>
            </p>
        </div>
        )
    }
});
