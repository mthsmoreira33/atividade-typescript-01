interface Media {
    media: number,
    aprovado?: boolean
}

function calcularMedia(nota1: number, nota2: number): Media {
    const media = (nota1 + nota2) / 2;

    return { media, aprovado: media >= 6};
}

const calculoMedia = calcularMedia(10, 10);

console.log(`Média: ${calculoMedia.media}\nAprovado? ${calculoMedia.aprovado === true ? "Aprovado" : "Reprovado"}`);
