const projects = {
    LetsChat: {
        name: 'LetsChat',
        description: '',
        languages: '',
        technologies: '',
        link: ''
    },
    MedPass: {
        name: 'MedPass',
        description: 'a decentralized blockchain application implementing smart contracts.',
        technologies: 'React.js, Ganache, Truffle, Metamask, Web3.js',
        languages: 'Language: Solidity, Javascript',
        link: 'https://github.com/uknow4real/MedPass'
    }
}

console.log(projects.Med);

function loadProjects() {
    console.log('bruh')
    let container = document.getElementById('portfolio-container');
    container.insertAdjacentHTML('beforeEnd', '<div class="row">');
    for (let i = 0; i < 4; i++) {
        container.insertAdjacentHTML('beforeEnd', `
            
        `);
    }
    container.insertAdjacentHTML('beforeEnd', '</div>');
}