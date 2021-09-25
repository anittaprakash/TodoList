function ajax()
{
    
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        var response=JSON.parse(this.responseText);
        var output="";
        
        
        for(var i=0;i<response.length;i++)
        {    
                if(response[i].completed== true)
                {
                    output+='<tr><td><input type="checkbox" name="test"  id="check1" checked disabled ></td><td>'+response[i].title +'</td></tr>';
                    
                }
                else{
                    output+='<tr><td><input type="checkbox" name="test" class="largerCheckbox" id="check" value="" onchange="checking()"></td><td>'+response[i].title +'</td></tr>';
                }
               
               document.getElementById("todotable").innerHTML=output; 
               
        }
       
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}


// var count=0;
// function checking()
// {
    
//     var validcheck=new Promise(function(resolve,reject){
        
    
            
//             if(document.getElementById("check").checked == true)
//             {
//                 // alert(count)
//                 count++;
//             }
         
//             if(count==5)
//             {
//                 resolve("Congrats. 5 Tasks have been Successfully Completed");
                
//             }
//             else{
//                 reject();
//             } 
        
//     });
//     validcheck.then(function(s)
//     {
//           alert(s);
//     });

// }

    
 function checking()
 {
        var count=document.querySelectorAll('input[id="check"]:checked').length;
        const promise=new Promise((resolve,reject)=>{
            // alert(count);
            if(count===5)
              {
                resolve("Congrats. 5 Tasks have been Successfully Completed");
              }
            else
              {
               reject("Rejected");
              }  
        });

    promise.then(function(s){
       console.log(s);
       alert(s);
    }).catch(function(e){
        console.log(e);
    });

}

