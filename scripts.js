// Seleciona elementos da tela
const ball = document.getElementById("ball");
const fortuneContainer = document.getElementById("fortune");

// Array com respostas possíveis
const fortunes = [
    "É certo",
    "É decididamente assim",
    "Sem dúvida",
    "Sim, definitivamente",
    "Com certeza",
    "Concentre-se e pergunte novamente",
    "Não conte com isso",
    "Muito duvidoso",
    "Pergunte novamente mais tarde",
    "Sim",
    "Não",
    "Não tenho certeza",
    "Do meu ponto de vista, sim",
    "Muito provavelmente",
    "As perspectivas são boas",
    "Os sinais apontam para sim",
    "A resposta está nebulosa, tente de novo",
    "Melhor não te dizer agora",
    "Não posso prever agora",
    "Minhas fontes dizem que não",
    "As perspectivas não são tão boas",
    "Sim, mas apenas com um certo grau de confiança",
    "Muito duvidoso"
];

// Função principal → chamada no botão
function shake() {
    // Remove mensagem antiga, se existir
    const oldMessage = document.getElementById("message");
    if (oldMessage) oldMessage.remove();

    // Adiciona classe de animação
    ball.classList.add("shake");

    // Remove a animação após 1s
    setTimeout(() => ball.classList.remove("shake"), 1000);

    // Mostra uma nova fortuna depois da animação
    setTimeout(() => getFortune(), 1000);
}

// Sorteia uma fortuna e mostra na tela
function getFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    showFortune(fortune);
}

// Cria o elemento da mensagem, aplica efeito e toca som
function showFortune(text) {
    // Remove anterior, se existir
    const old = document.getElementById("message");
    if (old) old.remove();

    // Cria nova mensagem
    const newMessage = document.createElement("div");
    newMessage.id = "message";
    newMessage.textContent = `"${text}"`;

    // Insere na tela
    fortuneContainer.appendChild(newMessage);

    // 🔊 Reproduz som mágico
    const audio = new Audio("/assets/magical-sound.mp3");
    audio.play().catch(err => {
        console.warn("Som não pôde ser reproduzido automaticamente:", err);
    });

    // 📳 Vibração opcional (em celulares)
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        if (newMessage) {
            newMessage.remove();
        }
    }, 6000);

}