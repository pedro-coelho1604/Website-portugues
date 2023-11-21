const chk = document.getElementById('chk')
const select = document.getElementById('pacotes')
const divPacotes = document.querySelector('.pacotes')

var pacote = { 
    pctindi1: {
        titulo: 'Individual',
        preco: 'R$ 40,00',
        espec: 'uma aula',
        l1: 'Acompanhamento mais próximo.',
        l2: 'Facilidade maior de corrigir erros.',
        l3: 'Excelente escolha para quem se distrai com facilidade.',
    },
    pctindi2: {
        titulo: 'Individual',
        preco: 'R$ 220,00',
        espec: 'quatro aula',
        l1: 'Acompanhamento mais próximo.',
        l2: 'Facilidade maior de corrigir erros.',
        l3: 'Excelente escolha para quem se distrai com facilidade.',
    },
    pctindi3: {
        titulo: 'Individual',
        preco: 'R$ 400,00',
        espec: 'oito aula',
        l1: 'Acompanhamento mais próximo.',
        l2: 'Facilidade maior de corrigir erros.',
        l3: 'Excelente escolha para quem se distrai com facilidade.',
    }
}
mostrarPacotes()

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

select.addEventListener('change', function(){
    var selecionado = select.value
    // console.log(selecionado)
    if (selecionado == "funda1") {
        pacote = { 
            pctindi1: {
                titulo: 'Individual',
                preco: 'R$ 40,00',
                espec: 'uma aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctindi2: {
                titulo: 'Individual',
                preco: 'R$ 220,00',
                espec: 'quatro aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctindi3: {
                titulo: 'Individual',
                preco: 'R$ 400,00',
                espec: 'oito aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            }
        }
    } else if (selecionado == "funda2") {
        pacote = { 
            pctindi1: {
                titulo: 'Individual',
                preco: 'R$ 40,00',
                espec: 'uma aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctindi2: {
                titulo: 'Individual',
                preco: 'R$ 220,00',
                espec: 'quatro aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctindi3: {
                titulo: 'Individual',
                preco: 'R$ 400,00',
                espec: 'oito aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            }
        }
    }
    mostrarPacotes()
})

function mostrarPacotes() {
    divPacotes.innerHTML = ''
    for (var pct in pacote) {
        if(pacote.hasOwnProperty(pct)) {
            console.log(pacote[pct]);
            divPacotes.innerHTML += `
            <div class="card-pacote">
                <div class="top_card-pacote">
                    <h4>${pacote[pct].titulo}</h4>
                    <span class="preco">${pacote[pct].preco}</span>
                    <span class="especificacao">${pacote[pct].espec}</span>
                </div>
                <ul class="lista_card-pacote">
                    <li>${pacote[pct].l1}</li>
                    <li>${pacote[pct].l2}</li>
                    <li>${pacote[pct].l3}</li>
                </ul>
                <button type="button" class="button_card-pacote">Contrate agora!</button>
            </div>
            `
        }
    }
}