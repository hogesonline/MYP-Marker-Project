var data ;
console.log (data);


let body = document.querySelector("body");
let template = document.querySelector('#student-result');


for(let i=0; i < data.results.length; i++){
    // Clone the new section and insert it into the table
    let person = data.results[i];
    let clone = template.content.cloneNode(true);
    let name = clone.querySelector("#stud-name");
    let resultA = clone.querySelector("#result-a");
    let commentA = clone.querySelector("#comment-a");
    let resultB = clone.querySelector("#result-b");
    let commentB = clone.querySelector("#comment-b");
    let resultC = clone.querySelector("#result-c");
    let commentC = clone.querySelector("#comment-c");
    let resultD = clone.querySelector("#result-d");
    let commentD = clone.querySelector("#comment-d");

    name.textContent = `Student Name: ${person.Name}`;
    resultA.textContent = person.A;
    commentA.textContent = person.CommentA;
    resultB.textContent = person.B;
    commentB.textContent = person.CommentB;
    resultC.textContent = person.C;
    commentC.textContent = person.CommentC;
    resultD.textContent = person.D;
    commentD.textContent = person.CommentD;

    //then I need to manage the colouring for the selection
    if (person.A == 0){
        clone.querySelector('#A-0').classList.add('yellow');

    }
    else {
        //find the related comments and make them yellow
        //Make A1
        var a1 = clone.querySelector(`#A-${person.Ai}-1`);
        if (a1 !== null) {a1.classList.add('yellow')};
        //Make A1
        let a2 = clone.querySelector(`#A-${person.Aii}-2`) ;
        if (a2 !== null) {a2.classList.add('yellow')};
        //Make A1
        let a3 = clone.querySelector(`#A-${person.Aiii}-3`);
        if (a3 !== null) {a3.classList.add('yellow')};
        //Make A1
        let a4 = clone.querySelector(`#A-${person.Aiv}-4`) ;
        if (a4 !== null) {a4.classList.add('yellow')};
        //Make A1
        let b1 = clone.querySelector(`#B-${person.Bi}-1`) ;
        if (b1 !== null) {b1.classList.add('yellow')};
        //Make A1
        let b2 = clone.querySelector(`#B-${person.Bii}-2`);
        if (b2 !== null) {b2.classList.add('yellow')};
        //Make A1
        let b3 = clone.querySelector(`#B-${person.Biii}-3`);
        if (b3 !== null) {b3.classList.add('yellow')};
        //Make A1
        let b4 = clone.querySelector(`#B-${person.Biv}-4`) ;
        if (b4 !== null) {b4.classList.add('yellow')};
        //Make A1
        let c1 = clone.querySelector(`#C-${person.Ci}-1`);
        if (c1 !== null) {c1.classList.add('yellow')};
        //Make A1
        let c2 = clone.querySelector(`#C-${person.Cii}-2`);
        if (c2 !== null) {c2.classList.add('yellow')};
        //Make A1
        let c3 = clone.querySelector(`#C-${person.Ciii}-3`);
        if (c3 !== null) {c3.classList.add('yellow')};
        //Make A1
        let c4 = clone.querySelector(`#C-${person.Civ}-4`) ;
        if (c4 !== null) {c4.classList.add('yellow')};
        //Make A1
        let d1 = clone.querySelector(`#D-${person.Di}-1`);
        if (d1 !== null) {d1.classList.add('yellow')};
        //Make A1
        let d2 = clone.querySelector(`#D-${person.Dii}-2`);
        if (d2 !== null) {d2.classList.add('yellow')};
        //Make A1
        let d3 = clone.querySelector(`#D-${person.Diii}-3`);
        if (d3 !== null) {d3.classList.add('yellow')};
        //Make A1
        let d4 = clone.querySelector(`#D-${person.Div}-4`);
        if (d4 !== null) {d4.classList.add('yellow')};


    }



    body.appendChild(clone);
};
