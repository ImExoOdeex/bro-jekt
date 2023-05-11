import { Flex } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Flex minH={"100vh"} h="100%" flexDir={"column"}>
				{children}
			</Flex>
		</>
	);
}
