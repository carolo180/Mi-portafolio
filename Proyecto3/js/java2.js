press1.addEventListener('click',e=>{
	e.preventDefault()

let sig1=document.getElementById("sig1").value
sig1=parseInt(sig1)

let sig2=document.getElementById("sig2").value
sig2=parseInt(sig2)

let parra=document.getElementById("parra1")
const div=document.createElement("div")

if (sig1==1 && sig2==1) {
	texto=`<h1>Compatibilidad media:</h1> <p> Como ambos quieren quedar los primeros en todo, las peleas y reconciliaciones se turnarán dando como resultado una unión de gran intensidad, En sus relaciones íntimas habrá gran afinidad pues se unen dos seres desinhibidos y sin límites. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }

 else if ((sig1==1 && sig2==2)||(sig1==2 && sig2==1)) {
	texto=`<h1>Compatibilidad media</h1> <p> Si ambos miembros de la pareja se aman lo suficiente como para absorber sus cualidades opuestas, entonces ganarán mucho como personas y como pareja. Aries se volverá más equilibrado y Tauro más enérgico.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==1 && sig2==3)||(sig1==3 && sig2==1)) {
	texto=`<h1>Compatibilidad muy alta</h1>	<p>Aries se suele sentir atraido por la creatividad y la energía de Géminis, y esta combinación promete una gran amistad, una brillante conversación e interesantes momentos de ocio juntos.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==1 && sig2==4)||(sig1==4 && sig2==1)) {
	texto=`<h1>Compatibilidad media</h1><p>Cuando Cáncer empieza una relación con Aries se suele establecer entre ambos una conexión inmediata a nivel emocional. El signo de Cáncer se sentirá muy atraído por el aire apasionado, seguro y entusiasta de Aries, quien a su vez, se sentirá en paz al estar con un Cáncer.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==1 && sig2==5)||(sig1==5 && sig2==1)) {
	texto=`<h1>Compatibilidad muy alta</h1> <p> La atracción inmediata entre Aries y Leo es muy fuerte y tanto Aries como Leo se crecerán en compañía uno del otro y querrán conocer mejor a su pareja a todos los niveles, física, mental, emocional e incluso, espiritualmente.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==1 && sig2==6)||(sig1==6 && sig2==1)) {
	texto=`<h1>Compatibilidad baja</h1> <p> Los Virgo suelen ser bastante fríos, prácticos y a veces, críticos, lo que supone un contraste para los Aries que son rápidos, impetuosos e impulsivos.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==1 && sig2==7)||(sig1==7 && sig2==1)) {
	texto=`<h1>Compatibilidad muy alta</h1><p>Son opuestos complementarios el otro tiene justamente la cualidad que a nosotros más nos cuesta sacar y que debemos aprender a integrar en nuestras vidas: Aries debe aprender de Libra a ser más compasivo y empático, a ponerse en el lugar del otro y negociar en lugar de mandar. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==1 && sig2==8)||(sig1==8 && sig2==1)) {
	texto=`<h1> Compatibilidad baja </h1> <p>Aries tiende a ser extrovertido, seguro e impulsivo y no suele tomarse bien las críticas; mientras que los Escorpio son mucho más introvertidos, prácticos, conservadores e incluso, pesimistas.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==1 && sig2==9)||(sig1==9 && sig2==1)) {
	texto=`<h1> Compatibilidad muy alta</h1> <p>Esta es una combinación de gran alegría y diversión y tanto Aries como Sagitario entienden que cada uno de ellos refleja algunas de las cualidades del otro. Esto garantizará un buen entendimiento básico y facilitará la comunicacion.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==1 && sig2==10)||(sig1==10 && sig2==1)) {
	texto=`<h1>Compatibilidad baja</h1><p>Aries necesita variedad y una vida sazonada con especies, por lo que se podría sentir bastante atrapado en una relación con Capricornio. También se puede aburrir, porque a Aries le gusta vivir a un ritmo mucho más acelerado, mientras que Capricornio prefiere, que las cosas vayan más despacio.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==1 && sig2==11)||(sig1==11 && sig2==1)) {
	texto=`<h1>Compatibilidad media</h1><p>Ambos signos son independientes, humanitarios, optimistas y entusiastas. Les gustan las emociones fuertes, la valentía y carácter progresivo de los Acuario tienden a atraer mucho a los Aries.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==1 && sig2==12)||(sig1==12 && sig2==1)) {
	texto=`<h1> Compatibilidad baja</h1><p>El fuego de Aries puede a veces ser extinguido por el agua de Piscis, que puede pertubar el lado feliz y divertido de su pareja Aries. Por otra parte, como Piscis representa la zona escondida y secreta de Aries, existe mucha posibilidad de una relación de amantes secretos o un amor prohibido.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if (sig1==2 && sig2==2) {
	texto=`<h1>Compatibilidad alta</h1><p>Tauro es signo de tierra y esto constituye una base muy sólida para la relación. Hay algo simple y franco en los Tauro. Son prácticos y no se complican demasiado, por lo que son muy compatibles en una relacion.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==2 && sig2==3)||(sig1==3 && sig2==2)) {
	texto=`<h1>Compatibilidad media</h1><p>A Géminis le encanta su libertad y no le gusta que lo aten y eso es precisamente lo que Tauro intentará hacer. Los celos y el ansia de posesión de Tauro pueden ofender a Géminis. Pero si ambos se las arreglan para equilibrar sus diferencias, podría llegar a ser una buena combinación.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==2 && sig2==4)||(sig1==4 && sig2==2)) {
	texto=`<h1>compatibilidad alta</h1><p>Tauro sirve como un ancla para el variable temperamento emocional de Cáncer, siendo capaz de calmar las aguas y de dar lugar a una relación de amistad y de realización de pareja entre ambos signos. A su vez, Cáncer aporta un sentido práctico y poco sofisticado a la pareja y alivia la tensión y volatilidad de Tauro.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==2 && sig2==5)||(sig1==5 && sig2==2)) {
	texto=`Compatibilidad media</h1><p>Siempre y cuando los dos signos asuman sus diferencias y las gestionen de forma inteligente y evitando su habitual terquedad. La terquedad de los Tauro también forma parte de las características de Leo. Ambos poseen una gran determinación y se aferran a una decisión una vez que la han tomado.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==2 && sig2==6)||(sig1==6 && sig2==2)) {
	texto=`<h1>Compatibilidad alta</h1><p>Tauro y Virgo pueden disfrutar de una vida con mucha armonía. A ninguno de los dos les gustan las extravagancias ni las inconsistencias. En su relación no faltará dedicación y lealtad.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==2 && sig2==7)||(sig1==7 && sig2==2)) {
	texto=`<h1>Compatibilidad media</h1><p>Por no decir baja y recomendamos mucho esfuerzo y comprensión por parte de los dos para hacer funcionar esta relación. Lo bueno es que a Libra y a Tauro les gustan los retos y hacer perdurar esta relación supone, sin duda, un reto muy interesante, la atracción es inmediata.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==2 && sig2==8)||(sig1==8 && sig2==2)) {
	texto=`<h1> Compatibilidad alta</h1><p>Tauro y Escorpio son signos zodiacales opuestos y por eso, a veces, se atraen mutuamente sin remedio. Su primer encuentro podría ser sencillamente increíble y a Tauro le podría sorprender la pasión, que despierta su presencia. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==2 && sig2==9)||(sig1==9 && sig2==2)) {
	texto=`<h1> Compatibilidad baja</h1><p> El estilo de vida de Sagitario no depende de la costumbre y la estructura como el de Tauro, sino que Sagitario tiende a basar su vida en una filosofía de libertad, independencia y espontaneidad.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==2 && sig2==11)||(sig1==11 && sig2==2)) {
	texto=`<h1>Compatibilidad media</h1><p>Tauro cree en la simplicidad y el sentido práctico de las cosas. Su enfoque de la vida es realista, convencional y sensible. Por otro lado, Acuario tiende a ir en contra de las normas y creer en un enfoque más contemporáneo y progresista.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==2 && sig2==10)||(sig1==10 && sig2==2)) {
	texto=`<h1>Compatibilidad alta</h1><p>porque tienen mucho en común y pueden esperar ser muy felices juntos. El sentido práctico de Capricornio se lleva bien con la actitud realista de Tauro. Su conexión inicial con Capricornio será buena y Tauro encontrará muchas similitudes con su pareja.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==2 && sig2==12)||(sig1==12 && sig2==2)) {
	texto=`<h1> Compatibilidad alta</h1><p>Tanto Tauro como Piscis tienen una actitud comprensiva, personalidad despreocupada y disposición amigable. A ambos les encanta mantener la armonía en sus relaciones. Piscis mostrará ternura, benevolencia y apoyo; y esto atraerá enormemente a Tauro. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if (sig1==3 && sig2==3) {
	texto=`<h1>Compatibilidad alta</h1><p>Ya que en general tendrán las mismas particularidades personales, y por tanto, un comportamiento semejante. En la esfera de profesional, sus relaciones se desarrollarán dentro de un clima de autonomía que reconforta y a la vez resulta muy productivo. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==3 && sig2==4)||(sig1==4 && sig2==3)) {
	texto=`<h1>Compatibilidad media</h1><p>Cuando dos signos opuestos se atraen, la relación puede funcionar precisamente por la atracción de lo opuesto. Y esto podría ser el caso en una relación entre Cáncer y Géminis, aunque solo funcionará si ambos signos son conscientes, y respetan, las diferencias en la forma de ser de cada uno.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==3 && sig2==5)||(sig1==5 && sig2==3)) {
	texto=`<h1>Compatibilida alta</h1><p>Los dos tienen una naturaleza aventurera y disfrutan de la vida. Se encontrarán mutuamente fascinantes y disfrutarán en compañía del otro, En el fondo, Géminis y Leo saben que se necesitan mucho más de lo que se atreven a imaginar.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==3 && sig2==6)||(sig1==6 && sig2==3)) {
	texto=`<h1>Compatibilidad alta</h1><p>Las personas del signo Geminis suelen ser inteligentes, racionales y prácticas. Igual que Virgo, tienden a ver las cosas tales como son. Estos dos signos tendrán una capacidad de comunicación alta, sobre todo a nivel intelectual.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==3 && sig2==7)||(sig1==7 && sig2==3)) {
	texto=`<h1>Compatibilida alta</h1><p>Suelen compenetrarse muy bien mutuamente. Los planetas, que rigen los signos de Libra y Géminis, Venus y Mercurio respectivamente, son íntimos amigos planetarios. A ambos signos les gusta la gente y las grandes reuniones sociales. Les gusta conversar con mucha gente y formar parte de la multitud.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==3 && sig2==8)||(sig1==8 && sig2==3)) {
	texto=`<h1> Compatibilidad baja</h1><p> Escorpio es un individuo altamente emocional, que siempre forja relaciones profundas y significativas. Géminis, en cambio, difícilmente se ata a otra persona y la mayoría de sus relaciones amorosas tienden a ser superficiales hasta que encuentre a su verdadera media naranja. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==3 && sig2==9)||(sig1==9 && sig2==3)) {
	texto=`<h1> compatibilidad alta</h1><p> Géminis está tan interesado en los diversos aspectos de la vida como Sagitario. Los dos son muy inquietos y están casi siempre avanzando. Les resulta difícil aferrarse a un sitio o a una persona durante mucho tiempo.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==3 && sig2==10)||(sig1==10 && sig2==3)) {
	texto=`<h1>Compatibilida baja</h1><p> A Capricornio le gusta avanzar en la vida de forma sistemática, siguiendo planes formulados para evitar sorpresas o imprevistos en su camino, Géminis es todo lo contrario, Es uno de los signos más impulsivos del Zodiaco, y es capaz de cambiar de planes todos los días.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==3 && sig2==11)||(sig1==11 && sig2==3)) {
	texto=`<h1>Compatibilidad alta</h1><p> Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles. Es una de las combinaciones más compatibles del zodiaco, porque la conexión kármica es muy fuerte.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==3 && sig2==12)||(sig1==12 && sig2==3)) {
	texto=`<h1> Compatibilida media</h1><p> Piscis y Géminis tienen algunas cosas en común. Ambos están abiertos a nuevas ideas, son flexibles, transigentes y dispuestos a cambiar de postura si se equivocan, aunque Géminis es mucho más racional, que Piscis que tiende a vivir en un mundo de sueños donde todo es perfecto y todos son buenos. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if (sig1==4 && sig2==4) {
	texto=`<h1>Compatibilidad alta</h1><p> La combinación entre dos Cáncer puede ser realmente buena, porque ambos se levantarán la moral, comprenderán los cambios de humor y cambios en el estado de ánimo mutuamente y con facilidad. Sin embargo, deberán evitar convertirse en un espejo de la debilidad del otro y ahogarse mutuamente.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==4 && sig2==5)||(sig1==5 && sig2==4)) {
	texto=`<h1>Compatibilidad media</h1><p> Se trata de una combinación clásica en astrología: la Luna rige los principios femeninos del amor sensible y cultivado y Leo rige los principios de lo masculino, la agresión ardiente, dinámico y, por lo general, de mando. La combinación de estos dos principios conduce al proceso de creación y relación de pareja.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==4 && sig2==6)||(sig1==6 && sig2==4)) {
	texto=`<h1>Compatibilidad alta</h1><p> Esta es una combinación rica y fértil de dos signos femeninos del zodiaco, regidos por la Luna y por Mercurio, respectivamente. La combinación de Cáncer y Virgo produce grandes resultados a todos los niveles.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==4 && sig2==7)||(sig1==7 && sig2==4)) {
	texto=`<h1>Compatibilidad media</h1><p> en ocasiones la naturaleza de ambos dará lugar a un enorme malestar, a pesar de que al principio de la relación las diferencias no sean claras; tanto Cáncer como Libra buscan la paz, el sosiego y la armonía, por lo que al principio, la relación puede parecer muy sencilla.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==4 && sig2==8)||(sig1==8 && sig2==4)) {
	texto=`<h1> Compatibilidad alta</h1><p> Las personas, que nacen bajo el mismo elemento suelen sentirse cómodas y atraerse entre sí. Este es el caso de Cáncer y Escorpio. Tiene un grado de compatibilidad alto. Ambos son sensibles, emocionales y cariñosos, pero Escorpio tiene un modo muy distinto de expresar el amor. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==4 && sig2==9)||(sig1==9 && sig2==4)) {
	texto=`<h1> Compatibilidad baja</h1><p>Cáncer es propenso a enamorarse perdidamente del fuerte carácter de Sagitario, pero una relación de amistad o profesional tiene más posibilidades de funcionar, que como pareja. Sin embargo, tienen algo muy importante a favor: el sexo.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==4 && sig2==10)||(sig1==10 && sig2==4)) {
	texto=`<h1>Compatibilidad media</h1><p> El enfoque de la vida de los Cáncer se puede resumir del siguiente modo lo mejor de la vida no son las cosas, Cáncer es diametralmente opuesto a Capricornio, que es muy materialista y por lo general, su objetivo son los logros materiales y económicos, mientras que Cáncer tiene un enfoque más simple e intuitivo.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==4 && sig2==11)||(sig1==11 && sig2==4)) {
	texto=`<h1> Compatibilidad baja</h1><p> El gusto por la libertad y la independencia de Acuario, frente a la rigidez y conservadurismo de Cáncer, puede ser una combinación un poco difícil de llevar, sobre todo para los Cáncer a los que les puede causar inseguridad y resentimiento.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==4 && sig2==12)||(sig1==12 && sig2==4)) {
	texto=`<h1> Compatibilida alta</h1><p> Ambos signos se entienden instintivamente entre sí y sienten las necesidades del otro. Ambos son cariñosos y dan apoyo a su pareja. Existe un fuerte lazo kármico entre Cáncer y Piscis, que por ser el signo más psíquico y espiritual, anima a Cáncer a poner en marcha sus ideas más filosóficas y espirituales.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if (sig1==5 && sig2==5) {
	texto=`<h1>Compatibilidad alta</h1><p>Cuándo dos Leo se conocen, las llamas del amor y los rugidos de pasión hacen que toda la jungla tiemble de delicia. Leo, el León es el monarca del Zodiaco y la combinación real es observada con entusiasmo por los demás, ya que se exhibe para, que todos la vean. Su grado de compatibilidad es altísima.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==5 && sig2==6)||(sig1==6 && sig2==5)) {
	texto=`<h1>Compatibilidad baja</h1><p> La personalidad de Leo es muy distinta a la de Virgo. Leo busca ser el centro de atención, mentras que Virgo es una persona mucho más privada,ambos tienen poder y fuerza, pero es un tipo de fuerza muy distinta, y menos obvia; los Virgo tienden a trabajar discretamente en la sombra, con mucho cuidado.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==5 && sig2==7)||(sig1==7 && sig2==5)) {
	texto=`<h1>compatibilida alta</h1><p> Libra es el punto focal de la elegancia en el zodiaco. Regido por Venus, el planeta del amor y el placer sensual, Libra busca una relación con una ferviente fascinación. Libra vive para el amor y el estilo. Leo es intrépido, brillante y muy animado.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==5 && sig2==8)||(sig1==8 && sig2==5)) {
	texto=`<h1>Compatibilidad baja</h1><p> La atracción es enorme, pero el choque de caracteres más. El romántico Leo, un Signo de Fuego, es autosuficiente y seguro y un amante ardiente, lleno de encanto personal y magnetismo físico...Un reto maravilloso. A pesar de su bravuconería, el intrépido pero Leo se verá fascinado al instante por Escorpio. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==5 && sig2==9)||(sig1==9 && sig2==5)) {
	texto=`<h1> Compatibilidad alta</h1><p>forman una combinación romántica natural; también pueden ser los mejores amigos. Dos signos de Fuego juntos encenderán pasiones abrasadoras en el dormitorio, dado que ambos entienden instintivamente las necesidades más profundas del otro.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==5 && sig2==10)||(sig1==10 && sig2==5)) {
	texto=`<h1>Compatibilidad media</h1><p> son una pareja muy improbable, pero a veces esta combinación puede funcionar muy bien. Parece haber una conexión kármica entre ambos, especialmente si están conectados por una relación familiar. Si ambos dejan a un lado su orgullo y trabajan juntos por un fin común, podría ser una relación muy gratificante. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==5 && sig2==11)||(sig1==11 && sig2==5)) {
	texto=`<h1> Compatibilidad alta</h1><p> Los dos signos son muy distintos, pero a pesar de sus diferencias logran atraerse e impresionarse. Son signos opuestos que se atraen o como ya se ha demostrado en Astrología, esto podría ser una ventaja en el caso de Leo y Acuario, Leo exige más intensidad en una relación de pareja que Acuario. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==5 && sig2==12)||(sig1==12 && sig2==5)) {
	texto=`<h1> Compatibilidad media</h1><p> Leo se sentirá atraído por el sexy, pero vulnerable, Piscis. Piscis también se siente atraído por el León, al percibir que Leo tiene un corazón cálido y una fuerza interior que puede estar ahí para él cuando los terrores de la noche acechen. Su compatibilidad y complementariedad pueden ser muy grandes.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if (sig1==6 && sig2==6) {
	texto=`<h1>Compatibilidad alta</h1><p> en esta relación la palabra clave es el perfeccionismo y de ahí se deriva el principal problema, que deban superar - exigencias excesivas. Virgo es tremendamente aplicado y si funcionan como pareja, juntos serán capaces de mover montañas.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==6 && sig2==7)||(sig1==7 && sig2==6)) {
	texto=`<h1>Compatibilidad media</h1><p> Virgo y Libra tienen distintos carácteres además de distintos temperamentos. Mientras que Virgo tiende a ser crítico, Libra no suele juzgar a las personas y no tiene problema en aceptar distintos puntos de vista - todo al contrario que Virgo que es mucho más exigente.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==6 && sig2==8)||(sig1==8 && sig2==6)) {
	texto=`<h1>Compatibilidad alta</h1><p>Ambos signos conectan muy bien, porque Virgo es el signo de amistad y realización para Escorpio, mientras que Escorpio representa el signo de comunicación para Virgo,Tanto Escorpio como Virgo tienen un enfoque práctico ante la vida. No obstante los Escorpio son mucho más aventureros, que el más prudente Virgo. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==6 && sig2==9)||(sig1==9 && sig2==6)) {
	texto=`<h1> Compatibilidad baja</h1><p>dadas las grandes diferencias, que existen entre estos dos signos. Mientras, que Virgo presta atención a los pequeños detalles, Sagitario tiende a centrarse en la visión global,No obstante, la relación tiene una cosa muy importante a su favor - ambos signos son mutables lo que indica adaptabilidad.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==6 && sig2==10)||(sig1==10 && sig2==6)) {
	texto=`<h1>Compatibilidad alta</h1><p> gracias a una combinación de elementos similares, que da una buena base para su relación. Virgo tendrá una compenetración inmediata con Capricornio. Por algún motivo, Capricornio parece menos serio, para Virgo que para otros signos del Zodiaco, Ambos signos son sensatos y prácticos, pero con algunas diferencias. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==6 && sig2==11)||(sig1==11 && sig2==6)) {
	texto=`<h1> Compatibilidad baja</h1><p> Acuario y Virgo no se suelen atraer mutuamente por naturaleza y es más probable, que se conozcan por una situación de trabajo o un proyecto de estudios, Su relación tiene alguna posibilidad, pero tendrán que ceder los dos, porque tienen filosofías de vida muy distintas. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==6 && sig2==12)||(sig1==12 && sig2==6)) {
	texto=`<h1> Compatibilidad alta</h1><p> Son dos signos opuestos: algo que paradójicamente en Astrología se suele considerar como un indicador positivo de amor y matrimonio. Al mismo tiempo, sus enfoques de la vida son muy diferentes y sus personalidades también.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if (sig1==7 && sig2==7) {
	texto=`<h1>Compatibilidad alta</h1><p> Cuando el estiloso Libra encuentra a otro Libra, la atracción es inmediata. El gusto atrae al gusto. La magia favorable de esta unión Aire - Aire tiene sus retos pero, una vez resueltos, los dos disfrutarán de una pareja comprensiva y un romance de por vida.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==7 && sig2==8)||(sig1==8 && sig2==7)) {
	texto=`<h1>Compatibilidad alta</h1><p> Tiene la gran ventaja de ser una relación muy equilibrada porque la compatibilidad entre estos dos signos es altísima. Libra cuyo planeta es Venus representa el amor, la sensualidad y el placer. En cambio Escorpio está regido por Marte, que representa la acción, la estrategia y el ingenio; y por Plutón, el poder. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==7 && sig2==9)||(sig1==9 && sig2==7)) {
	texto=`<h1> Compatibilidad alta</h1><p> Sagitario se siente verdaderamente atraído por la postura elegante, tranquila y artística de Libra y, a su vez, a Libra le fascina el deseo de aventura de Sagitario. Debido al encantador punto de vista de Sagitario.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==7 && sig2==10)||(sig1==10 && sig2==7)) {
	texto=`<h1>Compatibilidad media</h1><p> Al ser los dos signos Cardinales, descubren que ambos quieren mandar. Esto podría ser un desastre, porque los dos tienen ideas completamente diferentes sobre cuál es el mejor modo de avanzar. Capricornio tendrá que aprender a apreciar el modo en qué Libra realiza el trabajo y, a su vez, él o ella tendrán que apreciar las técnicas personales de Capricornio. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==7 && sig2==11)||(sig1==11 && sig2==7)) {
	texto=`<h1> Compatibilidad alta</h1><p> Ambos signos son sociables, les encanta conversar y disfrutan con reuniones y actos sociales. Los dos son muy extrovertidos y suelen tener muchos amigos. A los dos les gusta la independencia y por eso no será un problema dar y disfrutar de cierta libertad dentro de su relación. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==7 && sig2==12)||(sig1==12 && sig2==7)) {
	texto=`<h1> Compatibilidad media</h1><p>Son una combinación inusual, pero la atracción entre ambos puede ser intensa. El aire y el agua no se mezclan fácilmente, por lo que Libra tendrá que estar atento a las necesidades de Piscis, incluso aunque no siempre entienda cuáles son. No es de ninguna manera una combinación fácil, pero cuándo funciona, tiene una calidad especial.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")
   }
   else if (sig1==8 && sig2==8) {
	texto=`<h1>Compatibilidad alta</h1><p>La atracción sexual entre dos apasionados Escorpio es fuerte, pero la temperatura no puede ir siempre en aumento. Los dos son muy parecidos y, sin embargo, apenas se entienden mutuamente. La duplicidad del elemento Agua le imprime un profundo poder emocional y hace de lupa, que magnifica cada uno de los elementos de la compleja individualidad de ambos. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==8 && sig2==9)||(sig1==9 && sig2==8)) {
	texto=`<h1> Compatibilidad baja</h1><p> es una combinación muy difícil porque mientras el aventurero Sagitario adora los cambios y la exploración de horizontes lejanos, asumiendo todo tipo de riesgos (físicos, emocionales y espirituales) para, a continuación, pasar al siguiente gran reto.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==8 && sig2==10)||(sig1==10 && sig2==8)) {
	texto=`<h1>Compatibilidad alta</h1><p> Se trata de una combinación apasionada y fiel, y puede ser una de las mejores del Zodíaco. Incluso si no es una relación romántica, es probable, que los dos sean cariñosos mutuamente y se sientan muy cómodos con el contacto físico. Estos dos signos pueden ser amigos maravillosos, familiares, socios empresariales y compañeros. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==8 && sig2==11)||(sig1==11 && sig2==8)) {
	texto=`<h1> Compatibilidad baja</h1><p> Ambos tienen personalidades muy diferentes y su forma de enfocar la vida y las relaciones íntimas es muy distinto. Por otra parte, dónde sí se parecen es su actitud cabezota de imponerse al otro, querer tener siempre razón y las ganas de discutir. ¡Peligro! porque son actitudes, que les pueden llevar a la ruptura.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==8 && sig2==12)||(sig1==12 && sig2==8)) {
	texto=`<h1> Compatibilidad alta</h1><p> Es irresistible, una unión con todas las posibilidades de éxito. Los dos son apasionados y leales, por lo que es fácil que disfruten de un compañerismo natural. Escorpio es un Signo Fijo, por lo que una vez que se compromete, se entrega totalmente.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")
   }
   else if (sig1==9 && sig2==9) {
	texto=`<h1> Compatibilidad alta</h1><p> Forman un equipo formidable. Algunos astrólogos piensan, que es la combinación perfecta y en muchas formas, es muy apropiada. Se pueden atraer con una conversación estimulante, dado que ambos tendrán intereses similares y cuándo a uno le apremie el impulso de empaquetar y partir a la aventura en busca de horizontes lejanos, el otro lo seguirá encantado.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==9 && sig2==10)||(sig1==10 && sig2==9)) {
	texto=`<h1>Compatibilidad media</h1><p> Sagitario no parece tener mucho en común con Capricornio, pero aún así puede ser una combinación razonablemente buena. Los dos tendrán, que aprender a apreciar sus diferencias antes de poder sentirse cómodos juntos, pero una vez hecho esto, puede ser un equipo muy exitoso. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==9 && sig2==11)||(sig1==11 && sig2==9)) {
	texto=`<h1> Compatibilidad alta </h1><p> Son dos signos muy parecidos - extrovertidos, sociables y aventureros. Les encanta la diversión, son muy espontáneos, no son excesivamente emocionales o sentimentales y saben dar y disfrutar de cierta libertad dentro de la pareja.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==9 && sig2==12)||(sig1==12 && sig2==9)) {
	texto=`<h1> Compatibilidad alta</h1><p> Son complementarios y compatibles. Tanto el imaginativo Piscis como el aventurero Sagitario están regidos por Júpiter, el planeta de los sueños y amplios horizontes. Sagitario, como signo de Fuego, expresa el lado filosófico y viajero de Júpiter, pasando fácilmente de una escapada a otra.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")
   }
   else if (sig1==10 && sig2==10) {
	texto=`<h1>Compatiblidad alta</h1><p> La doble combinación de Tierra aumenta la compatibilidad, dado que los temperamentos de ambosson iguales. Los dos aprecian los placeres de los sentidos y suelen tener una líbido por encima de la media... De hecho, Capricornio es uno de los signos más apasionados. También comparten el instinto por lograr prosperidad y prestigio, por lo que es probable que coincidan en los mismos valores y objetivos. </p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
   else if ((sig1==10 && sig2==11)||(sig1==11 && sig2==10)) {
	texto=`<h1> Compatibilidad media</h1><p> Si los dos logran que las importantes diferencias que existen entre ellos, se conviertan en un punto positivo de la pareja. Si no, la relación será muy tormentosa y es probable, que lejos de complementarse, los dos terminen completamente agotados.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==10 && sig2==12)||(sig1==12 && sig2==10)) {
	texto=`<h1> Compatibilidad alta</h1><p> Aunque al principio pueda haber dudas. Piscis es un soñador y puede parecer frágil, pero a veces una sutil entereza se puede confundir con debilidad. Las fortalezas combinadas de ambos ayudan a compensar sus debilidades individuales, y juntos forman un equipo sólido y satisfactorio.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")
   }
    else if (sig1==11 && sig2==11) {
	texto=`<h1> Acuario es extrovertido</h1><p>Sociable y le encanta formar parte de un grupo. También tiene un lado solitario e independiente, a veces siente la necesidad de estar solo consigo mismo, 	Esta aparente contradicción supone un problema para muchos signos, pero otro Acuario, lejos de sentirse amenazado o rechazado, comprenderá y compartirá ese deseo de soledad.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")

   }
  else if ((sig1==11 && sig2==12)||(sig1==12 && sig2==11)) {
	texto=`<h1> Compatibilidad baja</h1><p> Es posible que Acuario sea incapaz de entregarse y mimar a Piscis tal como él necesita. Por otra parte, la confianza podría suponer un problema, sobre todo al principio de una relación, cuando ambos signos quieren compartir secretos de su pasado.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")
   }
   else if (sig1==12 && sig2==12) {
	texto=`<h1> Compatiblidad media</h1><p> Dos peces juntos pueden crear un paraíso privado o un infierno en la tierra, dependiendo de si eligen nadar río abajo o contra corriente. Si bien los dos se sienten irresistiblemente atraídos el uno por el otro, ambos son propensos a perderse en sueños y fantasías.</p>`
	parra.innerHTML=texto
	parra.style.setProperty("visibility","visible")
	parra.style.setProperty("opacity","1")
	parra.style.setProperty("transition","all 3s ease")
   }
   
})
