const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette } = wp.editor;
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
    }
  },
  edit: (props) => {
    console.log(props);
    //Extraer el contenido desde props
    const {
      attributes: { headingBox, textoBox, colorFondo  },
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
        </InspectorControls>
        <div className="Box" style={{backgroundColor: colorFondo}}>
              <h2>
                  <RichText
                      placeholder="Agrega el encabezado"
                      onChange={onChangeHeadingBox}
                      value={ headingBox }
                  />
              </h2>
              <p>
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
        attributes: { headingBox, textoBox, colorFondo },
        } = props;
        return (
        <div className="Box" style={{backgroundColor: colorFondo}}>
            <h2>
                 <RichText.Content value={ headingBox }/>
            </h2>
            <p>
                 <RichText.Content value={ textoBox }/>
            </p>
        </div>
        )
    }
});
