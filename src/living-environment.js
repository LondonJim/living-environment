class livingEnvironment{

    constructor(organismNum = 4){
        this.organismNum = organismNum;
        this.organisms = [];
        this.canvas = document.querySelector('.playBoard');
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
    }

    start() {
        this.createOrganisms();
        this.createHabitat();
    }

    createOrganisms() {
        for (let i = 1; i < this.organismNum; i++) {
            let xRandom = Math.floor(Math.random() * Math.floor(this.width))
            let yRandom = Math.floor(Math.random() * Math.floor(this.height))
            this.organisms.push(new Organism(xRandom, yRandom))
        }
    }

    createHabitat() {
        this.habitat = new Habitat();
    }
}