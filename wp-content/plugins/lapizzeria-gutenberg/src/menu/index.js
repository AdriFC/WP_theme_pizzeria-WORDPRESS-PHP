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
  edit: withSelect((select) => {

    const onChangeCantidadMostrar = nuevaCantidad => {
        console.log(nuevaCantidad);
    }

    return {
      //Enviar una petición a la api
      especialidades: select("core").getEntityRecords("postType", "especialidades"), onChangeCantidadMostrar
    };
  })
  
  ( ({ especialidades, onChangeCantidadMostrar }) => {
    console.log(especialidades);

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
              <div className="precio-titulo">
                <h3>{especialidad.title.rendered}</h3>
                <p>€ {especialidad.precio}</p>
              </div>
              <div className="contenido-plato">
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
