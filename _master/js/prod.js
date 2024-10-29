$(document).ready(() => {
    // Configurações da galeria lightSlider
    const lightSliderConfig = {
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 4,
        thumbMargin: 10,
    };

    // Verifica se o plugin lightSlider está disponível
    if ($.fn.lightSlider) {
        $(".ecommerce-gallery").lightSlider(lightSliderConfig);
    } else {
        console.warn("Plugin lightSlider não encontrado. Verifique se ele foi carregado corretamente.");
    }
});
