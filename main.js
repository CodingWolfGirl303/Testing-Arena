function submit() {
    var number = document.getElementById("number").value;
    cupcakes = document.getElementById("cupcakes");
    birds = document.getElementById("birds");
    trees = document.getElementById("trees");
    rocks = document.getElementById("rocks");
    cats = document.getElementById("cats");
    console.log("Submitted successfully");
    console.log(number);
    if (number == 1) {
        cupcakes.innerHTML = "There is "+number+" cupcake.";
        birds.innerHTML = "There is "+number+" bird.";
        trees.innerHTML = "There is "+number+" tree.";
        rocks.innerHTML = "There is "+number+" rock.";
        cats.innerHTML = "There is "+number+" cat.";
    } else {
        cupcakes.innerHTML = "There are "+number+" cupcakes.";
        birds.innerHTML = "There are "+number+" birds.";
        trees.innerHTML = "There are "+number+" trees.";
        rocks.innerHTML = "There are "+number+" rocks.";
        cats.innerHTML = "There are "+number+" cats.";
    }
}