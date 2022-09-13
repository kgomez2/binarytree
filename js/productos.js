class Producto{
    constructor(codigo,nombre,cantidad,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=cantidad;
        this.hijoI=null;
        this.hijoD=null;
    }
    infoHtml() {
        return "<p>Nombre " + this.nombre + " Codigo " + this.codigo + "</p>"
    }
}

class BinaryTree{
    constructor(){
        this.raiz=null;
    }
    agregar(){
        if(this.raiz==null){
            this.raiz=nuevo;
        }
        else{
            this._agregate(nuevo,this.raiz);
        }
    }
    _agregate(nuevo,nodox){
        if(nuevo.codigo<nodox.codigo){
            if(nodox.hijoI==null){
                nodox.hijoI=nuevo;
            }
            else {
                this._agregate(nuevo,nodox.hijoI);
            }
        }
        else {
            if (nodox.hijoD=null){
                nodox,hijoD=nuevo;
            }
            else {
                this._agregate(nuevo,nodox.hijoD);
            }
        }
    }

    inOrder(){
        if (this.raiz==null){
            return "";
        }
        else{
            return this._inOrderRec(this.raiz)
        }
    }
    _inOrderRec(nodox){
        let info ="";
        if(nodox.hijoI != null){
            info += this._inOrderRec(nodox.hijoI);
        }
        info += nodox.infoHtml;
        if(nodox.hijoD != null){
            info += this._inOrderRec(nodox.hijoD);
        }
        return info;
    }
    preOrder(){
        if (this.raiz == null)
          return "";
        else 
          return this._preOrderRec(this.raiz);
      }
      _preOrderRec(nodox){
        let info = "";
        info += nodox.infoHtml();
        if (nodox.hijoI!= null)
          info += this._preOrderRec(nodox.hijoI);
        if (nodox.hijoD != null)
          info += this._preOrderRec(nodox.hijoD);
        return info;
    }
    busca(codigo){
        if (this.raiz == null)
          return "";
        else
          return this._buscar(codigo, this.raiz);
        }
        _buscar(codigo, nodox){
            if (codigo == nodox.codigo)
              return nodox.infoHtml();
            else if(nodox.hijoI != null || nodox.hijoD != null){
              if (codigo < nodox.codigo)
                return this._buscar(codigo, nodox.hijoI);
              else
                return this._buscar(codigo, nodox.hijoD);
            }
            else
      return "";
}
}

