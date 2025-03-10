// Definición de los prompts
const prompts = [
    {
        category: 1,
        title: "Generación de ideas",
        description: "La IA puede ayudarte a generar una lista de conceptos relacionados con un área de estudio específica.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero generar una lista de conceptos clave dentro del área de [área de estudio]. Necesito que identifiques los principales subtemas relacionados y los organices en diferentes niveles de profundidad, desde los conceptos más generales hasta los más específicos. Además, agrúpalos en categorías si es relevante. Si hay términos avanzados, inclúyelos con una breve explicación. La lista debe ser lo más completa posible para ayudarme a elegir el concepto que voy a estudiar."
    },
    {
        category: 1,
        title: "Análisis de relevancia",
        description: "Puedes utilizar la IA para analizar la relevancia y complejidad de diferentes conceptos, ayudándote a elegir el tema más adecuado para tu nivel de comprensión y objetivos de aprendizaje.",
        template: "Estoy utilizando la técnica de estudio de Feynman y necesito analizar la relevancia y complejidad de varios conceptos dentro del área de [área de estudio]. Te proporcionaré una lista de conceptos y quiero que los clasifiques según su nivel de dificultad (básico, intermedio, avanzado) y su importancia dentro del área. Para cada concepto, proporciona una breve explicación, su aplicabilidad y para qué nivel de aprendizaje es más recomendable (principiante, intermedio o avanzado). Además, si es posible, sugiéreme cuál de estos conceptos sería el más adecuado para mi nivel si te proporciono información sobre mis conocimientos previos y objetivos de aprendizaje."
    },
    {
        category: 1,
        title: "Búsqueda de recursos",
        description: "La IA puede ayudarte a encontrar artículos, videos y otros recursos relevantes sobre el concepto que has elegido, facilitando el acceso a información de calidad.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero encontrar recursos de calidad sobre el concepto [nombre del concepto]. Necesito que me ayudes a buscar artículos, videos, cursos, libros y otros materiales relevantes para comprenderlo mejor. Prioriza fuentes confiables y, si es posible, clasifica los recursos según su nivel de dificultad (básico, intermedio, avanzado). También indícame si el recurso es teórico, práctico o una combinación de ambos. Si puedes, proporciona enlaces a los recursos disponibles en línea."
    },
    {
        category: 2,
        title: "Transcripción y análisis:",
        description: "Si explicas el concepto en voz alta, la IA puede transcribir tu explicación y analizarla para identificar áreas donde tu lenguaje es confuso o poco claro.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero mejorar mi capacidad para explicar el concepto de [nombre del concepto]. Te proporcionaré una transcripción de mi explicación en voz alta y necesito que la analices para identificar:1️⃣ Partes donde mi lenguaje es confuso o poco claro.2️⃣ Muletillas o repeticiones innecesarias.3️⃣ Posibles errores conceptuales o imprecisiones.4️⃣ Sugerencias para mejorar la claridad, precisión y fluidez de mi explicación. Si es posible, reformula mi explicación manteniendo mi estilo, pero haciéndola más clara y comprensible."
    },
    {
        category: 2,
        title: "Generación de resúmenes",
        description: "La IA puede generar resúmenes de tu explicación, resaltando los puntos clave y ayudándote a identificar si has cubierto todos los aspectos importantes del concepto.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero evaluar la claridad y completitud de mi explicación sobre el concepto de [nombre del concepto]. Te proporcionaré mi explicación y necesito que generes un resumen que resalte los puntos clave. Además, analiza si he cubierto todos los aspectos importantes y dime si hay lagunas o partes que podrían desarrollarse mejor. Si notas información relevante que falta, sugiéreme qué podría agregar para hacer la explicación más completa y precisa."
    },
    {
        category: 2,
        title: "Detección de inconsistencias",
        description: "La IA puede ayudarte a detectar inconsistencias o contradicciones en tu explicación, asegurando que tu comprensión del concepto sea coherente y precisa.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero asegurarme de que mi explicación sobre [nombre del concepto] sea coherente y precisa. Te proporcionaré mi explicación y necesito que analices si hay inconsistencias, contradicciones o afirmaciones ambiguas. Por favor:1️⃣ Identifica cualquier contradicción en mi explicación.2️⃣ Señala partes donde mi razonamiento sea confuso o poco claro.3️⃣ Indica si he mezclado conceptos erróneamente o si hay lagunas en mi comprensión.4️⃣ Proporcióname una versión corregida o sugerencias para mejorar la coherencia y precisión de mi explicación."
    },
    {
        category: 3,
        title: "Generación de preguntas",
        description: "La IA puede generar preguntas sobre el concepto que estás estudiando, ayudándote a identificar áreas donde tu comprensión es débil.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero evaluar la profundidad de mi comprensión sobre [nombre del concepto]. Necesito que generes una serie de preguntas diseñadas para identificar posibles lagunas en mi conocimiento. Por favor:1️⃣ Genera preguntas de diferentes niveles de dificultad: básicas, intermedias y avanzadas.2️⃣ Incluye preguntas que evalúen tanto la comprensión teórica como su aplicación práctica.3️⃣ Si es posible, indica qué aspectos del concepto está evaluando cada pregunta.4️⃣ Si detectas áreas críticas que podrían quedar fuera de mis respuestas, sugiéreme en qué profundizar más."
    },
    {
        category: 3,
        title: "Análisis de respuestas",
        description: "Si respondes a las preguntas generadas por la IA, esta puede analizar tus respuestas para identificar lagunas en tu comprensión y sugerir áreas donde necesitas estudiar más.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero evaluar si mi comprensión sobre [nombre del concepto] es sólida. Responderé a una serie de preguntas sobre el tema y necesito que analices mis respuestas para identificar posibles lagunas en mi conocimiento.Por favor:1️⃣ Evalúa si mis respuestas son correctas, incompletas o incorrectas.2️⃣ Si hay errores o imprecisiones, explícame por qué y proporcióname la respuesta correcta.3️⃣ Identifica áreas donde mi comprensión parece débil o superficial.4️⃣ Sugiéreme en qué aspectos debería profundizar más y recomiéndame recursos o enfoques para mejorar mi comprensión."
    },
    {
        category: 3,
        title: "Búsqueda de información específica",
        description: "Cuando identifiques una laguna en tu comprensión, la IA puede ayudarte a encontrar información específica sobre ese tema, facilitando la búsqueda de respuestas a tus preguntas.",
        template: "Estoy utilizando la técnica de estudio de Feynman y he identificado una laguna en mi comprensión sobre [tema específico]. Necesito que me ayudes a encontrar información precisa y confiable para aclarar este punto. Por favor:1️⃣ Explícame el concepto de manera clara y sencilla, adaptándolo a mi nivel de conocimiento [principiante/intermedio/avanzado].2️⃣ Proporcióname ejemplos o aplicaciones prácticas si es relevante.3️⃣ Recomiéndame recursos confiables (artículos, libros, videos, cursos, papers) donde pueda profundizar más.4️⃣ Si hay conceptos relacionados que debo entender primero para comprender este tema, indícalos y explícalos brevemente."
    },
    {
        category: 4,
        title: "Generación de analogías",
        description: "La IA puede ayudarte a generar analogías y ejemplos para simplificar conceptos complejos, facilitando la comprensión para personas sin conocimientos previos sobre el tema.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero simplificar el concepto de [nombre del concepto] para hacerlo más comprensible. Necesito que generes analogías y ejemplos que lo expliquen de manera clara y accesible, como si se lo estuviera explicando a alguien sin conocimientos previos. Por favor:1️⃣ Proporcióname al menos tres analogías diferentes que relacionen este concepto con situaciones cotidianas.2️⃣ Incluye ejemplos ilustrativos que ayuden a visualizar mejor la idea.3️⃣ Si es posible, crea una analogía divertida o creativa que haga más memorable el concepto.4️⃣ Si hay alguna limitación en la analogía (es decir, en qué punto deja de ser precisa), aclárala brevemente para evitar confusiones."
    },
    {
        category: 4,
        title: "Reescritura de textos",
        description: "Puedes utilizar la IA para reescribir tu explicación, utilizando un lenguaje más sencillo y claro.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero mejorar la claridad de mi explicación sobre [nombre del concepto]. Te proporcionaré mi explicación y necesito que la reescribas utilizando un lenguaje más sencillo y accesible, como si estuviera explicándolo a alguien sin conocimientos previos. Por favor:1️⃣ Utiliza frases claras y directas, evitando términos técnicos innecesarios.2️⃣ Divide la explicación en partes comprensibles si es un concepto complejo.3️⃣ Si es posible, incluye ejemplos sencillos para ilustrar la idea.4️⃣ Mantén el significado original, pero hazlo lo más fácil de entender posible.5️⃣ Si hay información redundante o confusa, elimínala o reescríbela para mayor claridad."
    },
    {
        category: 4,
        title: "Generación de esquemas y diagramas",
        description: "La IA puede ayudarte a generar esquemas y diagramas visuales para representar el concepto de forma clara y concisa.",
        template: "Estoy utilizando la técnica de estudio de Feynman y quiero representar visualmente el concepto de [nombre del concepto]. Necesito que generes un esquema o diagrama que me ayude a comprenderlo de forma clara y concisa. Por favor:1️⃣ Estructura la información de manera jerárquica o en bloques lógicos para facilitar su comprensión.2️⃣ Si es posible, usa un enfoque visual como mapas conceptuales, diagramas de flujo, tablas comparativas o cualquier otro formato adecuado.3️⃣ Incluye las conexiones clave entre los diferentes elementos del concepto.4️⃣ Si el diagrama es complejo, acompáñalo con una breve explicación para interpretarlo mejor.5️⃣ Asegúrate de que la representación sea clara y accesible para alguien sin conocimientos previos en el tema."
    }
];

// Inicialización de variables
let historyArray = JSON.parse(localStorage.getItem('promptHistory')) || [];
let currentPrompt = null;
let currentCategory = null;

// Elementos DOM
const stepBoxes = document.querySelectorAll('.step-box');
const dropdowns = document.querySelectorAll('.dropdown-content');
const promptModal = document.getElementById('promptModal');
const historyModal = document.getElementById('historyModal');
const closeButtons = document.querySelectorAll('.close');
const copyBtn = document.getElementById('copyBtn');
const historyBtn = document.getElementById('historyBtn');
const parameterInput = document.getElementById('parameterInput');
const generatedPromptElement = document.getElementById('generatedPrompt');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initializeDropdowns();
    setupEventListeners();
});

// Función para inicializar los desplegables con los prompts
function initializeDropdowns() {
    for (let i = 1; i <= 4; i++) {
        const dropdown = document.getElementById(`dropdown${i}`);
        const categoryPrompts = prompts.filter(prompt => prompt.category === i);
        
        categoryPrompts.forEach(prompt => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = prompt.title;
            item.dataset.promptId = prompts.indexOf(prompt);
            dropdown.appendChild(item);
        });
    }
}

// Configuración de event listeners
function setupEventListeners() {
    // Event listeners para los step boxes
    stepBoxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            // Cerrar todos los dropdowns primero
            dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
            // Mostrar el dropdown correspondiente
            const dropdown = document.getElementById(`dropdown${index + 1}`);
            dropdown.classList.toggle('show');
            currentCategory = index + 1;
        });
    });

    // Event listener para cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.step-box')) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
        }
    });

    // Event listeners para los items del dropdown
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const promptId = parseInt(item.dataset.promptId);
            currentPrompt = prompts[promptId];
            
            // Configurar y mostrar el modal
            document.getElementById('promptTitle').textContent = currentPrompt.title;
            document.getElementById('promptDescription').textContent = currentPrompt.description;
            
            // Mostrar o ocultar el campo de parámetro según si hay parámetros en el template
            const paramContainer = document.getElementById('parameterInputContainer');
            if (currentPrompt.template.includes('[')) {
                paramContainer.style.display = 'block';
                // Extraer el nombre del parámetro para la etiqueta
                const paramName = currentPrompt.template.match(/\[(.*?)\]/)[1];
                paramContainer.querySelector('label').textContent = `Parámetro (${paramName}):`;
                parameterInput.value = '';
                parameterInput.focus();
            } else {
                paramContainer.style.display = 'none';
            }
            
            // Generar prompt inicial
            updateGeneratedPrompt();
            
            // Mostrar modal
            promptModal.style.display = 'block';
        });
    });

    // Event listener para el input del parámetro
    parameterInput.addEventListener('input', updateGeneratedPrompt);

    // Event listeners para los botones de cerrar modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            promptModal.style.display = 'none';
            historyModal.style.display = 'none';
        });
    });

    // Event listener para el botón de copiar
    copyBtn.addEventListener('click', () => {
        const promptText = generatedPromptElement.textContent;
        navigator.clipboard.writeText(promptText)
            .then(() => {
                // Guardar en el historial
                saveToHistory(promptText);
                
                // Cambiar texto del botón temporalmente
                copyBtn.textContent = '¡Copiado!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copiar al portapapeles';
                }, 2000);
            })
            .catch(err => {
                alert('Error al copiar al portapapeles: ' + err);
            });
    });

    // Event listener para el botón de historial
    historyBtn.addEventListener('click', () => {
        displayHistory();
        historyModal.style.display = 'block';
    });
}

// Función para actualizar el prompt generado
function updateGeneratedPrompt() {
    if (!currentPrompt) return;
    
    let generatedText = currentPrompt.template;
    
    // Reemplazar parámetros si hay alguno
    if (currentPrompt.template.includes('[')) {
        const paramName = currentPrompt.template.match(/\[(.*?)\]/)[1];
        const paramValue = parameterInput.value.trim() || paramName;
        generatedText = generatedText.replace(/\[.*?\]/g, paramValue);
    }
    
    generatedPromptElement.textContent = generatedText;
}

// Función para guardar en el historial
function saveToHistory(promptText) {
    const now = new Date();
    const historyItem = {
        date: now.toLocaleString(),
        category: currentCategory,
        title: currentPrompt.title,
        parameter: parameterInput.value.trim(),
        prompt: promptText
    };
    
    historyArray.unshift(historyItem); // Agregar al inicio del array
    
    // Limitar el historial a 50 elementos
    if (historyArray.length > 50) {
        historyArray.pop();
    }
    
    // Guardar en localStorage
    localStorage.setItem('promptHistory', JSON.stringify(historyArray));
}

// Función para mostrar el historial
function displayHistory() {
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = '';
    
    if (historyArray.length === 0) {
        historyContainer.innerHTML = '<p>No hay prompts generados en el historial.</p>';
        return;
    }
    
    historyArray.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        
        historyItem.innerHTML = `
            <h3>${item.title}</h3>
            <div class="history-metadata">
                <p><strong>Fecha:</strong> ${item.date}</p>
                <p><strong>Categoría:</strong> Paso ${item.category}</p>
                ${item.parameter ? `<p><strong>Parámetro:</strong> ${item.parameter}</p>` : ''}
            </div>
            <div class="history-prompt">${item.prompt}</div>
        `;
        
        historyContainer.appendChild(historyItem);
    });
}

// Cerrar modales si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === promptModal) {
        promptModal.style.display = 'none';
    }
    if (event.target === historyModal) {
        historyModal.style.display = 'none';
    }
});