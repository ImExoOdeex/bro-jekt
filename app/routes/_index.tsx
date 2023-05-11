import {
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon
} from "@chakra-ui/icons";
import {
	Button,
	Flex,
	HStack,
	Heading,
	Image,
	Text,
	VStack
} from "@chakra-ui/react";
import { type V2_MetaArgs } from "@remix-run/node";
import { useState } from "react";
import BackgroundGradient from "~/components/layout/global/BackgroundGradient";
import ThemeToggle from "~/components/layout/global/ThemeToggle";

export function meta({ matches }: V2_MetaArgs) {
	return [{ title: "Index" }, ...matches[0].meta];
}

export default function Index() {
	const [selectedImage, setSelectedImage] = useState(0);
	console.log(selectedImage);

	const images: {
		[key: number]: {
			src: string;
			title: string;
			description: string;
			maps: string;
		};
	} = {
		0: {
			src: "https://visitszczecin.eu/sites/default/files/styles/width_10000/public/photo_library/2020-11/staw%20Brodowski.jpg?itok=n0qXqxWw",
			title: "Staw Brodowskiego",
			description:
				"Staw Brodowskiego to piękne miejsce w Szczecinie, położone w zachodniej części miasta, w dzielnicy Płonia-Śmierdnica. Jest to sztuczne jezioro, które powstało w wyniku wykopania gliny z ziemi na potrzeby cegielni. Wokół stawu Brodowskiego znajdują się liczne sklepy i punkty gastronomiczne, w których można skosztować regionalnych potraw. To idealne miejsce na spędzenie czasu z rodziną i przyjaciółmi, na pikniku czy też długim spacerze wśród pięknych krajobrazów i przyrody.",
			maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.9868415497035!2d14.562449012535456!3d53.45082146678556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa09638f9a51bd%3A0xee54c810d0bd22a9!2sStaw%20Brodowski!5e0!3m2!1spl!2spl!4v1683824575201!5m2!1spl!2spl"
		},
		1: {
			src: "https://d-art.ppstatic.pl/kadry/k/r/af/c6/57e3db79434c8_o_large.jpg",
			title: "Stacja Kolejowa",
			description:
				"Peron kolejowy na Niebuszewie to miejsce, gdzie zatrzymują się pociągi pasażerskie kursujące na linii kolejowej Szczecin - Police. Peron znajduje się w dzielnicy Niebuszewo w Szczecinie i jest jednym z kluczowych punktów komunikacyjnych w tym rejonie miasta.Peron jest wyposażony w zadaszenie, które chroni podróżnych przed deszczem i słońcem. Na peronie znajdują się również ławki oraz tablice informacyjne, na których można znaleźć rozkład jazdy pociągów oraz informacje o przesiadkach i połączeniach kolejowych.Peron na Niebuszewie jest ważnym punktem przesiadkowym dla mieszkańców tej dzielnicy oraz dla osób, które korzystają z połączeń kolejowych na linii Szczecin - Police. Peron umożliwia szybkie i wygodne przemieszczanie się między miastami oraz dostęp do innych środków transportu publicznego, takich jak autobusy i tramwaje.Peron na Niebuszewie jest przyjazny dla osób niepełnosprawnych, wyposażony w windy i ułatwienia dla osób poruszających się na wózkach inwalidzkich. Jest to ważne dla zapewnienia równości w dostępie do transportu publicznego dla wszystkich mieszkańców miasta. Podsumowując, peron kolejowy na Niebuszewie to ważne miejsce w infrastrukturze transportowej Szczecina, umożliwiające wygodne przemieszczanie się pasażerów na linii kolejowej Szczecin - Police oraz zapewniające dostęp do innych środków transportu 		publicznego.",
			maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9504.367428631558!2d14.533865687158206!3d53.44894420000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.	1!3m3!1m2!1s0x47aa0968473261e5%3A0xf08e8418cffb0aa2!2sStacja%20kolejowa%20Szczecin%20Niebuszewo!5e0!3m2!1spl!2spl!4v1683824661407!5m2!1spl!2spl"
		},
		2: {
			src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Muzeum_techniki_sn_brama.jpg/240px-Muzeum_techniki_sn_brama.jpg",
			title: "Muzeum Techniki",
			description:
				"Muzeum Techniki w Szczecinie to jedno z najważniejszych muzeów w mieście, które prezentuje historię i rozwój techniki oraz innowacyjnych wynalazków. Zlokalizowane jest w zabytkowym budynku elektrowni wodnej na wyspie Ostrów Tumski. W muzeum można obejrzeć wiele ciekawych eksponatów, takich jak maszyny, urządzenia oraz narzędzia, które były używane w przemyśle, rolnictwie, transportach i innych dziedzinach życia. Na terenie muzeum znajduje się także wiele interaktywnych ekspozycji, które pozwalają na bliższe poznanie działania różnych urządzeń i maszyn. W muzeum można zobaczyć m.in. lokomotywę parową, samoloty, motocykle, samochody, ciągniki, maszyny rolnicze i wiele innych. Wszystkie eksponaty są opatrzone informacjami o historii i zastosowaniach danej maszyny lub urządzenia. Muzeum Techniki w Szczecinie to także miejsce, w którym odbywają się różnego rodzaju wydarzenia kulturalne, takie jak koncerty, wystawy, pokazy filmowe oraz warsztaty i szkolenia z dziedziny techniki i nauki. Jeśli jesteś miłośnikiem techniki i historii, to Muzeum Techniki w Szczecinie na pewno Cię zainteresuje. Warto odwiedzić to miejsce, aby poznać fascynującą historię rozwoju techniki i zobaczyć wiele ciekawych eksponatów.",
			maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.131177442649!2d14.535722157741969!3d53.44824129594628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.					1!3m3!1m2!1s0x47aa0944d5809b53%3A0x805df9bca69f65a0!2sMuzeum%20Techniki%20i%20Komunikacji%20-%20Zajezdnia%20Sztuki%20w%20Szczecinie!5e0!3m2!1spl!2spl!4v1683824747216!5m2!1spl!2spl"
		},
		3: {
			src: "https://d-art.ppstatic.pl/kadry/k/r/27/c0/607dc47716206_o_large.jpg",
			title: "Manhattan",
			description:
				"Manhattan jest to Rynek Główny w Szczecinie. Jest to miejsce, gdzie można zjeść, napić się, a także zrobić zakupy. W okolicy znajduje się wiele sklepów, restauracji, kawiarni, pubów, a także banków i innych punktów usługowych. Warto odwiedzić to miejsce, aby zobaczyć zabytkowe kamienice, które znajdują się wokół rynku. Są tam liczne sklepy, zazwyczaj warzyniaki oraz sklepy z odziedżą i dużo sklepów mięsnych i piekarni.",
			maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.417742041584!2d14.54640711253505!3d53.44311836736257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0942777d2c39%3A0xe35dedf70461c446!2sManhattan!5e0!3m2!1spl!2spl!4v1683825013447!5m2!1spl!2spl"
		},
		4: {
			src: "https://pomorzezachodnie.travel/media/default/0001/13/a35a05eafd4c9b63771b10164409b73e18ee3e98.JPG",
			title: "Stara cegielnia",
			description:
				"Centrum Handlowe Stara Cegielnia oferuje liczne sklepy i punkty usługowe oraz parking na ponad 100 miejsc. Stara Cegielnia składa się dwóch kondygnacji, połączonych ze sobą schodami ruchomymi i klasycznymi, ułatwiającymi Klientom swobodne poruszanie się po obiekcie. Centrum przystosowane jest do potrzeb osób niepełnosprawnych – z myślą o nich, jak również dla wygody matek z małymi dziećmi, zainstalowano w budynku windę oraz zbudowano podjazd. W odpowiedzi na potrzeby klientów w Centrum znajduje się specjalne pomieszczenie dla matek z małymi dziećmi. Dodatkowym atutem centrum jest wygodny parking.",
			maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.7636297227455!2d14.549545412535618!3d53.45481146648651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa095efe71242b%3A0x44c3c4c30fb78f6b!2sStara%20Cegielnia!5e0!3m2!1spl!2spl!4v1683824993406!5m2!1spl!2spl"
		},
		5: {
			src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Ogrod_Rozany_w_Szczecinie_2019-07-11_2851.jpg",
			title: "Park Różany",
			description:
				"Park Różany to jeden z najpiękniejszych parków w Szczecinie, położony w dzielnicy Śródmieście, niedaleko Odry. Zajmuje obszar około 26 hektarów i składa się z kilku części, z których najważniejsza jest Park Centralny. W parku znajduje się wiele malowniczych alejek, stawów, mostków i fontann, a także liczne alejki spacerowe i miejsca do piknikowania. Park Różany to także miejsce wielu kulturalnych i sportowych wydarzeń, w tym koncertów, festiwali i zawodów sportowych. To idealne miejsce na spędzenie wolnego czasu wśród zieleni i pięknych krajobrazów, gdzie można odpocząć od zgiełku miasta i cieszyć się przyrodą.",
			maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.228775611246!2d14.523436412535203!3d53.44649656710942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa094c4a903467%3A0xee22b126b9ec5f!2zT2dyw7NkIFLDs8W8YW55IC0gUsOzxbxhbmth!5e0!3m2!1spl!2spl!4v1683824910583!5m2!1spl!2spl"
		},
		6: {
			src: "https://d-art.ppstatic.pl/kadry/k/r/1/73/d0/5fe1bc46b0433_o_large.jpg",
			title: "TME",
			description:
				"Jest to technikum w ktorym sie uczymy. Jest ono wyjatkowe oraz bardzo przydatne do zrozumienia dużej ilości informacji. Czesto tu znajduja się wszeróżne akcje, ale przez to TME jest znane jako technikum Szczecina. Jest tu bardzo wysoki poziom naukowy, oraz TME umozliwa uczniom łatwiejszą nauke co jest skromną inwestycją w młode talenty.",
			maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.5547529776586!2d14.557797557739374!3d53.440668896507816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa096e6baf7257%3A0x6c920dde76293373!2sZesp%C3%B3%C5%82%20Szko%C5%82%20Elektryczno-Elektronicznych%20im.%20Maksymiliana%20Tytusa%20Hubera!5e0!3m2!1spl!2spl!4v1683824888071!5m2!1spl!2spl"
		},
		7: {
			src: "https://kuria.pl/clients/_kuria/_upload/_koscioly/sz48_093_Szczecin_Zelechowa_par._Ayw._MikoAIaja.jpg",
			title: "Kościół św. Mikołaja",
			description:
				"Kościół św. Mikołaja w Szczecinie to jeden z najstarszych i najważniejszych zabytków miasta. Znajduje się on na Starym Mieście, przy ulicy św. Mikołaja.Kościół św. Mikołaja został zbudowany w XIII wieku w stylu gotyckim, a następnie wielokrotnie przebudowywany i rozbudowywany w różnych stylach architektonicznych. Obecny wygląd kościoła pochodzi z XVII wieku i łączy w sobie elementy gotyckie, renesansowe i barokowe.Kościół posiada imponującą fasadę z dwoma wieżami oraz trójnawową halę główną, którą zdobią liczne rzeźby i freski. We wnętrzu kościoła znajdują się cenne dzieła sztuki, takie jak ołtarz główny z XVII wieku, rzeźby, malowidła ścienne oraz organy z XIX wieku.Warto zwrócić uwagę na niezwykły zegar słoneczny, który znajduje się na zewnętrznej ścianie kościoła. Zegar ten został wykonany w XVIII wieku i do dziś działa, pokazując czas z dokładnością do minuty.Kościół św. Mikołaja odgrywał ważną rolę w historii Szczecina i był miejscem wielu ważnych wydarzeń, takich jak koronacje książąt i królów. Obecnie kościół jest wykorzystywany jako miejsce kultu religijnego, ale także jako centrum kulturalne, gdzie odbywają się koncerty, wystawy i inne wydarzenia artystyczne. Podsumowując, kościół św. Mikołaja w Szczecinie to nie tylko ważny zabytek architektury, ale także centrum kultury i sztuki, które zachwyca swoją historią i pięknem.",
			maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.872031552046!2d14.565563512535494!3d53.45287376663171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0962921a9113%3A0xb270b4709ca95873!2zS2_Fm2Npw7PFgiBSenltc2tva2F0b2xpY2tpIHB3LiDFm3cuIE1pa2_FgmFqYSBCaXNrdXBh!5e0!3m2!1spl!2spl!4v1683824853571!5m2!1spl!2spl"
		},
		8: {
			src: "https://atrakcjedzieciece.s3.amazonaws.com/uploads/attractionphoto/photo/11827/staw_boronowskich__11_.jpg",
			title: "Skatepark na Stawie Brodowskiego",
			description:
				"Skepark na Stawie Brodowskim to miejsce, gdzie mozna sie spotkac z przyjaciólmi, pojeźdźic na deskorolce, rowerze, hulajnodze, rolkach, czy też na wrotkach. Idealne miejsce, aby poznać nowych kolegów. Sklep Żabka, który stoi obok idealnie wpasowuje się w klimat tego miejsca. Warto odwiedzić to miejsce, aby zobaczyć widok z góry na przepiękny Staw Brodowski.",
			maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.957656838538!2d14.561704312608812!3d53.45134316674633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0963ecbc7e4b%3A0xddafa30b0fb70710!2sSkatepark%20Staw%20Brodowski!5e0!3m2!1spl!2spl!4v1683826014966!5m2!1spl!2spl"
		}
	};

	function generateNewColor() {
		const newColor =
			"#" + Math.floor(Math.random() * 16777215).toString(16);
		setColor(newColor);
	}

	function setImage(index: number) {
		generateNewColor();
		setSelectedImage(index);
	}

	function nextImage() {
		if (selectedImage < 8) {
			generateNewColor();
			setSelectedImage(selectedImage + 1);
		}
		if (selectedImage === 8) {
			setSelectedImage(0);
		}
	}

	function prevImage() {
		// prev image, but if it's the first one, go to the last one
		if (selectedImage > 0) {
			generateNewColor();
			setSelectedImage(selectedImage - 1);
		}
		if (selectedImage === 0) {
			setSelectedImage(8);
		}
	}

	const [color, setColor] = useState("#ffffff");

	return (
		<>
			<BackgroundGradient color={color} />
			<Flex
				w="100%"
				h="100%"
				minH={"100vh"}
				alignItems={"center"}
				justifyContent={"center"}
				flexDir={"column"}
				pos={"relative"}
			>
				<Heading
					pos={"absolute"}
					left={"50%"}
					top={16}
					transform={"translate(-50%, -50%)"}
				>
					{images[selectedImage].title}
				</Heading>
				<HStack
					w="100%"
					h="100%"
					spacing={10}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Button variant={"unstyled"} onClick={prevImage}>
						<ChevronLeftIcon boxSize={"75px"} />
					</Button>
					<VStack spacing={5}>
						<Image
							src={images[selectedImage].src}
							rounded={"2xl"}
							objectFit={"cover"}
							objectPosition={"center"}
							w="1000px"
							h="600px"
						/>
						<HStack spacing={5}>
							<ThemeToggle />
							{Object.entries(images).map(([key, image]) => (
								<Button
									key={key}
									variant={"unstyled"}
									onClick={() => setImage(Number(key))}
									boxSize={"50px"}
								>
									<Image
										boxSize={"50px"}
										rounded={"full"}
										src={image.src}
										transition={"all 0.2s"}
										_hover={{
											bg: "white"
										}}
									/>
								</Button>
							))}
							<Button
								bg="alpha200"
								rounded={"full"}
								onClick={() => window.scrollTo(0, 999)}
								boxSize={"50px"}
							>
								<ChevronDownIcon boxSize={7} />
							</Button>
						</HStack>
					</VStack>
					<Button variant={"unstyled"} onClick={nextImage}>
						<ChevronRightIcon boxSize={"75px"} />
					</Button>
				</HStack>
			</Flex>
			<VStack
				spacing={10}
				mt={10}
				w="100%"
				maxW={"1200px"}
				p={10}
				rounded={"2xl"}
				bg="alpha"
				mx="auto"
				justifyContent={"space-between"}
			>
				<VStack spacing={5} align={"flex-start"} w="100%">
					<Heading fontSize={"2xl"}>
						{images[selectedImage].title}
					</Heading>
					<Text color={"textSec"} fontSize={"lg"}>
						{images[selectedImage].description}
					</Text>
				</VStack>

				<iframe
					title={"mapa " + images[selectedImage].title}
					src={images[selectedImage].maps}
					width="100%"
					height="500"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</VStack>

			<Heading mt="150px" mb={20} textAlign={"center"}>
				Autorzy: Łukasz Janczura & Julian Panek
			</Heading>
		</>
	);
}
