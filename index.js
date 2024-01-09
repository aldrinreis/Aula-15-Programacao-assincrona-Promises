function cadastrarUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //lógica para cadastrar usuário...
      var erro = true;

      if (!erro) {
        resolve("Usuário cadastrado com sucesso!");
      } else {
        reject("Ocorreu um erro ao cadastrar o usuário!");
      }
    }, 2000);
  });
}

cadastrarUsuario()
  .then((mensagem) => {
    console.log(mensagem);
  })

  .catch((mensagem) => {
    console.log(mensagem);
  });

function baixarConteudoPromisse(nomeConteudo) {
  return new Promise((resolve, reject) => {
    console.log(`Iniciando o download de ${nomeConteudo}.....`);

    // Simula o tempo de download.

    setTimeout(() => {
      const sucesso = true; // Simula download bem-sucedido.
      if (sucesso) {
        console.log(`${nomeConteudo} foi baixado com sucesso!.....`);
        resolve(nomeConteudo);
      } else {
        const erro = "Erro ao baixar o conteúdo.";
        console.error(erro);
        reject(erro); // Rejeita a promessa com o erro.
      }
    }, 2000);
  });
}

// Usar a função baixarConteudoPromisse com Promise

baixarConteudoPromisse("imagem.jpg")
  .then((nomeConteudo) => {
    console.log(`Download de ${nomeConteudo} concluído com sucesso!...`);
    return baixarConteudoPromisse("Vídeo.mp4");
  })
  .then((nomeConteudo) => {
    console.log(`Download de ${nomeConteudo} concluído com sucesso!...`);
  })
  .catch((erro) => {
    console.error(`Erro ao baixar o conteúdo: ${erro}`);
  });
