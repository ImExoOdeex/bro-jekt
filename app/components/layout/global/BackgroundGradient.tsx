import { Flex } from "@chakra-ui/react";

type Props = {
	color: string;
};

export default function BackgroundGradient({ color }: Props) {
	return (
		<Flex
			pos={"absolute"}
			top={0}
			right={0}
			bottom={0}
			w={"100%"}
			h="100%"
			zIndex={-1}
		>
			<svg style={{ width: "100%", height: "100%", opacity: 0.15 }}>
				<defs>
					<linearGradient
						id="background-gradient"
						gradientTransform="rotate(90)"
					>
						<stop
							offset="0%"
							stop-color={color}
							style={{ transition: "stop-color 0.33s ease" }}
						></stop>
						<stop offset="100%" stop-color="transparent"></stop>
					</linearGradient>
				</defs>
				<rect
					fill="url('#background-gradient')"
					width="100%"
					height="100%"
				></rect>
			</svg>
		</Flex>
	);
}
