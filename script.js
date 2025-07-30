document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const surpriseButton = document.getElementById('surpriseButton');
    const celebrationElement = document.querySelector('.celebration');
    const container = document.querySelector('.container');

    // Función para crear y animar un birrete de graduación
    function createGradCap() {
        const gradCap = document.createElement('div');
        gradCap.classList.add('grad-cap');
        document.body.appendChild(gradCap);

        const size = Math.random() * 30 + 20; // Tamaño entre 20px y 50px
        gradCap.style.width = `${size}px`;
        gradCap.style.height = `${size * 0.7}px`; /* Ajuste de proporción */
        gradCap.style.left = `${Math.random() * 100}vw`;
        gradCap.style.animationDuration = `${Math.random() * 3 + 2}s`;
        gradCap.style.opacity = Math.random() * 0.5 + 0.5;

        // Eliminar el birrete después de la animación
        gradCap.addEventListener('animationend', () => {
            gradCap.remove();
        });
    }

    // Generar birretes al cargar la página (opcional, si quieres birretes continuos)
    // setInterval(createGradCap, 500);

    if (surpriseButton) {
        surpriseButton.addEventListener('click', () => {
            if (nameElement) {
                nameElement.classList.toggle('rainbow-text');
            }
            if (celebrationElement) {
                celebrationElement.textContent = '¡GRADUADA EILIN! 🎓🎉🎊'; // Texto de graduación
            }
            if (container) {
                container.style.animation = 'none';
                void container.offsetWidth;
                container.style.animation = 'shake 0.5s ease-in-out';
            }

            // Generar una ráfaga de birretes (más numerosos)
            for (let i = 0; i < 30; i++) {
                setTimeout(createGradCap, i * 80);
            }

            surpriseButton.disabled = true;
            surpriseButton.textContent = '¡Felicitaciones!';
        });
    }
});

/* CSS para el efecto arcoíris en el nombre (se sigue añadiendo al JS para mantenerlo junto) */
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
.rainbow-text {
    animation: rainbow 3s linear infinite;
}

@keyframes rainbow {
    0% { color: #ff0000; }
    14% { color: #ffa500; }
    28% { color: #ffff00; }
    42% { color: #008000; }
    57% { color: #0000ff; }
    71% { color: #4b0082; }
    85% { color: #ee82ee; }
    100% { color: #ff0000; }
}

/* Nuevas animaciones y estilos para los birretes flotantes */
.grad-cap {
    position: fixed;
    bottom: -50px; /* Empieza fuera de la vista */
    background-color: #36454F; /* Gris oscuro para el birrete */
    width: 40px;
    height: 25px;
    border-radius: 5px;
    transform: rotate(15deg); /* Ligera inclinación */
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    animation: floatGradCap 2.5s ease-out forwards;
    z-index: 9999;
}

.grad-cap::before {
    content: '';
    position: absolute;
    width: 80%;
    height: 5px; /* Borla */
    background-color: #FFD700; /* Dorado para la borla */
    top: -5px;
    left: 10%;
    border-radius: 2px;
}

.grad-cap::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #36454F; /* Parte inferior del birrete */
    bottom: -10px;
    left: calc(50% - 10px);
}

@keyframes floatGradCap {
    0% {
        transform: translateY(0) rotate(15deg) scale(0);
        opacity: 0;
    }
    20% {
        opacity: 1;
        transform: translateY(-50px) rotate(15deg) scale(1);
    }
    100% {
        transform: translateY(-100vh) rotate(15deg) scale(0.5);
        opacity: 0;
    }
}


/* Animación de sacudida para el contenedor (existente) */
@keyframes shake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
}
`;
document.head.appendChild(styleSheet);