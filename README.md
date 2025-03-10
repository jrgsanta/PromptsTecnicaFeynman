# Técnica Feynman: Generador de Prompts

## Descripción
Esta aplicación web implementa un generador de prompts basado en la Técnica Feynman, un método de aprendizaje efectivo que consiste en 4 pasos fundamentales para comprender y consolidar cualquier concepto. La aplicación permite seleccionar diferentes tipos de prompts clasificados según los pasos de la técnica, personalizar parámetros y guardar un historial de los prompts generados.

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript Vanilla
- LocalStorage API

## Estructura de la Aplicación

### Componentes Principales
1. **Diagrama Interactivo**: Representación visual de los 4 pasos de la Técnica Feynman
2. **Selector de Prompts**: Menús desplegables organizados por categoría
3. **Editor de Parámetros**: Ventana modal para personalizar los prompts
4. **Historial de Prompts**: Registro de prompts generados previamente

### Arquitectura de Archivos
```
├── index.html      # Estructura principal de la aplicación
├── styles.css      # Estilos y diseño responsivo
├── script.js       # Lógica principal y controlador de la aplicación
│                   # Base de datos de prompts organizados
│                   # Gestión del almacenamiento local
└── README.md       # Este archivo de documentación
```

## Funcionalidades

### 1. Diagrama de la Técnica Feynman
La aplicación muestra un diagrama interactivo que representa los 4 pasos fundamentales de la Técnica Feynman:
- **Paso 1**: Elige un concepto
- **Paso 2**: Enséñalo con tus propias palabras
- **Paso 3**: Identifica lagunas en la comprensión
- **Paso 4**: Simplifica y Revisa

El diagrama muestra el flujo natural del proceso, incluyendo:
- Progresión lineal del paso 1 al 2
- Ciclo de retroalimentación entre los pasos 2 y 3
- Transición al paso 4 para finalizar el proceso
- Indicación de revisiones periódicas para consolidar el conocimiento

### 2. Generación de Prompts
Cada paso del diagrama funciona como un punto de acceso a una lista de prompts relacionados:

1. Al hacer clic en cualquiera de los pasos, se despliega un menú con los títulos de los prompts disponibles para esa categoría.
2. Al seleccionar un prompt, se abre una ventana modal que muestra:
   - Título del prompt
   - Descripción detallada
   - Campo para ingresar el valor del parámetro (si aplica)
3. Los parámetros en los prompts están encerrados entre corchetes `[parámetro]`
4. Al completar el parámetro, se muestra el prompt finalizado
5. Un botón permite copiar el prompt completo al portapapeles

### 3. Almacenamiento de Prompts Generados
Cada vez que se genera y copia un prompt, la aplicación guarda automáticamente:
- Fecha y hora de generación
- Categoría (paso de la Técnica Feynman)
- Título de la tarea
- Valor del parámetro utilizado
- Prompt completo generado

Esta información se almacena en el localStorage del navegador y puede consultarse a través del botón "Prompts Generados" en la pantalla principal.

## Estructura de Datos

### Array de Prompts
```javascript
const prompts = [
  {
    id: 1,
    categoria: 1, // 1: Elige un concepto
    titulo: "Ejemplo de título",
    descripcion: "Descripción detallada de este prompt",
    prompt: "Este es un ejemplo de prompt con [parametro]"
  },
  // Más prompts...
]
```

### Registro de Prompts Generados
```javascript
const promptsGenerados = [
  {
    fecha: "2025-03-10T15:30:00",
    categoria: 2,
    tarea: "Título del prompt utilizado",
    parametro: "Valor ingresado",
    promptGenerado: "Prompt completo con el parámetro sustituido"
  },
  // Más registros...
]
```

## Uso de la Aplicación

1. **Seleccionar un paso de la Técnica Feynman**:
   - Haz clic en uno de los cuatro pasos del diagrama interactivo

2. **Elegir un prompt**:
   - Selecciona uno de los prompts disponibles en el menú desplegable

3. **Personalizar el prompt**:
   - Ingresa el valor para el parámetro solicitado en la ventana modal
   - Visualiza el prompt completo con el parámetro sustituido

4. **Utilizar el prompt**:
   - Haz clic en el botón "Copiar" para guardar el prompt en el portapapeles
   - El prompt se guarda automáticamente en el historial

5. **Consultar el historial**:
   - Haz clic en el botón "Prompts Generados" para ver el registro de prompts anteriores

## Instalación y Ejecución Local

1. Clona este repositorio:
```
git clone https://github.com/tu-usuario/tecnica-feynman-prompts.git
```

2. Navega al directorio del proyecto:
```
cd tecnica-feynman-prompts
```

3. Abre el archivo `index.html` en tu navegador preferido

## Contribución

Si deseas contribuir a este proyecto, puedes:
1. Fork este repositorio
2. Crear una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realizar tus cambios y commit (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un nuevo Pull Request

## Licencia

Este proyecto está licenciado bajo [MIT License](https://opensource.org/licenses/MIT).

## Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue en este repositorio.

---

*Desarrollado con ❤️ para apoyar el aprendizaje efectivo a través de la Técnica Feynman.*
