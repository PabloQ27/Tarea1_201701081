class Nodo{
    constructor(obj){
        this.obj = obj
        this.siguiente = null
        this.anterior = null
    }
}

class Lista_Doble_Circular{
    constructor(){
        this.cabeza = null
    }

    add(obj){
        console.log('agregando')
        let nuevo = new Nodo(obj)
        if (this.cabeza == null){
            this.cabeza = nuevo
            this.cabeza.siguiente = this.cabeza
            this.cabeza.anterior = this.cabeza
        }else{
            let temp = this.cabeza
            while (temp.siguiente != this.cabeza){               
                temp = temp.siguiente
            }
            temp.siguiente = nuevo
            nuevo.anterior = temp
            nuevo.siguiente = this.cabeza
            this.cabeza.anterior = nuevo
        }
    }

    ver(){
        let temp = this.cabeza
        console.log("Lista Doble")
        do{
            console.log(temp.obj)
            temp = temp.siguiente
        }while (temp!= this.cabeza)
        
    }
}

let lista = new Lista_Doble_Circular()
lista.add(1)
lista.add(2)
lista.add(3)
lista.add(4)
lista.add(5)
lista.ver()
