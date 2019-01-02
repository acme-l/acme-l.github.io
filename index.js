qwer=0;
qwe=0;
qw=-40;
jk=0;
frut=0;
rad1=document.getElementsByName('radio1');
rad2=document.getElementsByName('radio2');
var Ball = function(data) {
    this.opt = {
        index: -1,
        queue: [],
        loop: false,
        startTime: 0,
        timer: null
    };
    this.init(data);
    this.x, this.y
};

Ball.prototype.init = function(data) {
    var opt = Object.assign(this.opt, data || {});
    opt.startTime = performance.now();
    opt.index++;
    opt.loop && (opt.index %= opt.queue.length);
};

Ball.prototype.move = function() {

    var d = this.opt.startTime;
    var data = this.opt.queue[this.opt.index];
    if(!data) return;
    var b = (performance.now() - d) / data.duration;
        1 <= b && (b = 1);
        this.x = data.from.x + (data.to.x - data.from.x) * b | 0;
        this.y = data.from.y + (data.to.y - data.from.y) * b | 0;
        1 == b && this.init();


};
var circle = function(x, y, radius, fillCircle) {//lделаем шар
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    
    if (fillCircle) ctx.fill();
    else ctx.stroke()
};


Ball.prototype.draw = function() {//"рисуем" шар
    circle(this.x, this.y, 30, true)
};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Start = {
    queue: [{
        from: {x: 400,y: 600},
        to: {x: 400,y: 300},
        duration: 2000
    },],};
var ToTable1 = {
    queue: [{
        from: {x: 400,y: 300},
        to: {x: 240,y: 150},
        duration: 1000
    },],};
var ToTable2 = {
    queue: [{
        from: {x: 400,y: 300},
        to: {x: 240,y: 350},
        duration: 1000
    },],};
    var Table1_1ToPay = {
        queue: [{
            from: {x: 240,y: 150},
            to: {x: 600,y: 450},
            duration: 1000
    },{
        from: {x: 600,y: 450},
        to: {x: 650,y: 185},
        duration: 1000
    },{
        from: {x: 650,y: 250},
        to: {x: 400,y: 630},
        duration: 1000
    },],};

    var Table1ToTable2 = {
        queue: [{
            from: {
                x: 240,
                y: 150
            },
            to: {
                x: 240,
                y: 250
            },
            duration: 1000
        },{
            from: {
                x: 240,
                y: 250
            },
            to: {
                x: 200,
                y: 250
            },
            duration: 1000
        },],};

    var Table1_1ToEnd = {
        queue: [{
            from: {
                x: 240,
                y: 150
            },
            to: {
                x: 600,
                y: 450
            },
            duration: 1000
    },{
            from: {
                x: 600,
                y: 450
            },
            to: {
                x: 400,
                y: 630
            },
            duration: 1000
    },],};

    var Table2_1ToPay = {
        queue: [{
            from: {
                x: 240,
                y: 350
            },
            to: {
                x: 600,
                y: 450
            },
            duration: 1000
        },{
            from: {
            x: 600,
            y: 450
            },
            to: {
            x: 650,
            y: 185
            },
            duration: 1000
        },{
            from: {
            x: 650,
            y: 250
            },
            to: {
            x: 400,
            y: 630
            },
            duration: 1000
        },],};

    var Table2ToTable1 = {
            queue: [{
                from: {
                    x: 240,
                    y: 350
                },
                to: {
                    x: 240,
                    y: 250
                },
                duration: 1000
            },{
                from: {
                    x: 240,
                    y: 250
                },
                to: {
                    x: 200,
                    y: 250
                },
                duration: 1000
            },],};
    
    var Table2_1ToEnd = {
            queue: [{
                from: {
                    x: 240,
                    y: 350
                },
                to: {
                    x: 600,
                    y: 450
                },
                duration: 1000
            },{
                from: {
                x: 600,
                y: 450
                },
                to: {
                x: 400,
                y: 630
                },
                duration: 1000
            },],};

            var Table_ToPay = {
                queue: [{
                    from: {
                        x: 200,
                        y: 250
                    },
                    to: {
                        x: 600,
                        y: 450
                    },
                    duration: 1000
            },{
                from: {
                    x: 600,
                    y: 450
                },
                to: {
                    x: 650,
                    y: 185
                },
                duration: 1000
            },{
                from: {
                    x: 650,
                    y: 250
                },
                to: {
                    x: 400,
                    y: 630
                },
                duration: 1000
            },],};

            var Table_ToEnd = {
                queue: [{
                    from: {
                        x: 200,
                        y: 250
                    },
                    to: {
                        x: 600,
                        y: 450
                    },
                    duration: 1000
                },{
                    from: {
                    x: 600,
                    y: 450
                    },
                    to: {
                    x: 400,
                    y: 630
                    },
                    duration: 1000
                },],};

ctx.fillStyle = "#8b4513";
ctx.fillRect(100, 100, 100, 100);
ctx.fillRect(100, 300, 100, 100);
ctx.fillRect(300, 550, 200, 50);
ctx.fillRect(500, 100, 300, 50);

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min) 
    rand = Math.round(rand); 
    return rand; 
}
var j= 0;


var cost = [];
cost [1] = 0;
cost [2] = 0;
var go = [];
var ball = [];
var s = [];
var cash = [];
var i=0, t=0, o=0, e=0;
var monney=100;
document.getElementById('u_monney').innerHTML=monney+"$";
var cicle = 0;
var vay = Start;

function x() {
    vay = Start;
    ball[i] = new Ball(vay);
    cash[i] = randomInteger(10,600);
    func(); 
    ++i < 100 && window.setTimeout(y, 2000);
    };
    
function y() {
    vay = ToTable1;
    if(randomInteger(1,10)<5)
    vay = ToTable2;
    ball[t] = new Ball(vay);
    func();
    
    ++t < 100 && window.setTimeout(z, 1000);
};

function z() {
    
    if(vay == ToTable1){
        vay = Table1_1ToEnd;
        
        if(cost [1]<=cash[o]){
            if(rad1[0].checked && cost[1]>=25)
                vay = Table1_1ToEnd;
            else if(rad1[1].checked && cost[1]>=60)
                vay = Table1_1ToEnd;
            else if(rad1[2].checked && cost[1]>=100)
                vay = Table1_1ToEnd;
            else if(rad1[3].checked && cost[1]>=500)
                vay = Table1_1ToEnd;
            else{
                vay = Table1_1ToPay;   
            if(rad1[0].checked)
                monney=Number(monney)-14;
            if(rad1[1].checked)
                monney=Number(monney)-26;
            if(rad1[2].checked)
                monney=Number(monney)-50;
            if(rad1[3].checked)
                monney=Number(monney)-190;
            monney=Number(monney)+Number(cost [1]);
            document.getElementById('u_monney').innerHTML=monney+"$";}

        }
    }
    if(vay == ToTable2){
    vay = Table2_1ToEnd;    
    
    if(cost [2]<=cash[o]){
        if(rad2[0].checked && cost[2]>=25)
            vay = Table2_1ToEnd;
        else if(rad2[1].checked && cost[2]>=60)
            vay = Table2_1ToEnd;
        else if(rad2[2].checked && cost[2]>=100)
            vay = Table2_1ToEnd;
        else if(rad2[3].checked && cost[2]>=1500)
            vay = Table2_1ToEnd;
        else{
            vay = Table2_1ToPay;   
        if(rad2[0].checked)
            monney=Number(monney)-14;
        if(rad2[1].checked)
            monney=Number(monney)-26;
        if(rad2[2].checked)
            monney=Number(monney)-50;
        if(rad2[3].checked)
            monney=Number(monney)-190;
        monney=Number(monney)+Number(cost [2]);
        document.getElementById('u_monney').innerHTML=monney+"$";}

    }
     
    }
    ball[o] = new Ball(vay);
    func();

    ++o < 99 && window.setTimeout(x, randomInteger(1,1000));
};

function func(){
var width = canvas.width;
var height = canvas.height;
if(ds%20 == 0 )
    {
      monney=Number(monney)+Number(qw);
      document.getElementById('u_monney').innerHTML=monney+"$";
      qw-=1;   
    }
requestAnimationFrame(function test() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(100, 100, 100, 100);
    ctx.fillRect(100, 300, 100, 100);
    ctx.fillRect(300, 550, 200, 50);
    ctx.fillRect(500, 100, 300, 50);
    if(qwer == 1)
    {
      ctx.drawImage(img,x90,y90);
    }
    if(qwe == 1)
    {
       ctx.drawImage(img2,x900,y900); 
    }
    ctx.fillStyle = "silver";
    for (i = 0; i < ball.length; i++) {
    ball[i].draw();
    ball[i].move();
    }
    //ctx.strokeRect(0, 0, width, height);
    requestAnimationFrame(test)
});}
canvas.onmousemove=function getCoord()
{
    x20=event.clientX-8;
    y20=event.clientY-8;
}
canvas.onclick = function Rastanovka()
{
    if(x20>300 && y20>550 && x20<500 && y20<600)
    {
        StartStop();
       if(jk !=1)
            x();
        if(jk==1)
        {
            victory = document.getElementById('victory');
            victory.style.display="inline"; 
            document.getElementById('stopwatch1').innerHTML = readout; 
            document.getElementById('u_monney1').innerHTML = monney + "$";     
              
        }
        jk=1; 
        
    }

    
    
        
    if(x20>100 && y20>100 && x20<200 && y20<200)
    {
        table_1=document.getElementById('table_1');
        table_1.style.display="inline";
        kol_monney1=document.getElementById('kol_monney1').value;
    }
    if(x20>100 && y20>300 && x20<200 && y20<400)
    {
        table_2=document.getElementById('table_2');
        table_2.style.display="inline";
        kol_monney2=document.getElementById('kol_monney2').value;
    }


}
button1.onclick= function()
{ 
    x90=100;
    y90=100;
    for (var i=0;i<rad1.length; i++) {
        if (rad1[0].checked) 
            img=document.getElementById("vinograd2");
        if (rad1[1].checked) 
            img=document.getElementById("banan");  
        if (rad1[2].checked) 
            img=document.getElementById("arbyz");
        if (rad1[3].checked) 
            img=document.getElementById("drako");
    }
    table_1.style.display='none';
    cost[1]=document.getElementById('kol_monney1').value;
    qwer=1;
}
button2.onclick= function()
{
    x900=100;
    y900=300;
    for (var i=0;i<rad2.length; i++) {
        if(rad2[0].checked)
            img2=document.getElementById("vinograd2");
        if (rad2[1].checked) 
            img2=document.getElementById("banan");
        if(rad2[2].checked)
            img2=document.getElementById("arbyz");
        if (rad2[3].checked) 
            img2=document.getElementById("drako");
    }
    table_2.style.display='none';
    cost[2]=document.getElementById('kol_monney2').value;
    qwe=1;
}




                    


                                                                            // ТАЙМЕР

var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 

function ClearСlock() { 
clearTimeout(clocktimer); 
h=1;m=1;tm=1;s=0;ts=0;ms=0; 
init=0;
readout='00:00:00.00'; 
document.getElementById('stopwatch').innerHTML = readout; 
} 


function StartTIME() { 
    var cdateObj = new Date(); 
    var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
    if(monney<0){
        StartStop();
        victory = document.getElementById('victory');
            victory.style.display="inline"; 
            document.getElementById('stopwatch1').innerHTML = readout; 
            document.getElementById('u_monney1').innerHTML = monney + "$"; 
    }
    if (t>999) 
        s++;  
    if (s>=(m*base)) 
    { 
        ts=0; 
        m++; 
    } 
    else 
    { 
        ts=parseInt((ms/100)+s); 
        if(ts>=base) { ts=ts-((m-1)*base); } 
    } 
    if (m>(h*base)) 
    { 
        tm=1; 
        h++; 
    } 
    else 
    { 
        tm=parseInt((ms/100)+m); 
        if(tm>=base) 
        { 
            tm=tm-((h-1)*base); 
        } 
    } 
    ms = Math.round(t/10); 
    if (ms>99) 
    ms=0; 
    if (ms==0) 
    ms='00'; 
    if (ms>0&&ms<=9) 
    ms = '0'+ms;  
    if (ts>0) 
    { 
        ds = ts; 
        if (ts<10) 
            ds = '0'+ts;     
    } 
    else 
    ds = '00';  
    dm=tm-1; 
    if (dm>0) 
    { 
        if (dm<10)  
            dm = '0'+dm;
    } 
    else 
    dm = '00'; 
    dh=h-1; 
    if (dh>0) 
    { 
        if (dh<10)  
            dh = '0'+dh; 
    }
     else  
    dh = '00'; 
    readout = dh + ':' + dm + ':' + ds + '.' + ms;
    document.getElementById('stopwatch').innerHTML = readout; 
    clocktimer = setTimeout("StartTIME()",1); 
} 
function StartStop() 
{ 
    if (init==0)
    { 
		ClearСlock();
		dateObj = new Date(); 
		StartTIME(); 
		init=1; 
    } 
    else 
    { 
		clearTimeout(clocktimer);
		init=0;
	} 
} 