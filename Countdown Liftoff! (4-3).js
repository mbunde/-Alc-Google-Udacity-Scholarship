/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
 var launche=60;
 while(launche>=0){
     if(launche===50){
         console.log("Orbiter transfers from ground to internal power");
     }
        else if (launche===31){
        console.log("Ground launch sequencer is go for auto sequence start");
     }
        else if (launche===16){
        console.log("Activate launch pad sound suppression system ");
     }
        else if (launche===10){
        console.log("Activate main engine hydrogen burnoff system");
     }
        else if (launche===6){
        console.log("Main engine start ");
     }
        else if (launche===0){
        console.log("Solid rocket booster ignition and liftoff!");
     }
        else{
            console.log("T-" + launche +" seconds");

        }
     launche -=1;
 }
