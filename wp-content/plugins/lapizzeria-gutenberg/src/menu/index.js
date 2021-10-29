const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, RangeControl } = wp.components;

//Logo para el bloque
import { ReactComponent as Logo } from "../pizzeria-icon.svg";

registerBlockType("lapizzeria/menu", {
  title: "La Pizzeria Menu",
  icon: { src: Logo },
  category: "lapizzeria",
  attributes: {
    cantidadMostrar: {
        type: 'number',
        default: 4
    }
  },
  edit: withSelect((select, props) => {

    // extraer los valores
    const { attributes: { cantidadMostrar }, setAttributes} = props;

    const onChangeCantidadMostrar = nuevaCantidad => {
        setAttributes({ cantidadMostrar: parseInt (nuevaCantidad) })
    }

    return {
      //Enviar una petición a la api
      especialidades: select("core").getEntityRecords("postType", "especialidades", {
          per_page: cantidadMostrar
      }), 
      onChangeCantidadMostrar, props
    };
  })
  
  ( ({ especialidades, onChangeCantidadMostrar, props }) => {
    console.log(especialidades);

    // extraer los props
    const { attributes: { cantidadMostrar }} = props;

    return (
      <>
        <InspectorControls>
          <PanelBody title={"Cantidad a mostrar"} initialOpen={true}>
            <div className="components-base-control">
              <div className="components-base-control__field">
                <label className="components-base-control__label">
                  Cantidad a mostrar
                </label>
                <RangeControl
                    onChange={onChangeCantidadMostrar}
                    min={2}
                    max={10}
                    value={cantidadMostrar}
                />
              </div>
            </div>
          </PanelBody>

          <PanelBody title={"Color de texto"} initialOpen={false}>
            <div className="components-base-control">
              <div className="components-base-control__field">
                <label className="components-base-control__label">
                  Color de texto
                </label>
              </div>
            </div>
          </PanelBody>
        </InspectorControls>

        <h2>Nuestras especialidades</h2>
        <ul className="nuestro-menu">
          {especialidades.map((especialidad) => (
            <li>
              <img src={especialidad.imagen_destacada} />
              <div className="platillo">
                  <div className="precio-titulo">
                    <h3>{especialidad.title.rendered}</h3>
                    <p>€ {especialidad.precio}</p>
                  </div> 
              </div>
              <div className="contenido-platillo">
                <p>
                  <RichText.Content
                    value={especialidad.content.rendered.substring(0, 150)}
                  />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }),

  save: () => {
    return null;
  },
});
