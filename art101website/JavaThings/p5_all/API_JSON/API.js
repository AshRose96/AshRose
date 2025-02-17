var title = "President Donald Trump Delivers Remarks at Rally in Tampa";


var speech = "Tonight, I am speaking to you because there" +
"is a growing humanitarian and security crisis" +
"at our southern border. Every day, Customs and Border Patrol agents"
"encounter thousands of illegal immigrants trying to enter our country." +
"We are out of space to hold them, and we have no way to promptly + "
"return them back home to their country. America proudly welcomes millions" +
"of lawful immigrants who enrich our society and contribute to our nation." +
"But all Americans are hurt by uncontrolled, illegal migration." +
"It strains public resources and drives down jobs and wages." +
"Among those hardest hit are African Americans and Hispanic Americans." +
"Our southern border is a pipeline for vast quantities of illegal drugs," +
" including meth, heroin, cocaine, and fentanyl. Every week, 300 of our citizens" +
" are killed by heroin alone, 90 percent of which floods across from" +
"our southern border. More Americans will die from drugs this year than were" +
"killed in the entire Vietnam War." +
"In the last two years, ICE officers made 266,000 arrests of" +
"aliens with criminal records, including those charged or " +
"convicted of 100,000 assaults,30,000 sex crimes, and 4,000 violent killings." +
" Over the years, thousands of Americans have been brutally killed" +
" by those who illegally entered our country," +
" and thousands more lives will be lost if we don’t act right now." ;





function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);

  console.log(speech.length);

}

function draw() {
 ellipse(width/2, height/2, 50, 50);
}
