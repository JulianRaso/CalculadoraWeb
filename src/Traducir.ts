    export default class traducir {

    static NumTrad;

    static Traductir(a:string){
        this.NumTrad= a;
        
        
        while (this.NumTrad.includes("uno") == true|| this.NumTrad.includes("dos") == true || this.NumTrad.includes("tres") == true || this.NumTrad.includes("cuatro") == true || this.NumTrad.includes("cinco") == true || this.NumTrad.includes("seis") == true || this.NumTrad.includes("siete") == true || this.NumTrad.includes("ocho") == true || this.NumTrad.includes("nueve") == true || this.NumTrad.includes("cero") == true){
        this.NumTrad = this.NumTrad.replace("uno",1);
        this.NumTrad = this.NumTrad.replace("dos",2);
        this.NumTrad = this.NumTrad.replace("tres",3);
        this.NumTrad = this.NumTrad.replace("cuatro",4);
        this.NumTrad = this.NumTrad.replace("cinco",5);
        this.NumTrad = this.NumTrad.replace("seis",6);
        this.NumTrad = this.NumTrad.replace("siete",7);
        this.NumTrad = this.NumTrad.replace("ocho",8);
        this.NumTrad = this.NumTrad.replace("nueve",9);
        this.NumTrad = this.NumTrad.replace("cero",0);
        }
            return parseInt(this.NumTrad,10);
        }

    static TraducirNumeros(a:string){
        while (this.NumTrad.includes("1") == true|| this.NumTrad.includes("2") == true || this.NumTrad.includes("3") == true || this.NumTrad.includes("4") == true || this.NumTrad.includes("5") == true || this.NumTrad.includes("6") == true || this.NumTrad.includes("7") == true || this.NumTrad.includes("8") == true || this.NumTrad.includes("9") == true || this.NumTrad.includes("0") == true){
            this.NumTrad = this.NumTrad.replace("1",1);
            this.NumTrad = this.NumTrad.replace("2",2);
            this.NumTrad = this.NumTrad.replace("3",3);
            this.NumTrad = this.NumTrad.replace("4",4);
            this.NumTrad = this.NumTrad.replace("5",5);
            this.NumTrad = this.NumTrad.replace("6",6);
            this.NumTrad = this.NumTrad.replace("7",7);
            this.NumTrad = this.NumTrad.replace("8",8);
            this.NumTrad = this.NumTrad.replace("9",9);
            this.NumTrad = this.NumTrad.replace("0",0);
            }
                return parseInt(this.NumTrad,10);
            }
    }