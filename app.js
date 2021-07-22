document.addEventListener("load",()=>{ 
    var accept=document.querySelector(".accept")
    var sub= document.querySelector(".subm_element")
    function check(){
        // if(accept.checked)
        // {
        sub.style.background="blue"
        sub.style.transition="0.5s ease"
        console.log("working")
        // }
    }
    export default check()
})