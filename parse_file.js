
function readFile_fallback(){
    const file_contents = {
        notifications:{
            1:{},
            2:{},
            3:{},
        }
    };
    Object.keys(file_contents.notifications).forEach((key,i,arr)=>{
        const cur = file_contents.notifications[key];
        cur.title = "";
        cur.text = "";
        cur.persistant = "";
        cur.id = key;
    });
    return JSON.stringify(file_contents);    
};

function loadText(){

}

(()=>{


    const file_text = loadText();
    const file = JSON.parse(file_text);

    console.log(file)
    alert(local("json_file_contents"))

})()