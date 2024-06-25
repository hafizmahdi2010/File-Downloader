let fileURL = document.querySelector("#fileURL");
let btn = document.querySelector("#downloadBtn");

btn.addEventListener("click",()=>{
  let url = fileURL.value;
  if(url.length > 0){
    let response = fetch(url).then(res => res.blob()).then(file => {
      let temURL = URL.createObjectURL(file);
      let a = document.createElement("a");
      a.href = temURL;
      a.download = "CodeWithMahdi-file";
      a.click();
      a.remove();
    })
  }
  else{
    alert("You Must Write Somthing...!")
  }
});