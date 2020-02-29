var flag = 0,
    sliderValue;



function startAndStop() // to start, pause or resume the algorithm
{
    let btn = document.getElementById('startToggle');

    if (flag === 1) {
        btn.innerHTML = 'Start';
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-success');
        flag = 0;
    } else if (flag === 0) {

        btn.innerHTML = 'Pause';
        btn.classList.remove('btn-success');
        btn.classList.add('btn-danger');
        flag = 1;
    } else //When the flag is 2 that means the algorithms is finished and the user pressed the refresh button 
    {
        document.location.reload();
    }

}
//-----------------------------
var n = document.getElementById('slider').value;
var step = [];

function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n == 1) {
        step.push(from_rod);
        step.push(to_rod);
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    step.push(from_rod);
    step.push(to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

var i = 0;
var lines = [
    [150, 50, 150, 320],
    [450, 50, 450, 320],
    [750, 50, 750, 320]
];
var all = [];
var no = [];
towerOfHanoi(n, 0, 2, 1);
for (let i = 0; i < n; i++) {
    let a, b, c, d;
    a = 50 + 20 * i;
    c = 250 - 20 * i;
    b = 50 + 50 * i;
    all.push([a, b, c, b]);
    no.push(i);
}
var vis = [no, [],
    []
];

function setup() {
    createCanvas(windowWidth - 17, 600);
}
var spd = 5;

function draw() {

    frameRate(50);
    translate(400, height); //moves the origin to bottom left
    scale(1, -1); //flips the y values so y increases "up"
    background(150);
    strokeWeight(10);
    for (let i = 0; i < 3; i++)
        line(lines[i][0], lines[i][1], lines[i][2], lines[i][3]);

    strokeWeight(30);
    for (let i = 0; i < n; i++) line(all[i][0], all[i][1], all[i][2], all[i][3]);



    //----------------------------------------------------
    var cent;
    if (i < step.length) {
        cent =
            (all[vis[step[i]][vis[step[i]].length - 1]][0] +
                all[vis[step[i]][vis[step[i]].length - 1]][2]) /
            2;
        // ---------- vertical position of bar
        var hgt = all[vis[step[i]][vis[step[i]].length - 1]][1];

        // ---------Move Up
        if (hgt < 320 && cent == step[i] * 300 + 150) {
            all[vis[step[i]][vis[step[i]].length - 1]][1] += spd;
            all[vis[step[i]][vis[step[i]].length - 1]][3] += spd;
        }

        //----------- Curve Move
        else if (hgt >= 320 && cent != step[i + 1] * 300 + 150) {
            if (step[i] < step[i + 1]) {
                all[vis[step[i]][vis[step[i]].length - 1]][0] += spd;
                all[vis[step[i]][vis[step[i]].length - 1]][2] += spd;
            } else {
                all[vis[step[i]][vis[step[i]].length - 1]][0] -= spd;
                all[vis[step[i]][vis[step[i]].length - 1]][2] -= spd;

            }
            //-----------------Error Here !!!!!
            var cent2;
            if (Math.abs(step[i + 1] - step[i]) == 1 && (step[i] == 0 || step[i + 1] == 0))
                cent2 = (cent * cent * -1) / 450.0 + (4.0 / 3.0) * cent + 170.0;
            else if (Math.abs(step[i + 1] - step[i]) == 2)
                cent2 = (cent * cent * -13) / 9000.0 + (13.0 * cent / 10.0) + 315.0 / 2.0;
            else
                cent2 = (cent * cent * -4) / 1125.0 + (64.0 / 15.0) * cent - 880.0;
            //------------------------------------------------

            all[vis[step[i]][vis[step[i]].length - 1]][1] = cent2;
            all[vis[step[i]][vis[step[i]].length - 1]][3] = cent2;
        }
        // -------------Move Down
        else if (
            hgt > 50 + vis[step[i + 1]].length * 50 &&
            cent == step[i + 1] * 300 + 150
        ) {
            all[vis[step[i]][vis[step[i]].length - 1]][1] -= spd;
            all[vis[step[i]][vis[step[i]].length - 1]][3] -= spd;
        }

        // -------------- Next Step
        else if (i < step.length) {
            vis[step[i + 1]].push(vis[step[i]].pop());
            i += 2;
        }
    }

}