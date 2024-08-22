import { MyCircuit } from "lib/MyCircuit";
import { PinRow } from "@tscircuit/footprints";

export const MyExample = () => (
	<board width="40mm" height="40mm" pcbX={0} pcbY={0}>
		<MyCircuit />
	</board>
);
