//https://teachablemachine.withgoogle.com/models/8B_Zcp32k/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/v6HGHDATq/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
 if (error) {
  console.error(error)   
 } else {
    console.log("gotResult")
    randomnumber_r=Math.floor(Math.random()*255)+1
    randomnumber_g=Math.floor(Math.random()*255)+1 
    randomnumber_b=Math.floor(Math.random()*255)+1
    document.getElementById("result_label").innerHTML='I can hear-'+results[0].label
    document.getElementById("result_confidence").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2)+" %"
    document.getElementById("result_label").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")"
    document.getElementById("result_confidence").style.color="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")"
    img=document.getElementById('alien1')
if (results[0].label== "Meow") {
   img.src="catior.jpeg"
   
} else if  (results[0].label== "Bark") {
    img.src="doggie.jpeg" 
}
else if  (results[0].label== "Howl") {
    img.src="wolf.jpeg"
}
else {
    img.src="earrrr.jpeg"   
}}}
