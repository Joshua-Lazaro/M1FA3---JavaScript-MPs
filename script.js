function replaceSpace(){
    var input = document.getElementById("txtInput-R").value;
    var output = document.getElementById("txtOutput-R");

    document.getElementById("btnSubmit-R").addEventListener("click", function() {
        var result = input.replaceAll(" ", "");
        output.value = result;
        console.log(result);
    });
}

function SearchWord(){
    var input = document.getElementById("txtInput-S").value;
    var search = document.getElementById("txtSearch").value;
    var output = document.getElementById("txtOutput-S");

    document.getElementById("btnSubmit-S").addEventListener("click", function() {
        if(input.indexOf(search) !== -1){
            output.value = "Found";
            console.log("Found");
        } else {
            output.value = "Not Found";
            console.log("Not Found");
        }
    });
}

function replace() {
    var input = document.getElementById("txtInput-r");
    var wordToReplace = document.getElementById("txtReplace");
    var newWord = document.getElementById("txtNewWord");
    var output = document.getElementById("txtOutput-r");

    document.getElementById("btnSubmit-r").addEventListener("click", function() {
        var result = input.value.replace(wordToReplace.value, newWord.value);
        output.value = result;
        console.log(result);
    });
}


function count(){
    var input = document.getElementById("txtInput-C").value.trim();
    var output = document.getElementById("txtOutput-C");
    document.getElementById("btnSubmit-C").addEventListener("click", function() {
        var result = input.length;
        output.value = result;
        console.log(result);
    });
}

function includes(){
    var input = document.getElementById("txtInput").value;
    var output = document.getElementById("txtOutput");

    document.getElementById("btnSubmit").addEventListener("click", function() {
        if(input.includes("@")){
            output.value = "Valid";
            console.log("Valid");
        } else {
            output.value = "Invalid";
            console.log("Invalid");
        }
    });
}
