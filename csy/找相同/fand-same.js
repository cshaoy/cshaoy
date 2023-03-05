let row = 4;
let col = 4;
let lattice = [];
let imgs = [
    'url(./img/阿贝多.png)',
    'url(./img/桉柏.png)',
    'url(./img/八重神子.png)',
    'url(./img/芭芭拉.png)',
];
let selects={dom:null,index:null};
let clear=[];
let endplay;
let setoutopacity;
let grids=[];
init();
function init() {
    console.log(1);
    lattice=[];
    selects={dom:null,index:null};
    clear=[];
    endplay=null;
    setoutopacity=null;
    grid()
    placeimg()
    

}
function placeimg() {
  
    for (let j = 0; j < row; j++) {
        lattice[j] = [];
        for (let i = 0; i < col; i++) {
            let a = Math.floor(Math.random() * 4);
            console.log(a);
            lattice[j][i] = 0;
        }

    }
    for (let i = 0; i < (row * col) / 2; i++) {
        let a = Math.floor(Math.random() * 4);
        console.log(a);
        let r = Math.floor(Math.random() * row);
        console.log(r);
        let c = Math.floor(Math.random() * col);
        console.log(c);
        while (lattice[r][c] != 0) {
            r = Math.floor(Math.random() * row);
            console.log(r);
            c = Math.floor(Math.random() * col);
            console.log(c);
        }
        lattice[r][c]={src:imgs[a],index:a};
        while (lattice[r][c] != 0) {
            r = Math.floor(Math.random() * row);
            console.log(r);
            c = Math.floor(Math.random() * col);
            console.log(c);
        }
        lattice[r][c]={src:imgs[a],index:a};

    }
    endplay= (row * col) / 2;
    let index=0;
    for (let j = 0; j < row; j++) {
       for (let i = 0; i < col; i++) {
        const element = grids[index];
        console.log('a',lattice[j][i])
        element.style.backgroundImage = lattice[j][i].src;
        element.setAttribute('index',lattice[j][i].index);
        index++;
       }
    }
    let setout=setTimeout(()=>{
        for (let index = 0; index < grids.length; index++) {
           grids[index].style.opacity=0;
            
        }
        clearTimeout(setout)
    },2000)
}
function grid() {
    let dom = document.getElementById('container');
    let rect = dom.getBoundingClientRect();
    let width = rect.width / col;
    let height = rect.height / row;
    
    for (let j = 0; j < row; j++) {
        let div = document.createElement('div');
        div.classList.add('row');
        div.style.height = height + 'px';
        dom.appendChild(div);
        for (let i = 0; i < col; i++) {
            let chiild = document.createElement('div');
            let border= document.createElement('div');
            chiild.classList.add('col');
            border.classList.add('border');
            chiild.style.width = width + 'px';
            border.style.left=width*(i+1)+'px';
            div.appendChild(chiild);
            div.appendChild(border);
            grids.push(chiild);

        }
    }
  
  
}

document.getElementById('container').addEventListener('click',function(e){
    if(e.target.className=='col'){
        if(e.target.hasAttributes()){
            e.target.style.opacity=1;
            let attrs=e.target.attributes.getNamedItem('index');
            if(attrs==undefined){
                return
            }
            if(selects.index==null){
                if(setoutopacity){
                    clearTimeout(setoutopacity);
                    for (let index = 0; index < clear.length; index++) {
                        const element = clear[index];
                        if(element!=e.target){
                            element.style.opacity=0;
                        }
                    }
                    clear=[];
                }
                selects.index= attrs.value;
                selects.dom=e.target;
            }else{
                if(selects.index==attrs.value){
                    e.target.attributes.removeNamedItem('index')
                    selects.dom.attributes.removeNamedItem('index')
                    selects.index=null;
                    selects.dom=null;
                    endplay--;
                    if(endplay==0){
                        let setout=setTimeout(()=>{
                            alert('嘿嘿嘿');
                            placeimg()
                            clearTimeout(setout)
                        },500)
                        
                    }
                }else{
                    clear.push(e.target)
                    clear.push(selects.dom)
                    selects.index=null;
                    selects.dom=null;
                    setoutopacity=setTimeout(()=>{
                        for (let index = 0; index < clear.length; index++) {
                            const element = clear[index];
                            element.style.opacity=0;
                        }
                        clear=[];
                        clearTimeout(setoutopacity)
                        setoutopacity=null;
                    },1000)
                   
                }
            }
           
        }
       
    }
})