function onClickSubmit(){
    let p1 = document.getElementById('password');
    let p2 = document.getElementById('password_confirmation');
    if (p1.value!=p2.value){
        p2.setCustomValidity('Passwords dont match');
    }else{
        p2.setCustomValidity('');
    }

    let d = document.getElementById('date_of_birth');
    console.log(d.value);
    let year = d.value.slice(0,4);
    console.log(year);
    if (year<1930){
        d.setCustomValidity('Put a valid date of birth');
    }else{
        d.setCustomValidity('');
    }
    
    let c = document.getElementById('country');
    let clist = [...c.value];
    let hasnumber = false;
    for (let i = 0; i < clist.length; i++) {
        for (let j = 0; j < 10; j++) {
            if (clist[i]==j){
                hasnumber=true;
            }
        }
    }
    if (hasnumber){
        c.setCustomValidity('Put a valid country');
    }else{
        c.setCustomValidity('');
    }

}