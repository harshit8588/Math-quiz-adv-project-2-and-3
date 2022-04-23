player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");
player_1_score = 0;
player_2_score = 0;

question_turn = "player_1";
answer_turn = "player_2";


document.getElementById("player_1_name").innerHTML = player_1_name + "-";
document.getElementById("player_2_name").innerHTML = player_2_name + "-";
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "question turn" + player_1_name;
document.getElementById("player_answer").innerHTML = "answer turn" + player_2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
    input_box = "<br>Answer : <input type = 'text' id='inpur_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";

    row = question_number + input_box + check_button;s
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";


}