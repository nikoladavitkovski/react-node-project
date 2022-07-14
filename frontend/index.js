document.onload().ready(function(response){
    if(response == null){
        console.log(error);
    } else{
        console.log(response.ready);
    }
    return response;
})

document.addEventListener(function(response){
    this.response = response;
    if(response == true){
        Response.ready();
        try {
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally{
            console.log("The code is not functionally attainable");
        }
        return true;
    }
    Promise(resolve,reject);
    var result = document.append(result);
    setTimeout(() => {
        throw Exception(function(){
            console.log(error);
        })
    }, timeout),
    console.log(response);
})

