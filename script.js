window.addEventListener('load',()=> {
    const canvas= document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const clearF = document.getElementById('clear');
    const strokeC = document.getElementById('stroke');
    const pen = document.getElementById('pen');
    const btnDis = document.getElementById('display');
    const imgCon = document.getElementById('imageCon');
    const alpha = document.getElementById('alpha');

    canvas.height = 400;
    canvas.width = window.innerWidth-60;

    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function finishPosition(){
        painting = false;
        ctx.beginPath();
    }

    btnDis.addEventListener('click',function(){
        const dataURI =canvas.toDataURL();
        imgCon.src = dataURI;
    })

    alpha.addEventListener('change', e =>{
        if(e.target.id == 'alpha'){
            ctx.globalAlpha = e.target.value /100;
        }
    })

    strokeC.addEventListener('change', e => {
        if(e.target.id == 'stroke'){
            ctx.strokeStyle = e.target.value;
        }
    })

    pen.addEventListener('change',e =>{
        if(e.target.id == 'pen'){
            ctx.lineWidth = e.target.value;
        }
    })

   clearF.addEventListener('click', e => {
       if(e.target.id == 'clear'){
           ctx.clearRect(0,0,canvas.width,canvas.height);
       }
   })

    function draw(e){
        if(!painting){
            return;
        }else{

            ctx.lineCap = 'round';
            ctx.lineTo(e.clientX,e.clientY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX,e.clientY);            
        }
       
    }

    canvas.addEventListener("mousedown",startPosition);
    canvas.addEventListener("mouseup",finishPosition);
    canvas.addEventListener("mousemove",draw);
})

window.addEventListener('resize',()=> {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

