var botui = new BotUI('hello-world');

var nome = '';
var email = '';
var telefone = '';
var clientes = '';
var ticket = '';
var profissionais = '';
var folha = '';

/*botui.message
  .add({
    content: 'Olá! Meu nome é ZZZ, sou <b>especialista em produtividade</b> do Superlógica e estou aqui para te ajudar a diagnósticar a eficiência financeira do seu negócio! <br/><br/>Garanto que vai ser rápido e extremamente valioso para você analisar, mensurar e aprimorar todo o potencial de produtividade nos processos financeiros da sua empresa. <br/><br/>Antes de começarmos, vou te pedir alguns dados para que possamos prosseguir, tudo bem?'
  })
  .then(function () {
    return botui.action.button({
      delay: 1000,
      addMessage: false, // so we could the address in message instead if 'Existing Address'
      action: [{
        text: 'Existing Address',
        value: 'exist'
      }, {
        text: 'Add New Address',
        value: 'new'
      }, {
        text: 'Add New Address',
        value: 'nrew'
      }, {
        text: 'Add New Address',
        value: 'k'
      }]
    })
}).then(function (res) {
  if(res.value == 'exist') {
    botui.message.human({
      delay: 500,
      content: address
    });
    end();
  } else {
    botui.message.human({
      delay: 500,
      content: res.text
    });
    askAddress();
  }
}); */


botui.message
  .add({
    type: 'html',
    content: 'Olá! Meu nome é ZZZ, sou <strong>especialista em produtividade</strong> do Superlógica e estou aqui para te ajudar a diagnósticar a eficiência financeira do seu negócio! <br/><br/>Garanto que vai ser rápido e extremamente valioso para você analisar, mensurar e aprimorar todo o potencial de produtividade nos processos financeiros da sua empresa. <br/><br/>Antes de começarmos, vou te pedir alguns dados para que possamos prosseguir, tudo bem?'
  })
  .then(function () {
    question2();
  });

var getName = function () {
  botui.message
    .add({
      delay: 1000,
      type: 'html',
      content: 'Primeiramente, o mais importante: <strong>Qual é o seu nome?</strong>'
    })
    .then(function () {
      return botui.action.text({
        action: {
          placeholder: 'Escreva seu nome aqui...'
        }
      });
    }).then(function (res) {
      nome = res.value;
      botui.message.add({
        type: 'html',
        content: 'Muito prazer, <strong>' + nome + '</strong>! <br/><br/> Vou te fazer algumas perguntas e analisá-las. Ao final, te enviarei o diagnóstico completo por e-mail, ok?'
      });
      getEmail();
    });
}

var getEmail = function () {
  botui.message
    .add({
      delay: 1000,
      type: 'html',
      content: 'E por falar nisso, <strong>qual é seu e-mail</strong>?'
    })
    .then(function () {
      return botui.action.text({
        action: {
          sub_type: 'email',
          placeholder: 'Escreva seu e-mail aqui...'
        }
      });
    }).then(function (res) {
      email = res.value;
      botui.message.add({
        type: 'html',
        content: 'Muito obrigado, ' + nome + '! <br/><br/> Agora já estamos prontos para começar. Vamos lá?'
      })
        .then(function () {
          return botui.action.button({
            action: [{
              text: 'Começar meu diagnóstico!',
              value: 'start'
            }]
          })
        }).then(function () {

          question1();

        });
    });
}


var question1 = function () {
  botui.message
    .add({
      content: 'Sua empresa trabalha com serviços recorrentes ou cobra através de mensalidade?'
    })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        addMessage: false,
        action: [{
          text: 'Sim',
          value: 'yes'
        }, {
          text: 'Não',
          value: 'no'
        }]
      })
    }).then(function (res) {
      if (res.value == 'yes') {
        botui.message.human({
          delay: 300,
          content: 'Sim'
        });
        question2();
      } else {
        botui.message.human({
          delay: 300,
          content: 'Não'
        });
        end();
      }
    });
}

var question2 = function () {
  botui.message
    .add({
      content: 'Como você recebe de seus clientes? (múltipla escolha)'
    })
    .then(function () {
      return botui.action.select({
        delay: 1000,
        action: {
          multipleselect: true,
          placeholder: 'Selecione aqui...',
          options: [
            { value: "boleto", text: "Boleto bancário" },
            { value: "credito", text: "Cartão de crédito" },
            { value: "debito", text: "Cartão de débito" },
            { value: "conta", text: "Débito automático em conta" },
            { value: "outros", text: "Outros" }
          ],
          button: {
            icon: 'check',
            label: 'OK '
          }
        }
      })
    }).then(function (res) {
      if (res.value == 'boleto') {
        question3();
      } else {
        end();
      }
    });
}

var question3 = function () {
  botui.message
    .add({
      content: 'Como você envia as cobranças de boleto para seus clientes?'
    })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          value: "manualmente",
          text: "Por e-mail, manualmente (um a um)"
        }, {
          value: "automaticamente",
          text: "Por e-mail, automaticamente"
        }, {
          value: "sms",
          text: "Por SMS"
        }, {
          value: "correios",
          text: "Por Correios"
        }]

      })
    }).then(function () {

      question4();

    });
}

var question4 = function () {
  botui.message
    .add({
      content: 'Como você gera suas cobranças?'
    })
    .then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          value: "software-manualmente",
          text: "Com um software (manualmente, trocando arquivos de remessa/retorno)"
        }, {
          value: "software-automatico",
          text: "Com um software (100% automático)"
        }, {
          value: "gateway",
          text: "Com um gateway de pagamento"
        }, {
          value: "banco-um",
          text: "Direto com meu banco (manualmente, um a um)"
        }, {
          value: "banco-lote",
          text: "Direto com meu banco (manualmente, em lote)"
        }]

      })
    }).then(function (res) {
      question5();
    });
}


var question5 = function () {
  botui.message
    .add({
      delay: 1000,
      content: 'Quantos clientes ativos sua empresa possui?'
    })
    .then(function () {
      return botui.action.text({
        action: {
          placeholder: 'Digite aqui'
        }
      });
    }).then(function (res) {
      clientes = res.value;
      question6();
    });
}

var question6 = function () {
  botui.message
    .add({
      delay: 1000,
      content: 'Quantos profissionais dedicados a cobranças você possui?'
    })
    .then(function () {
      return botui.action.text({
        action: {
          placeholder: 'Digite aqui'
        }
      });
    }).then(function (res) {
      profissionais = res.value;
      question7();
    });
}

var question7 = function () {
  botui.message
    .add({
      delay: 1000,
      content: 'Qual é o valor total da folha de pagamento do seu time financeiro?'
    })
    .then(function () {
      return botui.action.text({
        action: {
          placeholder: 'Digite aqui'
        }
      });
    }).then(function (res) {
      folha = res.value;
      question8();
    });
}

var question8 = function () {
  botui.message
    .add({
      delay: 1000,
      content: 'Qual é seu ticket médio, ou seja, o valor médio que seus clientes pagam para você?'
    })
    .then(function () {
      return botui.action.text({
        action: {
          placeholder: 'Digite aqui'
        }
      });
    }).then(function (res) {
      ticket = res.value;

      botui.message.add({
        delay: 300,
        type: 'html',
        content: 'Nome:' + nome + '<br/>' + 'Email:' + email + '<br/>' + 'Telefone:' + telefone + '<br/>' + 'Clientes:' + clientes + '<br/>' + 'Ticket:' + ticket + '<br/>' + 'Profissionais:' + profissionais + '<br/>' + 'Folha:' + folha + '<br/>'
      });


      end();


      //askAddress();
    });
}



var askAddress = function () {
  botui.message
    .bot({
      delay: 500,
      content: 'Please write your address below:'
    })
    .then(function () {
      return botui.action.text({
        delay: 1000,
        action: {
          size: 30,
          icon: 'map-marker',
          value: 'oi', // show the saved address if any
          placeholder: 'Address'
        }
      })
    }).then(function (res) {
      botui.message
        .bot({
          delay: 500,
          content: 'New address: ' + res.value
        });

      address = res.value; // save address

      return botui.action.button({
        delay: 1000,
        action: [{
          icon: 'check',
          text: 'Confirm',
          value: 'confirm'
        }, {
          icon: 'pencil',
          text: 'Edit',
          value: 'edit'
        }]
      })
    }).then(function (res) {
      if (res.value == 'confirm') {
        end();
      } else {
        askAddress();
      }
    });
}

var end = function () {
  botui.message
    .bot({
      delay: 1000,
      content: 'Obrigado!'
    });
}