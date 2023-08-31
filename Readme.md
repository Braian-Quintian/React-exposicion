# Protocolo CORS

## Introducción

El Protocolo CORS (Cross-Origin Resource Sharing) es una medida de seguridad implementada en los navegadores web para permitir que los recursos de una página web se soliciten y compartan entre diferentes dominios de manera segura. Antes de que existiera CORS, los navegadores aplicaban la Política de mismo origen (Same-Origin Policy), lo que restringía las solicitudes de recursos a dominios diferentes al de la página actual.

## ¿Qué es CORS y por qué es necesario?

CORS aborda el problema de seguridad que surge cuando un script en una página web realiza una solicitud a un recurso ubicado en un dominio diferente al de la página original. Sin CORS, los navegadores bloquearían estas solicitudes por razones de seguridad. CORS permite que los servidores indiquen explícitamente qué dominios tienen permitido acceder a sus recursos y cómo deben ser tratadas estas solicitudes.

## Funcionamiento de CORS
1. **Solicitud de Origen Cruzado (Cross-Origin Request):** Ocurre cuando un sitio web hace una solicitud HTTP a otro dominio diferente al que originó la página.

2. **Encabezados CORS:** Cuando el servidor recibe una solicitud, responde con encabezados HTTP especiales que indican si el recurso puede ser compartido. Los encabezados CORS más comunes son:
**Access-Control-Allow-Origin:** Indica los dominios permitidos para acceder al recurso.
**Access-Control-Allow-Methods:** Especifica los métodos HTTP permitidos para acceder al recurso.
**Access-Control-Allow-Headers:** Enumera los encabezados HTTP que pueden ser usados durante la solicitud real.

3. **Solicitud Simple y Preflight:** Las solicitudes simples (GET, POST con ciertas condiciones) son procesadas automáticamente por el navegador. Las solicitudes más complejas (PUT, DELETE, ciertos encabezados personalizados) activan una "preflight request" que verifica si el servidor permite la solicitud real. La preflight es una solicitud OPTIONS que verifica las reglas CORS antes de realizar la solicitud real.

# Ciclos de vida en React



 En React, los "ciclos de vida" se refieren a los diferentes momentos o etapas por los que pasa un componente durante su existencia, desde su creación hasta su eventual destrucción. Estas etapas permiten que los componentes de React realicen ciertas acciones en momentos específicos, como la inicialización de datos, la actualización de la interfaz de usuario y la liberación de recursos.

Sin embargo, es importante señalar que con la introducción de React `18.2.0` los ciclos de vida clásicos basados en clases han sido reemplazados en gran parte por los "métodos de ciclo de vida" y los "hooks" en las funciones. Los componentes basados en clases todavía son válidos, pero la tendencia es hacia el uso de funciones y hooks debido a su simplicidad y facilidad de uso.

Aquí están algunos de los ciclos de vida más importantes en los componentes basados en clases y sus equivalentes con hooks:

**Componentes basados en clases:**

1. **Montaje (Mounting):**
   - `constructor()`: Se llama cuando el componente está siendo creado.
   - `componentWillMount()`: Obsoleto. Llamado antes de que el componente sea montado.
   - `render()`: Renderiza el componente en el DOM.
   - `componentDidMount()`: Se llama después de que el componente es montado en el DOM.

2. **Actualización (Updating):**
   - `componentWillReceiveProps(nextProps)`: Obsoleto. Se llama antes de que los props cambien.
   - `shouldComponentUpdate(nextProps, nextState)`: Decide si el componente debe ser actualizado.
   - `componentWillUpdate(nextProps, nextState)`: Obsoleto. Llamado antes de la actualización.
   - `render()`: Renderiza el componente en su estado actualizado.
   - `componentDidUpdate(prevProps, prevState)`: Se llama después de la actualización.

3. **Desmontaje (Unmounting):**
   - `componentWillUnmount()`: Se llama antes de que el componente sea eliminado del DOM.

**Hooks:**

1. **Montaje (Mounting):**
   - `useState` y otros hooks para inicializar el estado.
   - `useEffect` con un arreglo de dependencias vacío para replicar `componentDidMount`.

2. **Actualización (Updating):**
   - `useState` y otros hooks para administrar el estado.
   - `useEffect` con un arreglo de dependencias para replicar `shouldComponentUpdate` y `componentDidUpdate`.

3. **Desmontaje (Unmounting):**
   - `useEffect` con una función de limpieza para replicar `componentWillUnmount`.

El uso de hooks permite una mayor modularidad y reutilización de la lógica en los componentes funcionales de React, sin necesidad de manejar múltiples métodos de ciclo de vida como en los componentes basados en clases.

*Ejemplos*

Aquí hay algunos ejemplos de cómo se pueden usar los ciclos de vida:

- **Inicializar el estado del componente:** Podemos usar el método `getInitialState()` para inicializar el estado del componente en su valor predeterminado.

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  getInitialState() {
    return {
      count: 0
    };
  }

  componentDidMount() {
    // Inicializar el estado del componente
    this.setState({
      count: 1
    });
  }

  render() {
    return (
      <div>
        <h1>Contador: {this.state.count}</h1>
      </div>
    );
  }
}
```

- **Realizar operaciones de limpieza:** Podemos usar el método `componentWillUnmount()` para realizar operaciones de limpieza, como liberar recursos o cancelar peticiones.
```js
class MyComponent extends React.Component {
  componentWillUnmount() {
    // Liberar recursos
    // Cancelar peticiones
  }

  render() {
    // ...
  }
}
```

- **Responder a eventos:** Podemos usar los métodos `componentWillMount()` y `componentDidMount()` para responder a eventos, como el evento `mount` o el evento `click`.

```js
class MyComponent extends React.Component {
  componentWillMount() {
    // Escuchar el evento "click"
    document.addEventListener("click", this.handleClick);
  }

  componentDidMount() {
    // Responder al evento "click"
    this.handleClick = () => {
      // ...
    };
  }

  render() {
    // ...
  }
}
```

**Conclusiones**

Los ciclos de vida de los componentes React son una herramienta poderosa que nos permite controlar el comportamiento de nuestros componentes en cada etapa de su vida. Es importante comprender cómo funcionan los ciclos de vida para poder escribir componentes React eficientes y efectivos.


# Traer un ejemplo en codigo de: constructor, static getDerivedStateFromProps, render, getDerivedStateFromProps, shouldComponentUpdate y componentWillUnmount

```jsx
import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return nextState.count !== this.state.count;
  }

  componentDidMount() {
    console.log('ComponentDidMount');
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount');
    clearInterval(this.interval);
  }

  render() {
    console.log('Render');
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ExampleComponent;
```

En este ejemplo:

1. **Constructor:** El constructor se utiliza para inicializar el estado y realizar otras configuraciones necesarias cuando se crea el componente. Aquí se inicializa el estado con una propiedad `count` y se muestra un mensaje en la consola.

2. **getDerivedStateFromProps:** Este método estático se llama cada vez que los props cambian y permite actualizar el estado en función de los nuevos props. En este ejemplo, no se realiza ninguna acción en este método.

3. **shouldComponentUpdate:** Este método permite decidir si el componente debe actualizar o no en función de los cambios en el estado o los props. Aquí, estamos controlando que el componente solo se actualice si el valor de `count` ha cambiado.

4. **componentDidMount:** Se llama después de que el componente se haya montado en el DOM. Aquí, estamos configurando un intervalo que incrementa el valor de `count` cada segundo.

5. **componentWillUnmount:** Se llama antes de que el componente sea eliminado del DOM. Aquí, estamos limpiando el intervalo para evitar posibles fugas de memoria.

6. **render:** El método `render` es donde se define la estructura de la interfaz de usuario que se mostrará en el DOM. En este ejemplo, estamos mostrando el valor actual de `count`.

<!-- Al ejecutar este componente, podrás ver en la consola cómo se invocan estos métodos de ciclo de vida en diferentes momentos durante la vida del componente. -->