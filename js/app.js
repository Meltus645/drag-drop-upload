"use strict";
const dragSpace =document.querySelector('.drag-space');
const button =dragSpace.querySelector('button');
const input =dragSpace.querySelector('#file');
const h2 =dragSpace.querySelector('h2');
const image =dragSpace.querySelector('.drop-icon img');
const selectedFile =dragSpace.querySelector('.browse-files p');

button.addEventListener('click', ()=>{
    input.click();
});
input.addEventListener('change', evt=>{
    const files =evt.target.files;
    if(files && files.length >0){
    dragSpace.classList.add('active');
    showFile(files[0]);
    }
});
dragSpace.addEventListener('dragover', evt=>{
    evt.preventDefault();
    dragSpace.classList.add('active');
    h2.textContent ='Release To Upload';
});
dragSpace.addEventListener('dragleave', evt=>{
    evt.preventDefault();
    dragSpace.classList.remove('active');
    h2.textContent ='Drag And Drop Here';
});
dragSpace.addEventListener('drop', evt=>{
    evt.preventDefault();
    dragSpace.classList.remove('active');
    showFile(evt.dataTransfer.files[0]);
});
function showFile(file){
    selectedFile.textContent ='No file selected';
    h2.textContent ='Drag And Drop Here';
    let fileType =file.type;
    let validTypes =['image/jpeg','image/jpg','image/png'];
    if(validTypes.includes(fileType)){
        let reader =new FileReader();
        reader.onload =() =>{
            image.src =reader.result;
            let filename =file.name;
            if(filename.length >16){
                let firstcut ='';
                let lastcut ='';
                for(let i =0; i<8;i++){
                    firstcut +=filename.charAt(i);
                }
                for(let i =filename.length-5;i<filename.length;i++){
                    lastcut +=filename.charAt(i);
                }
                lastcut ='...'+lastcut;
                filename =firstcut+lastcut;
            }
            selectedFile.textContent =filename;
            dragSpace.classList.remove('active')
            h2.textContent ='Drag And Drop Here';
        }
        reader.readAsDataURL(file)
    }else{
        alert('unsupported file format');
        dragSpace.classList.remove('active');
        h2.textContent ='Drag And Drop Here';
    }
}