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
