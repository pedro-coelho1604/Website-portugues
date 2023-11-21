// const chk = document.getElementById('chk')
const select = document.getElementById('pacotes')
const divPacotes = document.querySelector('.pacotes')
const menuHamb = document.querySelector('.menu-hamb')
const menuNav = document.querySelector('.nav')

var pacote = { 
    pctindi1: {
        titulo: 'Individual',
        preco: 'R$ 40,00',
        espec: 'uma aula',
        l1: 'Acompanhamento mais próximo.',
        l2: 'Facilidade maior de corrigir erros.',
        l3: 'Excelente escolha para quem se distrai com facilidade.',
    },
    pctgrup1: {
        titulo: 'Grupo (2 a 4 Pessoas)',
        preco: 'R$ 70,00',
        espec: 'uma aula',
        l1: 'Troca de informações sobre a prática dos exercícios.',
        l2: 'Excelente custo benefício.',
        l3: 'Trabalha mais a socialização.',
    },
    pctindi2: {
        titulo: 'Individual',
        preco: 'R$ 140,00',
        espec: 'quatro aulas',
        l1: 'Acompanhamento mais próximo.',
        l2: 'Facilidade maior de corrigir erros.',
        l3: 'Excelente escolha para quem se distrai com facilidade.',
    },
    pctgrup2: {
        titulo: 'Grupo (2 a 4 Pessoas)',
        preco: 'R$ 250,00',
        espec: 'quatro aulas',
        l1: 'Troca de informações sobre a prática dos exercícios.',
        l2: 'Excelente custo benefício.',
        l3: 'Trabalha mais a socialização.',
    },
    pctindi3: {
        titulo: 'Individual',
        preco: 'R$ 250,00',
        espec: 'oito aulas',
        l1: 'Acompanhamento mais próximo.',
        l2: 'Facilidade maior de corrigir erros.',
        l3: 'Excelente escolha para quem se distrai com facilidade.',
    },
    pctgrup3: {
        titulo: 'Grupo (2 a 4 Pessoas)',
        preco: 'R$ 450,00',
        espec: 'oito aulas',
        l1: 'Troca de informações sobre a prática dos exercícios.',
        l2: 'Excelente custo benefício.',
        l3: 'Trabalha mais a socialização.',
    }
}
mostrarPacotes()

// chk.addEventListener('change', () => {
//   document.body.classList.toggle('dark')
// })

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
            pctgrup1: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 70,00',
                espec: 'uma aula',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi2: {
                titulo: 'Individual',
                preco: 'R$ 140,00',
                espec: 'quatro aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup2: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 250,00',
                espec: 'quatro aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi3: {
                titulo: 'Individual',
                preco: 'R$ 250,00',
                espec: 'oito aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup3: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 450,00',
                espec: 'oito aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
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
            pctgrup1: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 70,00',
                espec: 'uma aula',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi2: {
                titulo: 'Individual',
                preco: 'R$ 140,00',
                espec: 'quatro aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup2: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 250,00',
                espec: 'quatro aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi3: {
                titulo: 'Individual',
                preco: 'R$ 250,00',
                espec: 'oito aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup3: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 450,00',
                espec: 'oito aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            }
        }
    } else if (selecionado == "ensmed") {
        pacote = { 
            pctindi1: {
                titulo: 'Individual',
                preco: 'R$ 50,00',
                espec: 'uma aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup1: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 80,00',
                espec: 'uma aula',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi2: {
                titulo: 'Individual',
                preco: 'R$ 180,00',
                espec: 'quatro aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup2: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 330,00',
                espec: 'quatro aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi3: {
                titulo: 'Individual',
                preco: 'R$ 330,00',
                espec: 'oito aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup3: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 640,00',
                espec: 'oito aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            }
        }
    } else if (selecionado == "vestib") {
        pacote = { 
            pctindi1: {
                titulo: 'Individual',
                preco: 'R$ 50,00',
                espec: 'uma aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup1: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 80,00',
                espec: 'uma aula',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi2: {
                titulo: 'Individual',
                preco: 'R$ 180,00',
                espec: 'quatro aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup2: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 330,00',
                espec: 'quatro aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi3: {
                titulo: 'Individual',
                preco: 'R$ 330,00',
                espec: 'oito aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup3: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 640,00',
                espec: 'oito aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            }
        }
    } else if (selecionado == "concur") {
        pacote = { 
            pctindi1: {
                titulo: 'Individual',
                preco: 'R$ 60,00',
                espec: 'uma aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup1: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 100,00',
                espec: 'uma aula',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi2: {
                titulo: 'Individual',
                preco: 'R$ 220,00',
                espec: 'quatro aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup2: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 400,00',
                espec: 'quatro aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi3: {
                titulo: 'Individual',
                preco: 'R$ 400,00',
                espec: 'oito aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup3: {
                titulo: 'Grupo (2 a 4 Pessoas)',
                preco: 'R$ 760,00',
                espec: 'oito aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            }
        }
    } else if (selecionado == "outros") {
        pacote = { 
            pctindi1: {
                titulo: 'Faculdade individual',
                preco: 'R$ 80,00',
                espec: 'uma aula',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup1: {
                titulo: 'Faculdade (2 a 4 Pessoas)',
                preco: 'R$ 140,00',
                espec: 'uma aula',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi2: {
                titulo: 'Faculdade individual',
                preco: 'R$ 300,00',
                espec: 'quatro aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup2: {
                titulo: 'Faculdade (2 a 4 Pessoas)',
                preco: 'R$ 580,00',
                espec: 'quatro aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            },
            pctindi3: {
                titulo: 'Faculdade Individual',
                preco: 'R$ 550,00',
                espec: 'oito aulas',
                l1: 'Acompanhamento mais próximo.',
                l2: 'Facilidade maior de corrigir erros.',
                l3: 'Excelente escolha para quem se distrai com facilidade.',
            },
            pctgrup3: {
                titulo: 'Faculdade (2 a 4 Pessoas)',
                preco: 'R$ 1050,00',
                espec: 'oito aulas',
                l1: 'Troca de informações sobre a prática dos exercícios.',
                l2: 'Excelente custo benefício.',
                l3: 'Trabalha mais a socialização.',
            }
        }
    }
    mostrarPacotes()
})

function mostrarPacotes() {
    divPacotes.innerHTML = ''
    for (var pct in pacote) {
        if(pacote.hasOwnProperty(pct)) {
            // console.log(pacote[pct]);
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

menuHamb.addEventListener('click', () => {
    menuNav.classList.toggle('nav')
    menuNav.classList.toggle('nav-mobile')
})