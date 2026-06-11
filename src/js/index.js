const fotos = Array.from(
    { length: 22 },
    (_, i) => `src/image/ft_galeria${i + 1}.jpeg`
);

document.getElementById("galeria").innerHTML = fotos
    .map(foto => `<img src="${foto}" alt="Foto da galeria">`)
    .join("");