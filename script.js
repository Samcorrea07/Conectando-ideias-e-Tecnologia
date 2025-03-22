// esse botão aqui serve pra trocar entre modo claro e escuro na página
const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.innerHTML = "🌙"; 

// Agora a gente dá um jeito nesse botão, colocando ele fixo lá no topo, na direita
toggleThemeBtn.style.position = "fixed";
toggleThemeBtn.style.top = "10px";
toggleThemeBtn.style.right = "10px";
toggleThemeBtn.style.fontSize = "20px";
toggleThemeBtn.style.border = "none";
toggleThemeBtn.style.background = "transparent";
toggleThemeBtn.style.cursor = "pointer";


toggleThemeBtn.onclick = () => {
    document.body.classList.toggle("dark-mode"); 

    // Se o modo escuro tiver ativado, o ícone vira um solzinho  senão, volta pra lua
    toggleThemeBtn.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
};

// Para incluir o botão na pagina
document.body.appendChild(toggleThemeBtn);

// Agora bora deixar o modo escuro estiloso
// Quando o modo escuro tiver ativado, o fundo fica pretão e o texto branco
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .dark-mode {
            background-color: #121212; /* Fundo darkzera */
            color: #ffffff; /* Texto brancão pra dar contraste */
        }
        .dark-mode table, .dark-mode th, .dark-mode td {
            border-color: #ffffff; /* Bordas branquinhas */
        }
        .dark-mode header, .dark-mode footer {
            background-color: #1e1e1e; /* Fundo mais escuro pro cabeçalho e rodapé */
        }
        .dark-mode #integrantes {
            color: #000000; /* Texto preto */
            background-color: #ffffff; /* Fundo branco */
        }
    </style>
`);

//  aqui é o seguinte quando tu rolar a página, os integrantes vão aparecendo suavemente
const integrantes = document.querySelectorAll(".integrante");
window.addEventListener("scroll", () => {
    integrantes.forEach((integrante) => {
        const posicao = integrante.getBoundingClientRect().top; // Pega a posição do elemento na tela

        // Se o elemento já estiver visível, ele aparece bonitão com um efeito suave
        if (posicao < window.innerHeight - 100) {
            integrante.style.opacity = "1";
            integrante.style.transform = "translateY(0)";
        }
    });
});

// No começo, os integrantes tão invisíveis e meio deslocados pra baixo
integrantes.forEach((integrante) => {
    integrante.style.opacity = "0";
    integrante.style.transform = "translateY(50px)";
    integrante.style.transition = "opacity 0.5s, transform 0.5s"; // Faz a transição ficar chique
});

// Agora vem a parte das redes sociais. Quando tu passar o mouse nos ícones, eles vão dar um zoom maroto
document.querySelectorAll(".social-icon").forEach(icon => {
    icon.addEventListener("mouseover", () => icon.style.transform = "scale(1.2)"); 
    icon.addEventListener("mouseout", () => icon.style.transform = "scale(1)");
    icon.style.transition = "transform 0.3s"; 
});


document.querySelectorAll(".tech-logo").forEach(logo => {
    // Quando passar o mouse, aumenta a imagem das linguagens
    logo.addEventListener("mouseover", () => {
        logo.style.transform = "scale(1.2)"; 
        logo.style.transition = "transform 0.2s"; 
    });
    logo.addEventListener("mouseout", () => {
        logo.style.transform = "scale(1)";
    });
});
