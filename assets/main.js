function contarCaracteres() {
    const textarea = document.querySelector('#textarea');
    textarea.addEventListener('input', contador);

    function contador() {
        let textoDigitado = textarea.value.length;
        let verificador = document.querySelector('#verificador');
        let aviso = document.querySelector('#aviso');
        let quantidade = verificador.innerText = (textoDigitado);
        let valor = quantidade;

        if(valor >= 80) {
            verificador.classList.add('ativo');
            aviso.classList.add('aviso-ativo');
        } else {
            verificador.classList.remove('ativo');
            aviso.classList.remove('aviso-ativo');
        }

        function limparCampo() {
            const enviar = document.querySelector('#input');
            enviar.addEventListener('click', () => {
                textarea.value = '';
                contador();
                aviso.classList.remove('aviso-ativo');
            })
        }
        limparCampo()
    }
    contador()
}
contarCaracteres()