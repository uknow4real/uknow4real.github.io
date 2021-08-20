const projects = {
    LetsChat: {
        name: 'LetsChat',
        description: 'da chatbot utilizing natural language processing and machine learning',
        languages: 'Python',
        technologies: 'Flask, NLTK, Keras, NumPy',
        link: 'https://github.com/uknow4real/LetsChat',
        logo: 'letschat'
    },
    MedPass: {
        name: 'MedPass',
        description: 'a decentralized blockchain application implementing smart contracts',
        technologies: 'React.js, Ganache, Truffle, Metamask, Web3.js',
        languages: 'Solidity, Javascript',
        link: 'https://github.com/uknow4real/MedPass',
        logo: 'medpass'
    },
    StudyFam: {
        name: 'StudyFam',
        description: 'a social network for students all across Austria',
        technologies: 'REST API, Bootstrap, MySQL Database, <br> Apache WebServer',
        languages: 'HTML, JS, CSS, PHP, MySQL',
        link: 'https://github.com/uknow4real/StudyFam',
        logo: 'studyfam'
    },
    MusicR: {
        name: 'MusicR',
        description: 'a beatstore (custom E-Commerce shop)',
        technologies: 'REST API, PayPal API (payment methods), Bootstrap, MySQL Database, Apache WebServer',
        languages: 'HTML, JS, CSS, PHP, MySQL',
        link: 'https://github.com/uknow4real/MusicR',
        logo: 'musicr'
    },
    CryptoCheck: {
        name: 'CryptoCheck',
        description: 'a website for checking current crypto trends. The user can specify the amount of owned assets and get the current price for it',
        technologies: 'Django, REST APIs, Bootstrap',
        languages: 'Python, HTML, CSS',
        link: 'https://github.com/uknow4real/CryptoCheck',
        logo: 'cryptocheck'
    },
    Adsens: {
        name: 'Google Ads Keyword Generator',
        description: 'an easy Google Ads Keyword Generator (for type beats) in Python',
        technologies: 'Python Datetime & File Creation',
        languages: 'Python',
        link: 'https://github.com/uknow4real/CryptoCheck',
        logo: 'adsgen'
    },
    WireSharker: {
        name: 'WireSharker',
        description: 'a port scanner application (check open ports for a server and log them in a text field)',
        technologies: 'Inet Sockets, Networking Technologies, JavaFX',
        languages: 'Java',
        link: 'https://github.com/uknow4real/WireSharker',
        logo: 'wiresharker'
    },
}

// variablen
let container = document.getElementById('portfolio-container');
let num = 1;

$(document).ready(function() {
    container.insertAdjacentHTML('beforeEnd', '<div class="row">');
    for (index in projects) {
        if (num < 4) {
            container.lastChild.insertAdjacentHTML('beforeEnd', `
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <div class="project-img">
                                <div id="` + projects[index].logo + `-logo" alt="` + projects[index].name + ` Logo"></div>
                            </div>
                            <div class="card-body">
                                <h4 class="mb-4"><b>` + projects[index].name + `</b></h4>
                                <div class="d-flex justify-content-between">
                                    <footer class="blockquote-footer">` + projects[index].description + `</footer>
                                </div>
                                <p class="card-text">✔️<u>` + projects[index].technologies + `</u></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a href="` + projects[index].link + `" target="_blank"><button type="button" class="btn btn-sm btn-outline-dark">View</button></a>
                                    </div>
                                    <small class="text-muted">Language: ` + projects[index].languages + `</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    `);
        }
        num++;
    }
    container.lastChild.insertAdjacentHTML('beforeEnd', `
        <div class="row btn-div">
            <div class="col-md-4"></div>
            <div class="col-md-4 text-center">
                <button class="btn btn-dark btn-floating" onclick=loadProjects()><i class="fas fa-angle-down"></i> Load more <i class="fas fa-angle-down"></i></button>
            </div>
            <div class="col-md-4"></div>
        </div>
    `);
})

function loadProjects() {
    $('.btn-div').hide();
    container.insertAdjacentHTML('beforeEnd', '<div class="row show-more">');
    num = 1;
    for (index in projects) {
        if (4 <= num && num < 7) {
            container.lastChild.insertAdjacentHTML('beforeEnd', `
                <div class="col-md-4">
                    <div class="card shadow-sm">
                        <div class="project-img">
                            <div id="` + projects[index].logo + `-logo" alt="` + projects[index].name + ` Logo"></div>
                        </div>
                        <div class="card-body">
                            <h4 class="mb-4"><b>` + projects[index].name + `</b></h4>
                            <div class="d-flex justify-content-between">
                                <footer class="blockquote-footer">` + projects[index].description + `</footer>
                            </div>
                            <p class="card-text">✔️<u>` + projects[index].technologies + `</u></p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="` + projects[index].link + `" target="_blank"><button type="button" class="btn btn-sm btn-outline-dark">View</button></a>
                                </div>
                                <small class="text-muted">Language: ` + projects[index].languages + `</small>
                            </div>
                        </div>
                    </div>
                </div>
                `);
        } else if (7 <= num && num < 8) {
            container.insertAdjacentHTML('beforeEnd', '<div class="row show-more">');
            container.lastChild.insertAdjacentHTML('beforeEnd', '<div class="col-md-4">');
            container.lastChild.insertAdjacentHTML('beforeEnd', `
                <div class="col-md-4">
                    <div class="card shadow-sm">
                        <div class="project-img">
                            <div id="` + projects[index].logo + `-logo" alt="` + projects[index].name + ` Logo"></div>
                        </div>
                        <div class="card-body">
                            <h4 class="mb-4"><b>` + projects[index].name + `</b></h4>
                            <div class="d-flex justify-content-between">
                                <footer class="blockquote-footer">` + projects[index].description + `</footer>
                            </div>
                            <p class="card-text">✔️<u>` + projects[index].technologies + `</u></p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="` + projects[index].link + `" target="_blank"><button type="button" class="btn btn-sm btn-outline-dark">View</button></a>
                                </div>
                                <small class="text-muted">Language: ` + projects[index].languages + `</small>
                            </div>
                        </div>
                    </div>
                </div>
                `);
            container.lastChild.insertAdjacentHTML('beforeEnd', '<div class="col-md-4">');
        }
        num++;
    }
}