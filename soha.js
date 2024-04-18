function addskill(){
    var skill_input = document.getElementById('skillInput');
    var skill_list = document.getElementById('skillList');

    console.log(skill_input);
    if(skill_input.value === ''){
        alert("enter your skill categore");
    }else{
    var list = document.createElement('li');
    list.textContent = skill_input.value;
    skill_list.appendChild(list);
    skill_input.value = '';

    }
}



























