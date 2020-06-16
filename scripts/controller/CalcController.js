class CalcController {

    constructor() {
        this._locale = 'pt-BR';

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        this._currentDate;
        this.initialize();

        this.initButtonsEvents();
    }
    //Aqui mostra no display a contagem do tempo em segundos 
    initialize() {
        this.setDisplayDateTime();
        

        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

    }

    //Aqui colocarei os eventos dos botoes 
    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach(btn=> {
            btn.addEventListener("click", e => {
                console.log(btn.className.baseVal.replace("btn-",""));
            })
        })
    }

    //Aqui a formataçao da data que aparecera assim 16 de junho de 2020
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    // Aqui iremos trabalhar na data e na hora do display da calculadora  
    // hora no display
    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }
    // data no display
    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }
    // Aqui teremos os calculos mostrados no display da calculadora

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    //Aqui retorna a data atual no display 
    get currentDate() {
        return new Date();
    }

    set dataAtual(value) {
        this.currentDate = value;
    }

}