function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.remove("invisivel");
    modal.addEventListener("click" , (event) => {
        if(event.target.id == modalID || event.target.className == 'close' ){
            modal.classList.add("invisivel")
            
        }
        
    })
};

const contato = document.querySelector("#contato");
contato.addEventListener("click" ,() => iniciaModal('modal'));

