//Слова которые загадывает программа
let words = [
    "поварёшка",
    "сковорода",
    "плита",
    "кострюля",
    "микроволновка",
    "стол",
    "стул",
    "пища",
    "миксер",
    "венчик",
    "макароны",
    "печь",
    "колбаса",
    "хлеб",
    "картошка",
]
let word = words[Math.floor(Math.random()*words.length)]; //Программа выбирает слово которое загадать
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_"; //Неотгаданные буквы будут выглядеть вот так "_"
}
let  remainingLetters = word.length; //Каждая буква сначала будет выглядеть вот так

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву или выйдите из игры."); //Игрок должен отгадать букву или выйти из игры
    if (guess === null) {
        break; //Если игрок нажал "Отмена" то игра останавливается
    } else if  (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву."); //Если игрок напишет 2 или более символов то программа не даст ему отггадать слово
    } else {
        for (let j = 0; j < word.length; j++){
            guess = guess.toLowerCase() //Если игрок напишет букву большой то программа поменяет её на маленькую
            if (word[j] === guess) {
                answerArray[j] = guess; //Если игрок отгадал букву то она пишется вместо "_"
                remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(" "));
alert("Отлично! Вы одгадали слово " + word); //Если игрок отгадал слово то программа поздравит его
